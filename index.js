import express from 'express';

const app = express();
const port = 30030;
const API_URL = 'https://dog.ceo/api/breeds/image/random';

app.get('/', async (req, res) => {
    try {
        const data = await (await fetch(API_URL)).json();

        if (data.status === 'success') {
            res.send(`<body><img src="${data.message}" alt="Dog" style="max-width:100%; display:block;"></body>`);
        } else {
            res.status(500).send('API error');
        }
    } catch (e) {
        res.status(500).send('Server error');
    }
});

app.listen(port, () => console.log(`Server running on ${port}`));