import { Link } from "react-router-dom";

export default function ProductCard({ vehicle }) {
    return (
        <div className="w-[250px] h-[420px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-slate-700 hover:border-blue-500/50 group">
            {/* Image Container with Subtle Gradient Overlay */}
            <div className="w-full h-40 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center relative overflow-hidden">
                <img
                    src={vehicle.image[0]}
                    alt={vehicle.model}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                {!vehicle.isAvailable && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[1px]">
                        <span className="bg-white/95 text-red-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                            SOLD OUT
                        </span>
                    </div>
                )}
            </div>

            {/* Content Container */}
            <div className="p-4 h-[230px] flex flex-col justify-between">
                {/* Title & Description */}
                <div className="space-y-2">
                    <div>
                        <h3 className="text-sm font-bold text-white truncate">
                            {vehicle.make} {vehicle.model} ({vehicle.year})
                        </h3>
                        <p className="text-xs text-blue-400 font-medium">
                            {vehicle.carType}
                        </p>
                    </div>
                    <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed">
                        {vehicle.description}
                    </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="bg-slate-800/50 rounded-lg p-1.5 text-center border border-slate-700">
                        <span className="font-medium text-gray-400 text-[0.7rem]">Seats</span>
                        <p className="text-white font-bold text-sm">{vehicle.seats}</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-1.5 text-center border border-slate-700">
                        <span className="font-medium text-gray-400 text-[0.7rem]">Fuel</span>
                        <p className="text-white font-bold text-sm">{vehicle.fuelType || 'Petrol'}</p>
                    </div>
                </div>

                {/* Price & CTA */}
                <div className="mt-3">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <span className="text-lg font-bold text-white">
                                LKR {vehicle.dailyRate}
                            </span>
                            <span className="text-xs font-medium text-gray-400 ml-1">/day</span>
                        </div>
                        <span
                            className={`text-xs px-2 py-1 rounded-full font-bold ${vehicle.isAvailable
                                ? "bg-green-500/20 text-green-400 border border-green-500/50"
                                : "bg-red-500/20 text-red-400 border border-red-500/50"
                                }`}
                        >
                            {vehicle.isAvailable ? "Available" : "Booked"}
                        </span>
                    </div>
                    <Link
                        to={`/products/${vehicle.key}`}
                        className={`block w-full px-4 py-2.5 text-xs font-bold text-center text-white rounded-lg transition-all duration-300 ${vehicle.isAvailable
                            ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-sm hover:shadow-md"
                            : "bg-slate-700 cursor-not-allowed text-gray-400"
                            }`}
                        onClick={(e) => !vehicle.isAvailable && e.preventDefault()}
                    >
                        {vehicle.isAvailable ? "Book Now →" : "Unavailable"}
                    </Link>
                </div>
            </div>
            <button
                onClick={() => window.location.href = "/reviews"}
                className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
            >
                Reviews & Comments
            </button>
        </div>
    );
}