import { Link } from "react-router-dom";

export default function ProductCard({ vehicle }) {
    return (
        <div className="w-[250px] h-[420px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200 group">

            <div className="w-full h-40 bg-gray-50 flex items-center justify-center relative overflow-hidden">
                <img
                    src={vehicle.image}
                    alt={vehicle.model}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />
                {!vehicle.isAvailable && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <span className="bg-white text-red-600 text-xs font-bold px-3 py-1 rounded-full">
                            SOLD OUT
                        </span>
                    </div>
                )}
            </div>


            <div className="p-4 space-y-2 h-[230px] flex flex-col">
                <div>
                    <h3 className="text-sm font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                        {vehicle.make} {vehicle.model} ({vehicle.year})
                    </h3>
                    <p className="text-xs text-blue-500 font-medium">
                        {vehicle.carType}
                    </p>
                </div>

                <p className="text-xs text-gray-600 line-clamp-3 flex-grow">
                    {vehicle.description}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs mt-2">
                    <div className="bg-gray-50 rounded p-1.5 text-center">
                        <span className="font-medium text-gray-500">Seats</span>
                        <p className="text-gray-900 font-bold">{vehicle.seats}</p>
                    </div>
                    <div className="bg-gray-50 rounded p-1.5 text-center">
                        <span className="font-medium text-gray-500">Type</span>
                        <p className="text-gray-900 font-bold">{vehicle.fuelType || 'Petrol'}</p>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-bold text-gray-900">
                        LKR{vehicle.dailyRate}
                        <span className="text-xs font-normal text-gray-500"> /day</span>
                    </span>
                    <span
                        className={`text-xs px-2 py-1 rounded-full font-bold ${vehicle.isAvailable
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                            }`}
                    >
                        {vehicle.isAvailable ? "Available" : "Booked"}
                    </span>
                </div>

                <Link
                    to={`/products/${vehicle.key}`}
                    className={`mt-2 w-full px-4 py-2 text-xs font-bold text-white rounded-md transition-all duration-300 ${vehicle.isAvailable
                        ? "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg"
                        : "bg-gray-400 cursor-not-allowed"
                        }`}
                    onClick={e => !vehicle.isAvailable && e.preventDefault()}
                >
                    {vehicle.isAvailable ? "Book Now" : "Not Available"}
                </Link>
            </div>
        </div>
    );
}