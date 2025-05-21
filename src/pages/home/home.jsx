export default function Home() {
    return (
        <div className="w-full min-h-screen bg-gray-100 text-gray-800">

            <div className="relative bg-cover bg-center h-[80vh]" style={{ backgroundImage: "url('/images/car-hero.jpg')" }}>
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Drive Your Dream Car Today
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 mb-6 max-w-2xl">
                        Affordable. Reliable. Premium Car Rentals at Your Fingertips.
                    </p>
                    <a
                        href="/gallery"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 text-lg rounded shadow-md transition duration-200"
                    >
                        View Our Fleet
                    </a>
                </div>
            </div>

            <section className="py-16 px-4 md:px-20 bg-white">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2 text-yellow-500">Wide Selection</h3>
                        <p>From economy to luxury – choose the perfect vehicle for any trip or occasion.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2 text-yellow-500">24/7 Support</h3>
                        <p>Our friendly support team is always ready to assist you with your rental needs.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2 text-yellow-500">Affordable Rates</h3>
                        <p>Get premium vehicles at competitive prices with flexible rental plans.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
