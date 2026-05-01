import Hero from "@/components/hero";
import Row from "@/components/row";
import {CONTENT_TYPES} from "@/lib/constants";

const popularNow = [
    { id: 1, title: "Cyber City", thumbnail: "https://picsum.photos/id/1011/400/250", preview: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, title: "Dark Streets", thumbnail: "https://picsum.photos/id/1015/400/250", preview: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 3, title: "Ocean Depths", thumbnail: "https://picsum.photos/id/1016/400/250", preview: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 4, title: "Desert Storm", thumbnail: "https://picsum.photos/id/1002/400/250", preview: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 5, title: "Space Journey", thumbnail: "https://picsum.photos/id/1024/400/250", preview: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 6, title: "City Lights", thumbnail: "https://picsum.photos/id/1031/400/250", preview: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 7, title: "Frozen Peak", thumbnail: "https://picsum.photos/id/1032/400/250", preview: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 8, title: "Night Drive", thumbnail: "https://picsum.photos/id/1043/400/250", preview: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 9, title: "Jungle Escape", thumbnail: "https://picsum.photos/id/1040/400/250", preview: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 10, title: "Skyline Rush", thumbnail: "https://picsum.photos/id/1050/400/250", preview: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 11, title: "Hidden World", thumbnail: "https://picsum.photos/id/1062/400/250", preview: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 12, title: "Last Horizon", thumbnail: "https://picsum.photos/id/1074/400/250", preview: "https://www.w3schools.com/html/mov_bbb.mp4" }
];

const topTrending = [
    {
        id: 1,
        title: "Midnight Protocol",
        thumbnail: "https://picsum.photos/id/1018/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 2,
        title: "Neon Outlaws",
        thumbnail: "https://picsum.photos/id/1027/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 3,
        title: "The Last Transmission",
        thumbnail: "https://picsum.photos/id/1037/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 4,
        title: "Echoes of Tomorrow",
        thumbnail: "https://picsum.photos/id/1041/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 5,
        title: "Black Horizon",
        thumbnail: "https://picsum.photos/id/1049/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 6,
        title: "Crimson Heist",
        thumbnail: "https://picsum.photos/id/1057/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 7,
        title: "Silent Rebellion",
        thumbnail: "https://picsum.photos/id/1069/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 8,
        title: "The Glass City",
        thumbnail: "https://picsum.photos/id/1076/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 9,
        title: "Runaway Signal",
        thumbnail: "https://picsum.photos/id/1084/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 10,
        title: "Ashes of the North",
        thumbnail: "https://picsum.photos/id/1080/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 11,
        title: "Zero Hour Escape",
        thumbnail: "https://picsum.photos/id/1011/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 12,
        title: "Phantom Frequency",
        thumbnail: "https://picsum.photos/id/1021/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
]

const thrillerMovies = [
    {
        id: 101,
        title: "Shadow Evidence",
        thumbnail: "https://picsum.photos/id/1019/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 102,
        title: "The Vanishing Code",
        thumbnail: "https://picsum.photos/id/1020/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 103,
        title: "Dead Silence Protocol",
        thumbnail: "https://picsum.photos/id/1022/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 104,
        title: "Fractured Truth",
        thumbnail: "https://picsum.photos/id/1025/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 105,
        title: "The Hidden Witness",
        thumbnail: "https://picsum.photos/id/1033/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 106,
        title: "Dark Signal",
        thumbnail: "https://picsum.photos/id/1035/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 107,
        title: "Nightfall Chase",
        thumbnail: "https://picsum.photos/id/1038/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 108,
        title: "Locked Room 17",
        thumbnail: "https://picsum.photos/id/1042/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 109,
        title: "The Final Trace",
        thumbnail: "https://picsum.photos/id/1047/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 110,
        title: "Silent Pursuit",
        thumbnail: "https://picsum.photos/id/1053/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 111,
        title: "Echo Chamber",
        thumbnail: "https://picsum.photos/id/1058/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 112,
        title: "The Last Alibi",
        thumbnail: "https://picsum.photos/id/1063/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
]

const romanceMovies = [
    {
        id: 201,
        title: "Before We Drift",
        thumbnail: "https://picsum.photos/id/1067/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 202,
        title: "Letters to You",
        thumbnail: "https://picsum.photos/id/1070/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 203,
        title: "A Summer Promise",
        thumbnail: "https://picsum.photos/id/1071/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 204,
        title: "Falling in Silence",
        thumbnail: "https://picsum.photos/id/1073/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 205,
        title: "The Space Between Us",
        thumbnail: "https://picsum.photos/id/1077/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 206,
        title: "When We Met Again",
        thumbnail: "https://picsum.photos/id/1081/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 207,
        title: "Endless Evenings",
        thumbnail: "https://picsum.photos/id/1082/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 208,
        title: "You, Me & the City",
        thumbnail: "https://picsum.photos/id/1083/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 209,
        title: "A Thousand Goodbyes",
        thumbnail: "https://picsum.photos/id/1085/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 210,
        title: "Chasing Sunsets",
        thumbnail: "https://picsum.photos/id/1089/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 211,
        title: "Love, Unwritten",
        thumbnail: "https://picsum.photos/id/109/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 212,
        title: "Moments Like These",
        thumbnail: "https://picsum.photos/id/110/400/250",
        preview: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
]

const heroItem = {
    id: 101,
    title: "Watch",
    type: CONTENT_TYPES.MOVIE,
    thumbnail: 'https://plus.unsplash.com/premium_vector-1727160780184-feff1ff6a68f?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    preview: 'https://plus.unsplash.com/premium_vector-1730641497009-0e3a43a0952e?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

export default function WatchPage() {
    return (
        <div className="bg-black min-h-screen">
            <Hero item={heroItem} />

            <Row title="Popular Now" type={CONTENT_TYPES.MOVIE}  movies={popularNow} />
            <Row title="Top Trending" type={CONTENT_TYPES.MOVIE}  movies={topTrending} />
            <Row title="Thrillers" type={CONTENT_TYPES.MOVIE}  movies={thrillerMovies} />
            <Row title="Romance" type={CONTENT_TYPES.MOVIE}  movies={romanceMovies} />
        </div>
    );
}