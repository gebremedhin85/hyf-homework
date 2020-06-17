function getSingleReservation() {
	const reservations = require("../data/reservations.json");
	const randomReservation = Math.floor(Math.random() * reservations.length);
	return reservations[randomReservation];
}

module.exports = (req, res) => {
	res.json(getSingleReservation());
};
