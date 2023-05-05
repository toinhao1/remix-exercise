import { json } from '@remix-run/node';
import { useParams } from '@remix-run/react';
import { Button, Menu, TextField } from '@mui/material';
import { SetStateAction, useState } from 'react';
import { comments } from '../../comments';

export const loader = async () => {
	return json({});
};

export default function ImageView() {
	// const data = useLoaderData<typeof loader>();
	let { slug } = useParams();
	const [comment, setComment] = useState('');
	const [contextMenu, setContextMenu] = useState<{
		mouseX: number;
		mouseY: number;
	} | null>(null);

	const handleContextMenu = (event: React.MouseEvent) => {
		event.preventDefault();
		setContextMenu(
			contextMenu === null
				? {
						mouseX: event.clientX + 2,
						mouseY: event.clientY - 6,
				  }
				: null,
		);
	};

	const handleCommentChange = (commentText: { target: { value: SetStateAction<string> } }) => {
		setComment(commentText.target.value);
	};

	const handleSaveComment = () => {
		comments.push({
			text: comment,
			image: slug,
			coordinates: {
				x: contextMenu?.mouseX,
				y: contextMenu?.mouseY,
			},
		});
		setComment('');
		handleClose();
	};

	const handleClose = () => {
		setContextMenu(null);
	};

	return (
		<main>
			<div onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
				<img src={`/${slug}`} alt='13' height={640} width={480} />
				{comments
					.filter((singleComment: any) => singleComment.image === slug)
					.map((commentsForSlug: any) => {
						return (
							<Menu
								open={true}
								anchorReference='anchorPosition'
								anchorPosition={{
									top: commentsForSlug.coordinates.y,
									left: commentsForSlug.coordinates.x,
								}}>
								<div>{commentsForSlug.text}</div>
							</Menu>
						);
					})}
				<Menu
					open={contextMenu !== null}
					onClose={handleClose}
					anchorReference='anchorPosition'
					anchorPosition={
						contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined
					}>
					<div>
						<TextField onChange={handleCommentChange} value={comment} />
						<Button onClick={handleSaveComment}>Save</Button>
					</div>
				</Menu>
			</div>
		</main>
	);
}
