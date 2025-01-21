const jwt=require("jsonwebtoken")
const mysql=require("mysql2")
const {promisify}=require("util")
const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
user:process.env.DATABASE_USER,
password:process.env.DATABASE_PASS,
database:process.env.DATABASE
}); 


exports.isloggedIn=async(req,res,next)=>{
console.log(req.cookies);
const token=req.cookies.token;
if(!token){
    return res.status(401).json({ message: "Unauthorized" });
    }

if(req.cookies.token){
console.log("working");
console.log(process.env.JWT_SECRET);
    try{
    const decode=await promisify(jwt.verify)(
        req.cookies.token,
        process.env.JWT_SECRET
    )
    if(!decode){
console.log("null");
    }
    console.log("decode",decode);
    db.query("select *from User where userId=?",[decode.id],(err,queryresult)=>{
console.log(queryresult)
if(queryresult){
    res.status(200).send({user:queryresult});
}
else{
    res.status(402).send({message:"invalie credentials"})
}
    })
  
 
}catch(err){
console.log(err);
}
}
else{
     
}
}