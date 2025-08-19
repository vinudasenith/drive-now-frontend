import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export default function ReviewPage() {

    //state variables
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userReview, setUserReview] = useState({
        rating: 0,
        comment: ""
    });
    const [hasSubmitted, setHasSubmitted] = useState(false);

    // Fetch reviews on component mount
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/api/reviews`

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

    //handle rating change
    const handleRatingChange = (rating) => {
        setUserReview({ ...userReview, rating });
    };

    //submit review
    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        if (!token) {
            alert("❌ Please log in to submit a review.");
            return;
        }
        try {

            await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/reviews`,
                userReview,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setHasSubmitted(true);
            setUserReview({ rating: 0, comment: "" });

            const res = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/reviews`
            );
            setReviews(res.data);
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };

    //render stars
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-400" />);
            }
        }
        return stars;
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Customer Reviews</h1>

            {/* Review Form */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">Share Your Experience</h2>
                {hasSubmitted ? (
                    <div className="bg-green-100 text-green-700 p-4 rounded-md">
                        Thank you for your review! It's pending approval.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Your Rating</label>
                            <div className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => handleRatingChange(star)}
                                        className="text-2xl focus:outline-none"
                                    >
                                        {star <= userReview.rating ? (
                                            <FaStar className="text-yellow-400" />
                                        ) : (
                                            <FaRegStar className="text-yellow-400" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Your Review</label>
                            <textarea
                                value={userReview.comment}
                                onChange={(e) =>
                                    setUserReview({ ...userReview, comment: e.target.value })
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Submit Review
                        </button>
                    </form>
                )}
            </div>

            {/* Reviews List */}
            {loading ? (
                <p className="text-center text-gray-500 italic">Loading reviews...</p>
            ) : reviews.length === 0 ? (
                <p className="text-center text-gray-500">No reviews yet. Be the first to review!</p>
            ) : (
                <div className="space-y-6">
                    {reviews.map((review) => (
                        <div
                            key={review.email}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <div className="flex items-start mb-4">
                                <img
                                    src={review.profilePicture}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg">{review.name}</h3>
                                    <div className="flex items-center mt-1">
                                        <div className="flex mr-2">
                                            {renderStars(review.rating)}
                                        </div>
                                        <span className="text-gray-500 text-sm">
                                            {new Date(review.date).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}