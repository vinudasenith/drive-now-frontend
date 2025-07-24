import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import mediaUpload from "../../utils/mediaUpload";
export default function UpdateVehiclePage() {
    const location = useLocation();
    console.log(location);

    const [vehicleKey, setVehicleKey] = useState(location.state.key);
    const [vehicleModel, setVehicleModel] = useState(location.state.model);
    const [vehicleMake, setVehicleMake] = useState(location.state.make);
    const [vehicleYear, setVehicleYear] = useState(location.state.year);
    const [vehicleDailyRate, setVehicleDailyRate] = useState(location.state.dailyRate);
    const [vehicleImage, setVehicleImage] = useState(location.state.image);
    const [vehicleAvailable, setVehicleAvailable] = useState(true);
    const [vehicleTransmission, setVehicleTransmission] = useState(location.state.transmission);
    const [vehicleFuelType, setVehicleFuelType] = useState(location.state.fuelType);
    const [vehicleSeats, setVehicleSeats] = useState(location.state.seats);
    const [vehicleCarType, setVehicleCarType] = useState(location.state.carType);
    const navigate = useNavigate();


    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-8">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-600 p-4">
                    <h1 className="text-2xl font-bold text-white">Update Vehicle Details</h1>
                </div>

                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Vehicle Key</label>
                            <input
                                disabled
                                type="text"
                                value={vehicleKey}
                                onChange={(e) => setVehicleKey(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md bg-gray-100"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Vehicle Model</label>
                            <input
                                type="text"
                                placeholder="Enter model"
                                value={vehicleModel}
                                onChange={(e) => setVehicleModel(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Vehicle Make</label>
                            <input
                                type="text"
                                placeholder="Enter make"
                                value={vehicleMake}
                                onChange={(e) => setVehicleMake(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Daily Rate ($)</label>
                            <input
                                type="number"
                                placeholder="Enter price"
                                value={vehicleDailyRate}
                                onChange={(e) => setVehicleDailyRate(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Transmission</label>
                            <select
                                value={vehicleTransmission}
                                onChange={(e) => setVehicleTransmission(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="Auto">Auto</option>
                                <option value="Manual">Manual</option>
                                <option value="Triptonic">Triptonic</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Availability</label>
                            <select
                                value={vehicleAvailable}
                                onChange={(e) => setVehicleAvailable(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="Auto">Available</option>
                                <option value="Manual">Unavailable</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Fuel Type</label>
                            <select
                                value={vehicleFuelType}
                                onChange={(e) => setVehicleFuelType(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Seats</label>
                            <input
                                type="text"
                                placeholder="Enter number of seats"
                                value={vehicleSeats}
                                onChange={(e) => setVehicleSeats(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Car Type</label>
                            <input
                                type="text"
                                placeholder="Enter car type"
                                value={vehicleCarType}
                                onChange={(e) => setVehicleCarType(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Year</label>
                            <input
                                type="text"
                                placeholder="Enter year"
                                value={vehicleYear}
                                onChange={(e) => setVehicleYear(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Vehicle Images</label>
                        <input
                            type="file"
                            multiple
                            onChange={(e) => setVehicleImage(e.target.files)}
                            className="w-full p-2 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                    </div>

                    <div className="flex justify-end space-x-4 pt-4">
                        <button
                            onClick={() => { navigate("/admin/vehicles/") }}
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleUpdateItem}
                            className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Update Vehicle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}