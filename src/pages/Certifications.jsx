import { useEffect, useRef, useState } from "react"
import { FaBuilding, FaCalendarAlt, FaTimes } from "react-icons/fa"

function Certifications() {
  const sectionRef = useRef(null)
  const [animate, setAnimate] = useState(false)
  const [selectedCert, setSelectedCert] = useState(null)
  const [badgeView, setBadgeView] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const certifications = [
    {
      image: "/images/userimg.jpg",
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "March 2023",
    },
    {
      image: "/images/userimg.jpg",
      title: "IoT Specialist Certification",
      issuer: "Cisco",
      date: "January 2023",
    },
    {
      image: "/images/userimg.jpg",
      title: "Full Stack Web Development",
      issuer: "Udacity",
      date: "November 2022",
    },
    {
      image: "/images/userimg.jpg",
      title: "Python Programming Expert",
      issuer: "Coursera",
      date: "September 2022",
    },
    {
      image: "/images/backimg/girl5.jpg",
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "July 2022",
    },
  ]

  // Intersection Animation
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

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === certifications.length - 1 ? 0 : prev + 1
      )
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Animated Stats Counter
  const Counter = ({ target }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!animate) return
      let start = 0
      const step = Math.ceil(target / 50)

      const interval = setInterval(() => {
        start += step
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
    <>
      <section
        id="certifications"
        ref={sectionRef}
        className="relative bg-black text-white py-24 px-6 overflow-hidden"
      >
        {/* Glow Background */}
        <div className="absolute -z-10 top-[-150px] left-[-150px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-3xl opacity-10"></div>

        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <h2 className="mx-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>

          {/* Toggle View */}
          <div className="flex justify-center mb-12">
            <button
              onClick={() => setBadgeView(!badgeView)}
              className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              Toggle Badge View
            </button>
          </div>

          {/* Auto Slider */}
          {!badgeView && (
            <div className="relative overflow-hidden mb-16">
              <div
                className="flex transition-transform duration-700"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="min-w-full flex justify-center"
                  >
                    <div
                      className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-md text-center hover:shadow-xl hover:shadow-cyan-500/20 transition"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-cover rounded-xl mb-6 cursor-pointer hover:scale-105 transition"
                        onClick={() => setSelectedCert(cert)}
                      />
                      <h3 className="text-lg font-semibold mb-2">
                        {cert.title}
                      </h3>
                      <div className="text-sm text-gray-400 mb-1 flex items-center justify-center">
                        <FaBuilding className="mr-2 text-cyan-400" />
                        {cert.issuer}
                      </div>
                      <div className="text-sm text-gray-400 flex items-center justify-center">
                        <FaCalendarAlt className="mr-2 text-purple-400" />
                        Issued: {cert.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Badge View */}
          {badgeView && (
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-sm font-medium hover:scale-105 transition cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  {cert.title}
                </div>
              ))}
            </div>
          )}

          {/* Stats Section */}
          <div className="grid sm:grid-cols-3 gap-10 text-center mt-16">
            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                <Counter target={certifications.length} />+
              </h3>
              <p className="text-gray-400 mt-2">Certifications</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-purple-400">
                <Counter target={5} />+
              </h3>
              <p className="text-gray-400 mt-2">Years Learning</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-pink-400">
                <Counter target={20} />+
              </h3>
              <p className="text-gray-400 mt-2">Projects Completed</p>
            </div>
          </div>

        </div>
      </section>

      {/* Modal Preview */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-gray-900 border border-white/10 rounded-2xl p-8 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <FaTimes />
            </button>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full rounded-xl mb-6"
            />

            <h3 className="text-xl font-semibold mb-2">
              {selectedCert.title}
            </h3>

            <p className="text-gray-400 mb-1">
              Issuer: {selectedCert.issuer}
            </p>

            <p className="text-gray-400">
              Issued: {selectedCert.date}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Certifications