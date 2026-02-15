"use client";
import React from 'react';
import Link from 'next/link';

import Businesses from '@/assets/icons/hero/Businesses';
import Entrepreneurs from '@/assets/icons/hero/Entrepreneurs';
import LargeOrganizations from '@/assets/icons/hero/largeOrganizations';
import checkedPatternBlue from '@/assets/patterns/checked-pattern-blue.png';

const TrustedBy = () => {

    const cards = [
        {
            title: "Global Brands",
            description: "We help global brands accept payments from across Africa",
            Icon: Businesses,
            link: "/brands"
        },
        {
            title: "Entrepreneurs",
            description: "From startup to scale-up, we can support you at every stage of your businesses' growth",
            Icon: Entrepreneurs,
            link: "/entrepreneurs"
        },
        {
            title: "Large Organizations",
            description: "Paystack helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely.",
            Icon: LargeOrganizations,
            link: "/large-organizations"
        }
    ];

    return (
        <section className="relative w-full bg-[#eaf6fc] py-36 overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.07] bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `url(${checkedPatternBlue.src})` }}
            ></div>
            <div className="relative z-10 max-w-[1280px] mx-auto pr-[52px] pl-[30px]">
                <div className="mb-16 max-w-[600px]">
                    <h2 className="text-[45px] font-bold text-gray-900 mb-4 leading-[54px]">
                        Trusted by 200,000+ businesses
                    </h2>
                    <p className="text-[20px] text-gray-900 leading-[30px]">
                        Thousands of organizations of all sizes trust Paystack to grow their business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <Link
                            href={card.link}
                            key={index}
                            className="bg-white rounded-[4px] px-8 py-8 pb-15 flex flex-col cursor-pointer min-h-[300px]"
                        >
                            <div className="h-[80px] mb-8">
                                <card.Icon className="h-full w-auto" />
                            </div>
                            <h3 className="text-[24px] font-bold text-gray-900 mb-4 leading-[34px]">
                                Paystack for <br/>
                                {card.title}
                            </h3>
                            <p className="text-[16px] text-gray-900 leading-[26px] opacity-80 mb-auto">
                                {card.description}
                            </p>
                            <div className="group flex items-center gap-3 text-gray-900 font-medium mt-2">
                                <div className="w-5 h-5 rounded-full border-[1.5px] border-paystack-green flex items-center justify-center group-hover:bg-paystack-green transition-colors duration-300">
                                    <svg viewBox="0 0 6 10" fill="none" className="w-[6px] h-[10px] text-paystack-green group-hover:text-white transition-colors duration-300">
                                        <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span>Learn More</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;


