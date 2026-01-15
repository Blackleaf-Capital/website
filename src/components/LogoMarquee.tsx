interface LogoMarqueeProps {
  title?: string;
  logos: Array<{
    name: string;
    logo?: string;
  }>;
  className?: string;
}

const LogoMarquee = ({ title, logos, className = "" }: LogoMarqueeProps) => {
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className={`w-full my-10 ${className}`}>
      {title && (
        <h2 className="font-primary text-2xl uppercase text-center mb-12 px-4">
          {title}
        </h2>
      )}

      {/* The wrapper has a 'mask-image' to create a fade effect at the edges.
          'pause-on-hover' refers to the class we added in global CSS.
      */}
      <div 
        className="relative overflow-hidden pause-on-hover"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="animate-marquee py-4">
          {duplicatedLogos.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center justify-center flex-shrink-0 w-[140px] md:w-[150px] mx-2 md:mx-10"
            >
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              ) : (
                <span className="text-gray-500 font-semibold text-sm md:text-base whitespace-nowrap">
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