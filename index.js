require('dotenv').config();
const express = require('express');
const app = express();
// const port = 8080;

const dummy = {
    name: 'smruti ranjan swain'
}

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/twitter', (req, res) => {
    res.send('srs20')
})

app.get('/login', (req, res) => {
    res.send('<h1>LOGIN</h1>')
})

app.get('/name', (req, res) => {
    res.json(dummy)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`)
})