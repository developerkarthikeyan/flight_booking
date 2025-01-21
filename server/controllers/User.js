const mysql=require("mysql2")
const jwt=require("jsonwebtoken");
const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
user:process.env.DATABASE_USER,
password:process.env.DATABASE_PASS,
database:process.env.DATABASE
}); 
const bycrypt=require("bcrypt")
///////////////////////LOGIN/////////////////////

exports.login=async(req,res)=>{
    console.log(req.body)
const{email,password}=req.body;

try{ 
db.query('select *from User where email=?',[email],async(err,queryresult)=>{
if(err){
    console.log(err)
}
if(queryresult==0){
  return  res.status(402).send({message:"email not found"});
}
const user=queryresult[0];

const ispasswordmatch=await bycrypt.compare(password,user.password)
if (!ispasswordmatch) {
    return res.status(402).json({ message: 'Email or password is incorrect' });
}  
const id=queryresult[0].userId;
console.log(id);
console.log(queryresult);

const token=jwt.sign({id:id},process.env.JWT_SECRET,{  expiresIn: '7d'})
console.log(token);
console.log(process.env.JWT_COOKIE_EXPIRES)
// res.status(200).json({ message: 'Login successful' });





    
const cookieOptions={
    expires:new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES*24*60*60*1000),
    httpOnly: true,
    secure: false,
}
res.cookie("token",token,cookieOptions);
res.status(200).json({message:"successfully logged in"})
}

)}  
catch(err){
    console.log(err)
}

}
    

//////////REGISTERS/////////////////////
exports.registers=async(req,res)=>{
const{username,email,password}=req.body;
db.query('select email from User where email=?',
    [email],async(err,result)=>{
    if(err){
        console.log("errr")
console.log(err);
  
    }
    if(result.length>0){
       return  res.status(409).send({message:"email alreadytaken"})
    }
    let hashpassword=await bycrypt.hash(password,8)
    db.query('insert into User set ?',
    {username:username,email:email,password:hashpassword},
    (err,queryResult)=>{ 
        if(err){

if(err.code=='ER_DUP_ENTRY') {
    return res.status(409).json({
        message: `Username or Email already exists: `,
      });
}       }
        else{
            console.log(queryResult)
             res.status(200).send({message:"successfully registered"});
        }
    })
})

};
