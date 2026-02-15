"use client";
import React from 'react';
import Image from 'next/image';

// Import images
import stripeImg from '@/assets/img/stripe.png';
import visaImg from '@/assets/img/visa.png';
import ycombinatorImg from '@/assets/img/ycombinator.png';
import patrickCollisonImg from '@/assets/img/patrick-collison-headshot.jpg';
import ottoWilliamsImg from '@/assets/img/otto-williams.jpeg';
import michaelSiebelImg from '@/assets/img/michael-siebel-headshot.jpeg';
import curvedPattern from '@/assets/patterns/circular-pattern.png';

const BackedBy = () => {
  const partners = [
    {
      logo: stripeImg,
      logoAlt: "Stripe",
      quote: "Paystack is highly technical and fanatically customer oriented. We're excited to back such people in one of the world's fastest-growing regions.",
      personImg: patrickCollisonImg,
      personName: "Patrick Collison",
      personTitle: "CEO, Stripe"
    },
    {
      logo: visaImg,
      logoAlt: "Visa",
      quote: "Our investment in Paystack aligns with the kind of investments we look for - those that will help extend our reach into the global commerce ecosystem",
      personImg: ottoWilliamsImg,
      personName: "Otto Williams",
      personTitle: "Head of Strategic Partnerships, Fintech & Ventures CEMEA, Visa"
    },
    {
      logo: ycombinatorImg,
      logoAlt: "Y Combinator",
      quote: "As YC's first Nigerian startup Paystack leads the charge of great companies coming out of Africa, powering modern payments for an entire continent.",
      personImg: michaelSiebelImg,
      personName: "Michael Seibel",
      personTitle: "CEO, Partner, Y Combinator"
    }
  ];

  return (
    <section className="w-full bg-[#f9fbfc] py-[80px] md:py-[145px] relative overflow-hidden">
      <div
        className="absolute top-1/2 -translate-y-[55%] -right-64 w-[800px] h-[800px] pointer-events-none opacity-[0.15] bg-no-repeat bg-center z-0"
        style={{ backgroundImage: `url(${curvedPattern.src})` }}
      ></div>
      <div className="max-w-[1280px] mx-auto px-7 relative z-10">
        <div className="mb-16 max-w-[630px]">
          <h2 className="text-[45px] font-bold text-gray-900 mb-6 leading-[54px]">
            Backed by strong global partners
          </h2>
          <p className="text-[20px] text-gray-900 leading-[30px]">
            Paystack is backed by notable investors as well as some of the best payments companies on the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-[8px] px-8 py-12 flex flex-col min-h-[360px]"
            >
              <div className="mb-8 h-[28px] flex items-center">
                <Image
                  src={partner.logo}
                  alt={partner.logoAlt}
                  className="h-full w-auto object-contain"
                />
              </div>

              <p className="text-[16px] text-gray-900 leading-[26px] mb-2">
                {partner.quote}
              </p>

              <div className="flex items-center gap-4 mt-8 ">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={partner.personImg}
                    alt={partner.personName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[18px] leading-[20px] font-semibold text-gray-900">
                    {partner.personName}
                  </p>
                  <p className="text-[13px] leading-[20px] text-gray-900">
                    {partner.personTitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackedBy;
