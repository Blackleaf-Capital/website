interface LogoMarqueeProps {
  title: string;
  logos: Array<{
    name: string;
    logo?: string;
  }>;
  className?: string;
}

const LogoMarquee = ({ title, logos, className = "" }: LogoMarqueeProps) => {
  // Duplicate the logos array to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={`w-full my-20 ${className}`}>
      <h2 className="font-primary text-2xl uppercase text-center mb-12">{title}</h2>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee space-x-12 whitespace-nowrap">
          {duplicatedLogos.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center justify-center h-16 min-w-[150px] flex-shrink-0"
            >
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-16 w-auto mr-5 object-contain hover:grayscale-0 transition-all duration-300"
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
    </div>
  );
};

export default LogoMarquee;