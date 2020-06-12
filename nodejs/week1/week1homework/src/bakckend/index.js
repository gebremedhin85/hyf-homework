const express = require("express");
const app = express();
const port=3000;

const mealsRoute = require("./routes/meals")
const aMealRoute = require("./routes/meal");
const largeMealsRoute = require("./routes/large-meals");
const cheapMealsRoute = require("./routes/cheap-meals");
const reservationsRoute = require("./routes/reservations");
const singleReservationRoute = require("./routes/reservation");


app.get("/meals", mealsRoute);
app.get("/meal", aMealRoute);
app.get("/large-meals", largeMealsRoute);
app.get("/cheap-meals", cheapMealsRoute);
app.get("/reservations", reservationsRoute)
app.get("/reservation", singleReservationRoute);



app.get("/", (req, res) =>{
     
    res.send(mealsRoute)
}) 

app.get("/", (req, res) =>{
    console.log(aMealRoute);
    res.send(aMealRoute)
}) 

 app.get("/", (req, res) =>{
     
    res.send(largeMealsRoute)
}) 

app.get("/", (req, res) =>{
   
    res.send(cheapMealsRoute);
})

app.get("/", (req, res) =>{
     
    res.send(reservationsRoute);
})

app.get("/", (req, res) =>{
     
    res.send(singleReservationRoute);
})

app.listen(port, ()=>console.log(`Listening at ${port}`));
