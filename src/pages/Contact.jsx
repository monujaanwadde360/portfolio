import { useState } from "react"
import {
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)

    setStatus("Message sent successfully!")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section
      id="contact"
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute -z-10 top-[-150px] right-[-150px] w-[400px] h-[400px] bg-cyan-500 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto">

        {/* Premium Title */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-cyan-400"></div>
          <h2 className="mx-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Get in Touch
            </h3>

            <p className="text-gray-400 mb-8">
              Feel free to reach out for collaborations or inquiries.
              I'm always open to new projects and ideas.
            </p>

            <div className="space-y-6">

              <div className="flex items-start space-x-4">
                <FaUser className="text-cyan-400 mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Name</div>
                  <div>Monujaan Wadde</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-purple-400 mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Address</div>
                  <div>Narayanpur, Chhattisgarh, India</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-cyan-400 mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div>monujaanwadde180@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhone className="text-purple-400 mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div>+91 9999999999</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-10">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-gradient-to-r from-cyan-500 to-purple-600 transition"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Message Me
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400"
              />

              <textarea
                name="message"
                placeholder="Message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400"
              ></textarea>

              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition"
              >
                Send Message
              </button>

              {status && (
                <div className="text-green-400 text-sm mt-2">
                  {status}
                </div>
              )}
            </form>

            {/* India Map */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=Narayanpur,Chhattisgarh,India&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                title="Narayanpur India Map"
                className="rounded-2xl"
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact