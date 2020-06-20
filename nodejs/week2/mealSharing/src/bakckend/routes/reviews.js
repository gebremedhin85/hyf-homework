const express = require("express");
const router = express.Router();
const reviews = require("../data/reviews.json");

router.get("/:id", (req, res) => {
	const reviewId = parseInt(req.params.id);
	if (!reviewId) {
		res.send(`Enter an id number`);
	} else {
		const reviewWithThisId = reviews.find((r) => r.id === reviewId);
		if (!reviewWithThisId) {
			res.send(`There is no review with this id: ${reviewId}`);
		} else {
			res.json(reviewWithThisId);
		}
	}
});

router.get("/", (req, res) => {
	res.json(reviews);
});

module.exports = router;
