import { Link } from 'react-router-dom';
import { FaCarSide, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
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
                    <div className='md:hidden'>
                        <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div className={`md:hidden fixed inset-0 z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                {/* Semi-transparent overlay */}
                <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMobileMenu}></div>

                {/* Drawer with solid white background */}
                <div className="relative bg-white  max-w-full h-screen mr-auto shadow-xl">
                    {/* Header with close button */}
                    <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-600 rounded-lg shadow-sm">
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
                        </div>
                        <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-700">
                            <FaTimes className="text-xl" />
                        </button>
                    </div>

                    {/* Menu items */}
                    <div className="p-4 space-y-4 bg-white">
                        <Link
                            to="/home"
                            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                            onClick={toggleMobileMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/gallery"
                            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                            onClick={toggleMobileMenu}
                        >
                            Gallery
                        </Link>
                        <Link
                            to="/vehicle"
                            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                            onClick={toggleMobileMenu}
                        >
                            Vehicles
                        </Link>
                        <Link
                            to="/contact"
                            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                            onClick={toggleMobileMenu}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/booking"
                            className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                            onClick={toggleMobileMenu}
                        >
                            <FaShoppingCart className="mr-3 text-lg" />
                            Bookings
                        </Link>
                    </div>

                    {/* Auth buttons at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
                        {!isLoggedIn ? (
                            <div className="space-y-3">
                                <Link
                                    to="/login"
                                    className="block w-full px-4 py-2 text-center text-base font-medium text-blue-600 hover:text-blue-700 rounded-md transition duration-200"
                                    onClick={toggleMobileMenu}
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="block w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-md transition duration-200 shadow-sm text-center"
                                    onClick={toggleMobileMenu}
                                >
                                    Register
                                </Link>
                            </div>
                        ) : (
                            <button
                                onClick={() => {
                                    handleLogout();
                                    toggleMobileMenu();
                                }}
                                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-md transition-colors duration-200 shadow-sm"
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>

    );
}