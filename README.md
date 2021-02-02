# Equipment Dashboard
 This is a dashboard made with React, Redux and Typescript which consist of summary information about all the equipment in an organization. Equipment data is accessed from an external API using an Express app, which is also written in Typescript.


## Design decisions
- Both front-end and backend is written in Typescript
- Caching is done at server side assuming that the data will only be updated hourly
- Client side was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- [Redux toolkit](https://redux-toolkit.js.org/) was used due to the ease of use and mutable like state mutations
- CSS modules was used with SASS for styling
- [React-vis](https://uber.github.io/react-vis/) was used for graphing 


## Usage
Clone the repository and run npm install to install the packages necessary to run and develop the application.
Run npm run deploy to build and deploy the application, which can be accessed at localhost:8080

Below scripts can be invoked
- <b>npm run start-client</b>: start only the client dev server
- <b>npm run start-server</b>:  start only the backend dev server
- <b>npm run start</b>:  start both client and server concurrently
- <b>npm run build-client</b>: build only the client side
- <b>npm run build-server</b>: build the server side
- <b>npm run build</b>: build both server and client side
- <b>npm run deploy</b>: build and deploy the application



