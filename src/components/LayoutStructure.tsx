
const LayoutStructure = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row gap-8">
        {children}
      </div>
    </section>
  );
};

export default LayoutStructure;
