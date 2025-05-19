import { useState } from "react";
import "./login.css";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with:", { email, password });

    };

    const googleLogin = () => {
        console.log("Google login clicked");

    };

    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 w-full h-screen flex justify-center items-center px-4">
            <form
                onSubmit={handleOnSubmit}
                className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 space-y-6"
            >
                <div className="flex flex-col items-center">
                    <img
                        src="/logo.png"
                        alt="Rent A Car Logo"
                        className="w-80 h-80 object-contain"
                    />
                </div>

                <div className="space-y-2">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold rounded-md transition duration-200"
                >
                    Login
                </button>

                <div
                    className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-lg font-medium text-center rounded-md cursor-pointer transition duration-200"
                    onClick={googleLogin}
                >
                    Continue with Google
                </div>
            </form>
        </div>
    );
}
