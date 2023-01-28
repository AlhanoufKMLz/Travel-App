const requestPost = require('../src/server/handleRequest');
const handleWeatherRequest = requestPost.handleWeatherRequest;

const httpMocks = require('node-mocks-http');

describe('Test, the function "handleWeatherRequest()" should exist', () => {
    test('It should return true', async() => {
        expect(handleWeatherRequest).toBeDefined();
    });
});

describe('Test "handleWeatherRequest()" should be a function', () => {
    test('It should be a function', async() => {
        expect(typeof handleWeatherRequest).toBe("function");
    });
});

describe('Test, the function "handleWeatherRequest()" returns 200 if a valid url is being provided', () => {
    test('handleWeatherRequest should send a 200 error if user inputs correctly', () => {
        const req = httpMocks.createRequest({
            body: {
                latitude: "51.952659",
                longitude: "7.632473"
            }
        });
        const res = httpMocks.createResponse();
        handleWeatherRequest(req, res);
        // validate HTTP result
        expect(res.statusCode).toBe(200);
    });
});