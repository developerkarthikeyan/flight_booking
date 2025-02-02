const express=require("express");
const router=express.Router();
const {registers, login}=require("../controllers/User");
const { bookmyticket } = require("../controllers/booking");
const { fligths } = require("../controllers/flights");
const { searchFlights } = require("../controllers/searchFligth");
const { myBookings } = require("../controllers/mybookings");
const { searchRecomed } = require("../controllers/searchrecomend");
router.post("/register",registers);
router.post("/login",login);
router.post("/bookmyTicket",bookmyticket);
router.post("/flights/:id",fligths);
router.post("/searchFligths",searchFlights)
router.get("/mybookings",myBookings)
router.get("/search-ports",searchRecomed)
module.exports=router;