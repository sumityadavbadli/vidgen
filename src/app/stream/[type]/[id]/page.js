'use client'

// Add this to your page or layout
import 'vidstack/styles/base.css';
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { MediaPlayer, MediaOutlet } from '@vidstack/react'

export const CONTENT_TYPES = {
    MOVIE: 'movie',
    BOOK: 'book',
}

export default function StreamPage() {
    const { type, id } = useParams()
    const [data, setData] = useState(null)


    useEffect(() => {


        if (type === CONTENT_TYPES.MOVIE) {
            setData({
                id: id,
                title: `Movie ${id}`,
                thumbnail: "https://picsum.photos/300/200",
                preview: "https://www.w3schools.com/html/mov_bbb.mp4",
            })
        } else {
            setData({
                id: id,
                title: `${type} ${id}`,
                thumbnail: 'https://picsum.photos/300/200',
                preview: '/test-preview.pdf'
            })
        }
    }, [id])

    if (!data) return null

    return (
        <div className="bg-black text-white min-h-screen">

            {/* 🔲 MAIN GRID (YOUTUBE LAYOUT) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">

                {/* 🎥 LEFT SIDE */}
                <div className="lg:col-span-2 space-y-4">

                    {/* PLAYER */}
                    <div className="w-full bg-black rounded-lg overflow-hidden">
                        {type === CONTENT_TYPES.MOVIE ? (
                            <div className="relative w-full max-h-[80vh] bg-black flex justify-center items-center">
                                <div className="w-full max-w-[1400px] aspect-video">
                                    <MediaPlayer
                                        src={data.preview}
                                        controls
                                        autoPlay
                                        aspectRatio="16/9"
                                        className="w-full h-full"
                                    >
                                        <MediaOutlet className="w-full h-full object-contain"/>
                                    </MediaPlayer>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                src={data.preview}
                                className="w-full h-[80vh] bg-white"
                            />
                        )}
                    </div>

                    {/* TITLE */}
                    <h1 className="text-xl font-semibold">
                        {data.title}
                    </h1>

                    {/* ACTION BAR (YOUTUBE STYLE) */}
                    <div className="flex items-center justify-between border-b border-gray-800 pb-4">

                        {/* LEFT */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-700" />
                            <div>
                                <p className="font-medium">Channel Name</p>
                                <p className="text-sm text-gray-400">1.2M subscribers</p>
                            </div>

                            <button className="bg-white text-black px-4 py-1 rounded-full font-medium">
                                Subscribe
                            </button>
                        </div>

                        {/* RIGHT ACTIONS */}
                        <div className="flex gap-3 text-sm">
                            <button className="bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700">
                                👍 Like
                            </button>
                            <button className="bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700">
                                Share
                            </button>
                            <button className="bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700">
                                Download
                            </button>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="bg-zinc-900 p-4 rounded-lg text-sm text-gray-300">
                        This is a sample description for {data.title}.
                        You can replace this with API data.
                    </div>
                </div>

                {/* 📺 RIGHT SIDEBAR (RECOMMENDED) */}
                <div className="space-y-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div
                            key={i}
                            className="flex gap-3 cursor-pointer hover:bg-zinc-900 p-2 rounded-lg"
                        >
                            <img
                                src="https://picsum.photos/200/120"
                                className="w-40 h-24 object-cover rounded"
                            />

                            <div className="text-sm">
                                <p className="font-medium line-clamp-2">
                                    Recommended {type === CONTENT_TYPES.MOVIE ? 'Video' : 'Book'} {i}
                                </p>
                                <p className="text-gray-400 text-xs">
                                    Channel Name
                                </p>
                                <p className="text-gray-500 text-xs">
                                    1M views • 1 day ago
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}