const mysql=require("mysql2/promise");
const  mysqlPool=mysql.createPool({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASS,
    database:process.env.DATABASE,
    port:3306
})
module.exports=mysqlPool;