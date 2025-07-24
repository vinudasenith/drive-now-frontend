import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ImageSlider from "../../components/imageSlider";
import { addToCart, loadCart } from "../../utils/cart";
import { Link } from "react-router-dom";

export default function VehicleOverview() {
    const params = useParams();
    console.log(params);
    const key = params.key;
    const [loadingStatus, setLoadingStatus] = useState("loading");
    const [vehicle, setVehicles] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/api/products/${key}`).then((res) => {
            setVehicles(res.data);
            setLoadingStatus("loaded");
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
            setLoadingStatus("error");
        });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Loading State */}
            {loadingStatus === "loading" && (
                <div className="w-full h-screen flex flex-col items-center justify-center space-y-6 bg-white">
                    <div className="relative">
                        <div className="w-20 h-20 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-b-indigo-600 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-slate-700 mb-2">Loading Vehicle Details</h3>
                        <p className="text-slate-500">Please wait while we fetch the information...</p>
                    </div>
                </div>
            )}

            {/* Error State */}
            {loadingStatus === "error" && (
                <div className="w-full h-screen flex flex-col items-center justify-center space-y-6 bg-white">
                    <div className="relative">
                        <div className="w-20 h-20 border-4 border-red-200 border-t-red-500 rounded-full animate-spin"></div>
                        <svg className="absolute inset-0 w-20 h-20 text-red-500 p-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-red-600 mb-2">Failed to Load Vehicle Details</h3>
                        <p className="text-slate-600 mb-6">We encountered an error while loading the vehicle information.</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            )}

            {/* Success State */}
            {loadingStatus === "loaded" && (
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Breadcrumb Navigation */}
                    <nav className="mb-8" aria-label="Breadcrumb">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200 px-6 py-4">
                            <ol className="flex items-center space-x-2 text-sm">
                                <li className="flex items-center">
                                    <Link to="/" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                        </svg>
                                        Home
                                    </Link>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-slate-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-slate-600 font-medium">{vehicle.make}</span>
                                </li>
                                <li className="flex items-center" aria-current="page">
                                    <svg className="w-5 h-5 text-slate-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-blue-600 font-semibold">{vehicle.model}</span>
                                </li>
                            </ol>
                        </div>
                    </nav>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
                        {/* Image Gallery */}
                        <div className="lg:sticky lg:top-8 lg:self-start">
                            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                                <ImageSlider images={Array.isArray(vehicle.image) ? vehicle.image : [vehicle.image]} />
                            </div>
                        </div>

                        {/* Vehicle Details */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
                                {/* Header */}
                                <div className="border-b border-slate-200 pb-6 mb-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h1 className="text-3xl xl:text-4xl font-bold text-slate-800 mb-2">
                                                {vehicle.make} <span className="text-blue-600">{vehicle.model}</span>
                                            </h1>
                                            <div className="flex items-center space-x-4">
                                                <span className="text-lg text-slate-600 font-medium">{vehicle.year}</span>
                                                <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                                                <div className="flex items-center space-x-1">
                                                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-baseline">
                                                <span className="text-3xl xl:text-4xl font-bold text-emerald-600">LKR {vehicle.dailyRate?.toFixed(2)}</span>
                                            </div>
                                            <span className="text-slate-500 font-medium">per day</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Specifications Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-xl border border-slate-200">
                                        <div className="flex items-center mb-2">
                                            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            <span className="text-slate-600 text-sm font-medium">Transmission</span>
                                        </div>
                                        <span className="text-slate-800 font-semibold text-lg">{vehicle.transmission}</span>
                                    </div>
                                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-xl border border-slate-200">
                                        <div className="flex items-center mb-2">
                                            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            <span className="text-slate-600 text-sm font-medium">Seats</span>
                                        </div>
                                        <span className="text-slate-800 font-semibold text-lg">{vehicle.seats || 'N/A'}</span>
                                    </div>
                                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-xl border border-slate-200">
                                        <div className="flex items-center mb-2">
                                            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                            </svg>
                                            <span className="text-slate-600 text-sm font-medium">Fuel Type</span>
                                        </div>
                                        <span className="text-slate-800 font-semibold text-lg">{vehicle.fuelType || 'N/A'}</span>
                                    </div>
                                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-xl border border-slate-200">
                                        <div className="flex items-center mb-2">
                                            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                            <span className="text-slate-600 text-sm font-medium">Mileage</span>
                                        </div>
                                        <span className="text-slate-800 font-semibold text-lg">{vehicle.mileage || 'N/A'}</span>
                                    </div>
                                </div>

                                {/* Description */}


                                {/* CTA Button */}
                                <button
                                    onClick={() => {
                                        addToCart(vehicle.key, 1);
                                        toast.success("Added to Cart");
                                        console.log(loadCart());
                                        window.location.href = "/booking";
                                    }}
                                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center gap-3"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 5H2m5 8v4a2 2 0 002 2h8a2 2 0 002-2v-4m-8 0V9a2 2 0 012-2h4a2 2 0 012 2v4m-8 0H9m4 0h2" />
                                    </svg>
                                    Add to Cart & Book Now
                                </button>
                            </div>

                            {/* Additional Info Cards */}
                            <div className="grid gap-4">
                                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
                                    <div className="flex items-center mb-3">
                                        <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <h4 className="text-lg font-semibold text-slate-800">What's Included</h4>
                                    </div>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Full insurance coverage</li>
                                        <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>24/7 roadside assistance</li>
                                        <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Traveling 200 km each day.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            )}
        </div>
    );
}