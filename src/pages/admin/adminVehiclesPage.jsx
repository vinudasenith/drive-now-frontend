import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEdit, FaTrash, FaPlusCircle } from "react-icons/fa";
import axios from "axios";

export default function AdminVehiclesPage() {
    //state variables
    const [vehicles, setVehicles] = useState([]);
    const [vehiclesLoaded, setVehiclesLoaded] = useState(false);
    const navigate = useNavigate();

    //fetch all vehicles from backend on component mount
    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get("http://localhost:3000/api/products", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => {
                console.log(res.data);
                setVehicles(res.data);
                setVehiclesLoaded(true);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    // Function to handle vehicle deletion
    const handleDelete = (vehicleKey) => {
        if (window.confirm("Are you sure you want to delete this vehicle?")) {
            const token = localStorage.getItem("token");

            axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/products/${vehicleKey}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then((res) => {
                    console.log(res.data);

                    setVehicles(prevVehicles => prevVehicles.filter((vehicle) => vehicle.key !== vehicleKey));
                })
                .catch((err) => {
                    console.error("Failed to delete vehicle:", err);
                    alert("Failed to delete vehicle. Please try again.");
                });
        }
    };



    return (
        <div className="w-full h-[700px] bg-gradient-to-br from-sky-100 via-white to-blue-100 p-6 flex flex-col">
            {!vehiclesLoaded && (
                <div className="flex justify-center items-center py-12">
                    <div className="border-8 border-blue-200 border-t-blue-500 rounded-full w-[80px] h-[80px] animate-spin"></div>
                </div>
            )}

            {vehiclesLoaded && (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="px-5 py-3 text-left">Vehicle ID</th>
                                <th className="px-5 py-3 text-left">Make</th>
                                <th className="px-5 py-3 text-left">Model</th>
                                <th className="px-5 py-3 text-left">Year</th>
                                <th className="px-5 py-3 text-left">Transmission</th>
                                <th className="px-5 py-3 text-left">seats</th>
                                <th className="px-5 py-3 text-left">Rate/Day (LKR)</th>
                                <th className="px-5 py-3 text-left">Availability</th>
                                <th className="px-5 py-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vehicles.map((vehicle, index) => (
                                <tr key={vehicle.key} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition`}>
                                    <td className="px-5 py-3">{vehicle.key}</td>
                                    <td className="px-5 py-3">{vehicle.make}</td>
                                    <td className="px-5 py-3">{vehicle.model}</td>
                                    <td className="px-5 py-3">{vehicle.year}</td>
                                    <td className="px-5 py-3">{vehicle.transmission}</td>
                                    <td className="px-5 py-3">{vehicle.seats}</td>
                                    <td className="px-5 py-3 font-medium text-blue-700">
                                        LKR {typeof vehicle.price === "number" ? vehicle.dailyRate.toFixed(2) : vehicle.dailyRate}
                                    </td>

                                    <td className="px-5 py-3 font-medium">
                                        {vehicle.isAvailable ? (
                                            <span className="text-green-500 font-semibold">Available</span>
                                        ) : (
                                            <span className="text-red-500 font-semibold">Unavailable</span>
                                        )}
                                    </td>

                                    <td className="px-5 py-3 text-center">
                                        <div className="flex justify-center gap-4">
                                            <button
                                                onClick={() => navigate(`/admin/vehicles/edit`, { state: vehicle })}
                                                title="Edit"
                                                className="text-blue-600 hover:text-blue-800 text-xl"
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(vehicle.key)}
                                                title="Delete"
                                                className="text-red-600 hover:text-red-800 text-xl"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <Link to="/admin/vehicles/add" >
                <FaPlusCircle
                    className="text-green-600 hover:text-green-700 hover:scale-110 transition-all duration-200 text-[50px] fixed bottom-6 left-6 z-10 cursor-pointer"
                />
            </Link>
        </div>
    );
}
