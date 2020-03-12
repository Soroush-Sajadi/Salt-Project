const express = require('express');
const fetch = require ('node-fetch');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/:serie/:season', async (req, res) => {
    let serie = req.params.serie;
    const season = req.params.season;
    if(/\s/.test(serie)) {
        serie = serie.replace(/\s/g, '%20');
    }
    const fetchData = await fetch(`http://www.omdbapi.com/?t=${serie}&Season=${season}&apikey=${process.env.KEY}`);
    const serieData = await fetchData.json();
    res.json(serieData);
})

app.get('/api/pic/:serie/:season', async (req, res) => {
    let serie = req.params.serie;
    const season = req.params.season;
    if (/\s/.test(serie)) {
        serie = serie.replace(/\s/g, '%20');
    }
    const fetchData = await fetch(`http://www.omdbapi.com/?t=${serie}&Season=${season}&Episode=1&apikey=${process.env.KEY}`);
    const seriePic = await fetchData.json();
    res.json(seriePic);
})

app.get('/api/:movie', async (req, res) => {
    let movie = req.params.movie;
    if (/\s/.test(movie)) {
        movie = movie.replace(/\s/g, '%20');
    }
    const fetchData = await fetch(`http://www.omdbapi.com/?s=${movie}&page=1&apikey=${process.env.KEY}`);
    const movieData = await fetchData.json();
    res.json(movieData);
})

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
        









































// app.post('/api', async (req, res) => {
//     const lon = req.body.lon;
//     const lat = req.body.lat;
//     const currentWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.KEY}`);
//     const weatherInfo = await currentWeather.json();
//     res.json(weatherInfo);
// })


