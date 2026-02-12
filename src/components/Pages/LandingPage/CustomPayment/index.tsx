"use client";
import Image from 'next/image';
import Link from 'next/link';
import CheckIcon from '@/assets/icons/check';
import robustImg from '@/assets/img/roubust.png';

const CustomPayment = () => {
    const features = [
        "Collect one-time and recurring payments from your app or website",
        "Make instant transfers",
        "Retrieve all your transaction and customer data",
        "Verify the identity of customers"
    ];

    return (
        <section className="w-full bg-white pt-8 pb-1 pl-6 overflow-hidden">
            <div className="max-w-7xl ml-11 mr-11">
                <div className="flex flex-col lg:flex-row lg:items-stretch gap-16">
                    {/* Left Column - Content */}
                    <div className="w-full lg:w-[47%] flex flex-col justify-center">
                        <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-paystack-blue font-boing leading-[43px] mb-6 tracking-tight">
                            Build custom payments experiences with well-documented APIs
                        </h2>
                        <p className="text-[16px] md:text-[19px] text-gray-900 leading-[29px] mb-10 font-normal">
                            Developers love our thorough, well-documented APIs that let you to build everything from simple weekend projects, to complex financial products serving hundreds of thousands of customers. If you can imagine it, you can build it with Paystack.
                        </p>

                        <div className="space-y-3 mb-12 ml-5">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-baseline gap-2 relative">
                                    <div className="w-10 h-6 pl-3 pr-4 py-4 bg-paystack-green/10 rounded-sm absolute -left-7 -top-[5.5px] flex items-center justify-center shrink-0 mt-0.5">
                                        <div className="w-3 h-3 flex items-center justify-center shrink-0">
                                            <CheckIcon className="w-full h-full" />
                                        </div>
                                    </div>
                                    <span className="text-[16px] font-medium text-paystack-blue leading-relaxed">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/docs"
                            className="flex items-center gap-3 text-paystack-green font-medium group transition-all"
                        >
                            <div className="w-5 h-5 rounded-full border-[1.5px] border-paystack-green flex items-center justify-center transition-all group-hover:bg-paystack-green">
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="text-[#00C853] group-hover:text-white transition-colors">
                                    <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-base">Paystack API Quickstart</span>
                        </Link>
                    </div>

                    <div className="w-full lg:w-[53%]">
                        <div className="relative w-full h-full">
                            <Image
                                src={robustImg}
                                alt="Robust API illustration"
                                fill
                                className="object-center"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomPayment;