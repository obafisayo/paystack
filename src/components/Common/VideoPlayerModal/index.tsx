"use client";
import React, { useEffect, useState } from 'react';

interface VideoPlayerModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl?: string;
    videoTitle?: string;
}

type AnimationState = 'closed' | 'opening' | 'open' | 'closing';

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
    isOpen,
    onClose,
    videoUrl = "https://youtu.be/aQ06f8vARhw?si=2y4AxvfmEiq1-Y1u",
    videoTitle = "MTN Chief Transformation Officer, on Working with Paystack"
}) => {
    const [animationState, setAnimationState] = useState<AnimationState>('closed');

    useEffect(() => {
        if (isOpen) {
            setAnimationState('opening');
            document.body.style.overflow = 'hidden';
            const timer = setTimeout(() => {
                setAnimationState('open');
            }, 1200);
            return () => clearTimeout(timer);
        } else if (animationState !== 'closed') {
            setAnimationState('closing');
            const timer = setTimeout(() => {
                setAnimationState('closed');
                document.body.style.overflow = 'unset';
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const getYoutubeEmbedUrl = (url: string) => {
        if (!url) return '';

        let videoId = '';
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);

        if (match && match[2].length === 11) {
            videoId = match[2];
        } else {
            const shortsMatch = url.match(/youtube\.com\/shorts\/([^\/\?]+)/);
            if (shortsMatch) videoId = shortsMatch[1];
        }

        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        }

        return url;
    };

    if (animationState === 'closed') return null;

    return (
        <div className="video-modal-container fixed inset-0 w-screen h-screen z-[9999] pointer-events-auto">
            <div
                className={`video-modal-overlay ${animationState} absolute inset-0 w-full h-full bg-black/70 transition-opacity duration-100`}
                onClick={onClose}
            />

            <div className={`video-modal-circle ${animationState} absolute bottom-5 right-5 w-20 h-20 bg-paystack-blue-hover rounded-full pointer-events-none z-5`} />

            <div className={`video-modal-content ${animationState} absolute inset-0 w-full h-full flex flex-col opacity-0 pointer-events-none z-10`}>
                <div className="video-modal-player flex-1 flex items-center justify-center w-full h-full px-6 md:px-32 md:py-1 pointer-events-auto">
                    <div className="relative w-full h-full max-w-[1280px] aspect-video">
                        <iframe
                            src={getYoutubeEmbedUrl(videoUrl)}
                            title={videoTitle}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black"
                        />
                        <button
                            className="absolute top-0 -right-4 md:-right-8 text-white/70 w-9 h-9 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                            onClick={onClose}
                            aria-label="Close video"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="4" x2="4" y2="12"></line>
                                <line x1="4" y1="4" x2="12" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayerModal;
