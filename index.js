require('dotenv').config();
const express = require('express');
const app = express();
// const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/twitter', (req, res) => {
    res.send('srs20')
})

app.get('/login', (req, res) => {
    res.send('<h1>LOGIN</h1>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`)
})