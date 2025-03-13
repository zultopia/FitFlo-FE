import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import { Timeline } from "@/components/ui/timeline";
import DefaultLayout from "@/layouts/default";

const Image = dynamic(() => import("next/image"), { ssr: false });

export default function DocsPage() {
  const data = [
    {
      title: "Problem Identification & Research (January 2025)",
      content: (
        <div>
          <p className="text-black dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Conducted extensive research to identify key challenges in the
            healthcare system, focusing on accessibility, efficiency, and
            patient experience.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {["research-team", "survey-analysis"].map((img) => (
              <Image
                key={img}
                alt={img}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
                height={500}
                src={`https://www.istockphoto.com/id/foto-foto/${img}.png`}
                width={500}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Solution Design & Prototyping (February 2025)",
      content: (
        <div>
          <p className="text-black dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed initial prototypes and wireframes for an integrated
            healthcare management platform, incorporating feedback from medical
            professionals.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {["wireframe", "prototype-testing"].map((img) => (
              <Image
                key={img}
                alt={img}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
                height={500}
                src={`https://assets.aceternity.com/${img}.png`}
                width={500}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Website Development & Launch (March 2025)",
      content: (
        <div>
          <p className="text-black dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and deployed the first version of the website, providing
            essential services like online consultations, appointment
            scheduling, and medical record access.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <Image
                key={num}
                alt={`startup template ${num}`}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
                height={500}
                src={`https://assets.aceternity.com/templates/startup-${num}.webp`}
                width={500}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Expansion & Hospital Partnerships (Mid 2025)",
      content: (
        <div>
          <p className="text-black dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Established collaborations with hospitals and clinics to integrate
            their systems into the platform, improving service reach and
            efficiency.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {["hospital-partnership", "system-integration"].map((img) => (
              <Image
                key={img}
                alt={img}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
                height={500}
                src={`https://assets.aceternity.com/${img}.png`}
                width={500}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Continuous Improvement & Maintenance (End of The Year)",
      content: (
        <div>
          <p className="text-black dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Regular updates and feature enhancements based on user feedback to
            ensure a seamless healthcare experience.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {["feature-update", "customer-support"].map((img) => (
              <Image
                key={img}
                alt={img}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
                height={500}
                src={`https://assets.aceternity.com/${img}.png`}
                width={500}
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <DefaultLayout>
      <div className="absolute inset-0 bg-gradient-to-b from-[#A3D6DC] to-white animate-gradient blur-3xl opacity-30 -z-10" />

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-4xl font-bold text-center text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Transforming Healthcare: From Research to Reality
        </motion.h1>

        <motion.p
          animate={{ opacity: 1, scale: 1 }}
          className="text-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Follow our journey as we revolutionize healthcare through research,
          innovation, and strategic partnerships.
        </motion.p>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Timeline data={data} />
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
