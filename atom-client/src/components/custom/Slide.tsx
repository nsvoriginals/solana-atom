// components/ScrollAnimation.js
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const ScrollAnimation = () => {
  useGSAP(() => {
    // GSAP animation for scaling the text in #page2
    gsap.to("#page2 h1", {
      scale: 0.5,
      scrollTrigger: {
        trigger: "#page2",
        start: "top 50%", // Animation starts when the top of #page2 hits 50% of the viewport
        end: "top 0%",   // Animation ends when the top of #page2 hits 0% of the viewport
        scrub: 1.4,      // Smooth scrubbing effect
        pin: true,       // Pin the element while scrolling
      },
    });

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Page 1 */}
      <div className="h-screen w-full flex flex-col justify-center items-center text-center">
        <h1 className="text-8xl font-Nue">
          ALL IN <span className="text-8xl font-Nokia font-bold">o</span>NE PLA<span className="font-Nokia font-bold">c</span>E
        </h1>
        <h1 className="text-8xl font-bold font-Nokia mt-16">solana</h1>
      </div>

      {/* Page 2 */}
      <div
        id="page2"
        className="w-full h-screen bg-green-400 flex justify-start items-center text-start"
      >
        <h1 className="text-[55rem] font-Nokia text-black">experience</h1>
      </div>
    </>
  );
};