import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
    href: string;
    label: string;
    isActive?: boolean;
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, className, isActive = false }) => {
    return (
        <Link
            href={href}
            className={`${className} font-medium text-[15px] transition-colors ${isActive ? 'text-gray-900' : 'text-gray-900 hover:text-paystack-blue-hover'
                }`}
        >
            {label}
        </Link>
    );
};

export default NavLink;
