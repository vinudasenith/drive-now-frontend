import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Error() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white px-4">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-2xl shadow-2xl text-center max-w-md w-full">
                <FaExclamationTriangle className="text-5xl text-yellow-400 mb-5 mx-auto" />
                <h1 className="text-4xl font-extrabold mb-3">404 - Page Not Found</h1>
                <p className="text-lg text-gray-300 mb-6">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/home"
                    className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-500 transition duration-200"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
}
