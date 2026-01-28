import { useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Brain,
  Code2,
  TrendingUp,
  Shield,
  Cloud,
  Cpu,
  X
} from "lucide-react";

/* ------------------ DATA ------------------ */

const categories = ["All", "Engineering", "AI", "Cloud", "Growth"];

const services = [
  {
    id: 1,
    title: "AI & Machine Learning",
    category: "AI",
    icon: Brain,
    desc: "Intelligent automation and predictive analytics for modern businesses.",
    details: "Custom ML models, NLP, computer vision and LLM integrations."
  },
  {
    id: 2,
    title: "Custom Software",
    category: "Engineering",
    icon: Code2,
    desc: "Scalable, secure software platforms built for growth.",
    details: "Web apps, mobile apps, APIs, and system integrations."
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    category: "Cloud",
    icon: Cloud,
    desc: "High-availability infrastructure and CI/CD pipelines.",
    details: "AWS, Docker, Kubernetes, monitoring and automation."
  },
  {
    id: 4,
    title: "Cyber Security",
    category: "Engineering",
    icon: Shield,
    desc: "Protect your data and systems from evolving threats.",
    details: "Security audits, penetration testing, compliance."
  },
  {
    id: 5,
    title: "Growth Marketing",
    category: "Growth",
    icon: TrendingUp,
    desc: "Data-driven strategies to scale your business.",
    details: "SEO, performance ads, CRO, analytics."
  },
  {
    id: 6,
    title: "Edge Computing",
    category: "AI",
    icon: Cpu,
    desc: "Low-latency intelligent systems at the edge.",
    details: "IoT processing, real-time analytics and deployment."
  }
];

/* ------------------ COMPONENT ------------------ */

export function Capabilities() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState<any>(null);

  /* -------- Mobile Detection -------- */
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }, []);

  /* -------- Scroll Animations (Desktop only) -------- */
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  /* -------- Filter -------- */
  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  /* ------------------ UI ------------------ */

  return (
    <section className="relative py-28 overflow-hidden bg-[#0B0F19] text-white">

      {/* ---------- Background ---------- */}
      {!isMobile ? (
        <motion.div
          style={{ y: backgroundY, opacity: bgOpacity }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#2098D0]/20 blur-[120px]" />
          <div className="absolute top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#95C1D9]/20 blur-[120px]" />
        </motion.div>
      ) : (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#2098D0]/10" />
          <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#95C1D9]/10" />
        </div>
      )}

      {/* ---------- Content ---------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Our Capabilities
        </h2>

        <p className="text-center text-white/70 max-w-2xl mx-auto mb-14">
          We blend engineering excellence with creative innovation to build
          scalable digital solutions.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full border transition
                ${activeCategory === cat
                  ? "bg-white text-black"
                  : "border-white/20 text-white/80 hover:border-white/50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ---------- Grid ---------- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {!isMobile ? (
            <AnimatePresence mode="wait">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setSelectedService(service)}
                  className="cursor-pointer rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-white/30 transition"
                >
                  <service.icon className="w-10 h-10 text-[#95C1D9] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          ) : (
            filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="cursor-pointer rounded-2xl bg-white/10 border border-white/10 p-6"
              >
                <service.icon className="w-10 h-10 text-[#95C1D9] mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm">{service.desc}</p>
              </div>
            ))
          )}

        </div>
      </div>

      {/* ---------- Modal ---------- */}
      {selectedService && (
        isMobile ? (
          <>
            <div
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setSelectedService(null)}
            />
            <div className="fixed inset-4 bg-[#0B0F19] border border-white/10 rounded-2xl z-50 p-6 overflow-auto">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>
              <h3 className="text-2xl font-bold mb-4">
                {selectedService.title}
              </h3>
              <p className="text-white/80">{selectedService.details}</p>
            </div>
          </>
        ) : (
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0B0F19] border border-white/10 rounded-2xl p-8 max-w-lg w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4"
                >
                  <X />
                </button>
                <h3 className="text-2xl font-bold mb-4">
                  {selectedService.title}
                </h3>
                <p className="text-white/80">{selectedService.details}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )
      )}
    </section>
  );
}
