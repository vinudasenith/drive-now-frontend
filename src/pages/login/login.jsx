import { useState } from "react";
import "./login.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        console.log("Logging in with:", { email, password });

        try {
            const res = await axios.post("http://localhost:3000/api/users/login", {
                email,
                password,
            });

            if (res.status === 200) {
                const { token, user } = res.data;

                localStorage.setItem("token", token);
                toast.success("Login Successful");

                if (user.role === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            } else {
                toast.error("Invalid credentials");
            }
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.error || "Login Failed");
        }
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
            {/* Animated background patterns with pure CSS */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 right-20 w-24 h-24 bg-blue-400/10 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-blue-600/10 rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-10 right-10 w-28 h-28 bg-blue-300/10 rounded-full animate-bounce delay-700"></div>
                <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse delay-300"></div>
            </div>

            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/80"></div>

            {/* Login Form Container */}
            <div className="relative z-10 w-full min-h-screen flex">
                {/* Left side - Branding */}
                <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 items-center justify-center p-12">
                    <div className="max-w-lg text-center space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
                                Welcome to
                                <span className="block text-blue-400 mt-2">Drive-Now Rentals</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Premium car rentals for modern travelers. Experience exceptional service with our carefully curated fleet.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-400">500+</div>
                                <div className="text-gray-400 text-sm">Premium Vehicles</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-400">24/7</div>
                                <div className="text-gray-400 text-sm">Customer Support</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-400">15+</div>
                                <div className="text-gray-400 text-sm">City Locations</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-400">98%</div>
                                <div className="text-gray-400 text-sm">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Login Form */}
                <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-6 lg:p-12">
                    <div className="w-full max-w-md">
                        {/* Logo Section */}
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Sign In</h2>
                            <p className="text-gray-400">Access your rental dashboard</p>
                        </div>

                        {/* Login Form */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center text-gray-300">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-800" />
                                    <span className="ml-2">Remember me</span>
                                </label>
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                onClick={handleOnSubmit}
                                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                            >
                                Sign In
                            </button>

                            <div className="text-center">
                                <p className="text-gray-400">
                                    Don't have an account?
                                    <a href="/register" className="text-blue-400 hover:text-blue-300 ml-1 font-medium transition-colors">
                                        Sign up
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}