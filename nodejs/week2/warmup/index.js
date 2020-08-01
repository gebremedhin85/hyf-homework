const express = require("express");
const app = express();

app.get("/numbers/add", (req, res) => {
	const firstNum = parseFloat(req.query.first);
	const secondNum = parseFloat(req.query.second);

	if (!firstNum || !secondNum) res.status(400).send("Bad request. inputes should be numbers");
	else res.send(`${firstNum + secondNum}`);
});

app.get("/numbers/multiply/:firstNum/:secondNum", (req, res) => {
	const firstNum = parseFloat(req.params.firstNum);
	const secondNum = parseFloat(req.params.secondNum);

	if (!firstNum || !secondNum) res.status(400).send("Bad request. inputes should be numbers");
	else res.send(`${firstNum * secondNum}`);
});

app.listen(3000, () => console.log("lisning..."));
