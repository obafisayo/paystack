"use client";
import React from 'react';
import Link from 'next/link';
import Stripe from '@/assets/icons/navigation/footer/stripe';
import { navigationSections, offices, secondaryNavigation, socialLinks } from './data';

const Footer = () => {

  const Address = ({ city, address, phone }: { city: string, address: string, phone?: string }) => (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        {city}
      </h3>
      <address className="text-base text-gray-700 not-italic whitespace-pre-line">
        {address}
      </address>
      {phone && (
        <Link
          href={`tel:${phone}`}
          className="text-base text-paystack-blue-hover transition-colors mt-3 block"
        >
          {phone}
        </Link>
      )}
    </div>
  );

  type NavigationLink =
    | { label: string; href: string; space?: undefined }
    | { space: boolean; label?: undefined; href?: undefined };

  const Navigation = ({ title, links }: { title: string, links: NavigationLink[] }) => (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-[5px]">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link, linkIndex) => (
          <li key={linkIndex} className={link.space ? "h-2" : ""}>
            {!link.space && (
              <Link
                href={link.href!}
                className="text-base text-gray-700 hover:text-paystack-blue-hover transition-colors"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto px-11 py-16 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          <Navigation title={navigationSections[0].title} links={navigationSections[0].links} />
          <div className="space-y-5">
            <Navigation title={navigationSections[1].title} links={navigationSections[1].links} />
            <Navigation title={secondaryNavigation[0].title} links={secondaryNavigation[0].links} />
            <Navigation title={secondaryNavigation[1].title} links={secondaryNavigation[1].links} />
          </div>

          <div className="space-y-5">
            <Navigation title={navigationSections[2].title} links={navigationSections[2].links} />
            <Navigation title={secondaryNavigation[2].title} links={secondaryNavigation[2].links} />
            <Navigation title={secondaryNavigation[3].title} links={secondaryNavigation[3].links} />
          </div>

          <Navigation title={navigationSections[3].title} links={navigationSections[3].links} />
        </div>

        <div className="border-t border-gray-200 pt-13">
          <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Contact
              </h3>
              <Link
                href="mailto:hello@paystack.com"
                className="text-base text-paystack-blue-hover mb-3 block"
              >
                hello@paystack.com
              </Link>

              <div className="flex items-center gap-5 mb-5">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>

              <div className="mt-2">
                <p className="text-base text-gray-600 mb-1">
                  Paystack is a Stripe company
                </p>
                <Stripe className="h-8 w-auto hover:fill-[#635BFF]" />
              </div>
            </div>

            <Address city={offices[0].city} address={offices[0].address} phone={offices[0].phone} />
            <Address city={offices[3].city} address={offices[3].address} />
            <Address city={offices[5].city} address={offices[5].address} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div></div>
            <Address city={offices[1].city} address={offices[1].address} />
            <Address city={offices[4].city} address={offices[4].address} />
            <Address city={offices[6].city} address={offices[6].address} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div></div>
            <Address city={offices[2].city} address={offices[2].address} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;