const express = require('express');
const fetch = require ('node-fetch');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/:serie', async (req, res) => {
    let serie = req.params.serie;
    if(/\s/.test(serie)) {
      serie = serie.replace(/\s/g, '%20');
    }
    const fetchData = await fetch(`http://www.omdbapi.com/?t=${serie}&Season=${season = 1}&apikey=6a54815b`);
    const serieData = await fetchData.json();
    res.json(serieData);
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


