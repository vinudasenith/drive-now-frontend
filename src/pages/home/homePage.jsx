import Header from "../../components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Gallery from "./gallery";
import Contact from "./contact";
import Vehicles from "./vehicles";
import Error from "./error";
import VehicleOverview from "./vehicleOverview";
import BookingPage from "./bookingPage";
import ReviewPage from "./reviewPage";



export default function HomePage() {
    return (
        <>
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/vehicle" element={<Vehicles />} />
                    <Route path="/booking" element={<BookingPage />} />
                    <Route path="/reviews" element={<ReviewPage />} />

                    <Route path="/products/:key" element={<VehicleOverview />} />
                    <Route path="/*" element={<Error />} />









                </Routes>










            </div>













        </>
    )
}