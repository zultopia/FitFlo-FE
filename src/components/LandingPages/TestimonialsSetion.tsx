import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Testimonials Data
const testimonialsData = [
  {
    name: "Arisa Subakat",
    profile_picture: "/profile_picture/arisa.jpg", // Correct path for public folder
    age: 40,
    status: "Diabetic Warrior since 2018",
    rating: 5,
    testimonial:
      "FitFlo helped me manage my diabetes with a clear and structured treatment plan. The app guides me through each step, making the whole process less overwhelming.",
  },
  {
    name: "Brigitta Mavara",
    profile_picture: "/profile_picture/brigitta.jpg",
    age: 35,
    status: "Fulltime Stroke Patient Caregiver",
    rating: 5,
    testimonial:
      "Caring for my loved one has never been easier. FitFlo provides me with the right treatment pathways and monitoring tools to ensure proper care and recovery.",
  },
  {
    name: "Chandra Dilon",
    profile_picture: "/profile_picture/chandra.jpg",
    age: 68,
    status: "Independent Elderly",
    rating: 5,
    testimonial:
      "Staying on top of my health is no longer a challenge. The pathway guidance helps me keep track of my medication and daily routines with ease.",
  },
  {
    name: "Ganesha Graha",
    profile_picture: "/profile_picture/ganesha.jpg",
    age: 20,
    status: "Obesity Survivor",
    rating: 5,
    testimonial:
      "FitFlo gave me the confidence to take control of my health journey. From medication plans to lifestyle changes, the app supports me every step of the way.",
  },
  {
    name: "Mumuy",
    profile_picture: "/profile_picture/mumuy.jpg",
    age: 28,
    status: "Asthma Warrior since Born",
    rating: 5,
    testimonial:
      "Managing my asthma has become a breeze with FitFlo. The app’s clear guidance keeps me on track and worry-free.",
  }
];

const OPTIONS: EmblaOptionsType = { loop: true, align: "center" };

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;
  
    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };
  
    emblaApi.on("reInit", onSelect).on("select", onSelect);
    onSelect(); // Ensure buttons are set correctly on first load
  }, [emblaApi]);
  

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);


  return (
    
    <motion.section
      className="py-24 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-200 opacity-20 blur-3xl rounded-full px-6"></div>
      
      {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        What Our Users Say
      </h2> */}

      <div className="max-w-5xl mx-auto text-center relative z-10 mb-6">
        <motion.h3
          className="text-blue-700 font-semibold uppercase tracking-wide text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.h3>
        <motion.h2
          className="text-2xl font-extrabold mt-2 text-gray-900 mx-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join Countless of Satisfied Users
        </motion.h2>
        <p className="text-md text-gray-700 mt-4 mx-5">
          Hear from our satisfied users who have transformed their health with FitFlo!
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-[0_0_100%] min-w-0 p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
                  <div className="flex flex-col md:flex-row md:justify-between justify-center align-middle">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <img 
                        src={testimonial.profile_picture} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover border border-gray-300"
                      />
                      <div className="flex flex-col md:justify-normal md:items-start justify-center items-center">
                        <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.age} years old</p>
                        <p className="text-sm text-gray-500">{testimonial.status}</p>
                      </div>
                    </div>
                    {/* Star Rating */}
                    <div className="flex flex-col justify-center items-center">
                      <div className="flex gap-1 mt-3 text-yellow-400">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star 
                            key={i} 
                            size={20} 
                            className={i < testimonial.rating ? "fill-yellow-400" : "fill-gray-300"} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <p className="mt-4 text-gray-700 italic">"{testimonial.testimonial}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-10 mt-4">
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 items-center"
          >
            <img className="h-6 w-6 rotate-180" src="/next.svg"/>
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 items-center"
          >
            <img className="h-6 w-6" src="/next.svg"/>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
