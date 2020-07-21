const express = require("express");
const mealsRoute = require("./routes/meals");
const reservationsRoute = require("./routes/reservations");
const reviewsRoute = require("./routes/reviews");

const port = process.env.PORT || 3000;
const app = express();

app.use("/meals", mealsRoute);
app.use("/reservations", reservationsRoute);
app.use("/reviews", reviewsRoute);

app.listen(port, () => console.log(`Listening at ${port}`));
