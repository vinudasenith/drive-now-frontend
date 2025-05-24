export default function Home() {
    return (
        <div className="w-full min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
            {/* Hero Section */}
            <div className="relative bg-cover bg-center h-[90vh]" style={{ backgroundImage: "url('/images/car-hero.jpg')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex flex-col items-center justify-center text-center px-4">
                    <div className="max-w-4xl space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            Premium Car Rentals <span className="text-yellow-400">Redefined</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 opacity-90 leading-relaxed">
                            Experience unparalleled service with our curated fleet of luxury and economy vehicles, available at competitive rates.
                        </p>
                        <div className="pt-4">
                            <a
                                href="/gallery"
                                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Explore Our Fleet
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Service</h2>
                        <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                            <div className="text-yellow-500 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Diverse Fleet</h3>
                            <p className="text-gray-600 leading-relaxed">
                                From compact cars to premium SUVs, we offer vehicles for every need and occasion, all meticulously maintained.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                            <div className="text-yellow-500 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">24/7 Support</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our dedicated team is available around the clock to ensure your rental experience is seamless.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                            <div className="text-yellow-500 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Competitive Pricing</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Transparent pricing with no hidden fees and flexible rental options to suit your budget.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Next Adventure?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Book your perfect vehicle today and experience the difference with our premium service.
                    </p>
                    <a
                        href="/booking"
                        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 text-lg font-semibold rounded-md shadow-md transition duration-300"
                    >
                        Reserve Now
                    </a>
                </div>
            </section>
        </div>
    );
}