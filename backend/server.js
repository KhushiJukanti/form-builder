const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());

PORT = process.env.PORT || 7000;


mongoose.connect(process.env.Mongo_Uri)
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send('Hello Khushi')
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
});
