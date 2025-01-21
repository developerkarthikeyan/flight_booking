
import "../css/login.css"
import{Link} from "react-router-dom";
import loadingIcon from  "../assets/Loader dot infinity.svg"
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const navigate=useNavigate();
    const [userData, setuserData] = useState({
  
        email: "",
        password: "" // Fixed the typo from "passowrd"
    });
    const[isloading,setLoading]=useState(false);

    
    const showToast = (msg,status) => {
        if(status!=200){
        toast.error(msg);

        }
        else{
            toast.success(msg)
        }
        // You can also use toast.error(), toast.info(), or toast.warning() based on your needs
      };



const handleLogin=async(e)=>{
    e.preventDefault();
    setLoading(true);
    try{const request= await axios.post("http://localhost:8000/login",userData,{
        withCredentials: true,
        validateStatus: function (status) {
            // Allow any status code to resolve the promise
            return true; 
          }    },

);
    //  const response=await request.json();
        console.log(request.status)
if(request.status==200) {
    navigate("/")
    showToast(request.data.message,request.status)

}
else{
    setLoading(false)
    showToast(request.data.message,request.status)
}
    }catch(err){
        console.log(err)
    }
}
    




    return (
        <>
         <ToastContainer />
            <form onSubmit={handleLogin}  className="parent">
                <div className="login">
               <div className='heading'>
               <p className="t1">Hello Again!</p>
                <p className="t2">Welcome back you've been missed!</p>
               </div>
                <div className="inputs">
                    <input required onChange={(e) =>
                                setuserData((prevData) => ({
                                    ...prevData,
                                    email: e.target.value
                                }))
                            }className="ip1 type='text'" placeholder="Enter your email"/>
                     <input required
                     onChange={(e) =>
                        setuserData((prevData) => ({
                            ...prevData,
                            password: e.target.value
                        }))} className="ip2"type='text'  placeholder="Password"/>
                <p className="fp">Forgot Password</p>
                </div>
                <div className="btndiv">
                    
                <button disabled={isloading} className="btn" >
                    {isloading ?
        (
        <div className="loaderdiv">
        <div class="custom-loader"></div>

        </div>
             )     :
               <p>Login</p>     
                }
                    </button>   
              
                </div>
                <div className="ordiv">
              <div className="lf"></div>
                <p className="ortext">or Continue with</p>
<div className="lb"></div>
                </div>
<div className="oauth">
<img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"/>
</div>
<p className="reg">Not a Member <Link to ="/register">Register Here</Link></p>
             
                </div>
            </form>
        </>
    );
}

export default Login;
