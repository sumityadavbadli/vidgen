"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CONTENT_TYPES } from "@/lib/constants";

export default function Card({ type, movie }) {
    const [hovered, setHovered] = useState(false);
    const router = useRouter();

    return (
        <div
            className="relative min-w-[220px] h-[130px] cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={`
                absolute top-0 left-0 w-full bg-zinc-900 rounded-md overflow-hidden 
                transition-all duration-300 ease-out shadow-xl
                ${hovered
                ? "scale-110 -top-[80px] -left-[15%] w-[130%] z-50 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
                : "scale-100 z-10"
            }
            `}>
                <div className="relative w-full aspect-video bg-zinc-800">
                    {!hovered ? (
                        <img
                            src={movie.thumbnail}
                            className="w-full h-full object-cover"
                            alt={movie.title}
                        />
                    ) : (
                        type === CONTENT_TYPES.MOVIE ? (
                            <video
                                src={movie.preview}
                                autoPlay
                                muted
                                loop
                                className="w-full h-[120px] object-cover"
                            />
                        ) : (
                            <div className="w-full h-[120px] overflow-hidden bg-white pointer-events-none relative">
                                <iframe
                                    src={`${movie.preview}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                                    className="w-full h-[220px] border-none absolute top-[-30px]"
                                    scrolling="no"
                                />
                                <div className="absolute inset-0 z-10"/>
                            </div>
                        )
                    )}
                </div>

                <div className={`
                    p-3 bg-zinc-900 transition-all duration-300
                    ${hovered ? "opacity-100 block" : "opacity-0 h-0 p-0 hidden"}
                `}>
                    <div className="flex gap-2 mb-2">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/stream/${type}/${movie.id}`);
                            }}
                            className="bg-white text-black w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
                        >
                            {type === CONTENT_TYPES.BOOK ? '📖' : '▶'}
                        </button>
                        <button className="border border-gray-500 w-7 h-7 rounded-full flex items-center justify-center text-white hover:border-white transition">+</button>
                        <button className="border border-gray-500 w-7 h-7 rounded-full flex items-center justify-center text-white hover:border-white transition text-[10px]">👍</button>
                    </div>

                    <p className="text-xs text-white font-bold truncate">
                        {movie.title}
                    </p>

                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-green-400 text-[10px] font-bold">98% Match</span>
                        <span className="border border-gray-600 px-1 text-[8px] text-gray-400 rounded-sm">HD</span>
                        <span className="text-[10px] text-gray-400">2024</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
