import express from 'express';

const app = express();
const PORT = 30030;
const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random';

app.get('/', (req, res) => {

    res.send('<p><a href="/dog">/dog</a></p>');
});

app.get('/dog', async (req, res) => {
    try {
        const apiResponse = await fetch(DOG_API_URL); 
        const dogData = await apiResponse.json();

        if (dogData.status === 'success') {
            res.json({
                image_url: dogData.message,
            });
        } else {
            res.status(500).json({ error: 'Api error' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Sever error' });
    }
});

app.listen(PORT);