interface Props {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<Props> = ({ className, children, id }) => {
  return (
    <section className={`${className ? className : "lg:py-10"} py-5`} id={id}>
      {children}
    </section>
  );
};

export default Section;
