"use client";

import Card from "./card";

export default function Row({ type, title, movies }) {
    return (
        <div className="mb-8 relative hover:z-50">
            <h2 className="text-lg mb-3 ml-12 text-white">{title}</h2>
            <div className="flex gap-3 overflow-x-scroll overflow-y-visible px-12 py-32 -my-32 scrollbar-hide">
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