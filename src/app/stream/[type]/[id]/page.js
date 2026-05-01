'use client'

import 'vidstack/styles/base.css';
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { MediaPlayer, MediaOutlet } from '@vidstack/react'
import {CONTENT_TYPES} from "@/lib/constants";

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

    const upNext = [
        {
            id: 201,
            title: "Endless Evenings",
            thumbnail: "https://picsum.photos/id/1082/400/250",
            preview: "https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
            id: 202,
            title: "Love, Unwritten",
            thumbnail: "https://picsum.photos/id/109/400/250",
            preview: "https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
            id: 203,
            title: "Moments Like These",
            thumbnail: "https://picsum.photos/id/110/400/250",
            preview: "https://www.w3schools.com/html/mov_bbb.mp4"
        }
    ]
    if (!data) return null

    return (
        <div className="bg-black text-white min-h-screen flex flex-col">

            {/* 🎥 THEATER PLAYER AREA */}
            <section className="w-full pt-16 md:pt-20 bg-[#0a0a0a] flex flex-col items-center">
                <div className="w-full max-w-[1400px] px-0 md:px-10 lg:px-20">
                    <div className="relative aspect-video w-full bg-black shadow-2xl overflow-hidden rounded-sm">
                        <MediaPlayer
                            src={data.preview}
                            controls
                            autoPlay
                            aspectRatio="16/9"
                            className="w-full h-full"
                        >
                            <MediaOutlet className="w-full h-full object-contain" />
                        </MediaPlayer>
                    </div>
                </div>
                {/* Subtle spacer below video */}
                <div className="h-6 w-full" />
            </section>

            {/* 📝 CONTENT AREA (Grid Layout) */}
            <main className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* LEFT: Video Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight mb-2">
                                {data.title}
                            </h1>
                            <div className="flex items-center gap-3 text-sm text-zinc-400 font-medium">
                                <span>1.2M views</span>
                                <span className="text-zinc-700">•</span>
                                <span>May 1, 2026</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 py-6 border-y border-zinc-800/50">
                            <div className="w-12 h-12 rounded-full bg-zinc-800 flex-shrink-0 flex items-center justify-center text-xl font-bold">
                                N
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-lg">Vidgen Originals</p>
                                <p className="text-xs text-zinc-500">Official Channel</p>
                            </div>
                            <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-zinc-200 transition active:scale-95">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: Sidebar (Up Next) */}
                    <aside className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-5 bg-red-600 rounded-full" />
                            <h3 className="font-bold text-lg uppercase tracking-wider">Up Next</h3>
                        </div>

                        <div className="space-y-5">
                            {upNext.map((item) => (
                                <div key={item.id} className="flex gap-4 group cursor-pointer">
                                    <div className="w-40 h-24 bg-zinc-800 rounded-lg overflow-hidden shrink-0 shadow-lg">
                                        <img
                                            src={item.thumbnail}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                                            alt="recommendation"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="font-bold text-sm leading-snug line-clamp-2 group-hover:text-red-500 transition-colors">
                                            {item.title}
                                        </p>
                                        <p className="text-[11px] text-zinc-500 mt-2 font-semibold">1M views • 1 day ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    )
}
