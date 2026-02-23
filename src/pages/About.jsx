import { useState } from "react"

function About() {
  const [activeTab, setActiveTab] = useState("education") // Education first

  const experienceData = [
    {
      date: "2023 - 2025",
      title: "Web Development Projects",
      company: "Personal Portfolio",
      description:
        "Designed and developed responsive portfolio websites using modern UI/UX principles.",
    },
    {
      date: "2023 - 2025",
      title: "Ethical Hacking & Security Research",
      company: "Independent Projects",
      description:
        "Performed penetration testing on Android and Windows systems.",
    },
    {
      date: "2022 - 2025",
      title: "IoT Systems Development",
      company: "Independent Projects",
      description:
        "Built IoT systems using Raspberry Pi, Arduino, and ESP-32.",
    },
  ]

  const educationData = [
    {
      date: "2024 - 2026",
      title: "M.Sc. in Computer Science",
      company: "Ramakrishna Mission Residential College",
      description:
        "Currently pursuing Master's degree focused on advanced computing.",
    },
    {
      date: "2021 - 2024",
      title: "B.Sc. (Hons) in Computer Science",
      company: "Ramakrishna Mission Vidyamandira",
      description:
        "Strong academic foundation in programming and security.",
    },
  ]

  const data = activeTab === "experience" ? experienceData : educationData

  return (
    <section id="about" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Premium Section Title with Lines */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-cyan-400"></div>
          <h2 className="mx-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-30"></div>
              <img
                src="/images/userimg.jpg"
                alt="Profile"
                className="relative rounded-3xl w-80 shadow-2xl border border-white/10"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              I'm <span className="text-cyan-400">Monujaan Wadde</span>, a{" "}
              <span className="text-purple-400">Creative Developer</span>
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Passionate about building secure web applications,
              exploring cybersecurity, and developing IoT systems.
            </p>

            {/* Tabs */}
            <div className="flex gap-6 mb-10">
              {["education", "experience"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-2 font-medium transition ${
                    activeTab === tab
                      ? "text-cyan-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}

                  {activeTab === tab && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
                >
                  <p className="text-sm text-cyan-400 mb-1">{item.date}</p>
                  <h4 className="text-lg font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-purple-400 text-sm mb-2">
                    {item.company}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex gap-6 flex-wrap">
              <a
                href="#"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition shadow-lg shadow-cyan-500/30"
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About