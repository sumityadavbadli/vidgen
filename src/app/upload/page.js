'use client'

import { useState, useRef } from 'react'

export default function UploadPage() {
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const inputRef = useRef()

    const handleFile = (f) => {
        setFile(f)
        if (f && f.type.includes('video')) {
            setPreview(URL.createObjectURL(f))
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-black text-white flex flex-col">

            {/* MAIN DROP AREA */}
            <div
                className="flex-1 flex items-center justify-center px-4"
                onClick={() => inputRef.current.click()}
            >
                <div
                    className="w-full max-w-5xl border border-dashed border-white/20 rounded-xl p-16 text-center cursor-pointer hover:border-white/40 transition"
                    onDrop={(e) => {
                        e.preventDefault()
                        handleFile(e.dataTransfer.files[0])
                    }}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <input
                        ref={inputRef}
                        type="file"
                        className="hidden"
                        onChange={(e) => handleFile(e.target.files[0])}
                    />

                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-tr from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                            ⬇
                        </div>

                        <h2 className="text-xl font-semibold">
                            Drag and drop your file
                        </h2>

                        <p className="text-sm text-white/60">
                            Or, browse locations to upload files.
                        </p>

                        <button className="mt-2 px-5 py-2 bg-white text-black rounded-full text-sm">
                            Your device
                        </button>
                    </div>
                </div>
            </div>

            {/* BOTTOM PANEL */}
            <div className="w-full bg-black/80 backdrop-blur border-t border-white/10 p-4 md:p-6 rounded-t-2xl">
                <div className="max-w-6xl mx-auto flex flex-col gap-4">

                    {/* MODEL SELECT */}
                    <div className="flex items-center gap-2 text-sm">
                        <div className="px-3 py-1 bg-white/10 rounded">
                            Runway Gen-4 Aleph ▾
                        </div>
                    </div>

                    {/* INPUT AREA */}
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                        <div className="flex-1">
                            <p className="text-sm mb-1">Describe the edit you want to make</p>
                            <input
                                placeholder="Type something..."
                                className="w-full bg-transparent border border-white/20 rounded px-3 py-2 text-sm outline-none"
                            />
                        </div>

                        <div className="flex gap-2 items-center">
                            <button className="p-2 rounded-full border border-white/20">↺</button>
                            <button className="px-4 py-2 bg-white/20 rounded-full text-sm opacity-50">
                                Generate
                            </button>
                        </div>
                    </div>

                    {/* PREVIEW */}
                    {file && (
                        <div className="border border-white/10 rounded p-3 mt-2">
                            {file.type.includes('video') ? (
                                <video src={preview} controls className="max-h-[200px]" />
                            ) : (
                                <p className="text-sm">{file.name}</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}