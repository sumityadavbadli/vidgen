'use client'

export default function HeroBanner({ item }) {

    if (!item) return null;

    return (
        <div className="relative h-[70vh] md:h-[85vh] w-full bg-[#141414] overflow-hidden">
            {/* Background Image with optimized loading */}
            <img
                src={item.backdrop}
                className="w-full h-full object-cover brightness-[80%]"
                alt={item.title}
                loading="eager"
            />

            {/* Cinematic Gradient Overlays - Pointer events disabled to allow clicks through */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Interactive Content Layer */}
            <div className="absolute bottom-[15%] left-6 md:left-12 max-w-2xl z-20">
                <h1 className="text-4xl md:text-6xl font-black mb-4 text-white drop-shadow-2xl tracking-tight uppercase italic">
                    {item.title}
                </h1>

                <p className="text-white text-base md:text-lg mb-6 drop-shadow-md font-medium line-clamp-3 max-w-lg">
                    {item.description || "Stream the latest content now on Vidgen. Experience high-quality playback and immersive storytelling."}
                </p>

                <div className="flex items-center gap-3">
                    <button
                        className="flex items-center justify-center gap-2 bg-white text-black px-8 py-2.5 rounded-md font-bold text-lg hover:bg-white/80 transition-all duration-200 active:scale-95 cursor-pointer shadow-lg"
                    >
                        <span className="text-2xl">▶</span> Play
                    </button>

                    <button
                        className="flex items-center justify-center gap-2 bg-zinc-500/50 text-white px-8 py-2.5 rounded-md font-bold text-lg hover:bg-zinc-500/30 transition-all duration-200 backdrop-blur-md border border-white/10"
                    >
                        <span className="flex items-center justify-center border-2 border-white rounded-full w-6 h-6 text-sm">i</span>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
}
