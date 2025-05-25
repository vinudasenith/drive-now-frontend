import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import mediaUpload from "../../utils/mediaUpload";


export default function AddVehiclePage() {
    const [vehicleKey, setVehicleKey] = useState("");
    const [vehicleModel, setVehicleModel] = useState("");
    const [vehicleMake, setVehicleMake] = useState("");
    const [vehicleYear, setVehicleYear] = useState("");
    const [vehicleDescription, setVehicleDescription] = useState("");
    const [vehicleDailyRate, setVehicleDailyRate] = useState(0);
    const [vehicleImage, setVehicleImage] = useState("");
    const [vehicleAvailable, setVehicleAvailable] = useState(true);
    const [vehicleTransmission, setVehicleTransmission] = useState("Auto");
    const [vehicleFuelType, setVehicleFuelType] = useState("Petrol");
    const [vehicleSeats, setVehicleSeats] = useState("");
    const [vehicleCarType, setVehicleCarType] = useState("");
    const navigate = useNavigate();

    async function handleAddVehicle() {
        const promises = [];

        for (let i = 0; i < vehicleImage.length; i++) {
            console.log(vehicleImage[i]);
            const promise = mediaUpload(vehicleImage[i]);
            promises.push(promise);
        }

        console.log(vehicleKey, vehicleModel, vehicleMake, vehicleYear, vehicleDescription, vehicleDailyRate, vehicleImage, vehicleTransmission, vehicleFuelType, vehicleSeats, vehicleCarType);

        const token = localStorage.getItem('token');

        if (token) {
            try {
                const imageUrls = await Promise.all(promises);
                console.log("Uploaded images:", imageUrls);
                const result = await axios.post("http://localhost:3000/api/products", {
                    key: vehicleKey,
                    model: vehicleModel,
                    make: vehicleMake,
                    year: vehicleYear,
                    dailyRate: vehicleDailyRate,
                    image: imageUrls,
                    isAvailable: vehicleAvailable,
                    transmission: vehicleTransmission,
                    fuelType: vehicleFuelType,
                    seats: vehicleSeats,
                    carType: vehicleCarType
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                toast.success(result.data.message);
                navigate('/admin/vehicles');

            } catch (error) {
                toast.error(error.response.data.error);
            }
        } else {
            toast.error("You are not authorized to add items");
        }
    }
    return (
        <div className="w-full h-[650px] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex items-center justify-center p-3">
            <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl p-10 rounded-2xl border border-white/20 shadow-2xl text-white">
                <h2 className="text-4xl font-bold mb-6 text-center text-yellow-300">Add Vehicle</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Vehicle Key"
                        value={vehicleKey}
                        onChange={(e) => setVehicleKey(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Model"
                        value={vehicleModel}
                        onChange={(e) => setVehicleModel(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Make"
                        value={vehicleMake}
                        onChange={(e) => setVehicleMake(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        placeholder="Year"
                        value={vehicleYear}
                        onChange={(e) => setVehicleYear(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        value={vehicleTransmission}
                        onChange={(e) => setVehicleTransmission(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="Auto">Auto</option>
                        <option value="Manual">Manual</option>
                        <option value="Triptonic">Triptonic</option>
                    </select>

                    <select
                        value={vehicleFuelType}
                        onChange={(e) => setVehicleFuelType(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="Electric">Electric</option>

                    </select>
                    <select
                        value={vehicleAvailable}
                        onChange={(e) => setVehicleAvailable(e.target.value === "true")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="true">Available</option>
                        <option value="false">Not Available</option>
                    </select>
                    <input
                        type="number"
                        placeholder="Seats"
                        value={vehicleSeats}
                        onChange={(e) => setVehicleSeats(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Car Type"
                        value={vehicleCarType}
                        onChange={(e) => setVehicleCarType(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={vehicleDailyRate}
                        onChange={(e) => setVehicleDailyRate(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => setVehicleImage(Array.from(e.target.files))}
                        className="input-style text-white file:bg-yellow-400 file:text-black file:rounded file:px-4 file:py-1"
                    />
                </div>



                <button onClick={handleAddVehicle} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-5 mx-2">
                    Add
                </button>
                <button onClick={() => { navigate("/admin/vehicles/") }} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                    Cancel
                </button>
            </div>
        </div>
    )

}





