const db=require("../db");
exports. fligths=async(req,res)=>{
 const flightId=req.params.id;
 req.flightId=flightId;
 console.log(flightId)
const connection =await db.getConnection();
console.log("hi") 
try{  
    const [rows]=
    await connection.query(`
         SELECT 
        flights.flightId,
        seats.seatId,
        seats.seatNumber,
        seats.isAvailable 
        from flights  
        inner join seats
        on 
        flights.flightId=seats.flightId
        where flights.flightId=?;
        `,[flightId] 
    ) 
    console.log(rows)
   const flightDetail={
    flightId: rows[0].flightId,
    flightNumber: rows[0].flightNumber,
    seats:rows.map(row => ({
        seatId: row.seatId,
        isAvailable: row.isAvailable,
        seatNumber:row.seatNumber
      }))
   }
    res.status(200).send(flightDetail);

}catch(err){
console.log(err)
console.log("error occur happ")
}

}