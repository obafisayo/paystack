import React from "react";

export interface ThemedButtonProps {
    variant?: "primary" | "secondary" | "outline" | "text" | "ghost" | "danger";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children?: React.ReactNode;
    disabled?: boolean;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
}

const ThemedButton: React.FC<ThemedButtonProps> = ({
    variant = "primary",
    size = "md",
    fullWidth = false,
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    className = "",
    onClick,
    type = "button",
}) => {
    const baseClasses =
        "inline-flex items-center justify-center gap-2 rounded-md translate-y-0 hover:-translate-y-[1px] transition-transform duration-300 ease-in-out cursor-pointer font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variantClasses = {
        primary:
            "bg-paystack-green hover:bg-[#00B04A] text-white shadow-sm hover:shadow-md focus-visible:ring-[#00C853]",
        secondary:
            "bg-white hover:bg-gray-50 text-[#00C853] border-2 border-[#00C853] focus-visible:ring-[#00C853]",
        outline:
            "bg-transparent hover:bg-gray-50 text-gray-700 border border-gray-300 hover:border-gray-400 focus-visible:ring-gray-400",
        text: "bg-transparent hover:bg-gray-100 text-[#00C853] hover:text-[#00B04A] focus-visible:ring-[#00C853]",
        ghost:
            "bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-900",
        danger:
            "bg-red-600 hover:bg-red-700 text-white shadow-sm hover:shadow-md focus-visible:ring-red-600",
    };

    const sizeClasses = {
        sm: "h-9 px-3 py-2 text-sm",
        md: "h-10 px-4.5 py-2.5 text-[15px]",
        lg: "h-12 px-8 py-3 text-[16px]",
    };

    const widthClass = fullWidth ? "w-full" : "w-auto";

    const buttonClassName = [
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        widthClass,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button
            type={type}
            className={buttonClassName}
            disabled={disabled || isLoading}
            onClick={onClick}
        >
            {isLoading ? (
                <>
                    <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    Loading...
                </>
            ) : (
                <>
                    {leftIcon && <span className="inline-flex">{leftIcon}</span>}
                    {children}
                    {rightIcon && <span className="inline-flex">{rightIcon}</span>}
                </>
            )}
        </button>
    );
};

export default ThemedButton;
