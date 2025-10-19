const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('home', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
    res.send('About Us Page');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});