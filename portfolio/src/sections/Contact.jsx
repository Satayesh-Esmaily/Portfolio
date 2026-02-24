import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa"

function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Connect <span className="text-cyan-400">With Me</span>
        </h2>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-12 text-3xl">

          <a
            href="https://github.com/Satayesh-Esmaily"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="http://www.linkedin.com/in/satayesh-esmaily-8a2555342"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/satayesh.esmaily"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>

        </div>

        {/* Contact Info Card */}
        <div className="bg-slate-800 p-8 rounded-2xl shadow-lg space-y-6">

          <div className="flex items-center justify-center gap-3 text-gray-300">
            <FaEnvelope className="text-cyan-400" />
            <span>setayeshesmaily59@gmail.com</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-gray-300">
            <FaPhone className="text-cyan-400" />
            <span>+93 791652761</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact