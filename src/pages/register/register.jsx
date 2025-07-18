import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

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
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/`, {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            address: address,
            phoneNumber: phoneNumber


        }).then((res) => {
            toast.success("Account created successfully");
            navigate("/login");
        }).catch((err) => {
            toast.error(err?.response?.data?.error || "Something went wrong");
        })
    };

    // SVG Icons as components
    const UserIcon = () => (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    );

    const MailIcon = () => (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );

    const LockIcon = () => (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
    );

    const MapPinIcon = () => (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );

    const PhoneIcon = () => (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
    );

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

            {/* Register Form Container */}
            <div className="relative z-10 w-full min-h-screen flex">
                {/* Left side - Branding */}
                <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 items-center justify-center p-12">
                    <div className="max-w-lg text-center space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
                                Join
                                <span className="block text-blue-400 mt-2">Drive-Now Rentals</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Start your premium rental journey today. Create your account and unlock exclusive benefits.
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

                {/* Right side - Register Form */}
                <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-6 lg:p-12">
                    <div className="w-full max-w-md">
                        {/* Logo Section */}
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
                            <p className="text-gray-400">Join our premium rental community</p>
                        </div>

                        {/* Register Form */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 space-y-6">
                            <div className="space-y-4">
                                {/* Name Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            First Name
                                        </label>
                                        <div className="relative">
                                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400">
                                                <UserIcon />
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Last Name
                                        </label>
                                        <div className="relative">
                                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400">
                                                <UserIcon />
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400">
                                            <MailIcon />
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400">
                                            <LockIcon />
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="Create a password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Address Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400">
                                            <MapPinIcon />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Your address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400">
                                            <PhoneIcon />
                                        </div>
                                        <input
                                            type="tel"
                                            placeholder="Your phone number"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center text-sm">
                                <label className="flex items-center text-gray-300">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-800" required />
                                    <span className="ml-2">I agree to the Terms of Service and Privacy Policy</span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                onClick={handleOnSubmit}
                                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                            >
                                Create Account
                            </button>

                            <div className="text-center">
                                <p className="text-gray-400">
                                    Already have an account?
                                    <a href="/login" className="text-blue-400 hover:text-blue-300 ml-1 font-medium transition-colors">
                                        Sign in
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