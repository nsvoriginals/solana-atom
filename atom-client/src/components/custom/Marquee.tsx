import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; // Optional: For better cleanup and React integration

// Constants for reusable values
const MARQUEE_ITEMS = ["Google", "Microsoft", "Netflix", "Facebook"];
const MARQUEE_SPEED = 10; // Duration in seconds
const MARQUEE_SPACING = "mx-16"; // Spacing between items

export const Marquee = () => {
  const marqueeRef = useRef(null);

  // Animation logic
  useGSAP(() => {
    gsap.to(marqueeRef.current, {
      xPercent: -100, // Move left infinitely
      repeat: -1, // Infinite loop
      duration: MARQUEE_SPEED,
      ease: "linear",
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden text-black dark:bg-black dark:text-white py-6">
      
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10"></div>

      
      <div className="flex whitespace-nowrap w-max" ref={marqueeRef}>
        {MARQUEE_ITEMS.map((company, index) => (
          <span
            key={index}
            className={`text-black dark:text-white text-5xl font-bold ${MARQUEE_SPACING} opacity-80`}
          >
            {company}
          </span>
        ))}
      </div>
    </div>
  );
};