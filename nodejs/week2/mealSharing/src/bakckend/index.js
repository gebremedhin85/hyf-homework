const express = require("express");
const mealsRoute = require("./routes/meals");
const aMealRoute = require("./routes/meal");
const largeMealsRoute = require("./routes/large-meals");
const cheapMealsRoute = require("./routes/cheap-meals");
const reservationsRoute = require("./routes/reservations");
const singleReservationRoute = require("./routes/reservation");
const reviewsRoute = require("./routes/reviews");

const app = express();
const port = 3000;

app.use("/meals", mealsRoute);
app.get("/meal", aMealRoute);
app.get("/large-meals", largeMealsRoute);
app.get("/cheap-meals", cheapMealsRoute);
app.use("/reservations", reservationsRoute);
app.get("/reservation", singleReservationRoute);
app.use("/reviews", reviewsRoute);

app.get("/", (req, res) => {
	res.send(mealsRoute);
});

app.get("/", (req, res) => {
	res.send(aMealRoute);
});

app.get("/", (req, res) => {
	res.send(largeMealsRoute);
});

app.get("/", (req, res) => {
	res.send(cheapMealsRoute);
});

app.get("/", (req, res) => {
	res.send(reservationsRoute);
});

app.get("/", (req, res) => {
	res.send(singleReservationRoute);
});

app.get("/", (req, res) => {
	res.send(reviewsRoute);
});

app.listen(port, () => console.log(`Listening at ${port}`));
