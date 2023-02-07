interface FooterProps {
  content: {
    title: string;
    description: string;
  };
}

export const Footer = ({ content }: FooterProps) => {
  const { title, description } = content;

  return (
    <footer className="pt-12 pb-24">
      <h3 className="text-center text-2xl uppercase text-white">{title}</h3>
      <hr className="mx-auto w-24 mt-2 h-0.5 bg-white" />
      <div
        className="mx-auto text-white w-72 nthxs:mt-8"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </footer>
  );
};
