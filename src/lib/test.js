'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { MediaPlayer, MediaOutlet } from '@vidstack/react'

export default function StreamPage() {
    const { id } = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        setData({
            title: 'Sample Video',
            video: 'https://www.w3schools.com/html/mov_bbb.mp4',
            pdf: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            type: 'video' // change to 'pdf'
        })
    }, [id])

    if (!data) return null

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-xl">{data.title}</h1>

            {data.type === 'video' ? (
                <MediaPlayer src={data.video} controls className="w-full aspect-video">
                    <MediaOutlet />
                </MediaPlayer>
            ) : (
                <iframe src={data.pdf} className="w-full h-[80vh]" />
            )}
        </div>
    )
}