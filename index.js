const express = require('express')
const fs = require('fs')
const http = require('http')
const bodyParser = require('body-parser')
const url = require('url')
const app = express();
const path = require('path');

app.use(express.static('public'));
app.set("view engine", "ejs");

const data = fs.readFileSync('dev-data/data.json', 'utf-8')
const test = JSON.parse(data)
// console.log(test);

//routes//
app.get("/", (req, res) => {
    res.render('home')
})
app.get('/node-farm', (req, res) => {
    res.render('overview', { OD: test })
})
app.get('/node-farm/productscard', (req, res) => {
    const { query, pathname } = url.parse(req.url, true);
    res.render('productscard', { PC: test, qId: query.id })
})
app.get('/pig-game', (req, res) => {
    res.render('game')
})
app.get('/budgety', (req, res) => {
    const { query, pathname } = url.parse(req.url, true);
    res.render('budgety')
})
app.get('/natours', (req, res) => {
    const { query, pathname } = url.parse(req.url, true);
    res.render('natours')
})
app.listen(process.env.PORT || 3000);