/**
 * This service runs a cron job to get location data and push data to db every 60 seconds
 */
const cron = require("node-cron");
const sampleData = require("../sampleData.json");
const locationsData = sampleData.locations;
const Location = require("../models/location");

function sampleDataExecutor() {
    cron.schedule('1 * * * * *', () => {
        let data = locationsData.slice(0,11);
        let bulkData = [];
        data.map((loc) => {
            bulkData.push({location:{type:'Point', coordinates:[loc.lat, loc.long]}});
        });
        console.log(bulkData);

        Location.insertMany(bulkData)
            .then(() => {
                console.log(`Batch location Data saved!!`);
            })
            .catch((e) => {
                console.log(`${e}`);
            });

    })
}

module.exports = sampleDataExecutor;