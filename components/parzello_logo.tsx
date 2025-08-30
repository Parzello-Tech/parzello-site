import React from "react";
import Image from "next/image";

type LogoProps = {
    size?: number;
    className?: string;
};

export default function ParzelloLogo({ size = 36, className = "" }: LogoProps) {
    return <Image src="/icon/parzello.png" alt="Parzello Logo" width={size} height={size} className={className} />;
}
