import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = ({ offset = 80 }: { offset?: number }) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash) as HTMLElement | null;
      if (element) {
        // Scroll to the element minus offset for margin/top spacing
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }
  }, [hash, offset]);

  return null;
};

export default ScrollToHash;
