import { useEffect, useRef, useState } from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaPython,
  FaUserShield,
  FaMicrochip,
} from "react-icons/fa"

function Skills() {
  const [animate, setAnimate] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      icon: FaHtml5,
      name: "HTML",
      description: "Semantic markup and modern HTML5 features",
      percent: 90,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: FaCss3Alt,
      name: "CSS",
      description: "Responsive design and modern CSS3 animations",
      percent: 85,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: FaJsSquare,
      name: "JavaScript",
      description: "ES6+, DOM manipulation and async programming",
      percent: 75,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      icon: FaReact,
      name: "React",
      description: "Component-based architecture and state management",
      percent: 70,
      link: "https://reactjs.org/",
    },
    {
      icon: FaNodeJs,
      name: "Node.js",
      description: "Server-side JavaScript and REST APIs",
      percent: 65,
      link: "https://nodejs.org/",
    },
    {
      icon: FaPhp,
      name: "PHP",
      description: "Server-side scripting and backend integration",
      percent: 80,
      link: "https://www.php.net/",
    },
    {
      icon: FaDatabase,
      name: "MySQL",
      description: "Database design and query optimization",
      percent: 75,
      link: "https://www.mysql.com/",
    },
    {
      icon: FaPython,
      name: "Python",
      description: "Automation, scripting and analysis",
      percent: 60,
      link: "https://www.python.org/",
    },
    {
      icon: FaUserShield,
      name: "Ethical Hacking",
      description: "Penetration testing and security assessment",
      percent: 70,
      link: "https://www.eccouncil.org/",
    },
    {
      icon: FaMicrochip,
      name: "IoT Systems",
      description: "Hardware integration and sensor programming",
      percent: 75,
      link: "https://www.raspberrypi.org/",
    },
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute -z-10 bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-cyan-500 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-cyan-400"></div>
          <h2 className="mx-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>

        {/* DESCRIPTION */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h3 className="text-2xl font-semibold mb-4">
            Professional Expertise
          </h3>

          <p className="text-gray-400 leading-relaxed mb-6">
            I specialize in secure full-stack development, cybersecurity,
            and IoT-based real-world automation systems.
            I continuously explore new technologies to build scalable,
            secure and innovative solutions.
          </p>

          <a
            href="#projects"
            className="
              px-6 py-3 rounded-full
              bg-gradient-to-r from-cyan-500 to-purple-600
              hover:scale-105
              transition
              shadow-lg shadow-cyan-500/30
              inline-block
            "
          >
            View My Projects
          </a>
        </div>

        {/* SKILLS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={index}
                className="
                  p-6 rounded-2xl
                  bg-white/5
                  border border-white/10
                  hover:border-cyan-400/40
                  hover:shadow-lg hover:shadow-cyan-500/20
                  hover:-translate-y-2
                  transition-all duration-300
                "
              >
                <div className="mb-4 text-cyan-400 text-2xl">
                  <Icon />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {skill.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {skill.description}
                </p>

                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Proficiency</span>
                  <span className="text-cyan-400">
                    {skill.percent}%
                  </span>
                </div>

                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-[1500ms]"
                    style={{
                      width: animate ? `${skill.percent}%` : "0%",
                    }}
                  ></div>
                </div>

                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-cyan-400 hover:text-purple-400 transition"
                >
                  Learn More →
                </a>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Skills