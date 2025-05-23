import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { toast } from "react-hot-toast";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password, firstName, lastName, address, phoneNumber });
        axios.post('http://localhost:3000/api/users', { email: email, password: password, firstName: firstName, lastName: lastName, address: address, phoneNumber: phoneNumber })
            .then((res) => {
                console.log(res);
                navigate('/login');
            })
            .catch((err) => {
                toast.error(err?.response?.data?.error || "Registration Failed");
                console.log(err);
            })
    }





    return (
        <div className="bg-gradient-to-br from-[#001f3f] via-black to-[#01c0ff] w-full h-screen flex justify-center items-center">

            <form
                onSubmit={handleOnSubmit}
                className="w-full max-w-xl bg-white/10 backdrop-blur-lg border border-white/20 px-10 py-12 rounded-2xl shadow-2xl space-y-6"
            >
                <h2 className="text-4xl font-extrabold text-center text-white tracking-wide mb-4">Sign Up</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center bg-white/20 rounded-lg px-3">
                        <FaUser className="text-yellow-400 mr-3" />
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full bg-transparent py-3 border-none focus:ring-2 focus:ring-yellow-400 focus:outline-none text-white placeholder-white/80"
                            required
                        />
                    </div>

                    <div className="flex items-center bg-white/20 rounded-lg px-3">
                        <FaUser className="text-yellow-400 mr-3" />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full bg-transparent py-3 border-none focus:ring-2 focus:ring-yellow-400 focus:outline-none text-white placeholder-white/80"
                            required
                        />
                    </div>
                </div>

                <div className="flex items-center bg-white/20 rounded-lg px-3">
                    <FaEnvelope className="text-yellow-400 mr-3" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent py-3 border-none focus:ring-2 focus:ring-yellow-400 focus:outline-none text-white placeholder-white/80"
                        required
                    />
                </div>

                <div className="flex items-center bg-white/20 rounded-lg px-3">
                    <FaLock className="text-yellow-400 mr-3" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-transparent py-3 border-none focus:ring-2 focus:ring-yellow-400 focus:outline-none text-white placeholder-white/80"
                        required
                    />
                </div>

                <div className="flex items-center bg-white/20 rounded-lg px-3">
                    <FaMapMarkerAlt className="text-yellow-400 mr-3" />
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full bg-transparent py-3 border-none focus:ring-2 focus:ring-yellow-400 focus:outline-none text-white placeholder-white/80"
                    />
                </div>

                <div className="flex items-center bg-white/20 rounded-lg px-3">
                    <FaPhone className="text-yellow-400 mr-3" />
                    <input
                        type="tel"
                        placeholder="Phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full bg-transparent py-3 border-none focus:ring-2 focus:ring-yellow-400 focus:outline-none text-white placeholder-white/80"
                    />
                </div>

                <div className="pt-6">
                    <button
                        type="submit"
                        className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg rounded-lg transition duration-200"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>

    )
}