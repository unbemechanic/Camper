const express = require("express");
const dotenv = require('dotenv').config;
const cors = require('cors');
const router = require("./routes/motor");
const routerCaravan = require("./routes/caravan");
const routerTuning = require("./routes/tuning")
const app = express();
app.use(cors())
const mongoose = require('mongoose');
const routerUsedCar = require("./routes/used-car");
const routerCamping = require("./routes/camping");
const routerSignUp = require('./routes/auth')
const PORT = process.env.PORT || 5500;
dotenv();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/camper";

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('db is connected')
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}).catch(error=>{
    console.log('db connection error')
})

app.use(routerSignUp)
app.use(router)
app.use(routerCaravan)
app.use(routerTuning)
app.use(routerUsedCar)
app.use(routerCamping)
app.use((req, res)=>{
    res.status(404).send('<h1>404 Page not found</h1>');
});
