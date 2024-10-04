import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

import dotenv from 'dotenv';
dotenv.config();
app.use(cors()); 

const port = process.env.PORT || 3000

app.get('/api/collection', async (req, res) => {
    try {
        const apiResponse = await fetch(`${process.env.BASE_URL}/api/collection`, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": process.env.API_KEY
            }
        });
        const data = await apiResponse.json();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
