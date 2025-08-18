import { useEffect, useState } from "react";
import axios from "axios";
import { FaCheck, FaTrash, FaTimes } from "react-icons/fa";

export default function AdminReviewPage() {
    //state variables
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch reviews on component mount
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/api/reviews`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setReviews(res.data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, []);

    //delete a review by user email
    const handleDelete = async (email) => {
        if (!window.confirm("Are you sure you want to delete this review?")) return;

        try {
            const token = localStorage.getItem("token");
            await axios.delete(
                `${import.meta.env.VITE_BACKEND_URL}/api/reviews/${email}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setReviews(reviews.filter(review => review.email !== email));
        } catch (error) {
            console.error("Error deleting review:", error);
        }
    };

    //approve a review by user email
    const handleApprove = async (email) => {
        try {
            const token = localStorage.getItem("token");
            await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api/reviews/approve/${email}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setReviews(reviews.map(review =>
                review.email === email ? { ...review, isApproved: true } : review
            ));
        } catch (error) {
            console.error("Error approving review:", error);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Reviews</h1>

            {loading ? (
                <p className="text-center text-gray-500 italic">Loading...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-xl shadow-lg">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr className="text-sm font-semibold uppercase tracking-wide">
                                <th className="px-5 py-3 text-left rounded-tl-xl">User</th>
                                <th className="px-5 py-3 text-left">Rating</th>
                                <th className="px-5 py-3 text-left">Comment</th>
                                <th className="px-5 py-3 text-left">Status</th>
                                <th className="px-5 py-3 text-left">Date</th>
                                <th className="px-5 py-3 text-left rounded-tr-xl">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            {reviews.map((review) => (
                                <tr key={review.email} className="border-t border-gray-200">
                                    <td className="px-5 py-3">
                                        <div className="flex items-center">
                                            <img
                                                src={review.profilePicture}
                                                alt={review.name}
                                                className="w-10 h-10 rounded-full object-cover mr-3"
                                            />
                                            <div>
                                                <div className="font-medium">{review.name}</div>
                                                <div className="text-sm text-gray-600">{review.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-3">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                i < review.rating ?
                                                    <FaCheck key={i} className="mr-0.5" /> :
                                                    <FaTimes key={i} className="mr-0.5" />
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-5 py-3 max-w-xs">{review.comment}</td>
                                    <td className="px-5 py-3">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-semibold ${review.isApproved ?
                                                "bg-green-100 text-green-800" :
                                                "bg-yellow-100 text-yellow-800"
                                                }`}
                                        >
                                            {review.isApproved ? "Approved" : "Pending"}
                                        </span>
                                    </td>
                                    <td className="px-5 py-3">
                                        {new Date(review.date).toLocaleDateString()}
                                    </td>
                                    <td className="px-5 py-3">
                                        <div className="flex space-x-2">
                                            {!review.isApproved && (
                                                <button
                                                    onClick={() => handleApprove(review.email)}
                                                    className="p-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200"
                                                    title="Approve"
                                                >
                                                    <FaCheck />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => handleDelete(review.email)}
                                                className="p-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
                                                title="Delete"
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
        </div>
    );
}