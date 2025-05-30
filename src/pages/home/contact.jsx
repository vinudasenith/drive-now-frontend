export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Contact Us
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We're here to assist you with all your vehicle rental needs. Reach out to our experienced team for personalized service and support.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                            <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="example@email.com"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+94 XXX XXX XXX"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-none">
                                    <option>General Inquiry</option>
                                    <option>Vehicle Rental</option>
                                    <option>Pricing Information</option>
                                    <option>Technical Support</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea
                                    placeholder="Tell us how we can help you..."
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-none resize-none"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Our dedicated team is ready to assist you with vehicle rentals, bookings, and any questions you may have about our services.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                        <p className="text-gray-600">+94 (0) (800) 4545</p>
                                        <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600">rentals.uptown@gmail.com</p>
                                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                                        <p className="text-gray-600">123 Main Street, Colombo, Sri Lanka</p>
                                        <p className="text-sm text-gray-500">Visit our showroom</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                                        <p className="text-gray-600">Monday - Sunday</p>
                                        <p className="text-sm text-gray-500">7:00 AM - 7:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Information Card */}
                        <div className="bg-blue-50 rounded-2xl border border-blue-100 p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h3>
                            <p className="text-gray-600 mb-6">
                                For urgent matters or roadside assistance, our emergency hotline is available 24/7.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="tel:+94800454524"
                                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold rounded-lg transition-colors duration-200"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    Emergency Call
                                </a>
                                <a
                                    href="/booking"
                                    className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 text-sm font-semibold rounded-lg transition-colors duration-200"
                                >
                                    Quick Booking
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">What documents do I need to rent a car?</h3>
                            <p className="text-gray-600 text-sm">You'll need a valid driver's license, national ID or passport, and a credit card for the security deposit.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Can I modify or cancel my reservation?</h3>
                            <p className="text-gray-600 text-sm">Yes, you can modify or cancel your reservation up to 24 hours before pickup without any charges.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Do you offer delivery services?</h3>
                            <p className="text-gray-600 text-sm">Yes, we provide vehicle delivery and pickup services within Colombo area for an additional fee.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">What's included in the rental price?</h3>
                            <p className="text-gray-600 text-sm">Basic insurance, unlimited mileage within Sri Lanka, and 24/7 roadside assistance are included.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
