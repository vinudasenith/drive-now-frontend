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
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            {/* Loading State */}
            {loadingStatus === "loading" && (
                <div className="w-full h-screen flex flex-col items-center justify-center space-y-4">
                    <div className="w-16 h-16 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
                    <p className="text-gray-400">Loading vehicle details...</p>
                </div>
            )}

            {/* Error State */}
            {loadingStatus === "error" && (
                <div className="w-full h-screen flex flex-col items-center justify-center space-y-4">
                    <div className="w-16 h-16 border-4 border-gray-600 border-t-red-500 rounded-full animate-spin"></div>
                    <p className="text-red-400">Failed to load vehicle details</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    >
                        Retry
                    </button>
                </div>
            )}

            {/* Success State */}
            {loadingStatus === "loaded" && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Breadcrumb Navigation */}
                    <nav className="flex mb-8" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    <span className="ml-1 text-sm font-medium text-white md:ml-2">{vehicle.make}</span>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    <span className="ml-1 text-sm font-medium text-yellow-400 md:ml-2">{vehicle.model}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Image Gallery */}
                        <div className="w-full lg:w-1/2">
                            <div className="sticky top-4">
                                <ImageSlider images={Array.isArray(vehicle.image) ? vehicle.image : [vehicle.image]} />
                            </div>
                        </div>

                        {/* Vehicle Details */}
                        <div className="w-full lg:w-1/2">
                            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-2xl">
                                {/* Title */}
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    {vehicle.make} <span className="text-yellow-400">{vehicle.model}</span>
                                </h1>
                                <h2 className="text-xl text-gray-300 mb-6">{vehicle.year}</h2>

                                {/* Price */}
                                <div className="flex items-center mb-6">
                                    <span className="text-3xl font-bold text-green-400 mr-2">LKR {vehicle.dailyRate?.toFixed(2)}</span>
                                    <span className="text-gray-400">/ day</span>
                                </div>

                                {/* Highlights */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-gray-700/50 p-3 rounded-lg">
                                        <div className="text-gray-400 text-sm">Transmission</div>
                                        <div className="text-white font-medium">{vehicle.transmission}</div>
                                    </div>
                                    <div className="bg-gray-700/50 p-3 rounded-lg">
                                        <div className="text-gray-400 text-sm">Seats</div>
                                        <div className="text-white font-medium">{vehicle.seats || 'N/A'}</div>
                                    </div>
                                    <div className="bg-gray-700/50 p-3 rounded-lg">
                                        <div className="text-gray-400 text-sm">Fuel Type</div>
                                        <div className="text-white font-medium">{vehicle.fuelType || 'N/A'}</div>
                                    </div>
                                    <div className="bg-gray-700/50 p-3 rounded-lg">
                                        <div className="text-gray-400 text-sm">Mileage</div>
                                        <div className="text-white font-medium">{vehicle.mileage || 'N/A'}</div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                                    <p className="text-gray-300 leading-relaxed">{vehicle.description}</p>
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={() => {
                                        addToCart(vehicle.key, 1);
                                        toast.success("Added to Cart");
                                        console.log(loadCart());
                                        window.location.href = "/booking";
                                    }}
                                    className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}