"use client";
import React from 'react';

const ProtectYourSelf = () => {
    return (
        <section className="w-full bg-white py-12 md:py-24 lg:py-46 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 md:pr-24">
                <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-24">
                    {/* Left Column - Video animation */}
                    <div className="w-full lg:w-[55%]">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/assets/mov/Advanced-Fraud-Protection.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-16">
                        {/* Section 1 */}
                        <div>
                            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-paystack-blue font-boing leading-[43px] mb-5 tracking-tight">
                                Protect yourself and your customers with advanced fraud detection
                            </h2>
                            <p className="text-[16px] md:text-[19px] text-gray-900 leading-[29px] font-normal">
                                Paystack’s combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-paystack-blue font-boing leading-[43px] mb-5 tracking-tight">
                                Detailed reporting for accounting, reconciliation, and audits
                            </h2>
                            <p className="text-[16px] md:text-[19px] text-gray-900 leading-[29px] font-normal">
                                Understand your customers’ purchase patterns and do easy reconciliations with a robust data Dashboard and easy exports.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProtectYourSelf;