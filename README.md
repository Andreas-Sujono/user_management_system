User Management System
========

A user management system where it allows to add or edit or delete user. It doesn't use any database so every change will not be saved. I mocked the HTTP request using JSON placeholder, where it simulates an asynchronous request.
You can see live at  [https://andreas-sujono.github.io/user_management_system/](https://andreas-sujono.github.io/user_management_system/)

Dependencies
--------

- react
- gh-pages 
- react-icons
- react-loading
- react-responsive-modal


Installation
------------

Clone this repository, and run:

    yarn install

   or
   
    npm install



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn deploy`

Deploy the website through github pages. see the article at [here](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) for further detail how to setup github pages for your own github account.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
