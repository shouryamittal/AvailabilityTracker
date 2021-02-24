require("./db/connection");
const express = require("express");
const parser = require("body-parser");
const app = express();
const sampleDataExecutor = require("./services/dataExecutor");
const locationController = require('./controllers/locationController');

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("ok");
});
app.post("/location/driver", locationController.getAllDrivers);
sampleDataExecutor();

app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`);
});
