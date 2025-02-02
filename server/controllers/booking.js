const mysql=require("mysql2")
const db=require("../db")
exports.bookmyticket =async(req,res)=>{
    // return res.status(200).send({msg:"hi"});
//userid,flightid,passengerdatealis
const date = new Date();
const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with leading zero if necessary
const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-based, so add 1)
const year = date.getFullYear(); // Get full year
const passengerInfo=req.body.formData;
const seatId=req.body.state;
console.log(seatId);
const formattedDate = `${year}-${month}-${day}`;
const userId=1;
const flightId=1;
console.log(formattedDate);
console.log("passengerinfo",passengerInfo);
console.log(req.flightId);
const connection =await db.getConnection();

try{
console.log("bookking begins");
    await connection.beginTransaction();
const [bookingId]=await connection.query("insert into bookings(booking_date,userId,flightId) values(?,?,?)",
[formattedDate,userId,flightId])
console.log("booking created",bookingId.insertId);
console.log("booking id")
for(let i=0;i<seatId.length;i++){
  await connection.query("update seats set isAvailable=false where seatId=? and flightId=?",[seatId[i],flightId])
await connection.query("insert into passengers (bookingId,seatId,passengerName,passengerAge) values(?,?,?,?)",
    [bookingId.insertId,seatId[i],passengerInfo[i].name,passengerInfo[i].age] 
)
}

await connection.commit();  
console.log("booking Sussefull");
res.send({msg:"booking successfull"}).status(200); 

}catch(err){
console.log(err);

if(err)    await connection.rollback();
}
}