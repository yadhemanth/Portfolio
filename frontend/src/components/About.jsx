import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-white dark:bg-gray-900">
      <div className="w-full max-w-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am a Computer Science graduate with a strong foundation in software development and enterprise solutions.
              My strengths lie in problem-solving, logical thinking, and delivering scalable applications.
              I am passionate about integrating modern technologies with traditional enterprise systems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With hands-on experience in Java, SQL, and SAP technologies, I specialize in building data-driven and efficient applications.
              I have worked on projects bridging ERP systems with custom software solutions.
              My focus is on creating robust, maintainable, and high-performance software.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Outside of coding, I enjoy exploring emerging technologies, contributing to open-source projects, and solving algorithmic challenges.
              I have a keen interest in AI, cloud platforms, and fintech innovations.
              In my free time, I also enjoy reading, gaming, and experimenting with new tech ideas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 