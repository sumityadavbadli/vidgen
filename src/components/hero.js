"use client";

export default function Hero() {
    return (
        <div className="relative w-full h-[80vh] text-white">

            <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-24 left-12 max-w-xl">
                <h1 className="text-5xl font-bold mb-4">Movie 0</h1>

                <div className="flex gap-4">
                    <button className="bg-white text-black px-6 py-2 rounded">
                        ▶ Play
                    </button>

                    <button className="bg-gray-600/70 px-6 py-2 rounded">
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
}