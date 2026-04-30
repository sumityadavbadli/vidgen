'use client'
import Link from 'next/link'
import ThemeToggle from './theme-toggle'

export default function Navbar() {
    return (
        <div className="flex justify-between items-center p-4 sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur">
            <div className="flex gap-4">
                <Link href="/read">Read</Link>
                <Link href="/watch">Watch</Link>
                <Link href="/upload">Upload</Link>
            </div>
            <ThemeToggle />
        </div>
    )
}