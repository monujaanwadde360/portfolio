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
      className={`fixed top-0 left-0 shadow-[0_8px_30px_rgba(0,255,255,0.15)] border-b border-white/10 w-full z-50 transition-all duration-500 ${
        sticky
          ? "backdrop-blur-2xl bg-black/70 shadow-[0_8px_30px_rgba(0,255,255,0.15)] border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Animated Logo with gradient animation */}
        <div className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x cursor-pointer">
          Monujaan
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-base">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item}`}
                aria-current={active === item ? "true" : undefined}
                className={`transition-all duration-300 ${
                  active === item
                    ? "text-cyan-400"
                    : "text-white group-hover:text-cyan-400"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
              {/* Animated Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                  active === item ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-white text-2xl transition-transform duration-300 hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
<div
  className={`absolute top-full right-4 w-56 bg-black/90 backdrop-blur-2xl rounded-2xl transform transition-all duration-300 ease-in-out ${
    menuOpen ? "opacity-100 translate-y-2" : "opacity-0 -translate-y-5 pointer-events-none"
  } z-50`}
>
  <ul className="flex flex-col p-5 space-y-4 text-lg border border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(0,255,255,0.15)]">
    {navItems.map((item) => (
      <li key={item} className="relative group">
        <a
          href={`#${item}`}
          onClick={() => setMenuOpen(false)}
          className={`block transition-all duration-300 ${
            active === item
              ? "text-cyan-400"
              : "text-white hover:text-cyan-400"
          }`}
        >
          <span className="relative inline-block">
            {item.charAt(0).toUpperCase() + item.slice(1)}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                active === item ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </span>
        </a>
      </li>
    ))}
  </ul>
</div>
    </nav>
  )
}

export default Navbar