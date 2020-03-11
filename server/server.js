const express = require('express');
const fetch = require ('node-fetch');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
        








































// app.post('/api', async (req, res) => {
//     const lon = req.body.lon;
//     const lat = req.body.lat;
//     const currentWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.KEY}`);
//     const weatherInfo = await currentWeather.json();
//     res.json(weatherInfo);
// })


