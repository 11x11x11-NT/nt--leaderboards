const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/players', async (req, res) => {
    try {
        const response = await fetch('https://api.nitrotype.com/v1/leaderboard'); // Use the Nitro Type API endpoint here
        const players = await response.json();
        res.json(players);
    } catch (error) {
        console.error('Error fetching players:', error);
        res.status(500).send('Error fetching player data.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
