const express = require('express');
const { json } = require('stream/consumers');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
    res.send('About Us Page');
});

app.get("/data",(req,res) => {
    res.status(200).json({
        "data": 
            [
                {
                    "id": 1,
                    "name": "John Doe",
                    "email": "john.doe@example.com",
                    "age": 28,
                    "isActive": true
                },
                {
                    "id": 2,
                    "name": "Jane Smith",
                    "email": "jane.smith@example.com",
                    "age": 25,
                    "isActive": false
                },
                {
                    "id": 3,
                    "name": "Michael Johnson",
                    "email": "michael.johnson@example.com",
                    "age": 32,
                    "isActive": true
                },
                {
                    "id": 4,
                    "name": "Emily Davis",
                    "email": "emily.davis@example.com",
                    "age": 30,
                    "isActive": true
                },
                {
                    "id": 5,
                    "name": "William Brown",
                    "email": "william.brown@example.com",
                    "age": 27,
                    "isActive": false
                },
                {
                    "id": 6,
                    "name": "Olivia Wilson",
                    "email": "olivia.wilson@example.com",
                    "age": 24,
                    "isActive": true
                },
                {
                    "id": 7,
                    "name": "James Taylor",
                    "email": "james.taylor@example.com",
                    "age": 35,
                    "isActive": true
                },
                {
                    "id": 8,
                    "name": "Sophia Anderson",
                    "email": "sophia.anderson@example.com",
                    "age": 29,
                    "isActive": false
                },
                {
                    "id": 9,
                    "name": "Daniel Thomas",
                    "email": "daniel.thomas@example.com",
                    "age": 31,
                    "isActive": true
                },
                {
                    "id": 10,
                    "name": "Ava Martinez",
                    "email": "ava.martinez@example.com",
                    "age": 26,
                    "isActive": true
                }
         ]
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});