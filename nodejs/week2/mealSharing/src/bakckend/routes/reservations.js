const express = require("express");
const router = express.Router();
const reservations = require("../data/reservations.json");

router.get("/:id", (req, res) => {
	const reserveId = parseInt(req.params.id);
	if (!reserveId) {
		res.send(`Enter an id number`);
	} else {
		const reservationWithThisId = reservations.find((r) => r.id === reserveId);
		if (!reservationWithThisId) {
			res.send(`There is no reservation with this id: ${reserveId}`);
		} else {
			res.json(reservationWithThisId);
		}
	}
});

router.get("/", (req, res) => {
	res.json(reservations);
});

module.exports = router;

 
