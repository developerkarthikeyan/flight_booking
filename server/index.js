const express=require("express");
const app=express();
const mysql=require("mysql2");
const dotenv=require("dotenv");
const cookieParser = require('cookie-parser');
const ports=require("./ports/airports.js")
dotenv.config();
console.log('DB_HOST:', process.env.DATABASE_HOST);
console.log('DB_USER:', process.env.DATABASE_USER);
console.log('DB_PASSWORD:', process.env.DATABASE_PASS);
console.log('DB_NAME:', process.env.DATABASE);

// const db=mysql.createConnection({
//     host:process.env.DATABASE_HOST,
// user:process.env.DATABASE_USER,
// password:process.env.DATABASE_PASS,
// database:process.env.DATABASE,
// port:3306
// }); 
// db.connect((err) => {   
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Database connection established successfully.');
// });
// Test database connection

const cors=require("cors");
const { isloggedIn } = require("./controllers/protected.js");
const mysqlPool = require("./db.js");
const { default: indianAirports } = require("./ports/airports.js");
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    credentials:true}));
app.use("/",require("./router/router.js"))
app.get("/auth",isloggedIn);
// const res=ports.map((data)=>console.log(data.name))
mysqlPool.query("select 1").then(()=>{
 console.log("mysql connected");
  app.listen(8000,()=>{
    console.log("server started at port 8000") 
})
})


   