'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isBrowseOpen, setIsBrowseOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)

    const browseRef = useRef(null)
    const profileRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0)
        const handleClickOutside = (e) => {
            if (browseRef.current && !browseRef.current.contains(e.target)) setIsBrowseOpen(false)
            if (profileRef.current && !profileRef.current.contains(e.target)) setIsProfileOpen(false)
        }

        window.addEventListener('scroll', handleScroll)
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Watch', href: '/watch' },
        { name: 'Read', href: '/read' },
        { name: 'Upload', href: '/upload' },
        { name: 'New & Popular', href: '#' },
        { name: 'My List', href: '#' },
    ]

    const profileLinks = [
        { name: 'Manage Profiles', href: '#' },
        { name: 'Transfer Profile', href: '#' },
        { name: 'Account', href: '#' },
        { name: 'Help Center', href: '#' },
    ]

    return (
        <nav className={`fixed top-0 w-full z-[100] flex items-center justify-between px-4 md:px-12 py-3 transition-colors duration-500 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
            <div className="flex items-center gap-4 md:gap-8">
                <Link href="/" className="text-[#E50914] font-black text-2xl md:text-3xl tracking-tighter uppercase select-none">
                    Vidgen
                </Link>

                <div className="md:hidden relative" ref={browseRef}>
                    <button
                        onClick={() => setIsBrowseOpen(!isBrowseOpen)}
                        className="text-white text-xs font-medium flex items-center gap-1.5 focus:outline-none"
                    >
                        Browse
                        <span className={`border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-white transition-transform duration-300 ${isBrowseOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>

                    {isBrowseOpen && (
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-black/95 border-t-2 border-t-white text-white shadow-2xl animate-in fade-in zoom-in duration-200">
                            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white" />
                            <div className="flex flex-col text-center py-2">
                                {navLinks.map((link) => (
                                    <Link key={link.name} href={link.href} onClick={() => setIsBrowseOpen(false)} className="py-4 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="hidden md:flex items-center gap-5 text-sm text-[#e5e5e5]">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:text-[#b3b3b3] transition duration-300">
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-5 md:gap-6 text-white">
                <button className="focus:outline-none hover:text-gray-300 transition">
                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

                <button className="relative focus:outline-none hover:text-gray-300 transition">
                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="absolute -top-1 -right-1.5 bg-[#E50914] text-[9px] font-bold px-1 rounded-sm">4</span>
                </button>

                <div className="relative" ref={profileRef} onMouseEnter={() => setIsProfileOpen(true)} onMouseLeave={() => setIsProfileOpen(false)}>
                    <div className="flex items-center gap-2 cursor-pointer py-2">
                        <div className="w-8 h-8 rounded-[4px] overflow-hidden">
                            <img src="https://images.unsplash.com/vector-1740737650825-1ce4f5377085?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <span className={`hidden md:block border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-white transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </div>

                    {isProfileOpen && (
                        <div className="absolute top-[52px] right-0 w-48 bg-black/90 text-white shadow-2xl animate-in fade-in duration-200 border border-white/10">
                            <div className="absolute -top-2 right-2 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white/90" />
                            <div className="flex flex-col py-2">
                                {profileLinks.map((link) => (
                                    <Link key={link.name} href={link.href} className="px-4 py-2 text-xs font-medium hover:underline">
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="h-[1px] bg-white/20 my-2 w-full" />
                                <button className="px-4 py-2 text-xs font-bold hover:underline text-center">
                                    Sign out of Vidgen
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}
