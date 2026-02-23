import { useEffect, useState } from "react"
import { FaChevronUp } from "react-icons/fa"

function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const percent = (scrollTop / docHeight) * 100
      setScrollPercent(percent)

      // Auto-hide near top
      if (scrollTop > 150) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const radius = 26
  const circumference = 2 * Math.PI * radius
  const offset =
    circumference - (scrollPercent / 100) * circumference

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <div className="relative w-16 h-16">

        {/* SVG Progress Ring */}
        <svg
          className="absolute inset-0 -rotate-90"
          width="64"
          height="64"
        >
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="4"
            fill="transparent"
          />
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.2s ease" }}
          />
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Button */}
        <button
          onClick={scrollToTop}
          className="
            absolute inset-2
            rounded-full
            bg-gradient-to-r from-cyan-500 to-purple-600
            flex items-center justify-center
            text-white
            shadow-lg shadow-cyan-500/40
            hover:scale-110
            transition-transform duration-300
          "
        >
          <FaChevronUp />
        </button>
      </div>
    </div>
  )
}

export default ScrollProgress