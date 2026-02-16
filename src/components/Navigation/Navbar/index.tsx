"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Paystack from "@/assets/SVGs/Paystack";
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
import LeftCaret from "@/assets/icons/hero/LeftCaret";
import { BiCaretRight } from "react-icons/bi";

type PanelType = "main" | "why-paystack" | "learn" | "developers" | "support" | null;

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activePanel, setActivePanel] = useState<PanelType>("main");
    const [headerVisible, setHeaderVisible] = useState(true);
    const [navBackground, setNavBackground] = useState("#EBF8F2");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 0) {
                setHeaderVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setHeaderVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-1px 0px -99% 0px",
            threshold: 0,
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const color = entry.target.getAttribute("data-nav-color");
                    if (color) {
                        setNavBackground(color);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll("[data-nav-color]");

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            setActivePanel("main");
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    const toggleDropdown = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const openPanel = (panel: PanelType) => {
        setActivePanel(panel);
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
        setActivePanel("main");
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
        { label: "Status", href: "/status" },
    ];

    const supportItems = [
        { label: "Quick Help", href: "/help" },
        { label: "Contact Us", href: "/contact" },
        { label: "Why was I debited?", href: "/debited" },
    ];

    const FastLink = ({ closeMenu, href, label, className }: { closeMenu: () => void, href: string, label: string, className?: string }) => {
        return (
            <Link
                href={href}
                className={`block py-2 text-gray-900 text-[15px] leading-[20px] font-medium ${className}`}
                onClick={closeMenu}
            >
                {label}
            </Link>
        )
    }
    const FastButton = ({ onClick, label }: { onClick: () => void, label: string }) => {
        return (
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-2 text-gray-900 text-[15px] leading-[20px] font-medium"
            >
                {label}
                <BiCaretRight className="w-4 h-4 text-gray-400" />
            </button>
        )
    }
    return (
        <div>
            <div
                className={`w-full fixed z-50 transition-all duration-300 ease-in-out ${headerVisible ? "top-0" : "-top-[46px]"}`}
                style={{ backgroundColor: navBackground, opacity: 0.9 }}
            >
                <Header />
                <nav className="max-w-7xl mx-auto py-3 px-6 xl:px-12 flex items-center justify-between">
                    {/* Left Section: Logo + Main Nav */}
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center">
                            <Paystack className="h-[22px]" />
                        </Link>

                        <div className="hidden xl:flex items-center gap-4">
                            <RichDropdownMenu label="Why Paystack" sections={whyPaystackSections} />
                            <NavLink href="/customers" className="text-sm" label="Customers" />
                            <NavLink href="/pricing" className="text-sm" label="Pricing" />
                            <RichDropdownMenu label="Learn" sections={learnSections} />
                        </div>
                    </div>

                    {/* Right Section: Actions */}
                    <div className="hidden xl:flex items-center gap-[18px]">
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
                        className="xl:hidden"
                    />
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`xl:hidden fixed z-60 transition-all duration-300 ease-in-out ${mobileMenuOpen
                    ? "opacity-95 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
                style={{
                    top: headerVisible ? '100px' : '50px',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(235, 248, 242, 0.95), rgba(235, 248, 242, 0.98))'
                }}
            >
                {/* Main Panel */}
                <div
                    className={`absolute inset-0 bg-[#EBF8F2] transition-transform duration-300 ease-in-out ${activePanel === "main" ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="overflow-y-auto h-full px-6 py-6">
                        <div className="space-y-0">
                            <FastButton onClick={() => openPanel("why-paystack")} label="Why Paystack" />
                            <FastLink closeMenu={closeMenu} href="/customers" label="Customers" />
                            <FastLink closeMenu={closeMenu} href="/pricing" label="Pricing" />
                            <FastButton onClick={() => openPanel("learn")} label="Learn" />
                            <FastButton onClick={() => openPanel("developers")} label="Developers" />
                            <FastButton onClick={() => openPanel("support")} label="Support" />
                            <FastLink closeMenu={closeMenu} href="/login" label="Login" className="text-paystack-green" />
                            <div className="pt-4">
                                <Link href="/signup" onClick={closeMenu}>
                                    <ThemedButton variant="primary" size="md" fullWidth>
                                        Create free account
                                    </ThemedButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Paystack Sub-Panel */}
                <div
                    className={`absolute inset-0 bg-[#EBF8F2] transition-transform duration-300 ease-in-out ${activePanel === "why-paystack" ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="overflow-y-auto h-full px-6 py-6">
                        <button
                            onClick={() => setActivePanel("main")}
                            className="flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700 transition-colors mb-4"
                        >
                            <LeftCaret className="w-2 h-2" />
                            <span className="text-[15px]">Back</span>
                        </button>
                        <div className="space-y-1">
                            <FastLink closeMenu={closeMenu} href="/why" label="Why Choose Paystack" />
                            <FastLink closeMenu={closeMenu} href="/success-rates" label="Success Rates" />
                            <FastLink closeMenu={closeMenu} href="/demo" label="Demo" />
                            {/* Growth Stage */}
                            <div className="pt-4">
                                <p className="text-[10px] font-medium text-[#3D5369] tracking-wider mb-2 px-0">
                                    YOUR GROWTH STAGE
                                </p>
                                <FastLink closeMenu={closeMenu} href="/entrepreneurs" label="For Entrepreneurs" />
                                <FastLink closeMenu={closeMenu} href="/corporates" label="For Corporates" />
                                <FastLink closeMenu={closeMenu} href="/global-brands" label="For Global Brands" />
                                <FastLink closeMenu={closeMenu} href="/startups" label="For Startups" />
                            </div>

                            {/* Business Type */}
                            <div className="pt-4">
                                <p className="text-[10px] font-medium text-[#3D5369] tracking-wider mb-2 px-0">
                                    YOUR BUSINESS TYPE
                                </p>
                                <FastLink closeMenu={closeMenu} href="/fintechs" label="For Fintechs" />
                                <FastLink closeMenu={closeMenu} href="/agencies" label="For Agents" />
                                <FastLink closeMenu={closeMenu} href="/schools" label="For Schools" />
                                <FastLink closeMenu={closeMenu} href="/betting" label="For Betting" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Learn Sub-Panel */}
                <div
                    className={`absolute inset-0 bg-[#EBF8F2] transition-transform duration-300 ease-in-out ${activePanel === "learn" ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="overflow-y-auto h-full px-6 py-6">
                        <button
                            onClick={() => setActivePanel("main")}
                            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors mb-4"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="text-[15px]">Back</span>
                        </button>
                        <div className="space-y-1">
                            <FastLink closeMenu={closeMenu} href="/blog" label="Blog" />
                            <FastLink closeMenu={closeMenu} href="/guides" label="Guides" />
                            <FastLink closeMenu={closeMenu} href="/videos" label="Video Tutorials" />
                            <FastLink closeMenu={closeMenu} href="/decode-fintech" label="Decode Fintech" />
                            <FastLink closeMenu={closeMenu} href="/commerce" label="Commerce" />

                            {/* Company */}
                            <div className="pt-6">
                                <p className="text-xs font-semibold text-gray-500 tracking-wider mb-2 px-0">
                                    COMPANY
                                </p>
                                <FastLink closeMenu={closeMenu} href="/about" label="About Us" />
                                <FastLink closeMenu={closeMenu} href="/changelog" label="Changelog" />
                                <FastLink closeMenu={closeMenu} href="/compliance" label="Compliance" />
                                <FastLink closeMenu={closeMenu} href="/careers" label="Careers" />
                                <FastLink closeMenu={closeMenu} href="/brand" label="Brand" />
                                <FastLink closeMenu={closeMenu} href="/media-kit" label="Media Kit" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Developers Sub-Panel */}
                <div
                    className={`absolute inset-0 bg-[#EBF8F2] transition-transform duration-300 ease-in-out ${activePanel === "developers" ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="overflow-y-auto h-full px-6 py-6">
                        <button
                            onClick={() => setActivePanel("main")}
                            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors mb-4"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="text-[15px]">Back</span>
                        </button>
                        <div className="space-y-1">
                            {developersItems.map((item) => (
                                <FastLink
                                    key={item.href}
                                    href={item.href}
                                    label={item.label}
                                    closeMenu={closeMenu}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Support Sub-Panel */}
                <div
                    className={`absolute inset-0 bg-[#EBF8F2] transition-transform duration-300 ease-in-out ${activePanel === "support" ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="overflow-y-auto h-full px-6 py-6">
                        <button
                            onClick={() => setActivePanel("main")}
                            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors mb-4"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="text-[15px]">Back</span>
                        </button>
                        <div className="space-y-1">
                            {supportItems.map((item) => (
                                <FastLink
                                    key={item.href}
                                    href={item.href}
                                    label={item.label}
                                    closeMenu={closeMenu}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;