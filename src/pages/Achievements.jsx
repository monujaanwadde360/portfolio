import { useEffect, useRef, useState } from "react"
import {
  FaTrophy,
  FaAward,
  FaMedal,
  FaStar,
  FaCertificate,
  FaGraduationCap,
} from "react-icons/fa"

function Achievements() {
  const sectionRef = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const achievements = [
    {
      icon: FaTrophy,
      date: "January 2024",
      title: "Best IoT Project Award",
      description:
        "Recognized for developing an innovative IoT home automation system.",
    },
    {
      icon: FaAward,
      date: "March 2023",
      title: "Hackathon Winner",
      description:
        "Won first place for building a web security testing framework.",
    },
    {
      icon: FaMedal,
      date: "December 2022",
      title: "Academic Excellence",
      description:
        "Awarded for outstanding academic performance in Computer Science.",
    },
    {
      icon: FaStar,
      date: "October 2022",
      title: "Open Source Contributor",
      description:
        "Significant contributions to open-source security tools.",
    },
    {
      icon: FaCertificate,
      date: "July 2022",
      title: "Technical Paper Publication",
      description:
        "Published research on IoT security systems.",
    },
    {
      icon: FaGraduationCap,
      date: "May 2022",
      title: "Dean's List",
      description:
        "Consistently achieved academic excellence.",
    },
  ]

  // Animated Counter Component
  const Counter = ({ target }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!animate) return
      let start = 0
      const increment = Math.ceil(target / 40)

      const interval = setInterval(() => {
        start += increment
        if (start >= target) {
          start = target
          clearInterval(interval)
        }
        setCount(start)
      }, 30)

      return () => clearInterval(interval)
    }, [animate, target])

    return <span>{count}</span>
  }

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* Glow Accent */}
      <div className="absolute -z-10 top-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto">

        {/* Premium Title */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-cyan-400"></div>
          <h2 className="mx-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>

        {/* Achievement Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {achievements.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className={`
                p-8 rounded-2xl
                bg-white/5 border border-white/10
                hover:border-cyan-400/40
                hover:shadow-xl hover:shadow-cyan-500/20
                hover:-translate-y-2
                transition-all duration-500
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-cyan-400 text-2xl mb-4">
                  <Icon />
                </div>

                <div className="text-sm text-gray-400 mb-2">
                  {item.date}
                </div>

                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Animated Stats Counters */}
        <div className="grid sm:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-bold text-cyan-400">
              <Counter target={achievements.length} />+
            </h3>
            <p className="text-gray-400 mt-2">Total Achievements</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-purple-400">
              <Counter target={5} />+
            </h3>
            <p className="text-gray-400 mt-2">Awards Won</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-pink-400">
              <Counter target={10} />+
            </h3>
            <p className="text-gray-400 mt-2">Recognitions</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Achievements