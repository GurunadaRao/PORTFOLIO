import { motion } from "framer-motion";

const projects = [
 
  {
    title: "Starbucks Clone (Starbevs)",
    description:
      "Starbucks, but make it custom ☕. A slick clone with responsive UI and animations.",
    tech: "React, TailwindCSS, Firebase",
    img: "https://img.etimg.com/thumb/width-420,height-315,imgsize-91518,resizemode-75,msid-116510855/industry/cons-products/food/starbucks-fully-committed-to-indian-market-says-india-jv-tata-starbucks/starbucks.jpg", // replace with your screenshot
    link: "https://starbucks-clone-ktkx.vercel.app/",
  },
  {
    title: "Smart Gas Detection System",
    description:
      "Detects gas leaks, sends alerts, and triggers safety protocols. Your kitchen’s MVP.",
    tech: "ESP32, Blynk, Sensors, C++, IoT",
    img: "https://www.ishn.com/ext/resources/Issues/2018/11-November/ISHN1118_F3_pic.jpg?1540991412", // replace with your image
    link: "https://dawn-level-maize.glitch.me/",
  },
  {
    title: "Weather App",
    description:
      "Weather updates in style. A simple app to check temperature, humidity, and vibe levels.",
    tech: "HTML, CSS, JavaScript, OpenWeatherMap API",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyp3I4d1dyUilENcDxwqKHMwcnFrAOq-BBvg&s", // replace with screenshot
    link: "https://fourth-adaptable-swim.glitch.me/",
  },
  {
    title: "Netflix Clone",
    description:
      "Streaming UI that looks like Netflix but without the chill. Uses TMDB for real data.",
    tech: "React, Firebase, TMDB API",
    img: "https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png", // replace with screenshot
    link: "https://fate-cerulean-orbit.glitch.me/",
  },
   {
    title: "Grammar Corrector App",
    description:
      "Fix grammar errors like a boss using AI. Real-time grammar correction with OpenAI API.",
    tech: "React, Node.js, Express, OpenAI API",
    img: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/06/teaching-grammar-to-kids.jpg", // replace with your own screenshot
    link: "https://your-grammar-app-link.com",
  },
];

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects I'm Proud Of 🚀
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex flex-col justify-between border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">
                  🔧 Tech: {project.tech}
                </p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
