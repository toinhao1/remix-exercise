import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { createDatabase, Database } from 'nscdb';
import { JsonFileAdapter } from 'nscdb/json_adapter';
import { useEffect } from 'react';

export let db: Database;

export const loader = async () => {
	db = await createDatabase(new JsonFileAdapter('./database.json'));
	db.setDefaults({
		comments: [],
	});
	return json({
		images: [
			{ title: 'Autumn Puppy', image: 'remy1.jpg' },
			{ title: 'Sleepy Puppy', image: 'remy2.jpg' },
			{ title: 'Snowy Puppy', image: 'remy3.jpg' },
			{ title: 'Playful Puppy', image: 'remy4.jpg' },
		],
	});
};

export default function Index() {
	const data = useLoaderData<typeof loader>();

	// useEffect(() => {
	// 	const setupDB = async () => {
	// 		db = await createDatabase(new JsonFileAdapter('./database.json'));
	// 		db.setDefaults({
	// 			comments: [],
	// 		});
	// 	};
	// 	setupDB();
	// });

	return (
		<div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
			<h1>Welcome to Onbrand Puppies</h1>
			<ul>
				{data.images.map((img, i) => {
					return (
						<li key={i}>
							<Link to={`/images/${img.image}`}>{img.title}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
