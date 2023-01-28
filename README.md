# Travel App Project

## Setup

To runn the project, follow the steps below:

### To run in development mode

` $ npm run build-dev`

### To run in production mode

` $ npm run build-prod`

The above step will generate a dist folder with all the files required to run the client side and then start server at port 8081 using the command given below.

` $ npm run start`

## API

We have used folllowing APIs:
- [Weatherbit](https://www.weatherbit.io) for getting the weather information
- [OpenCage](https://opencagedata.com/api) for getting the latitude and longitude information
- [Pixabay](https://pixabay.com/api/docs/) for getting the images of the place

## Offline Functionality

The project has service workers set up in webpack to provide the offline functionality. When the service worker is functioning correctly, you will see the below message when you inspect the browser.

## Testing

The testing is done using Jest. To run test, enter the command 

`npm run test`. 

