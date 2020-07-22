const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
const bodyparser = require("body-parser");
router.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));

const calculateRout = require("./api/calculate");
 
app.use(express.json());

router.use("/calculate", calculateRout);

app.use("/api", router);


app.listen(port, () => console.log(`Server listening on port ${port}!`));
