import express  from 'express';

const app = express();

const port=process.env.PORT||3000;

app.get('/', function (req, res) {
    res.send('it`s muy first deploy on heroku')
});

app.listen(port);