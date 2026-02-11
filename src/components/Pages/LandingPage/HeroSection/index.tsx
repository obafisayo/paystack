"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import WorldMap from '@/assets/SVGs/WorldMap';

import ThemedButton from '@/components/Common/ThemedButton';
import VideoPlayerModal from '@/components/Common/VideoPlayerModal';
import Domino from '@/assets/icons/hero/Dominos';
import Bolt from '@/assets/icons/hero/Bolt';
import Axa from '@/assets/icons/hero/AXA';
import MTN from '@/assets/icons/hero/MTN';

const HeroSection = () => {
  const regions = ['international', 'americas', 'africa',];
  const [activeRegions, setActiveRegions] = useState<string[]>([]);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRegions((prev) => {
        if (prev.length < regions.length) {
          return [...prev, regions[prev.length]];
        }
        clearInterval(interval);
        return prev;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const trustedCompanies = [
    { name: 'Domino\'s', Logo: Domino },
    { name: 'MTN', Logo: MTN },
    { name: 'Bolt', Logo: Bolt },
    { name: 'AXA MANSARD', Logo: Axa },
  ];

  return (
    <section className='relative w-full bg-[#EBF8F2] overflow-hidden'>
      {/* Hero Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-13'>
        <div>
          {/* Left Content */}
          <div className='relative z-20 space-y-3 w-1/2 ml-1'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[58px] font-boing mt-[142px] glide-up'>
              Modern online and offline payments for Africa
            </h1>
            <p className='text-lg md:text-xl text-gray-900 leading-[30px] glide-up'>
              Paystack helps businesses in Africa get paid by anyone, anywhere in the world
            </p>

            {/* CTAs */}
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4'>
              <ThemedButton size='lg' variant='primary' >
                Create a free account
              </ThemedButton>
              <Link
                href='/contact-sales'
                className='text-paystack-green font-medium text-[15px]'
              >
                or Contact Sales
              </Link>
            </div>
          </div>

          <div className={`w-[56%] absolute -right-[17px] bottom-1 h-full c-homepage-animation c-homepage-animation--play ${activeRegions.map(r => `c-homepage-animation--${r}`).join(' ')} overflow-hidden rounded-[50%]`}>
            <div className="c-homepage-animation__curve"></div>
            <div className="c-homepage-animation__worldmap">
              <WorldMap />
            </div>
          </div>
        </div>
        {/* Trusted By Section */}
        <div className='mt-[7.5em] pt-8'>
          <div className='flex flex-col md:flex-row justify-between gap-6'>
            <div className='flex flex-col gap-4'>
              <p className='text-sm text-gray-900 font-medium whitespace-nowrap'>
                Trusted by over 200,000 businesses
              </p>

              {/* Company Logos */}
              <div className='flex items-center gap-6 justify-center md:justify-start'>
                {trustedCompanies.map(({ name, Logo }) => (
                  <div
                    key={name}
                    className='h-7 w-auto flex items-center grayscale hover:grayscale-0 transition-all text-gray-800'
                  >
                    <Logo className="h-full w-auto fill-current" />
                  </div>
                ))}
              </div>
            </div>

            {/* Video CTA */}
            <div className='ml-auto hidden md:block mt-[6px] cursor-pointer z-50'>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className='flex items-center gap-2 text-sm text-gray-900 transition-colors cursor-pointer bg-transparent'
              >
                <p className="font-medium text-end text-base">
                  Watch MTN Chief Transformation Officer, Olubayo <br /> Adekanmbi, discuss working with Paystack
                </p>
                <div className='w-8 h-8 rounded-full bg-paystack-blue-hover flex items-center justify-center hover:scale-125 transition-all ease-in-out duration-300'>
                  <svg width="12" height="12" viewBox="0 0 9 14" fill="none">
                    <path d="M1 1L11 7L1 13V1Z" fill="white" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      <VideoPlayerModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
