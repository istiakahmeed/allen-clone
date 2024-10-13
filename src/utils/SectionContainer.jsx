/* eslint-disable react/prop-types */
const SectionContainer = ({ children }) => {
  return (
    <section className="container max-w-7xl mx-auto px-5 sm:px-7 lg:px-10">
      {children}
    </section>
  );
};

export default SectionContainer;
