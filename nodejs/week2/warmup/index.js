const express = require("express");
const app = express();

app.get("/numbers/add", (req, res) => {
	const firstNum = parseInt(req.query.first);
	const secondNum = parseInt(req.query.second);

	if (!firstNum) res.send(`Please enter first as a number`);
	else if (!secondNum) res.send(`Please enter second as a number`);
	else res.send(`${firstNum + secondNum}`);
});

app.get("/numbers/multiply/:firstNum/:secondNum", (req, res) => {
	const firstNum = parseInt(req.params.firstNum);
	const secondNum = parseInt(req.params.secondNum);

	if (!firstNum) res.send("Please enter a first number");
	else if (!secondNum) res.send("Please enter a second number");
	else res.send(`${firstNum * secondNum}`);
});

app.listen(3000, () => console.log("lisning..."));
