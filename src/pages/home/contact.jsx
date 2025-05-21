export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-100 px-4 py-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Contact Us</h1>
                <p className="text-center text-gray-600 mb-10">
                    Have questions or need assistance? Feel free to reach out to our team anytime.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                placeholder="example@email.com"
                                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                placeholder="Your message..."
                                rows="5"
                                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md transition"
                        >
                            Send Message
                        </button>
                    </form>


                    <div className="flex flex-col justify-center bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                        <p className="text-gray-600 mb-4">
                            We're here to help with your vehicle rental needs. Contact us directly or fill out the form.
                        </p>
                        <div className="space-y-4 text-gray-700">
                            <p><strong>Phone:</strong> +94 (0) (800) 4545</p>
                            <p><strong>Email:</strong> rentals.uptown@gmail.com</p>
                            <p><strong>Location:</strong> 123 Main Street, Colombo, Sri Lanka</p>
                            <p><strong>Working Hours:</strong> Mon–Sun, 7AM–7PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
