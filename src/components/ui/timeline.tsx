"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Use setTimeout to ensure we get the full rendered height
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        // Add extra padding to ensure the line goes all the way to the bottom
        setHeight(rect.height + 100);
        console.log("Timeline height:", rect.height);
      }
    };
    
    // Initial height calculation
    updateHeight();
    
    // Run again after a short delay to make sure all content is rendered
    const timer = setTimeout(updateHeight, 500);
    
    // Add window resize listener
    window.addEventListener('resize', updateHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
      clearTimeout(timer);
    };
  }, []);

  // Adjust the scroll target to capture the entire container plus some margin
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end start"], // Changed to ensure the end is captured
  });

  // Create a transform that completes earlier to ensure full visibility
  const heightTransform = useTransform(
    scrollYProgress, 
    // Make this progress faster
    [0, 0.2, 0.4, 0.6, 0.8, 0.9], 
    // Ensure we hit the full height
    [0, height * 0.2, height * 0.4, height * 0.6, height * 0.8, height]
  );
  
  // Boost opacity
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  
  // Create refs for each section to track when it's active
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Set up observers for each section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sections = sectionRefs.current.filter(Boolean);
    
    sections.forEach((section, index) => {
      if (!section) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          // When section is 40% visible, make it the active one
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            setActiveIndex(index);
          }
        },
        { threshold: [0.4], rootMargin: "-100px 0px -50% 0px" }
      );
      
      observer.observe(section);
      observers.push(observer);
    });
    
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-12 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          FitFlo Journey Timeline
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Track our progress from concept to reality as we build a healthcare platform that works for everyone.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-40">
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="flex justify-start pt-10 md:pt-14 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-30 items-center top-16 self-start max-w-xs lg:max-w-md md:w-full bg-transparent dark:bg-transparent py-6">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div 
                  className={`h-4 w-4 rounded-full ${
                    activeIndex === index 
                      ? "bg-blue-500 border border-blue-100" 
                      : "bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"
                  } p-2`} 
                />
              </div>
              <motion.h3 
                className="md:block text-xl md:pl-20 md:text-2xl font-bold text-blue-600 dark:text-blue-400"
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0.4,
                  y: activeIndex === index ? 0 : 10
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut" 
                }}
              >
                {item.title}
              </motion.h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="pt-16">{item.content}</div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-visible w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[5px] bg-blue-500 rounded-full" 
          />
        </div>
      </div>
    </div>
  );
};