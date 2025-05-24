import { Link } from 'react-router-dom';
import { FaCarSide, FaShoppingCart } from 'react-icons/fa';

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <Link to="/home" className="flex items-center space-x-3 group">
                        <FaCarSide className="text-yellow-400 text-3xl transition-transform group-hover:rotate-12 duration-300" />
                        <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200">
                            Drive-Now<span className="font-light"> Rentals</span>
                        </span>
                    </Link>


                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/home"
                            className="relative text-lg font-medium hover:text-yellow-400 transition-colors duration-200 group"
                        >
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            to="/gallery"
                            className="relative text-lg font-medium hover:text-yellow-400 transition-colors duration-200 group"
                        >
                            Gallery
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            to="/vehicle"
                            className="relative text-lg font-medium hover:text-yellow-400 transition-colors duration-200 group"
                        >
                            Vehicles
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            to="/contact"
                            className="relative text-lg font-medium hover:text-yellow-400 transition-colors duration-200 group"
                        >
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>


                        <Link
                            to="/cart"
                            className="ml-4 p-2 text-xl rounded-full hover:bg-gray-800 transition-colors duration-200"
                            aria-label="Shopping Cart"
                        >
                            <FaShoppingCart />
                        </Link>


                        <button className="ml-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-md transition-colors duration-200 shadow-sm">
                            Sign In
                        </button>
                    </nav>


                    <div className="md:hidden flex items-center space-x-4">
                        <Link
                            to="/cart"
                            className="p-2 text-xl"
                            aria-label="Shopping Cart"
                        >
                            <FaShoppingCart />
                        </Link>

                        <Link
                            to="/mobile-menu"
                            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            aria-label="Menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}