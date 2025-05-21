export default function Gallery() {
    // Sample image paths (you can replace with actual car images)
    const cars = [
        "car1.jpg",
        "car2.jpg",
        "car3.jpg",
        "car4.jpg",
        "car5.jpg",
        "car6.jpg",
        "car7.jpg",
        "car8.jpg",
        "car9.jpg",
        "car10.jpg",
    ];

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Vehicle Gallery</h1>
                <p className="text-lg text-gray-600">
                    Explore our premium collection of well-maintained and high-performance vehicles available for rent.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {cars.map((src, index) => (
                    <div
                        key={index}
                        className="rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white"
                    >
                        <img
                            src={src}
                            alt={`Car ${index + 1}`}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
