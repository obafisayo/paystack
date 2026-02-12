"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CheckIcon from '@/assets/icons/check';
import simplePaymentGif from '@/assets/img/simplePayment.gif';

const SimplePayment = () => {
  return (
    <section className="w-full bg-white py-36 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="mb-24 ml-1">
          <h2 className="text-[34px] md:text-[45px] leading-[54px] font-bold text-paystack-blue font-boing mb-4 tracking-[-0.02em]">
            Simple, easy payments
          </h2>
          <p className="text-[17px] md:text-[20px] text-gray-900 font-normal leading-[30px] max-w-2xl">
            Building a business is hard. Getting paid shouldn't be.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-16">
          {/* Left Column - Image Cycle */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-full h-full bg-[#f9fbfd] rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src={simplePaymentGif}
                alt="Payment Methods"
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="w-full lg:w-[40%] space-y-20">
            {/* Section 1 */}
            <div>
              <h3 className="text-[28px] md:text-[36px] font-bold text-paystack-blue font-boing leading-[43px] mb-6">
                Delight customers with a seamless payments experience
              </h3>
              <p className="text-[16px] md:text-[19px] text-gray-900 leading-[29px] mb-10 font-normal">
                Give your customers the gift of modern, frictionless, painless payments.
                Integrate Paystack once and let your customers pay you however they want.
              </p>

              {/* Checklist Grid */}
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 ml-5">
                {[
                  'Card', 'Apple Pay',
                  'Bank Account', 'Visa QR',
                  'Bank Transfer', 'Mobile Money',
                  'USSD', 'POS'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 relative">
                    <div className="w-9 h-6 px-3 py-4 bg-paystack-green/12 rounded-sm -left-7 absolute flex items-center justify-center">
                      <div className="w-3 h-3 flex items-center justify-center shrink-0">
                        <CheckIcon className="w-full h-full" />
                      </div>
                    </div>
                    <span className="text-[16px] font-medium text-paystack-blue">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-[28px] md:text-[36px] font-bold text-paystack-blue font-boing leading-[43px] mb-5">
                Enjoy phenomenal transaction success rates
              </h3>
              <p className="text-[16px] md:text-[19px] text-gray-900 leading-[29px] mb-10 font-normal">
                We automatically route payments through the most optimal channels,
                ensuring the highest transaction success rates in the market.
              </p>

              <Link
                href="/success-rates"
                className="flex items-center gap-3 text-paystack-green font-bold group transition-all"
              >
                <div className="w-5 h-5 rounded-full border-2 border-paystack-green flex items-center justify-center transition-all group-hover:bg-paystack-green">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="text-[#00C853] group-hover:text-white transition-colors">
                    <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </div>
                <span className="text-[15px]">Find out how we achieve high success rates</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplePayment;
