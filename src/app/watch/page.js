import Hero from "@/components/hero";
import Row from "@/components/row";
import {CONTENT_TYPES} from "@/lib/constants";

const movies = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    title: `Movie ${i}`,
    thumbnail: "https://picsum.photos/300/200",
    preview: "https://www.w3schools.com/html/mov_bbb.mp4",
}));

export default function WatchPage() {
    return (
        <div className="bg-black min-h-screen">
            <Hero />

            <Row title="Trending Now" type={CONTENT_TYPES.MOVIE}  movies={movies} />
            <Row title="Continue Watching" type={CONTENT_TYPES.MOVIE}  movies={movies} />
        </div>
    );
}