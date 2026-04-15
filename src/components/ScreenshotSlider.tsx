'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Slide {
  src: string;
  alt: string;
  label: string;
}

export default function ScreenshotSlider({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const lightboxPrev = useCallback(() =>
    setLightbox((c) => (c === null ? null : c === 0 ? slides.length - 1 : c - 1)), [slides.length]);
  const lightboxNext = useCallback(() =>
    setLightbox((c) => (c === null ? null : c === slides.length - 1 ? 0 : c + 1)), [slides.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft') lightboxPrev();
      if (e.key === 'ArrowRight') lightboxNext();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [lightbox, lightboxPrev, lightboxNext]);

  const getPosition = (index: number) => {
    const total = slides.length;
    const diff = ((index - current) % total + total) % total;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === total - 1) return diff === 1 ? 'right1' : 'left1';
    if (diff === 2 || diff === total - 2) return diff === 2 ? 'right2' : 'left2';
    return 'hidden';
  };

  const styleMap: Record<string, string> = {
    center: 'z-20 scale-100 opacity-100 translate-x-0 brightness-100',
    left1:  'z-10 scale-[0.82] opacity-70 -translate-x-[62%] brightness-75',
    right1: 'z-10 scale-[0.82] opacity-70  translate-x-[62%] brightness-75',
    left2:  'z-0  scale-[0.65] opacity-30 -translate-x-[115%] brightness-50',
    right2: 'z-0  scale-[0.65] opacity-30  translate-x-[115%] brightness-50',
    hidden: 'z-0  scale-50 opacity-0 pointer-events-none',
  };

  return (
    <>
      <div className="bg-[#06091F] border border-gray-800/40 rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#FFA500] text-center">
          3Patti Loot App Screenshots
        </h2>
        <p className="text-center text-gray-400 text-sm mb-10">
          Click any image to view full screen
        </p>

        {/* Carousel */}
        <div className="relative flex items-center justify-center h-[480px] md:h-[580px] overflow-hidden select-none">

          {slides.map((slide, i) => {
            const pos = getPosition(i);
            return (
              <div
                key={slide.src}
                className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${styleMap[pos]}`}
                style={{ width: 'clamp(240px, 45vw, 340px)' }}
                onClick={() => {
                  if (pos === 'center') {
                    setLightbox(i);
                  } else {
                    setCurrent(i);
                  }
                }}
                aria-hidden={pos === 'hidden'}
              >
                <div className={`rounded-2xl overflow-hidden shadow-2xl border transition-all duration-500 ${
                  pos === 'center'
                    ? 'border-[#FFA500]/50 shadow-[0_0_40px_rgba(255,165,0,0.2)]'
                    : 'border-gray-800/60'
                }`}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={340}
                    height={604}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 45vw, 340px"
                  />
                </div>
                {pos === 'center' && (
                  <div className="flex flex-col items-center mt-4 gap-1">
                    <p className="text-center text-white font-semibold text-sm tracking-wide">
                      {slide.label}
                    </p>
                    <span className="text-[10px] text-[#FFA500]/70 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                      </svg>
                      Tap to enlarge
                    </span>
                  </div>
                )}
              </div>
            );
          })}

          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous screenshot"
            className="absolute left-0 md:left-4 z-30 w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#0A1029] border border-gray-700 hover:border-[#FFA500] hover:bg-[#FFA500]/10 flex items-center justify-center text-white transition-all shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next screenshot"
            className="absolute right-0 md:right-4 z-30 w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#0A1029] border border-gray-700 hover:border-[#FFA500] hover:bg-[#FFA500]/10 flex items-center justify-center text-white transition-all shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Screenshot navigation">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              role="tab"
              aria-selected={i === current}
              aria-label={`View ${slide.label}`}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2 bg-[#FFA500]'
                  : 'w-2 h-2 bg-gray-700 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-gray-500 text-xs mt-3">
          {current + 1} / {slides.length}
        </p>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          {/* Card — stop propagation so clicking image doesn't close */}
          <div
            className="relative flex flex-col items-center max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute -top-12 right-0 w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center text-white transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden border border-[#FFA500]/40 shadow-[0_0_60px_rgba(255,165,0,0.25)] w-full">
              <Image
                src={slides[lightbox].src}
                alt={slides[lightbox].alt}
                width={400}
                height={710}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Label */}
            <p className="text-white font-semibold text-sm mt-4">{slides[lightbox].label}</p>
            <p className="text-gray-500 text-xs mt-1">{lightbox + 1} / {slides.length}</p>

            {/* Lightbox nav arrows */}
            <div className="flex gap-4 mt-5">
              <button
                onClick={lightboxPrev}
                aria-label="Previous image"
                className="w-11 h-11 rounded-full bg-[#0A1029] border border-gray-700 hover:border-[#FFA500] hover:bg-[#FFA500]/10 flex items-center justify-center text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={lightboxNext}
                aria-label="Next image"
                className="w-11 h-11 rounded-full bg-[#0A1029] border border-gray-700 hover:border-[#FFA500] hover:bg-[#FFA500]/10 flex items-center justify-center text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
