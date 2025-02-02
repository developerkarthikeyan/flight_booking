const db=require("../db");

exports.searchFlights=async(req,res)=>{
    const{from,to,date}=req.body
    console.log(req.body);
    const connection =await db.getConnection();
try{
    const [rows]=await connection.query("select * from flights where departureCity=? and arrivalCity=?;",[from,to]);
    res.status(200).send(rows);

}catch(err){
console.log(err);

}



}