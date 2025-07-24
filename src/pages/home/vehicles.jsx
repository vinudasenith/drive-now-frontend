import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ProductCard from "../../components/productCard";

export default function Vehicles() {
    const [state, setState] = useState("loading");
    const [vehicles, setVehicles] = useState([]);

    // useEffect(() => {
    //     if (state === "loading") {
    //         // Temporary mock data
    //         const mockData = [{
    //             key: "mock1",
    //             make: "Honda",
    //             model: "Civic",
    //             year: 2022,
    //             carType: "Sedan",
    //             dailyRate: 2500,
    //             isAvailable: true,
    //             seats: 5,
    //             image: "https://example.com/car.jpg",
    //             description: "Test vehicle"
    //         }];
    //         setVehicles(mockData);
    //         setState("success");
    //     }
    // }, []);

    useEffect(() => {
        if (state === "loading") {
            console.log("Making API call...");
            axios.get("http://localhost:3000/api/products")
                .then((res) => {
                    console.log("API Response Data:", res.data);
                    console.log("Data Type:", Array.isArray(res.data) ? "Array" : typeof res.data);
                    console.log("First Item:", res.data[0]);
                    setVehicles(res.data);
                    setState("success");
                })
                .catch((err) => {
                    console.error("API Error:", err);
                    toast.error(err?.response?.data?.error || "Something went wrong");
                    setState("error");
                });
        }
    }, []);

    return (
        <div className="w-full min-h-screen bg-white text-white flex flex-wrap justify-center gap-6 pt-[50px] px-4">
            {
                state === "loading" &&
                <div className="w-full h-[300px] flex justify-center items-center">
                    <div className="w-[50px] h-[50px] border-4 border-gray-600 border-t-green-500 rounded-full animate-spin"></div>
                </div>
            }
            {
                state === "success" && Array.isArray(vehicles) &&
                vehicles.map((vehicle) => {
                    return (
                        <ProductCard key={vehicle.key} vehicle={vehicle} />
                    );
                })
            }

        </div>

    );
}

