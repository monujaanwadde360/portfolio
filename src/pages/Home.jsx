import { useEffect, useRef } from "react"
import Typed from "typed.js"
import Particles from "@tsparticles/react"
import { FaChevronDown } from "react-icons/fa"

function Home() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full-Stack Developer",
        "Cybersecurity Enthusiast",
        "IoT Systems Architect",
        "Creative Technologist",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
    })

    return () => typed.destroy()
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Premium Gradient Glow */}
<div className="absolute inset-0 -z-10">
  <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-purple-600/30 blur-[120px] rounded-full -translate-x-1/2" />
  <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />
</div>

      {/* ===== Particles Background (Correct Version) ===== */}
      <Particles
        id="tsparticles"
        className="absolute inset-0"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            color: { value: "#ffffff" },
            size: { value: 3 },
            links: {
              enable: true,
              distance: 140,
              color: "#22d3ee",
              opacity: 0.2,
            },
            move: {
              enable: true,
              speed: 1.5,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
          },
        }}
      />

      {/* ===== Hero Content ===== */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* Small Intro */}
        <p className="text-gray-400 tracking-widest uppercase text-sm mb-6">
          Welcome to My Digital Space
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          Monujaan Wadde
        </h1>

        {/* Dynamic Role */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          I'm a <span ref={typedRef} className="text-cyan-400"></span>
        </h2>

        {/* Professional Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I build secure, scalable, and high-performance digital solutions.
          Passionate about full-stack development, cybersecurity research,
          and IoT innovation — transforming complex problems into
          intelligent real-world systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/40"
          >
            Let's Work Together
          </a>

          <a
            href="#projects"
            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition duration-300"
          >
            Explore My Work
          </a>
        </div>
      </div>

      {/* ===== Scroll Mouse Indicator ===== */}
      {/* Scroll Down Indicator */}
<a
  href="#about"
  className="
    absolute bottom-8 left-1/2 -translate-x-1/2
    flex flex-col items-center
    text-gray-400 hover:text-cyan-400
    transition
    group
  "
>
  <span className="text-sm mb-2 opacity-70 group-hover:opacity-100 transition">
    Scroll
  </span>

  <div className="
    w-10 h-10 flex items-center justify-center
    rounded-full
    border border-white/20
    group-hover:border-cyan-400
    animate-bounce
    transition
  ">
    <FaChevronDown className="text-lg" />
  </div>
</a>

    </section>
  )
}

export default Home