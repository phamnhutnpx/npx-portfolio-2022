# Learned knowledge

- Project Setup
- 3D Creation (Spline)
- Desktop NavBar
- Mobile Navbar
- About Section
- About Timeline
- Projects Section
- Contact Section
- Animation Setup
- Deployment

# Set up project NPX-VR-PORTFOLIO

- `npm add tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`
- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
  `@tailwind base; @tailwind components; @tailwind utilities;`
- Add code in file tailwind.config.js (Ctrl+ A -> Paste code here)
  `module.exports = { content: ["./src/**/*.{js,jsx,ts,tsx}"], theme: { extend: { margin: { 320: "320px", }, width: { 190: "190px", 275: "275px", 300: "300px", 340: "340px", 350: "350px", 656: "656px", 880: "880px", 508: "508px", }, height: { 80: "80px", 340: "340px", 370: "370px", 420: "420px", 510: "510px", 600: "600px", 685: "685px", 800: "800px", "90vh": "90vh", }, colors: { navBar: "#1d1e25", primary: "#121316", textBase: "#8f9091", }, }, }, plugins: [], };`
- `npm add @splinetool/react-spline`
- `npm add @splinetool/runtime`
- You learn spline app then export UI 3D at background :)))
- `npm add react-icons`
- `npm add react-vertical-timeline-component`

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
