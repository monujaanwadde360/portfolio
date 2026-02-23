import { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20)

      const sections = document.querySelectorAll("section")

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const id = section.getAttribute("id")

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id)
        }
      })
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const navItems = [
    "home",
    "about",
    "services",
    "skills",
    "projects",
    "achievements",
    "certifications",
    "contact",
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        sticky
          ? "backdrop-blur-xl bg-black/80 shadow-lg shadow-cyan-500/10 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* Logo */}
        <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Monujaan
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium text-sm lg:text-base">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`relative transition ${
                  active === item
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-400"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                    active === item ? "w-full" : "w-0"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-xl sm:text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-black/95 backdrop-blur-xl flex flex-col items-center space-y-6 py-8 text-base sm:text-lg">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className={`transition ${
                  active === item
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-400"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar