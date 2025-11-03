import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { AboutUsSlider } from "@/components/sliders";
import { SectionHeading } from "@/components/typography";

interface GalleryProps {
    title: string;
    subTitle: string;
    images: string[];
    link: {
        label: string;
        href: string;
    };
}
const Gallery: React.FC<GalleryProps> = ({title, subTitle, images, link}) => {
    return (
        <SectionWithContainer>
            <div className="w-full flex flex-col md:gap-14 gap-8">
                <SectionHeading title={title} subTitle={subTitle} textCenter />
                <AboutUsSlider images={images} />
                <LinkButton target="_blank" rel="noreferrer" href={link.href} label={link.label} className="bg-blue-primary w-fit self-center" />

            </div>
        </SectionWithContainer>
    );
}

export default Gallery;