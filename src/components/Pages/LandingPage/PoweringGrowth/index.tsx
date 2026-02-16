"use client";
import React from 'react';

import Abia from '@/assets/icons/hero/powered_growth/Abia';
import AirPeace from '@/assets/icons/hero/powered_growth/Air-Peace';
import Ariiya from '@/assets/icons/hero/powered_growth/Ariiya';
import AxaMansard from '@/assets/icons/hero/powered_growth/AxaMansard';
import Betway from '@/assets/icons/hero/powered_growth/Betway';
import Bolt from '@/assets/icons/hero/powered_growth/Bolt';
import Carbon from '@/assets/icons/hero/powered_growth/Carbon';
import Cowrywise from '@/assets/icons/hero/powered_growth/Cowrywise';
import Dominos from '@/assets/icons/hero/powered_growth/Dominos';
import FilmHouse from '@/assets/icons/hero/powered_growth/FilmHouse';
import GIGM from '@/assets/icons/hero/powered_growth/GIGM';
import IbomAir from '@/assets/icons/hero/powered_growth/IbomAir';
import IrokoTV from '@/assets/icons/hero/powered_growth/IrokoTV';
import Kuda from '@/assets/icons/hero/powered_growth/Kuda';
import LagosInternalRevenue from '@/assets/icons/hero/powered_growth/LagosInternalRevenue';
import Mtn from '@/assets/icons/hero/powered_growth/Mtn';
import Piggyvest from '@/assets/icons/hero/powered_growth/Piggyvest';
import Smile from '@/assets/icons/hero/powered_growth/Smile';

const PoweringGrowth = () => {
  const companies = [
    { Icon: AirPeace, name: 'Air Peace' },
    { Icon: FilmHouse, name: 'FilmHouse' },
    { Icon: Piggyvest, name: 'Piggyvest' },
    { Icon: IbomAir, name: 'Ibom Air' },
    { Icon: Kuda, name: 'Kuda' },
    { Icon: Ariiya, name: 'Ariiya' },

    { Icon: Dominos, name: 'Dominos' },
    { Icon: Mtn, name: 'MTN' },
    { Icon: LagosInternalRevenue, name: 'Lagos Internal Revenue' },
    { Icon: Bolt, name: 'Bolt' },
    { Icon: Betway, name: 'Betway' },
    { Icon: Carbon, name: 'Carbon' },

    { Icon: AxaMansard, name: 'AXA Mansard' },
    { Icon: Abia, name: 'Abia State University' },
    { Icon: GIGM, name: 'GIGM' },
    { Icon: IrokoTV, name: 'IrokoTV' },
    { Icon: Smile, name: 'Smile' },
    { Icon: Cowrywise, name: 'Cowrywise' },
  ];

  return (
    <section className="w-full bg-white py-[80px] md:pb-[180px] md:pt-[140px]">
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="mb-16 max-w-[670px]">
          <h2 className="text-[45px] font-bold text-gray-900 mb-6 leading-[54px]">
            Powering growth for amazing businesses
          </h2>
          <p className="text-[20px] text-gray-900 leading-[30px]">
            Paystack is a growth engine for a new generation of innovative, forward-looking organizations operating in Africa.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-12 gap-y-20 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <company.Icon className="w-fit h-7 text-gray-900 [&_path]:fill-gray-900 [&_rect]:fill-gray-900" style={{ color: '#011B33' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoweringGrowth;
