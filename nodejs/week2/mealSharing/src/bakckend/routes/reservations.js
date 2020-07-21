const express = require("express");
const router = express.Router();
const reservations = require("../data/reservations.json");

router.get("/:id", (req, res) => {
	const reserveId = parseFloat(req.params.id);
	if (!reserveId) {
		res.status(400).send("Bud request, id should be a number.");
	} else {
		const reservationWithThisId = reservations.find((r) => r.id === reserveId);
		if (!reservationWithThisId) {
			res.status(404).send(`404 error. There is no reservation with this id: ${reserveId}`);
		} else {
			res.json(reservationWithThisId);
		}
	}
});

router.get("/", (req, res) => {
	res.json(reservations);
});

module.exports = router;

 
