import { useEffect, useState } from "react";
import { formatDate, loadCart } from "../../utils/cart";
import BookingItem from "../../components/bookingItem";
import axios from "axios";
import toast from "react-hot-toast";

export default function BookingPage() {
    //load cart
    const [cart, setCart] = useState(loadCart());

    //booking dates with default
    const [startingDate, setStartingDate] = useState(formatDate(new Date()));
    const [endingDate, setEndingDate] = useState(formatDate(new Date(Date.now() + 24 * 60 * 60 * 1000)));

    //total booking amount
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    //calculate days
    const daysBetween = Math.max((new Date(endingDate) - new Date(startingDate)) / (1000 * 60 * 60 * 24), 1);

    //relaod cart and calculate total
    function reloadCart() {
        setCart(loadCart());
        calculateTotal();
    }

    //calculate total booking amount
    async function calculateTotal() {
        setIsLoading(true);
        try {
            const currentCart = loadCart();


            if (!currentCart.orderedItems?.length) {
                setTotal(0);
                return;
            }

            const requestData = {
                orderedItems: currentCart.orderedItems,
                startingDate,
                endingDate,
                days: daysBetween
            };


            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/orders/quote`,
                requestData
            );


            if (response.data?.success) {
                if (response.data.total !== null && response.data.total !== undefined) {
                    setTotal(response.data.total);
                } else {

                    const calculatedTotal = calculateTotalManually(currentCart);
                    setTotal(calculatedTotal);
                    console.warn('Used client-side calculation due to null server response');
                }
            } else {
                throw new Error(response.data?.message || 'Invalid server response');
            }
        } catch (error) {
            console.error('Error calculating total:', error);
            const currentCart = loadCart();
            const calculatedTotal = calculateTotalManually(currentCart);
            setTotal(calculatedTotal);
            toast.error("Using estimated total - please verify");
        } finally {
            setIsLoading(false);
        }
    }

    //handle booking creation
    async function handleBookingCreation() {

        if (cart.orderedItems.length === 0) {
            toast.error("Please add vehicles to your booking");
            return;
        }


        if (new Date(endingDate) <= new Date(startingDate)) {
            toast.error("End date must be after start date");
            return;
        }

        setIsLoading(true);
        const toastId = toast.loading("Creating booking...");

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("Authentication required");
            }

            const bookingData = {
                ...cart,
                startingDate,
                endingDate,
                days: daysBetween,
                total
            };

            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/orders`,
                bookingData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );


            localStorage.removeItem("cart");
            toast.success("Booking created successfully!", { id: toastId });


            setCart({ orderedItems: [], vehicles: [] });


            return response.data;
        } catch (error) {
            console.error("Booking error:", error);

            const errorMessage = error.response?.data?.message ||
                error.message ||
                "Failed to create booking";

            toast.error(errorMessage, { id: toastId });


            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    //calculate total
    function calculateTotalManually(cart) {
        return cart.orderedItems.reduce((sum, item) => {
            const vehicle = cart.vehicles?.find(v => v.key === item.key);
            const dailyRate = vehicle?.dailyRate || 0;
            return sum + (dailyRate * item.qty * daysBetween);
        }, 0);
    }


    //recalculate total
    useEffect(() => {
        calculateTotal();
    }, [startingDate, endingDate, cart.orderedItems.length]);

    function handleBookingCreation() {
        if (cart.orderedItems.length === 0) {
            toast.error("Please add items to cart");
            return;
        }

        setIsLoading(true);
        const bookingData = {
            ...cart,
            startingDate,
            endingDate,
            days: daysBetween
        };

        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("Please login to continue");
            setIsLoading(false);
            return;
        }

        axios.post(`http://localhost:3000/api/orders`, bookingData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                localStorage.removeItem("cart");
                toast.success("Booking Created Successfully!");
                setCart(loadCart());
            })
            .catch((err) => {
                console.error(err);
                toast.error(err.response?.data?.message || "Failed to create booking");
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-12 max-w-6xl">

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                        Create Booking
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sticky top-8">
                            <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Booking Period
                            </h2>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-700">
                                        Starting Date
                                    </label>
                                    <input
                                        type="date"
                                        value={startingDate}
                                        min={formatDate(new Date())}
                                        onChange={(e) => setStartingDate(e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 hover:bg-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-700">
                                        Ending Date
                                    </label>
                                    <input
                                        type="date"
                                        value={endingDate}
                                        min={startingDate}
                                        onChange={(e) => setEndingDate(e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 hover:bg-white"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-700 font-medium">Duration:</span>
                                    <span className="text-2xl font-bold text-blue-600">{daysBetween} days</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-8">

                        <div>
                            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                Selected Vehicles
                            </h2>

                            <div className="space-y-4">
                                {cart.orderedItems.length > 0 ? (
                                    cart.orderedItems.map((item) => (
                                        <div key={item.key} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                            <BookingItem
                                                vehicleKey={item.key}
                                                qty={item.qty}
                                                refresh={reloadCart}
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-12 text-center">
                                        <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                        <h3 className="text-xl font-semibold text-slate-600 mb-2">No Vehicles Selected</h3>
                                        <p className="text-slate-500">Please add vehicles to your booking to continue.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Booking Summary */}
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
                            <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16a2 2 0 002 2z" />
                                </svg>
                                Booking Summary
                            </h3>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                                    <span className="text-slate-600">Total Amount:</span>
                                    <div className="text-right">
                                        {isLoading ? (
                                            <div className="flex items-center space-x-2">
                                                <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                                                <span className="text-slate-500">Calculating...</span>
                                            </div>
                                        ) : (
                                            <div>
                                                <span className="text-2xl font-bold text-slate-800">
                                                    {total !== null ? `LKR ${total.toFixed(2)}` : 'Price unavailable'}
                                                </span>
                                                {total === null && (
                                                    <p className="text-red-500 text-sm mt-1">
                                                        Couldn't get price from server
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <button
                                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300
                                    ${isLoading || cart.orderedItems.length === 0
                                            ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl'
                                        }`}
                                    onClick={handleBookingCreation}
                                    disabled={isLoading || cart.orderedItems.length === 0}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center space-x-2">
                                            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                                            <span>Processing...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center space-x-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Create Booking</span>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}