import { SVGProps } from "react";

const NgFlagIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" {...props}>
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#fff" d="M0 0h640v480H0z" />
                <path fill="#008753" d="M426.6 0H640v480H426.6zM0 0h213.3v480H0z" />
            </g>
        </svg>
    )
}

export default NgFlagIcon;
