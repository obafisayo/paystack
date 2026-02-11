import React, { useState } from 'react';
import Link from 'next/link';
import { FaCaretDown } from 'react-icons/fa';

interface DropdownSection {
    title?: string;
    items: {
        label: string;
        href: string;
        description?: string;
        icon?: React.ReactNode;
    }[];
}

interface RichDropdownMenuProps {
    label: string;
    sections: DropdownSection[];
    isActive?: boolean;
}

const RichDropdownMenu: React.FC<RichDropdownMenuProps> = ({
    label,
    sections,
    isActive = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className={`flex items-center gap-1 font-medium transition-colors text-[15px] leading-5 cursor-pointer group-hover/item:animate-in group-hover/item:fade-in group-hover/item:slide-in-from-top-2 ${isActive || isOpen ? 'text-paystack-blue-hover' : 'text-gray-900 hover:text-paystack-blue-hover'
                    }`}
            >
                {label}
                <FaCaretDown
                    className={`text-sm transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="absolute left-0 top-[calc(100%+8px)] w-[550px] bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100/50 overflow-hidden z-50 flex transition-all duration-300 ease-in-out group-hover/item:animate-in group-hover/item:fade-in group-hover/item:slide-in-from-top-2">
                    <div className="w-[65%] p-8 bg-white">
                        <div className="space-y-6">
                            {sections[0].items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-start gap-4 group/item"
                                >
                                    {item.icon && (
                                        <div className="shrink-0 w-[52px] h-[52px] bg-paystack-blue rounded-full flex items-center justify-center text-white transition-transform group-hover/item:scale-105">
                                            <div className="w-full h-full flex items-center justify-center">
                                                {item.icon}
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <div className="font-medium text-paystack-blue text-base group-hover/item:text-paystack-blue-hover transition-colors">
                                            {item.label}
                                        </div>
                                        {item.description && (
                                            <div className="text-[14px] text-[#4e5e6e] mt-1.5 leading-snug">
                                                {item.description}
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Secondary Items */}
                    <div className="w-[35%] bg-[#F9FBFD] border-l border-gray-100/50 py-8 px-6">
                        <div className="space-y-8 ">
                            {sections.slice(1).map((section, idx) => (
                                <div key={idx}>
                                    {section.title && (
                                        <h3 className="text-[10px] font-medium text-[#8190a0] uppercase tracking-[0.05em] mb-2">
                                            {section.title}
                                        </h3>
                                    )}
                                    <div className="space-y-2">
                                        {section.items.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="block font-semibold text-[#011b33] text-[15px] hover:text-paystack-blue-hover transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RichDropdownMenu;
