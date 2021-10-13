<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->

### Tech stack: 
    React, Node.js
### This will be a full stack application
### This will be a website
### Goal: 
    The goal is to allow people use apple music with the information provided by Apple API
### Users: 
    The users will be all the people who love and enjoy music
### Data; 
    Data I’m going to use will be the information about albums, songs, artists, playlists, music videos, and the user’s most recently played content. And data will be collected through Apple Music API.
### Database schema: 
	    User table
	    Song table
	    Favorite table
    Each user should have its own favorite songs and recommended songs, and so on
    Each song should include artist, albums, music videos, and so on
### Issue might run into issue:
                Not all the songs include all the information such as album cover, image, or something else. If something cannot be found, then I need to catch the error, and solve it. For example, add a default image if no image of that song is found. Also songs searched in the search box may return nothing, then I need to create a 404, “cannot be found” page. Also input formats, such as foreign language, may not be accepted, and need to find a way to solve this error.   
### Sensitive information can be keys including Apple API Key and creating tokens
### Functionality can be: allow user sign up/in/out, and provide recommended songs based on user’s songs’ categories/style; allow user to search song or artist name
### User flow looks like register, sign in, update profile, search, save any song as his/her favorite, play preview song or videos, fetch recommandation list, and log out. 
Recommendation might be the feature more than a CRUD app at this point, can add more later. My stretch goals can be updating popular/recommended songs daily

### Github link: 
    https://github.com/daxiaokongyi/capstoneTwo
### API: 
    https://developer.apple.com/documentation/applemusicapi/