import React, { useState, SVGProps } from 'react';
import CiFlag from '@/assets/icons/flag/ci';
import EgFlag from '@/assets/icons/flag/eg';
import GhFlag from '@/assets/icons/flag/gh';
import KeFlag from '@/assets/icons/flag/ke';
import RwFlag from '@/assets/icons/flag/rw';
import ZaFlag from '@/assets/icons/flag/za';
import PaystackIcon from '@/assets/icons/flag/paystack';
import NgFlagIcon from '@/assets/icons/flag/ng';

interface Country {
    name: string;
    flag: React.FC<SVGProps<SVGSVGElement>>;
    code: string;
}

const CountrySelector: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const countries: Country[] = [
        { name: 'Ghana', flag: GhFlag, code: 'GH' },
        { name: "Côte d'Ivoire", flag: CiFlag, code: 'CI' },
        // { name: 'Nigeria', flag: NgFlagIcon, code: 'NG' },
        { name: 'Egypt', flag: EgFlag, code: 'EG' },
        { name: 'Kenya', flag: KeFlag, code: 'KE' },
        // { name: 'Rwanda', flag: RwFlag, code: 'RW' },
        // { name: 'South Africa', flag: ZaFlag, code: 'ZA' },
        // { name: 'Paystack', flag: PaystackIcon, code: 'PS' },
    ];  

    const [selectedCountry, setSelectedCountry] = useState(countries[ 2]);

    return (
        <div
            className="relative cursor-pointer mr-1"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Select country"
            >
                <selectedCountry.flag className="w-4 h-4 object-contain rounded-md" />
            </button>

            {/* Dropdown Panel */}
            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50">
                    {countries.map((country) => (
                        <button
                            key={country.code}
                            onClick={() => {
                                setSelectedCountry(country);
                                setIsOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors text-left"
                        >
                            <country.flag className="w-4 h-4 object-contain rounded-md" />
                            <span className="font-medium">{country.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CountrySelector;
