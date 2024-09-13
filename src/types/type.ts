import { StaticImageData } from "next/image";

export interface Link {
    lable: string;
    icon: React.ReactNode;
    link: string;
}

export interface BannerProps {
    src: string | StaticImageData;
    alt?: string;
}

export interface TwoColCardprops {
    title: string;
    description: string;
    description2: string;
    image: {
        src: string | StaticImageData;
        alt?: string;
    };
    href: string;
    linkText: string;
}

export interface MelaPackagesDataProps {
    title: string;
    description?: string;
    link?: {
        href: string;
        linkText: string;
    };
    icon?: React.ReactNode;
    items: {
        data?: {
            title?: string;
            description?: string;
            subDescription?: string;
            href?: string;
            linkText?: string;
            videoLink?: string;
            popup?: {
                title?: string;
                description?: string;
                src?: string;
            }[];
        };
        image?: {
            src: string;
            alt: string;
        };
        icon?: React.ReactNode;
        centerTitle?: string;
        href?: string;
    }[];
}

export interface CardProps {
    img: string;
    label: string,
    href: string,
}

export interface FeaturedPressReleasesType {
    title?: string;
    description?: string;
    items: {
        image?: {
            src: string;
            alt: string;
        };
        icon?: React.ReactNode;
        centerTitle?: string;
        href?: string;
        title?: string;
        imgsrc?: string;
        bannerimage?: string;

        description?: string[];
        popup?: {
            title?: string;
            subTitle?: string;
            description: string[];
            list?: string[];
        }[];
    }[];
    link?: {
        href: string;
        linkText: string;
    };
    image?: {
        src: string;
        alt?: string;
    };
}


export interface ContactUsProps {
    label: string;
    href?: string;
    label2?: string;
    href2?: string;
    icon: React.ReactNode;
    traget?: boolean;
}



export interface roomDataType {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    time: string;
    href: string;
    img: string[];
}