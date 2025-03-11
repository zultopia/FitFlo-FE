import { motion } from "framer-motion";
import DefaultLayout from "@/layouts/default";
import ourStory from "../assets/our_story.jpg";
import ourVision from "../assets/our_vision.avif";


export default function DocsPage() {
  const teamsData = [
    {
      name: "Aththariq Lisan",
      profile_picture: "/profile_picture/ganesha.jpg",
      linkedin: "https://id.linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Faiz Aththarahman",
      profile_picture: "/profile_picture/mumuy.jpg",
      linkedin: "https://id.linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Eleanor Cordelia",
      profile_picture: "/profile_picture/brigitta.jpg",
      linkedin: "https://id.linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Marzuli Suhada",
      profile_picture: "/profile_picture/chandra.jpg",
      linkedin: "https://id.linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Andhita Naura",
      profile_picture: "/profile_picture/arisa.jpg",
      linkedin: "https://id.linkedin.com",
      github: "https://github.com",
    },
  ];

  const aboutUs = [
    {
      title: "OUR STORY",
      image: ourStory,
      subtitle: "Empowering health management, guiding clarity, and transforming medical journeys for a better quality of life",
      description: "FitFlo was founded to address the confusion and uncertainty many people face when something feels wrong with their body. Instead of turning to unreliable self-diagnosis, FitFlo provides clear, personalized medical pathways to guide users through their treatment and medication journey. Committed to making healthcare more accessible and less overwhelming, we believe in empowering individuals to take control of their well-being with confidence and ease."
    },
    {
      title: "OUR VISION",
      image: ourVision,
      subtitle: "Transforming Healthcare Journeys with Clarity and Confidence",
      description: "FitFlo aims to create a world where everyone has access to clear, personalized medical guidance, eliminating confusion and self-diagnosis. By empowering individuals with structured treatment pathways, we strive to make healthcare more approachable and manageable, helping people take control of their health with confidence and peace of mind."
    }
  ]

  return (
    <DefaultLayout>
      <div className="absolute inset-0 bg-gradient-to-b from-[#2094C4] via-[#A3D6DC] to-white animate-gradient blur-3xl opacity-40 -z-10"></div>
      <section className="flex flex-col items-center gap-6 py-10 px-8 mt-20 md:py-12 text-center">
        {/* Title with Motion */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl font-bold text-black dark:text-white md:text-5xl"
        >
          Get to Know Us Better
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-2xl"
        >
          At <span className="font-bold text-[#1004a4]">FitFlo</span>, we are redefining healthcare management with personalized medical pathways. Our mission is to empower individuals with clarity, efficiency, and control over their health journeys.
        </motion.p>
      </section>

      {/* Story and Vision*/}
      <div className="py-24 space-y-20 max-w-6xl mx-auto px-6">
              {aboutUs.map((data, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="relative w-full md:w-1/2">
                    <motion.img
                      src={data.image}
                      alt={data.title}
                      className="w-full h-80 object-cover rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
                      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-blue-600 dark:text-blue-400 text-lg font-semibold">
                      {data.title}
                    </h3>
                    <h4 className="text-justify font-bold md:text-xl text-black mt-4">
                      {data.subtitle}
                    </h4>
                    <p className="text-justify md:text-medium text-gray-600 dark:text-gray-400 mt-4">
                      {data.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

      {/* Our Vision Section */}

      {/* Team Section */}
      <motion.section 
        className=" relative max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Meet Our Team
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            A passionate team of innovators, thinkers, and creators.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {teamsData.map((teamData) => (
            <motion.div
              key={teamData.name}
              className="text-center justify-center items-center"
              whileHover={{ scale: 1.05 }} // Slight scaling effect
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.img
                className="rounded-full size-24 object-cover mx-auto shadow-lg"
                src={teamData.profile_picture}
                alt={teamData.name}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              />

              {/* Team Identity */}
              <div className="flex flex-col justify-center items-center mt-2 sm:mt-4 gap-2">
                {/* Name */}
                <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                  {teamData.name}
                </h3>

                {/* Team Social Media */}
                <div className="flex gap-2 justify-center items-center">
                  <motion.a
                    href={teamData.linkedin}
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200">
                      <img
                        className="w-4 h-4"
                        src="/media_social/linkedin.svg"
                        alt="linkedin account"
                      />
                    </div>
                  </motion.a>

                  <motion.a
                    href={teamData.github}
                    target="_blank"
                    whileHover={{ scale: 1.2 }} 
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200">
                      <img
                        className="w-6 h-6"
                        src="/media_social/github.svg"
                        alt="github account"
                      />
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </DefaultLayout>
  );
}
