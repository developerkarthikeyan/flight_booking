const express=require("express");
const app=express();
const mysql=require("mysql2");
const dotenv=require("dotenv");
const cookieParser = require('cookie-parser');
dotenv.config({ 
    path:'./.env'
})        
const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
user:process.env.DATABASE_USER,
password:process.env.DATABASE_PASS,
database:process.env.DATABASE
}); 
db.connect((err)=>{
    if(err) console.log(err);
    else{
        console.log('myssql connection success');
    }
})
const cors=require("cors");
const { isloggedIn } = require("./controllers/protected.js");
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    credentials:true}));
app.use("/",require("./router/router.js"))
app.get("/auth",isloggedIn);
// app.use((req, res, next) => {
//     console.log("Cookies received:", req.cookies); // Debug log
//     next();
//   });
app.listen(8000,()=>{
    console.log("server started at port 8000")
})
module.exports=db;