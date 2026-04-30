'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Card from "@/components/card";

export default function Carousel({ items, type = "video"  }) {
    const [ref] = useEmblaCarousel({ dragFree: true })

    return (
        <div className="overflow-hidden" ref={ref}>
            <div className="flex gap-4">
                {items.map((item) => (
                    <div key={item.id} className="min-w-[150px]">
                        <Card item={item} type={type} />
                    </div>
                ))}
            </div>
        </div>
    )
}