import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Login from "./components/login";
import Register from "./components/Register";
import Home from "./components/home";
import MyBooking from "./components/mybooking";
import Navbar from "./components/navbar";
import Flights from "./components/flights";
import Seats from "./components/seats";
import DynamicForms from "./components/dynamicform";
const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Initialize to null
    const [loading, setLoading] = useState(true);

    // const checkAuth = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:8000/auth", {
    //             withCredentials: true,
    //         });
    //         setIsAuthenticated(response.status >= 200 && response.status < 300);
    //     } catch (error) {
    //         console.error("Authentication check error:", error);
    //         setIsAuthenticated(false);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // useState(() => { // Use useState for initial check
    //     checkAuth();
    // }, []);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (!isAuthenticated) {
    //     return <Navigate to="/login" />;
    // }

    return children;
};

function App() {
 

    return (

<>
<Navbar/>

    <Routes>
    
        <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} /> */}
                {/* <Route path="/mybooking" element={<ProtectedRoute><MyBooking /></ProtectedRoute>} /> */}
                <Route path="/flights" element={<Flights/>}/>
                <Route path="*" element={<Navigate to="/login" />} />
                <Route path="/seats/:id" element={<Seats/>}/>
                <Route path="/auth/passengerinfo/:id" element={<DynamicForms/>} />
            </Routes>
 


</>
    
    );

}

export default App;