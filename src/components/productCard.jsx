import { Link } from "react-router-dom";

export default function ProductCard({ vehicle }) {
    return (
        <div className="w-[250px] h-[420px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100 group">
            {/* Image Container with Subtle Gradient Overlay */}
            <div className="w-full h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
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
                        <h3 className="text-sm font-bold text-gray-900 truncate">
                            {vehicle.make} {vehicle.model} ({vehicle.year})
                        </h3>
                        <p className="text-xs text-blue-600 font-medium">
                            {vehicle.carType}
                        </p>
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                        {vehicle.description}
                    </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="bg-gray-50/80 rounded-lg p-1.5 text-center border border-gray-100">
                        <span className="font-medium text-gray-500 text-[0.7rem]">Seats</span>
                        <p className="text-gray-900 font-bold text-sm">{vehicle.seats}</p>
                    </div>
                    <div className="bg-gray-50/80 rounded-lg p-1.5 text-center border border-gray-100">
                        <span className="font-medium text-gray-500 text-[0.7rem]">Fuel</span>
                        <p className="text-gray-900 font-bold text-sm">{vehicle.fuelType || 'Petrol'}</p>
                    </div>
                </div>

                {/* Price & CTA */}
                <div className="mt-3">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <span className="text-lg font-bold text-gray-900">
                                LKR {vehicle.dailyRate}
                            </span>
                            <span className="text-xs font-medium text-gray-500 ml-1">/day</span>
                        </div>
                        <span
                            className={`text-xs px-2 py-1 rounded-full font-bold ${vehicle.isAvailable
                                ? "bg-green-50 text-green-700 border border-green-100"
                                : "bg-red-50 text-red-700 border border-red-100"
                                }`}
                        >
                            {vehicle.isAvailable ? "Available" : "Booked"}
                        </span>
                    </div>
                    <Link
                        to={`/products/${vehicle.key}`}
                        className={`block w-full px-4 py-2.5 text-xs font-bold text-center text-white rounded-lg transition-all duration-300 ${vehicle.isAvailable
                            ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-sm hover:shadow-md"
                            : "bg-gray-300 cursor-not-allowed"
                            }`}
                        onClick={(e) => !vehicle.isAvailable && e.preventDefault()}
                    >
                        {vehicle.isAvailable ? "Book Now →" : "Unavailable"}
                    </Link>
                </div>
            </div>
        </div>
    );
}