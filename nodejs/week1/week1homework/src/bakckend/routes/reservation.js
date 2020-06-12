
const reservation = require("../data/reservations.json");
 

module.exports = (req, res) => {
    //taking the third reservation
    res.json(reservation[2]);
}