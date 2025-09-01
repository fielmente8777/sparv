
interface OnlyButtonProps {
    label: string,
    className?: string,
    onclick?: () => void
}
const OnlyButton: React.FC<OnlyButtonProps> = ({label, className="", onclick, ...props}) => {
    return (
        <button className={`transition-all border duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-lg px-6 py-3 ${className}`} {...props} onClick={onclick}>
            {label}
        </button>
    );
}

export default OnlyButton;