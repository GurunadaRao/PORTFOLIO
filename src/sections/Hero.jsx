import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-y-10 max-w-7xl">
        {/* Left: Text Content */}
        <div className="text-center md:text-left flex-1 w-full max-w-xl md:max-w-2xl order-2 md:order-1">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <TypeAnimation
              sequence={["Hi, I'm Gurunada Rao ", 2000]}
              wrapper="span"
              speed={50}
              className="inline-block"
              cursor={false}
            />
            <br className="hidden md:inline" />
          </motion.h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              "Frontend Developer 💻",
              2000,
              "IoT Tinkerer 🤖",
              2000,
              "Fullstack Explorer 🌐",
              2000,
              "Tech Enthusiast 🚀",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="block text-lg sm:text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 font-semibold mb-6"
            repeat={Infinity}
          />

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Accelerated Development with Artificial Intelligence by focussing on
            real-world projects.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
            >
              Check My Work
            </Link>
            <a
              href="https://drive.google.com/file/d/1Uu_-N8VeDnFxe9DYooTq2JJODIRUvnrr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border hover:bg-indigo-500 border-indigo-600 text-indigo-400 px-6 py-3 rounded-xl font-medium transition hover:text-indigo-700 sm:hover:bg-indigo-100 dark:hover:bg-gray-800 dark:hover:text-white md:hover:bg-transparent "
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          className="flex-1 w-full flex justify-center order-1 md:order-2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMBpkr7arRF7ydBdczLVxbjGYxWUsWQTOF_mxss47qbfR11WI0JlMj9cGFtGDLaPMft2A1GImHX3Un8Ky3asaOIrTcu8d5qdiXW7jHUwjmrcXZtMbkeSmAjTUGEL9nch7BQEALTV4pVE6LJlCxnzCGFGfnLdrZPuYhyczLlzj1gu_cQ2FMCcAME800wI0/s320/final.jpg"
            alt="GURUNADA RAO"
            border="0"
            className=" border-4 border-blue-500 rounded-full shadow-lg ring-2 ring-blue-400/50 shadow-blue-500  "
          ></img>
        </motion.div>
      </div>
    </section>
  );
}
