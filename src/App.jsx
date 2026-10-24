import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import gsap from "gsap";
import "./App.css";

const images = [
  "/pexels-enginakyurt-5200063.jpg",
  "/pexels-lukhe-27379946.jpg",
  "/pexels-nadin-sh-78971847-26903058.jpg",
  "/pexels-william-posser-2150279702-32025819.jpg",
  "/pexels-clarence-chan-2160207969-37192725.jpg",
]; // Initialize a new Lenis instance for smooth scrolling

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const container = useRef(null);
  const lenisRef = useRef(null);

  useGSAP(
    () => {
      // Your Lenis setup and ScrollTrigger can remain here.
      const lenis = new Lenis();
      lenisRef.current = lenis;
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      const sections = gsap.utils.toArray(".section");
      const imgWrapper = gsap.utils.toArray(".imgWrapper");
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 83%",
          end: "top 16%",
          scrub: true,
          markers: true,
          animation: gsap.from(imgWrapper[index], {
            clipPath: "inset(100% 0 0 0)",
            ease: "none",
          }),
        });
      });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="imgWrapper w-[500px] h-[600px]">
            <img
              src={images[0]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 imgWrapper w-[500px] h-[600px]">
            <img
              src={images[1]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 imgWrapper w-[500px] h-[600px]">
            <img
              src={images[2]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="h-screen border-b-2"></div>
      <div className="h-screen border-y-2 section"></div>
      <div className="h-screen border-b-2 section"></div>
      <div className="h-screen section"></div>
    </div>
  );
};

export default App;
