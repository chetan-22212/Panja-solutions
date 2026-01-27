import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import imagejj from "../assets/imagejj.webp";
import imageii from "../assets/imageii.webp";

const heroImages = [
  { url: imagejj, alt: "AI Technology Innovation" },
  { url: imageii, alt: "Digital Transformation" },
];


const isIOS =
  typeof window !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // ✅ Only enable scroll animations on non-iOS
  const { scrollYProgress } = useScroll(
    !isIOS
      ? { target: ref, offset: ["start start", "end start"] }
      : undefined
  );

  const yText = !isIOS
    ? useTransform(scrollYProgress!, [0, 1], ["0%", "40%"])
    : undefined;

  const opacityText = !isIOS
    ? useTransform(scrollYProgress!, [0, 0.5], [1, 0])
    : undefined;

  const scaleText = !isIOS
    ? useTransform(scrollYProgress!, [0, 1], [1, 0.95])
    : undefined;

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 z-0">
        {isIOS ? (
          // ✅ iOS: static fade only
          <img
            src={heroImages[currentSlide].url}
            alt={heroImages[currentSlide].alt}
            className="w-full h-full object-cover transition-opacity duration-700"
            loading="eager"
            decoding="async"
          />
        ) : (
          // ✅ Desktop: animated slideshow
          <AnimatePresence mode="sync">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.08 }}
                transition={{ duration: 6, ease: "linear" }}
                className="w-full h-full"
              >
                <img
                  src={heroImages[currentSlide].url}
                  alt={heroImages[currentSlide].alt}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* ===== TEXT ===== */}
      {isIOS ? (
        // ✅ iOS: simple content, no motion
        <div className="relative z-20 text-center px-4 max-w-7xl mx-auto">
          <span className="text-[#95C1D9] font-medium tracking-[0.2em] uppercase text-3xl md:text-4xl">
            Panja Solutions
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8">
            Engineering
            <span className="block pb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#95C1D9] to-[#2098D0]">
              Digital Excellence
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-lg md:text-xl text-white/90">
            Crafting future-proof digital ecosystems through precision
            engineering and cinematic design.
          </p>
        </div>
      ) : (
        // ✅ Desktop: animated text
        <motion.div
          style={{ y: yText, opacity: opacityText, scale: scaleText }}
          className="relative z-20 text-center px-4 max-w-7xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#95C1D9] font-medium tracking-[0.2em] uppercase text-3xl md:text-4xl block mb-4"
          >
            Panja Solutions
          </motion.span>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Engineering
            </motion.span>
            <motion.span
              className="block pb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#95C1D9] to-[#2098D0]"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Digital Excellence
            </motion.span>
          </h1>

          <motion.p
            className="max-w-xl mx-auto text-lg md:text-xl text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Crafting future-proof digital ecosystems through precision
            engineering and cinematic design.
          </motion.p>
        </motion.div>
      )}

      {/* ===== SLIDE DOTS ===== */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentSlide ? "bg-white w-8" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
