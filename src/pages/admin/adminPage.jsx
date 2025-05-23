import { ImParagraphJustify } from "react-icons/im";
import { BsFillSaveFill } from "react-icons/bs";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AdminOrdersPage from "./adminOrdersPage";
import AdminVehiclePage from "./adminVehiclesPage";
import AdminUsersPage from "./adminUsersPage";
import AddVehiclePage from "./addVehiclePage";

export default function AdminPage() {
    return (
        <div className="w-full h-screen flex">

            <aside className="w-[240px] h-screen overflow-y-auto bg-gray-900 text-white p-6 shadow-lg">


                <h2 className="text-2xl font-bold mb-8 text-yellow-400">Admin Panel</h2>

                <nav className="flex flex-col gap-5">
                    <Link
                        to="/admin"
                        className="flex items-center gap-3 text-lg font-medium hover:bg-gray-800 px-4 py-2 rounded transition"
                    >
                        <ImParagraphJustify className="text-yellow-400" />
                        Dashboard
                    </Link>

                    <Link
                        to="/admin/orders"
                        className="flex items-center gap-3 text-lg font-medium hover:bg-gray-800 px-4 py-2 rounded transition"
                    >
                        <BsFillSaveFill className="text-yellow-400" />
                        Orders
                    </Link>

                    <Link
                        to="/admin/vehicles"
                        className="flex items-center gap-3 text-lg font-medium hover:bg-gray-800 px-4 py-2 rounded transition"
                    >
                        <RiAlignItemBottomLine className="text-yellow-400" />
                        Vehicles
                    </Link>

                    <Link
                        to="/admin/users"
                        className="flex items-center gap-3 text-lg font-medium hover:bg-gray-800 px-4 py-2 rounded transition"
                    >
                        <FaUser className="text-yellow-400" />
                        Users
                    </Link>
                </nav>
            </aside>


            <main className="flex-1 bg-gray-100 p-6">
                <h1 className="text-3xl font-semibold text-gray-800">Welcome to the Admin Dashboard</h1>

                <Routes path="/*">
                    <Route path="/orders" element={<AdminOrdersPage />} />
                    <Route path="/vehicles" element={<AdminVehiclePage />} />
                    <Route path="/users" element={<AdminUsersPage />} />
                    <Route path="/vehicles/add" element={<AddVehiclePage />} />





                </Routes>

            </main>
        </div>
    );
}
