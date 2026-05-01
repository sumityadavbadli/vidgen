"use client";

import { useState, useEffect, useRef } from "react";
import Card from "./card";

export default function Row({ type, title, movies }) {
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef(null);
    const containerRef = useRef(null);

    const handleScroll = () => {
        // 1. Immediately disable pointer events when scroll starts
        setIsScrolling(true);

        // 2. Clear previous timeout and wait 150ms after scroll stops to re-enable
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

        scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
        }, 150);
    };

    return (
        <div className="mb-12 relative hover:z-50 group">
            <h2 className="text-lg md:text-xl mb-3 ml-12 text-[#e5e5e5] font-semibold transition-colors duration-300 group-hover:text-white select-none">
                {title}
            </h2>

            <div
                ref={containerRef}
                onScroll={handleScroll}
                className={`
                    flex gap-3 overflow-x-scroll overflow-y-visible px-12 py-32 -my-32 scrollbar-hide
                    transition-opacity duration-300
                    ${isScrolling ? 'pointer-events-none' : 'pointer-events-auto'}
                `}
            >
                {movies.map((movie) => (
                    <Card
                        key={movie.id}
                        type={type}
                        movie={movie}
                    />
                ))}
            </div>
        </div>
    );
}
