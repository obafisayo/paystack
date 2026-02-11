import React, { useState } from 'react';
import Link from 'next/link';
import { FaCaretDown } from 'react-icons/fa';

interface DropdownItem {
    label: string;
    href: string;
    description?: string;
}

interface DropdownMenuProps {
    label: string;
    items: DropdownItem[];
    isActive?: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
    label,
    items,
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
                className={`flex items-center gap-1 font-medium transition-colors text-[15px] hover:text-paystack-blue-hover ${isActive || isOpen ? 'text-gray-900' : 'text-gray-900 hover:text-paystack-blue-hover'
                    }`}
            >
                {label}
                <FaCaretDown
                    className={`text-sm transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown Panel */}
            <div className={`absolute left-0 top-[calc(100%+8px)] w-48 bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-gray-100/50 py-2 z-50 dropdown-panel-transition ${isOpen ? 'is-open' : ''}`}>
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-[14px] font-bold text-[#011b33] hover:bg-gray-50 hover:text-paystack-blue-hover transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DropdownMenu;
