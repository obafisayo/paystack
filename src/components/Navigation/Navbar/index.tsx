"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Paystack from "@/assets/SVGs/Paystack";
import { FaCaretDown } from "react-icons/fa";
import Hamburger from "../Hamburger";
import Header from "../Header";
import NavLink from "./NavLink";
import DropdownMenu from "./DropdownMenu";
import RichDropdownMenu from "./RichDropdownMenu";
import CountrySelector from "./CountrySelector";

// why paystack
import Demo from "@/assets/icons/navigation/why_paystack/demo_db";
import SuccessRates from "@/assets/icons/navigation/why_paystack/success_rates_db";
import WhyChoosePaystack from "@/assets/icons/navigation/why_paystack/why_choose_paystack_db";

// learn
import Blog from "@/assets/icons/navigation/learn/blog_db";
import Decode from "@/assets/icons/navigation/learn/decode_fintech_db";
import Guides from "@/assets/icons/navigation/learn/guides_db";
import Tutorials from "@/assets/icons/navigation/learn/tutorials_db";

import ThemedButton from "@/components/Common/ThemedButton";

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setHeaderVisible(currentScrollY <= 1);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDropdown = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const whyPaystackSections = [
        {
            items: [
                {
                    label: "Why Choose Paystack",
                    href: "/why",
                    description: "Over 200,000 businesses trust Paystack. Here's why.",
                    icon: <WhyChoosePaystack />,
                },
                {
                    label: "Success Rates",
                    href: "/success-rates",
                    description: "Get the best transaction success rates in the industry",
                    icon: <SuccessRates />,
                },
                {
                    label: "Demo",
                    href: "/demo",
                    description: "See the Paystack Checkout Form and Dashboard in action",
                    icon: <Demo />,
                },
            ],
        },
        {
            title: "YOUR GROWTH STAGE",
            items: [
                { label: "For Entrepreneurs", href: "/entrepreneurs" },
                { label: "For Corporates", href: "/corporates" },
                { label: "For Global Brands", href: "/global-brands" },
                { label: "For Startups", href: "/startups" },
            ],
        },
        {
            title: "YOUR BUSINESS TYPE",
            items: [
                { label: "For Fintechs", href: "/fintechs" },
                { label: "For Agencies", href: "/agencies" },
                { label: "For Schools", href: "/schools" },
                { label: "For Betting", href: "/betting" },
            ],
        },
    ];

    const learnSections = [
        {
            items: [
                {
                    label: "Blog",
                    href: "/blog",
                    description: "Original lessons about making the internet work for your business",
                    icon: <Blog />,
                },
                {
                    label: "Guides",
                    href: "/guides",
                    description: "Big ideas in payments, explained in simple English",
                    icon: <Guides />,
                },
                {
                    label: "Video Tutorials",
                    href: "/videos",
                    description: "Quick video tutorials on how to use Paystack",
                    icon: <Tutorials />,
                },
                {
                    label: "Decode Fintech",
                    href: "/decode-fintech",
                    description: "The trade email newsletter and podcast for leaders in African fintech",
                    icon: <Decode />,
                },
            ],
        },
        {
            title: "COMPANY",
            items: [
                { label: "About Us", href: "/about" },
                { label: "Changelog", href: "/changelog" },
                { label: "Subscribe", href: "/subscribe" },
                { label: "Compliance", href: "/compliance" },
                { label: "Careers", href: "/careers" },
                { label: "Brand", href: "/brand" },
                { label: "Media Kit", href: "/media-kit" },
            ],
        },
    ];

    const developersItems = [
        { label: "Overview", href: "/developers" },
        { label: "Documentation", href: "/docs" },
        { label: "Integrations", href: "/integrations" },
        { label: "Status Page", href: "/status" },
    ];

    const supportItems = [
        { label: "Help Center", href: "/help" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <div>
            <div
                className={`w-full bg-[#EBF8F2]/95 fixed z-50 transition-all duration-300 ease-in-out ${headerVisible ? "top-0" : "-top-[46px]"
                    }`}
            >
                <Header />
                <nav className="max-w-7xl mx-auto pt-4 px-12 pb-3 flex items-center justify-between">
                    {/* Left Section: Logo + Main Nav */}
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center">
                            <Paystack className="h-[22px]" />
                        </Link>

                        <div className="hidden md:flex items-center gap-4">
                            <RichDropdownMenu label="Why Paystack" sections={whyPaystackSections} />
                            <NavLink href="/customers" className="text-sm" label="Customers" />
                            <NavLink href="/pricing" className="text-sm" label="Pricing" />
                            <RichDropdownMenu label="Learn" sections={learnSections} />
                        </div>
                    </div>

                    {/* Right Section: Actions */}
                    <div className="hidden md:flex items-center gap-[18px]">
                        <DropdownMenu label="Developers" items={developersItems} />
                        <DropdownMenu label="Support" items={supportItems} />
                        <NavLink href="/login" label="Login" />
                        <Link href="/signup" className="mr-1.5">
                            <ThemedButton variant="primary" size="md">
                                Create free account
                            </ThemedButton>
                        </Link>
                        <CountrySelector />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <Hamburger
                        isOpen={mobileMenuOpen}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden"
                    />
                </nav>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="space-y-1">
                            {/* Why Paystack Dropdown */}
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => toggleDropdown("why-paystack")}
                                    className="w-full flex items-center justify-between py-4 text-gray-900 font-semibold text-left"
                                >
                                    Why Paystack
                                    <FaCaretDown
                                        className={`transform transition-transform duration-200 ${activeDropdown === "why-paystack" ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === "why-paystack"
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="pb-4 pl-4 space-y-3">
                                        <Link
                                            href="/why"
                                            className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Why Choose Paystack
                                        </Link>
                                        <Link
                                            href="/success-rates"
                                            className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Success Rates
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Customers */}
                            <div className="border-b border-gray-100">
                                <Link
                                    href="/customers"
                                    className="block py-4 text-gray-900 font-semibold"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Customers
                                </Link>
                            </div>

                            {/* Pricing */}
                            <div className="border-b border-gray-100">
                                <Link
                                    href="/pricing"
                                    className="block py-4 text-gray-900 font-semibold"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Pricing
                                </Link>
                            </div>

                            {/* Learn Dropdown */}
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => toggleDropdown("learn")}
                                    className="w-full flex items-center justify-between py-4 text-gray-900 font-semibold text-left"
                                >
                                    Learn
                                    <FaCaretDown
                                        className={`transform transition-transform duration-200 ${activeDropdown === "learn" ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === "learn"
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="pb-4 pl-4 space-y-3">
                                        <Link
                                            href="/blog"
                                            className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Blog
                                        </Link>
                                        <Link
                                            href="/guides"
                                            className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Guides
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Developers Dropdown */}
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => toggleDropdown("developers")}
                                    className="w-full flex items-center justify-between py-4 text-gray-900 font-semibold text-left"
                                >
                                    Developers
                                    <FaCaretDown
                                        className={`transform transition-transform duration-200 ${activeDropdown === "developers" ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === "developers"
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="pb-4 pl-4 space-y-3">
                                        {developersItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Support Dropdown */}
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => toggleDropdown("support")}
                                    className="w-full flex items-center justify-between py-4 text-gray-900 font-semibold text-left"
                                >
                                    Support
                                    <FaCaretDown
                                        className={`transform transition-transform duration-200 ${activeDropdown === "support" ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === "support"
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="pb-4 pl-4 space-y-3">
                                        {supportItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Login */}
                            <div className="border-b border-gray-100">
                                <Link
                                    href="/login"
                                    className="block py-4 text-paystack-green font-semibold"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Login
                                </Link>
                            </div>

                            {/* Create Account Button */}
                            <div className="pt-4">
                                <Link href="/signup">
                                    <ThemedButton variant="primary" size="md" fullWidth>
                                        Create free account
                                    </ThemedButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
