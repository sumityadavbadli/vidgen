"use client"

import { useState, useEffect } from 'react'
import Hero from '@/components/hero'
import { fetchContent } from '@/lib/api'
import Row from "@/components/row";
import {CONTENT_TYPES} from "@/lib/constants";

export default function ReadPage() {

    const heroItem = {
        id: 101,
        title: "Read",
        type: CONTENT_TYPES.BOOK,
        thumbnail: 'https://plus.unsplash.com/premium_vector-1720951733734-ab79b62106a0?q=80&w=1683&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        preview: 'https://plus.unsplash.com/premium_vector-1730641497009-0e3a43a0952e?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }

    const popularBooks = [
        { id: 301, title: "The Thinking Machine", thumbnail: "https://picsum.photos/id/100/400/250", preview: "/test-preview.pdf" },
        { id: 302, title: "Digital Minimalism 2.0", thumbnail: "https://picsum.photos/id/101/400/250", preview: "/test-preview.pdf" },
        { id: 303, title: "The Modern Mind", thumbnail: "https://picsum.photos/id/102/400/250", preview: "/test-preview.pdf" },
        { id: 304, title: "Beyond the Algorithm", thumbnail: "https://picsum.photos/id/103/400/250", preview: "/test-preview.pdf" },
        { id: 305, title: "Atomic Focus", thumbnail: "https://picsum.photos/id/104/400/250", preview: "/test-preview.pdf" },
        { id: 306, title: "The Learning Curve", thumbnail: "https://picsum.photos/id/105/400/250", preview: "/test-preview.pdf" },
        { id: 307, title: "Deep Workflows", thumbnail: "https://picsum.photos/id/106/400/250", preview: "/test-preview.pdf" },
        { id: 308, title: "Mind Over Noise", thumbnail: "https://picsum.photos/id/107/400/250", preview: "/test-preview.pdf" },
        { id: 309, title: "Clarity Engine", thumbnail: "https://picsum.photos/id/108/400/250", preview: "/test-preview.pdf" },
        { id: 310, title: "Focus Reset", thumbnail: "https://picsum.photos/id/109/400/250", preview: "/test-preview.pdf" },
        { id: 311, title: "The Silent Discipline", thumbnail: "https://picsum.photos/id/110/400/250", preview: "/test-preview.pdf" },
        { id: 312, title: "Limitless Thinking", thumbnail: "https://picsum.photos/id/111/400/250", preview: "/test-preview.pdf" }
    ]

    const trendingBooks = [
        { id: 401, title: "Future Proof Living", thumbnail: "https://picsum.photos/id/212/400/250", preview: "/test-preview.pdf" },
        { id: 402, title: "The AI Horizon", thumbnail: "https://picsum.photos/id/213/400/250", preview: "/test-preview.pdf" },
        { id: 403, title: "Code & Consciousness", thumbnail: "https://picsum.photos/id/214/400/250", preview: "/test-preview.pdf" },
        { id: 404, title: "The Data Age", thumbnail: "https://picsum.photos/id/215/400/250", preview: "/test-preview.pdf" },
        { id: 405, title: "Next Gen Thinking", thumbnail: "https://picsum.photos/id/216/400/250", preview: "/test-preview.pdf" },
        { id: 406, title: "Smart Habits", thumbnail: "https://picsum.photos/id/217/400/250", preview: "/test-preview.pdf" },
        { id: 407, title: "The Neural Path", thumbnail: "https://picsum.photos/id/218/400/250", preview: "/test-preview.pdf" },
        { id: 408, title: "Rewired Brain", thumbnail: "https://picsum.photos/id/219/400/250", preview: "/test-preview.pdf" },
        { id: 409, title: "Human + Machine", thumbnail: "https://picsum.photos/id/220/400/250", preview: "/test-preview.pdf" },
        { id: 410, title: "Thinking Tomorrow", thumbnail: "https://picsum.photos/id/221/400/250", preview: "/test-preview.pdf" },
        { id: 411, title: "The Productivity Code", thumbnail: "https://picsum.photos/id/222/400/250", preview: "/test-preview.pdf" },
        { id: 412, title: "Digital Evolution", thumbnail: "https://picsum.photos/id/223/400/250", preview: "/test-preview.pdf" }
    ]

    const thrillerBooks = [
        { id: 501, title: "The Locked Chapter", thumbnail: "https://picsum.photos/id/112/400/250", preview: "/test-preview.pdf" },
        { id: 502, title: "Whispers in Code", thumbnail: "https://picsum.photos/id/113/400/250", preview: "/test-preview.pdf" },
        { id: 503, title: "The Final Draft", thumbnail: "https://picsum.photos/id/114/400/250", preview: "/test-preview.pdf" },
        { id: 504, title: "Hidden Manuscript", thumbnail: "https://picsum.photos/id/115/400/250", preview: "/test-preview.pdf" },
        { id: 505, title: "Ink of Deception", thumbnail: "https://picsum.photos/id/116/400/250", preview: "/test-preview.pdf" },
        { id: 506, title: "The Last Page", thumbnail: "https://picsum.photos/id/117/400/250", preview: "/test-preview.pdf" },
        { id: 507, title: "Secrets Between Lines", thumbnail: "https://picsum.photos/id/118/400/250", preview: "/test-preview.pdf" },
        { id: 508, title: "Midnight Library Case", thumbnail: "https://picsum.photos/id/119/400/250", preview: "/test-preview.pdf" },
        { id: 509, title: "Vanishing Author", thumbnail: "https://picsum.photos/id/120/400/250", preview: "/test-preview.pdf" },
        { id: 510, title: "The Red Bookmark", thumbnail: "https://picsum.photos/id/121/400/250", preview: "/test-preview.pdf" },
        { id: 511, title: "Silent Chapters", thumbnail: "https://picsum.photos/id/122/400/250", preview: "/test-preview.pdf" },
        { id: 512, title: "Plot Twist Protocol", thumbnail: "https://picsum.photos/id/123/400/250", preview: "/test-preview.pdf" }
    ]

    const romanceBooks = [
        { id: 601, title: "Between Two Pages", thumbnail: "https://picsum.photos/id/124/400/250", preview: "/test-preview.pdf" },
        { id: 602, title: "Love in Ink", thumbnail: "https://picsum.photos/id/125/400/250", preview: "/test-preview.pdf" },
        { id: 603, title: "A Story for Us", thumbnail: "https://picsum.photos/id/126/400/250", preview: "/test-preview.pdf" },
        { id: 604, title: "The Last Letter You Sent", thumbnail: "https://picsum.photos/id/127/400/250", preview: "/test-preview.pdf" },
        { id: 605, title: "Pages of You", thumbnail: "https://picsum.photos/id/128/400/250", preview: "/test-preview.pdf" },
        { id: 606, title: "Falling Through Words", thumbnail: "https://picsum.photos/id/129/400/250", preview: "/test-preview.pdf" },
        { id: 607, title: "Our Quiet Chapter", thumbnail: "https://picsum.photos/id/130/400/250", preview: "/test-preview.pdf" },
        { id: 608, title: "The Space Between Lines", thumbnail: "https://picsum.photos/id/131/400/250", preview: "/test-preview.pdf" },
        { id: 609, title: "Written for You", thumbnail: "https://picsum.photos/id/132/400/250", preview: "/test-preview.pdf" },
        { id: 610, title: "A Love Unfinished", thumbnail: "https://picsum.photos/id/133/400/250", preview: "/test-preview.pdf" },
        { id: 611, title: "When Words Stay", thumbnail: "https://picsum.photos/id/134/400/250", preview: "/test-preview.pdf" },
        { id: 612, title: "You & The Final Chapter", thumbnail: "https://picsum.photos/id/135/400/250", preview: "/test-preview.pdf" }
    ]

    return (
        <div className="space-y-6">
            <Hero item={heroItem} />

            <Row title="Popular Now" type={CONTENT_TYPES.BOOK}  movies={popularBooks} />
            <Row title="Top Trending" type={CONTENT_TYPES.BOOK}  movies={trendingBooks} />
            <Row title="Thrillers" type={CONTENT_TYPES.BOOK}  movies={thrillerBooks} />
            <Row title="Romance" type={CONTENT_TYPES.BOOK}  movies={romanceBooks} />
        </div>
    )
}
