const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/app", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`DB Connection Successful.`);
    })
    .catch((e) => {
        console.log(`${e}`);
    });

module.exports = mongoose;