import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Quote, Star } from "lucide-react";

// Updated Testimonials Data
const testimonialsData = [
  {
    name: "Arisa Subakat",
    profile_picture: "/profile_picture/arisa.jpg",
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
      "Managing my asthma has become a breeze with FitFlo. The app's clear guidance keeps me on track and worry-free.",
  },
];

interface TestimonialProps {
  testimonial: {
    name: string;
    profile_picture: string;
    age: number;
    status: string;
    rating: number;
    testimonial: string;
  };
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => (
  <Card className="min-w-[380px] max-w-[420px] mx-4 shadow-sm rounded-3xl overflow-hidden bg-white flex flex-col h-full">
    <CardBody className="pt-8 pb-4 px-7 flex flex-col justify-between h-full">
      <div>
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Quote className="text-gray-300" size={24} />
        </div>

        <p className="text-gray-700 text-base leading-relaxed mb-6 whitespace-normal">
          {testimonial.testimonial}
        </p>
      </div>

      <div>
        <Divider className="my-4" />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 relative rounded-full overflow-hidden">
              <img
                alt={testimonial.name}
                className="w-full h-full object-cover"
                src={testimonial.profile_picture}
              />
            </div>
            <div className="ml-3">
              <div className="font-semibold text-gray-900">
                {testimonial.name}
              </div>
              <div className="text-gray-500 text-sm">{testimonial.status}</div>
            </div>
          </div>

          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={
                  i < testimonial.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }
                size={16}
              />
            ))}
          </div>
        </div>
      </div>
    </CardBody>
  </Card>
);

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto text-center relative z-10 mb-10">
        <h3 className="text-blue-700 font-semibold uppercase tracking-wide text-lg">
          Testimonials
        </h3>
        <h2 className="text-2xl font-extrabold mt-2 text-gray-900 mx-5">
          Join Countless of Satisfied Users
        </h2>
        <p className="text-md text-gray-700 mt-4 mx-5">
          Hear from our satisfied users who have transformed their health with
          FitFlo!
        </p>
      </div>

      {/* Gradient overlays - Adjusted to match adjacent sections */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-100/20 via-white/50 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-50 via-white/50 to-transparent z-10" />

      {/* First row - moving right */}
      <div className="mb-12 -mx-4 relative">
        <div className="flex animate-marquee">
          {[...testimonialsData, ...testimonialsData].map((testimonial, idx) => (
            <div key={`${testimonial.name}-${idx}`} className="whitespace-normal">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Second row - moving left */}
      <div className="-mx-4 relative">
        <div className="flex animate-marquee-reverse">
          {[...testimonialsData.slice().reverse(), ...testimonialsData].map(
            (testimonial, idx) => (
              <div key={`${testimonial.name}-reverse-${idx}`} className="whitespace-normal">
                <TestimonialCard testimonial={testimonial} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
