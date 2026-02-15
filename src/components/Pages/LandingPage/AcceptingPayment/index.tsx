"use client";
import React from 'react';
import ThemedButton from '@/components/Common/ThemedButton';
import curvedPattern from '@/assets/patterns/curved-pattern.png';

const AcceptingPayment = () => {
    return (
        <section className='bg-white pt-14'>
            <div className="w-full py-[80px] md:py-[100px] relative overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.2] bg-no-repeat bg-top bg-cover z-0"
                    style={{ backgroundImage: `url(${curvedPattern.src})` }}
                ></div>

                <div className="max-w-[1280px] mx-auto px-7 pr-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div className="max-w-[600px]">
                            <p className="text-xl text-gray-900 mb-5 font-normal">
                                Try Paystack Now
                            </p>
                            <h2 className="text-[45px] font-bold text-gray-900 leading-[54px] font-boing">
                                Start accepting payments in just 30 minutes
                            </h2>
                        </div>

                        <div className="shrink-0">
                            <ThemedButton variant="primary" size="lg">
                                Create a free account
                            </ThemedButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcceptingPayment;