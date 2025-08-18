import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


export default function AdminRoute({ children }) {
    //get jwt token
    const token = localStorage.getItem("token");

    //if no token,redirect to login
    if (!token) {
        alert("❌ Unauthorized access. Please login as admin.");
        return <Navigate to="/login" />;
    }

    try {
        const decoded = jwtDecode(token);
        if (decoded.role === "admin") {
            return children;
        } else {
            return <Navigate to="/" />;
        }
    } catch (err) {
        return <Navigate to="/login" />;
    }
}
