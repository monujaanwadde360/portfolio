import {
  FaPaintBrush,
  FaUserShield,
  FaNetworkWired,
  FaMicrochip,
  FaBroadcastTower,
  FaRulerCombined,
} from "react-icons/fa"

function Services() {
  const services = [
    {
      icon: FaPaintBrush,
      title: "Website Design",
      description:
        "I design clean, responsive, and user-friendly portfolio websites with modern UI/UX principles.",
    },
    {
      icon: FaUserShield,
      title: "Ethical Hacking",
      description:
        "Performed penetration testing on Android and Windows systems to identify vulnerabilities.",
    },
    {
      icon: FaNetworkWired,
      title: "Phishing & Social Engineering",
      description:
        "Simulated phishing attacks and social engineering techniques to assess security awareness.",
    },
    {
      icon: FaMicrochip,
      title: "IoT Experiments",
      description:
        "Developed innovative IoT solutions using Raspberry Pi and Arduino for automation.",
    },
    {
      icon: FaBroadcastTower,
      title: "ESP-32 Device Control",
      description:
        "Built remote appliance control systems using ESP-32 and Android integration.",
    },
    {
      icon: FaRulerCombined,
      title: "Distance Monitoring",
      description:
        "Implemented real-time ultrasonic distance monitoring with edge communication.",
    },
  ]

  return (
    <section
      id="services"
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute -z-10 top-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto">

        {/* Premium Title */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-cyan-400"></div>
          <h2 className="mx-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            My Services
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="
                p-8 rounded-2xl
                bg-white/5
                border border-white/10
                hover:border-cyan-400/40
                hover:shadow-lg hover:shadow-cyan-500/20
                hover:-translate-y-3
                transition-all duration-300
                group
                "
              >
                {/* Icon */}
                <div
                  className="
                  w-14 h-14 flex items-center justify-center rounded-xl
                  bg-gradient-to-r from-cyan-500 to-purple-600
                  shadow-lg shadow-cyan-500/30
                  mb-6
                  group-hover:scale-110
                  transition-transform
                  "
                >
                  <Icon className="text-white text-xl" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="text-cyan-400 hover:text-purple-400 transition font-medium"
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

export default Services