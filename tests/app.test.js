const request = require('supertest');
const app = require('../src/server/server');

describe('Test root path', () => {
    test('It should response the GET method', async() => {
        const response = await request(app).get('/').send('./dist/index.html');
        expect(response.statusCode).toBe(200);
    });
});