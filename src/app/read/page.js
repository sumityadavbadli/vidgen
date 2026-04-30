"use client"

import { useState, useEffect } from 'react'
import Carousel from '@/components/carousel'
import Card from '@/components/card'
import Hero from '@/components/hero'
import { fetchContent } from '@/lib/api'
import Row from "@/components/row";
import {CONTENT_TYPES} from "@/lib/constants";

export default function ReadPage() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Create an internal async function
        const getData = async () => {
            try {
                const result = await fetchContent('Book')
                setData(result)
            } catch (error) {
                console.error("Failed to fetch:", error)
            } finally {
                setLoading(false)
            }
        }

        getData()
    }, [])

    if (loading) return <div className="p-8">Loading books...</div>
    if (!data.length) return <div className="p-8">No books found.</div>

    return (
        <div className="space-y-6">
            <Hero item={data[0]} />

            <Row title="Trending Now" type={CONTENT_TYPES.BOOK} movies={data} />
            <Row title="Continue Watching" type={CONTENT_TYPES.BOOK}  movies={data} />
        </div>
    )
}
