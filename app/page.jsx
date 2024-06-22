"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiDownload } from "react-icons/fi";

const Home = () => {
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");

    const validateYouTubeUrl = (url) => {
        const regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
        return regex.test(url);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateYouTubeUrl(url)) {
            setError("");
            // Handle valid YouTube URL submission
            console.log("Valid YouTube URL:", url);
        } else {
            setError("Please enter a valid YouTube URL.");
        }
    };

    return (
        <div className="container mx-auto flex justify-center items-start min-h-screen py-36">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/* Form */}
                <div className="xl:h-[54%] order-2 xl:order-none">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 border-2 border-customColor rounded-xl">
                        <h3 className="text-4xl">YouTube Video Downloader</h3>
                        {/* Input */}
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                            <Input
                                type="url"
                                name="url"
                                placeholder="YouTube Video URL"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                required
                                className={error ? "border-red-500" : ""}
                            />
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                        {/* Btn */}
                        <Button
                            variant="outline"
                            size="lg"
                            className="uppercase flex items-center gap-2 font-extrabold"
                        >
                            <span>Download</span>
                            <FiDownload className="text-xl" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;
