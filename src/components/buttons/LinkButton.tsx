import Link from "next/link";

interface LinkButtonProps {
  href: string;
  label: string;
  className?: string;
  [key: string]: unknown;
}
const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  label,
  className = "",
  ...props
}) => {
  return (
    <Link
      href={href}
      {...props}
      className={`transition-all max-md:w-full flex items-center justify-center text-white font-medium border duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-2xl px-6 py-3  ${className}`}
    >
      {label}
    </Link>
  );
};

export default LinkButton;
