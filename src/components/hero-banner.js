'use client'

export default function HeroBanner({ item }) {
    return (
        <div className="relative h-[70vh] w-full">
            <img
                src={item.backdrop}
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-20 left-10 max-w-xl">
                <h1 className="text-4xl font-bold mb-4">{item.title}</h1>

                <div className="flex gap-3">
                    <button className="bg-white text-black px-6 py-2 rounded font-semibold">
                        ▶ Play
                    </button>

                    <button className="bg-white/20 px-6 py-2 rounded">
                        ℹ More Info
                    </button>
                </div>
            </div>
        </div>
    )
}