interface LogoGridProps {
  title?: string;
  logos: Array<{
    name: string;
    logo?: string;
  }>;
  className?: string;
}

const LogoGrid = ({ title, logos, className = "" }: LogoGridProps) => {
  return (
    <div className={`w-full my-20 ${className}`}>
      <h2 className="font-primary text-2xl uppercase text-center mb-12">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center justify-items-center">
        {logos.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-center h-16 w-full ${item.name === "TD Securities" ? 'w-[160px] md:w-[170px]' : 'w-[140px] md:w-[150px] '} `}
          >
            {item.logo ? (
              <img
                src={item.logo}
                alt={item.name}
                className={`${item.name === "TD Securities" ? 'h-16 md:h-20' : 'h-12 md:h-16'} w-auto object-contain hover:grayscale-0 transition-all duration-300`}
              />
            ) : (
              <span className="text-gray-600 font-semibold text-center px-4">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;