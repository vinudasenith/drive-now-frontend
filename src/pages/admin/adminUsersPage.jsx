import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminUsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState({});

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/all`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUsers(res.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    async function handleBlockUser(email) {
        setUpdating(prev => ({ ...prev, [email]: true }));
        const token = localStorage.getItem('token');

        try {
            await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/users/block/${email}`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });

            const refreshed = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/all`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUsers(refreshed.data);

        } catch (err) {
            console.log("Block user error:", err);
            alert(`Failed to update user status: ${err.response?.data?.error || err.message}`);
        } finally {
            setUpdating(prev => ({ ...prev, [email]: false }));
        }
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Users</h1>
            {loading ? (
                <p className="text-center text-gray-500 italic">Loading users...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-xl shadow-lg">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr className="text-sm font-semibold uppercase tracking-wide">
                                <th className="px-5 py-3 text-left rounded-tl-xl">Profile</th>
                                <th className="px-5 py-3 text-left">Name</th>
                                <th className="px-5 py-3 text-left">Email</th>
                                <th className="px-5 py-3 text-left">Role</th>
                                <th className="px-5 py-3 text-left">Phone</th>
                                <th className="px-5 py-3 text-left">Address</th>
                                <th className="px-5 py-3 text-left rounded-tr-xl">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            {users.map((user) => (
                                <tr
                                    key={user._id}
                                    className="border-t border-gray-200 hover:bg-yellow-100 transition duration-150"
                                >
                                    <td className="px-5 py-3">
                                        <img
                                            src={"https://static.vecteezy.com/system/resources/previews/005/129/844/original/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"}
                                            alt="Profile"
                                            className="w-10 h-10 rounded-full shadow-sm border border-gray-300"
                                        />
                                    </td>
                                    <td className="px-5 py-3 font-medium">
                                        {user.firstName} {user.lastName}
                                    </td>
                                    <td className="px-5 py-3">{user.email}</td>
                                    <td className="px-5 py-3 capitalize">{user.role}</td>
                                    <td className="px-5 py-3">
                                        {user.phone || user.phoneNumber}
                                    </td>
                                    <td className="px-5 py-3">{user.address}</td>
                                    <td
                                        onClick={() => !updating[user.email] && handleBlockUser(user.email)}
                                        className={`px-5 py-3 font-semibold cursor-pointer ${user.isBlocked
                                            ? "text-red-600 hover:text-red-800"
                                            : "text-green-600 hover:text-green-800"
                                            } transition-colors`}
                                    >
                                        {updating[user.email] ? (
                                            <span className="italic">Updating...</span>
                                        ) : user.isBlocked ? (
                                            <span className="hover:underline">BLOCKED</span>
                                        ) : (
                                            <span className="hover:underline">ACTIVE</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}