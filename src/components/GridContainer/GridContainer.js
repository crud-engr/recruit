const GridContainer = ({ children }) => {
  return (
    <div className="mt-4 md:mt-8 lg:mt-8 xl:mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7 md:gap-0 lg:gap-7 xl:gap-7">
      {children}
    </div>
  );
};

export default GridContainer;
