import { Link } from 'react-router-dom';
import { FaCarSide, FaShoppingCart } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(!!token);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login');
    };
    return (
        <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex justify-between items-center h-16">

                    <Link to="/home" className="flex items-center space-x-3 group">
                        <div className="p-2 bg-blue-600 rounded-lg shadow-sm group-hover:bg-blue-700 transition-colors duration-200">
                            <FaCarSide className="text-white text-xl" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-gray-900 leading-tight">
                                Drive-Now
                            </span>
                            <span className="text-sm font-medium text-blue-600 -mt-1">
                                Rentals
                            </span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-1">
                        <Link
                            to="/home"
                            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200 relative"
                        >
                            Home
                        </Link>
                        <Link
                            to="/gallery"
                            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200 relative"
                        >
                            Gallery
                        </Link>
                        <Link
                            to="/vehicle"
                            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200 relative"
                        >
                            Vehicles
                        </Link>
                        <Link
                            to="/contact"
                            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200 relative"
                        >
                            Contact
                        </Link>

                        <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-200">
                            <Link
                                to="/booking"
                                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 relative"
                                aria-label="Shopping Cart"
                            >
                                <FaShoppingCart className="text-lg" />
                            </Link>

                            {!isLoggedIn ? (
                                <>
                                    <Link
                                        to="/login"
                                        className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 rounded-md transition duration-200"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition duration-200 shadow-sm"
                                    >
                                        Register
                                    </Link>
                                </>
                            ) : (
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-200 shadow-sm"
                                >
                                    Logout
                                </button>
                            )}
                        </div>


                    </nav>



                </div>
            </div>
        </header>
    );
}