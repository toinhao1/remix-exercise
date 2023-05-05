# Exercise Responses:

- How to Run the example

```sh
npm install
```

```sh
npm run dev
```

- Explanation of the Approach you took.
Very simple approach, get it to function with the minimal amount of time speant. Using the coordinates of a right click/context menu for a user to be able to save comments. Then just use any comments and diaply a popover at the exact coordinates with the given text.
- What were your biggest blockers?
I spent the most time trying to configure the suggest in memory db's but I could have written a basic server and connected it to a db in a shorter amount of time. 
- Shortcomings of your solution or How you would improve if you had more time?
Better styling, use an actual server and db, remove the unnecessary rerenders that occur now. Could easiyl extedn this for editing and threads.

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
