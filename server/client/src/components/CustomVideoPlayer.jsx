import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollRestoration } from 'react-router-dom';

const CustomVideoPlayer = ({ video }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [playbackRate, setPlaybackRate] = useState(1);


    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };


    const handleMuteToggle = () => {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };


    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        videoRef.current.volume = newVolume;
        setVolume(newVolume);
        setIsMuted(newVolume === "0");
    };


    const handleSpeedChange = (e) => {
        const newSpeed = e.target.value;
        videoRef.current.playbackRate = newSpeed;
        setPlaybackRate(newSpeed);
    };


    const handleFullscreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        } else if (videoRef.current.webkitRequestFullscreen) {
            videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) {
            videoRef.current.msRequestFullscreen();
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                    setIsPlaying(true);
                } else {
                    videoRef.current.pause();
                    setIsPlaying(false);
                }
            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div className="flex justify-center items-center relative group bg-black rounded-lg shadow-lg overflow-hidden">
            <video
                ref={videoRef}
                src={video}
                className="w-fit h-[70vh]"
                loop
                muted={isMuted}
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/70 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePlayPause}
                    className="text-white bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full shadow-md flex items-center justify-center"
                >
                    {isPlaying ? 'Pause' : 'Play'}
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleMuteToggle}
                    className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full shadow-md"
                >
                    {isMuted ? 'Unmute' : 'Mute'}
                </motion.button>

                <motion.input
                    whileHover={{ scale: 1.05 }}
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-32 h-1 bg-gray-300 rounded-lg cursor-pointer"
                />

                <motion.select
                    whileHover={{ scale: 1.05 }}
                    value={playbackRate}
                    onChange={handleSpeedChange}
                    className="bg-gray-800 text-white px-2 py-1 rounded-lg shadow-md cursor-pointer"
                >
                    <option value="0.25">0.25x</option>
                    <option value="0.5">0.5x</option>
                    <option value="0.75">0.75x</option>
                    <option value="1">1x (Normal)</option>
                    <option value="1.25">1.25x</option>
                    <option value="1.5">1.5x</option>
                    <option value="1.75">1.75x</option>
                    <option value="2">2x</option>
                </motion.select>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleFullscreen}
                    className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full shadow-md"
                >
                    Fullscreen
                </motion.button>
            </motion.div>
            <ScrollRestoration />
        </div>
    );
};

export default CustomVideoPlayer;
