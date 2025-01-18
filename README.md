# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

**My notes**

- State is mutable and local to the component only

- Sending data from parent to child component is using this.props. Props are immutable to the child component

- Props sent by parent class must be copied to state of the child component

- Sending content from parent to child component is using this.children.

**Life cycle phases**
- Mounting 
  - constructor(props), render(), componentDidMount()
- Updating
  - render(), componentDidUpdate()
- Unmounting
  - componentWillUnmount()
- Exception 
  - componentDidCatch(error, info)