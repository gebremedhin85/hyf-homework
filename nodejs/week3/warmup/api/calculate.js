const express = require("express");
const router = express.Router();

const getCalculatedResult = (arrayNumbers, calculoter, initualValue) => {
	const result = arrayNumbers.reduce((a, b) => {
		if (calculoter === "add") {
			return a + b;
		} else if (calculoter === "subtract") {
			return a - b;
		} else if (calculoter === "multiply") {
			return a * b;
		} else if (calculoter === "divide") {
			return a / b;
		}
	}, initualValue);
	return result;
};

router.get("/:method", (req, res) => {
	const method = req.params.method;
	const { firstNum, secondNum } = req.query;
	const nextNums = Object.values(secondNum).map(Number);
	const firstNumber = parseFloat(firstNum);

	if (firstNumber && nextNums) {
		if (method) res.json(getCalculatedResult(nextNums, method, firstNumber));
	} else {
		res
			.status(400)
			.send(
				`Bad request. Inputes not numbers or divide by zero. Please enter numbers for inpute values`
			);
	}
});

//using post
router.post("/:method", (req, res) => {
	const method = req.params.method;
	const { firstNum, secondNum } = req.body;
	const nextNums = Object.values(secondNum).map(Number);
	const firstNumber = parseFloat(firstNum);
	console.log(nextNums);

	if (firstNumber && nextNums) {
		if (method) res.json(getCalculatedResult(nextNums, method, firstNumber));
	} else {
		res
			.status(400)
			.send(
				`Bad request. Inputes not numbers or divide by zero. Please enter numbers for inpute values`
			);
	}
});

module.exports = router;
