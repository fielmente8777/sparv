interface Props {
  className?: string;
  children: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

const Section: React.FC<Props> = ({ className, children, id, style }) => {
  return (
    <section
      className={`${className ? className : "lg:py-14"} py-5`}
      id={id}
      style={style}
    >
      {children}
    </section>
  );
};

export default Section;
