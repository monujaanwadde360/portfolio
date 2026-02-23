import { useState, useEffect } from "react"
import { FaTimes } from "react-icons/fa"

function Projects() {
  const [filter, setFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 3

  const projects = [
    {
      category: "development",
      title: "ESP-32 Device Control",
      shortDesc: "IoT home automation with Android.",
      description:
        "Control appliances remotely using ESP-32 with IoT monitoring features.",
      link: "#",
    },
    {
      category: "design",
      title: "Portfolio Website",
      shortDesc: "Modern responsive portfolio.",
      description: "Responsive portfolio with smooth UI animations.",
      link: "#",
    },
    {
      category: "security",
      title: "Penetration Testing Framework",
      shortDesc: "Security vulnerability system.",
      description: "Reconnaissance and exploitation testing framework.",
      link: "#",
    },
    {
      category: "development",
      title: "Distance Monitoring",
      shortDesc: "Ultrasonic monitoring system.",
      description: "Raspberry Pi distance monitoring architecture.",
      link: "#",
    },
    {
      category: "security",
      title: "Phishing Simulation",
      shortDesc: "Security awareness testing.",
      description: "Controlled phishing simulations for awareness.",
      link: "#",
    },
  ]

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter)

  const totalPages = Math.ceil(filtered.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const currentProjects = filtered.slice(startIndex, startIndex + projectsPerPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [filter])

  return (
    <>
      <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <h2 className="mx-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-6 mb-16 flex-wrap">
            {["all", "design", "development", "security"].map((btn) => (
              <button
                key={btn}
                onClick={() => setFilter(btn)}
                className={`px-6 py-2 rounded-full border transition ${
                  filter === btn
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 border-transparent"
                    : "border-white/20 hover:bg-white/10"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="group rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-500"
              >
                {/* Category Badge */}
                <span className="text-xs uppercase tracking-widest text-cyan-400">
                  {project.category}
                </span>

                <h3 className="text-xl font-semibold mt-3 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6">
                  {project.shortDesc}
                </p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition text-sm"
                >
                  View Project
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-16 gap-4">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full border ${
                    currentPage === i + 1
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 border-transparent"
                      : "border-white/20 hover:bg-white/10"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 border border-white/10 rounded-2xl max-w-2xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition"
            >
              <FaTimes />
            </button>

            <h2 className="text-2xl font-bold mb-4">
              {selectedProject.title}
            </h2>

            <p className="text-gray-300 mb-6">
              {selectedProject.description}
            </p>

            <a
              href={selectedProject.link}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 inline-block"
            >
              Open Project
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects