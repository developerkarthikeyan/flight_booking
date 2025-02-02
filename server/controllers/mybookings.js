const db=require("../db");
exports.myBookings=async(req,res)=>{

    let userId=1;
    const connection=await db.getConnection();
    try{
        await connection.beginTransaction();
        const [rows]=await connection.query(`
         
SELECT
user.userName, 
user.userId,
    bookings.bookingId,
    passengers.passengerName,
    flights.flightId,
    flights.departureCity,
    flights.arrivalCity,
seats.seatNumber   
FROM
 user
inner join bookings
on user.userId=bookings.userId
inner join passengers on bookings.bookingId=passengers.bookingId
inner join flights on bookings.flightId=flights.flightId 
inner join seats on flights.flightId=seats.flightId
            where user.userId=?;
            `,[userId])


            const mybook={
                userId:rows[0].userId,
                flightId: rows[0].flightId,
                flightNumber: rows[0].flightNumber,
                departureCity: rows[0].departureCity,
                arrivalCity: rows[0].arrivalCity,
                departureTime: rows[0].departureTime,
                arrivalTime: rows[0].arrivalTime,
                seatsDetails: rows.map((data) => ({
                    seatNumber: data.seatNumber, // Properly return an object
                    passengerName: data.passengerName,
                })),
            }
            console.log(rows.length);
            res.send(mybook).status(200);
            await connection.commit();
    }catch(err){
console.log(err)
    }
}




// c39b0dc3903238bbf79a4af51652877a39399e076bafc1ad0d49e75d86357f1383dcb5e8e0cbea8c42df639536970094