const Location = require('../models/location');

const locationController = {
    getAllDrivers: function(req, res) {
        let {lat, long} = req.body;
        let radius = 200; // just for testing purpose

        Location.find({
            location: {
                $geoWithin: {
                    $centerSphere: [[lat, long], radius]
                }
            }
        })
        .then((resp) => {
            res.send(resp);
        })
        .catch((e) => {
            console.log(e);
        })

    }
}

module.exports = locationController;