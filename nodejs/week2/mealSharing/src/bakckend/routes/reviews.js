const express = require("express");
const router = express.Router();
const reviews = require("../data/reviews.json");

router.get("/:id", (req, res) => {
	const reviewId = parseFloat(req.params.id);
	if (!reviewId) {
		res.status(400).send("Bud request, id should be a number.");
	} else {
		const reviewWithThisId = reviews.find((r) => r.id === reviewId);
		if (!reviewWithThisId) {
			res.status(404).send(`404 error. There is no review with this id: ${reviewId}`);
		} else {
			res.json(reviewWithThisId);
		}
	}
});

router.get("/", (req, res) => {
	res.json(reviews);
});

module.exports = router;
