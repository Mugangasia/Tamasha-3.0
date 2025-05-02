'use client';

import { useState, useEffect, useRef } from 'react';

interface VirtualTourProps {
  videoUrl: string;
  title: string;
  description: string;
  thumbnailUrl: string;
}

export default function VirtualTour({ videoUrl, title, description, thumbnailUrl }: VirtualTourProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPlaying) {
      setIsLoading(true);
      // Load A-Frame script
      const script = document.createElement('script');
      script.src = 'https://aframe.io/releases/1.4.0/aframe.min.js';
      script.async = true;
      
      script.onload = () => {
        setIsLoading(false);
      };
      
      script.onerror = () => {
        setError('Failed to load virtual tour. Please try again later.');
        setIsLoading(false);
        setIsPlaying(false);
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isPlaying]);

  const handlePlay = () => {
    setError(null);
    setIsPlaying(true);
    // Give A-Frame time to initialize
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(err => {
          setError('Failed to start video. Please try again.');
          setIsPlaying(false);
        });
      }
    }, 100);
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
  };

  const handleRetry = () => {
    setError(null);
    handlePlay();
  };

  const aframeContent = `
    <a-scene embedded>
      <a-assets>
        <video
          id="virtualTour"
          src="${videoUrl}"
          crossorigin="anonymous"
          playsinline
          loop
        ></video>
      </a-assets>
      <a-videosphere src="#virtualTour" rotation="0 -90 0"></a-videosphere>
      <a-camera>
        <a-cursor></a-cursor>
      </a-camera>
    </a-scene>
  `;

  return (
    <div className="relative bg-black rounded-lg overflow-hidden">
      {!isPlaying && !error && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 text-white p-6">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-center mb-6">{description}</p>
          <button
            onClick={handlePlay}
            className="bg-[#A41E34] hover:bg-[#8A1929] text-white px-6 py-3 rounded-full transition-colors flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Start Virtual Tour
          </button>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 text-white p-6">
          <svg className="w-12 h-12 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="text-xl font-bold mb-2">Virtual Tour Error</h3>
          <p className="text-center mb-6">{error}</p>
          <button
            onClick={handleRetry}
            className="bg-[#A41E34] hover:bg-[#8A1929] text-white px-6 py-3 rounded-full transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Again
          </button>
        </div>
      )}

      <div className="relative aspect-video" ref={containerRef}>
        {isPlaying ? (
          <>
            <div dangerouslySetInnerHTML={{ __html: aframeContent }} />
            {isLoading && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mb-4"></div>
                  <p className="text-white">Loading virtual tour...</p>
                </div>
              </div>
            )}
          </>
        ) : (
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {isPlaying && !error && !isLoading && (
        <button
          onClick={handlePause}
          className="absolute bottom-4 right-4 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
          aria-label="Stop virtual tour"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
          </svg>
        </button>
      )}
    </div>
  );
}