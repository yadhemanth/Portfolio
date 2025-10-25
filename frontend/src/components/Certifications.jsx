import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    {
      title: "SAP Certified Associate - Back-End Developer - ABAP Cloud",
      issuer: "SAP",
      // Based on
      date: "Issued: Mar 04, 2025",
      // Based on
      description: "Verifies core ABAP programming language skills based on the ABAP RESTful Application Programming Model on SAP BTP and principles for S/4HANA Cloud extensions.",
      credentialId: "N/A - Verified via Credly link", // Optional
      image: "/ABAP_Badge.png", // <-- Replace with your actual image file name in the public folder
      // Based on
      link: "https://www.credly.com/badges/19dff552-0963-4d2e-b24b-0b25b71b44be"
    },
    {
      title: "SAP Certified Professional - Solution Architect - SAP BTP",
      issuer: "SAP",
      // Based on
      date: "Issued: Sep 17, 2025",
      // Based on
      description: "Validates the ability to perform an SAP Solution Architect role with SAP BTP, including developing and implementing technically feasible and economically viable solutions.",
      credentialId: "N/A - Verified via Credly link", // Optional, as link is provided
      image: "/BTP_badge.png", // <-- Replace with your actual image file name in the public folder
      // Based on
      link: "https://www.credly.com/badges/76828618-fdd4-4372-a720-cd5f0720f3d9"
    },
    {
      title: "Java Full Stack",
      issuer: "EduSkills Academy",
      // Based on
      date: "July 31, 2025",
      // Based on
      description: "Successfully completed the Java Full Stack course.",
      // Based on
      credentialId: "7089b15842738e8d9ecb1b3426f79d6e",
      image: "/Java Full Certificate.jpg", // <-- Replace with your actual image file name in the public folder
      link: "https://drive.google.com/file/d/1ayFKb8dCW_NLLpVhaoiN9lUxwuP0rZk8/view?usp=sharing" // Updated with link from user's file
    }
  ];

  return (
    <section id="certifications" className="w-full py-20 bg-white dark:bg-gray-900">
      <div className="w-full max-w-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Issued: {cert.date}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {cert.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Credential ID: {cert.credentialId}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Certificate →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 