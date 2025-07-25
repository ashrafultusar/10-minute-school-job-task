'use client';

const LayoutStructure = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {children}
      </div>
    </section>
  );
};

export default LayoutStructure;
