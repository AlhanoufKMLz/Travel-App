const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();

// Handle the Image request
async function handleImageRequest(req, res, next) {
    const { destination, country } = req.body;
    if (destination != ' ' || country !== ' ') {
        let endpoint = `${process.env.PIXABAY_URL}?key=${process.env.PIXABAY_KEY}&q=${destination}&image_type=photo`;
        try {
            let response = await fetch(endpoint);
            if (response.ok) {
                let jsonRes = await response.json();
                if (jsonRes.total === 0) {
                    endpoint = `${process.env.PIXABAY_URL}?key=${process.env.PIXABAY_KEY}&q=${country}&image_type=photo`;
                    response = await fetch(endpoint);
                    if (response.ok) {
                        jsonRes = await response.json();
                        res.status(201).send(jsonRes);
                    }
                } else {
                    res.status(201).send(jsonRes);
                }
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(400).json('Bad Request');
    }
}

// Handle the weather request
async function handleWeatherRequest(req, res, next) {
    if (req.body !== ' ') {
        const endpoint = `${process.env.WEATHERBIT_URL}/${process.env.WEATHERBIT_KEY}/${req.body.latitude},${req.body.longitude}`;
        try {
            const response = await fetch(endpoint);
            if (response.ok) {
                const jsonRes = await response.json();
                res.status(201).send(jsonRes);
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(400).json('Bad Request');
    }
}

// Handle the coordinates request
async function handleCoordinatesRequest(req, res, next) {
    const destination = req.body.destination;
    if (destination != ' ') {
        const endpoint = `${process.env.OPENCAGEDATA_URL}?q=${destination}&key=${process.env.OPENCAGEDATA_KEY}`;
        try {
            const response = await fetch(endpoint);
            if (response.ok) {
                const jsonRes = await response.json();
                res.status(201).send(jsonRes);
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(400).json('Bad Request');
    }
}

exports.handleWeatherRequest = handleWeatherRequest;
exports.handleCoordinatesRequest = handleCoordinatesRequest;
exports.handleImageRequest = handleImageRequest;