import { Link } from "react-router-dom";
import { FaCarSide, FaShoppingCart } from "react-icons/fa";

export default function Header() {
    return (
        <header className="bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-md">
            <div className="container mx-auto px-6 h-24 flex justify-between items-center">

                <Link to="/home" className="flex items-center space-x-2">
                    <FaCarSide className="text-yellow-400 text-3xl" />
                    <span className="text-2xl font-bold tracking-wide">
                        UpTown Rentals
                    </span>
                </Link>


                <div className="flex items-center space-x-6">

                    <nav className="hidden md:flex space-x-6">
                        <Link
                            to="/home"
                            className="text-lg font-medium hover:text-yellow-400 transition duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            to="/gallery"
                            className="text-lg font-medium hover:text-yellow-400 transition duration-200"
                        >
                            Gallery
                        </Link>
                        <Link
                            to="/vehicle"
                            className="text-lg font-medium hover:text-yellow-400 transition duration-200"
                        >
                            Vehicles
                        </Link>
                        <Link
                            to="/contact"
                            className="text-lg font-medium hover:text-yellow-400 transition duration-200"
                        >
                            Contact Us
                        </Link>
                    </nav>


                    <Link
                        to="/cart"
                        className="relative text-white hover:text-yellow-400 transition duration-200"
                    >
                        <FaShoppingCart className="text-2xl" />
                        <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-black px-1.5 py-0.5 rounded-full">

                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
