"use client";

import {useRouter} from "next/navigation";

export default function Hero({item}) {
    const router = useRouter();

    const handleBannerClick = (e) => {
        console.log("boom");
        e.preventDefault();
        e.stopPropagation();

        const contentType = item.type || 'video';
        router.push(`/stream/${contentType}/${item.id}`);
    };
    return (
        <div className="relative w-full h-[80vh] text-white">

            <img
                src={item.thumbnail}
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-24 left-12 max-w-xl">
                <h1 className="text-5xl font-bold mb-4">{item.title}</h1>

                <div className="flex gap-4">
                    <button
                        onClick={handleBannerClick}
                        className="bg-white text-black px-6 py-2 rounded">
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