import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Quote, Star } from "lucide-react";

// First set of testimonials (for top marquee)
const testimonialsDataTop = [
  {
    name: "Arisa Subakat",
    profile_picture: "https://randomuser.me/api/portraits/women/21.jpg",
    age: 40,
    status: "Diabetic Warrior since 2018",
    rating: 5,
    testimonial:
      "FitFlo helped me manage my diabetes with a clear and structured treatment plan. The app guides me through each step, making the whole process less overwhelming.",
  },
  {
    name: "Brigitta Mavara",
    profile_picture: "https://randomuser.me/api/portraits/women/32.jpg",
    age: 35,
    status: "Fulltime Stroke Patient Caregiver",
    rating: 5,
    testimonial:
      "Caring for my loved one has never been easier. FitFlo provides me with the right treatment pathways and monitoring tools to ensure proper care and recovery.",
  },
  {
    name: "Chandra Dilon",
    profile_picture: "https://randomuser.me/api/portraits/men/54.jpg",
    age: 68,
    status: "Independent Elderly",
    rating: 5,
    testimonial:
      "Staying on top of my health is no longer a challenge. The pathway guidance helps me keep track of my medication and daily routines with ease.",
  },
  {
    name: "Ganesha Graha",
    profile_picture: "https://randomuser.me/api/portraits/men/67.jpg",
    age: 20,
    status: "Obesity Survivor",
    rating: 5,
    testimonial:
      "FitFlo gave me the confidence to take control of my health journey. From medication plans to lifestyle changes, the app supports me every step of the way.",
  },
  {
    name: "Mumuy",
    profile_picture: "https://randomuser.me/api/portraits/men/48.jpg",
    age: 28,
    status: "Asthma Warrior since Born",
    rating: 5,
    testimonial:
      "Managing my asthma has become a breeze with FitFlo. The app's clear guidance keeps me on track and worry-free.",
  },
];

// Second set of testimonials (for bottom marquee)
const testimonialsDataBottom = [
  {
    name: "Dewi Ratna",
    profile_picture: "https://randomuser.me/api/portraits/women/62.jpg",
    age: 52,
    status: "Hypertension Fighter",
    rating: 5,
    testimonial:
      "FitFlo has been instrumental in helping me control my blood pressure. The timely reminders and insightful health tips have made a significant difference in my daily routine.",
  },
  {
    name: "Farhan Aditya",
    profile_picture: "https://randomuser.me/api/portraits/men/33.jpg",
    age: 29,
    status: "Tech-Savvy Fitness Enthusiast",
    rating: 5,
    testimonial:
      "As someone who loves tracking health data in detail, FitFlo gives me exactly what I need. The analytics and progress tracking features have become essential to my fitness regimen.",
  },
  {
    name: "Helena Wijaya",
    profile_picture: "https://randomuser.me/api/portraits/women/18.jpg",
    age: 45,
    status: "Cancer Survivor",
    rating: 5,
    testimonial:
      "Throughout my complex treatment journey, FitFlo has been my reliable companion. It simplified medication schedules and helped me communicate better with my healthcare team.",
  },
  {
    name: "Irfan Maulana",
    profile_picture: "https://randomuser.me/api/portraits/men/23.jpg",
    age: 22,
    status: "Student with ADHD",
    rating: 5,
    testimonial:
      "With ADHD, I used to struggle keeping track of my health routines. FitFlo's intuitive interface and simple reminders have made it so much easier to stay focused on my wellbeing.",
  },
  {
    name: "Nisa Aulia",
    profile_picture: "https://randomuser.me/api/portraits/women/41.jpg",
    age: 36,
    status: "Working Mom with Chronic Fatigue",
    rating: 4,
    testimonial:
      "Between work and parenting, managing my chronic fatigue was overwhelming. FitFlo streamlines everything, allowing me to maintain my health despite my busy schedule.",
  },
  {
    name: "Raka Pratama",
    profile_picture: "https://randomuser.me/api/portraits/men/90.jpg",
    age: 58,
    status: "Heart Disease Patient",
    rating: 5,
    testimonial:
      "The AI-powered insights in FitFlo have been game-changing for my heart condition. I receive personalized recommendations based on my data that truly help me manage my health.",
  },
  {
    name: "Sari Kusuma",
    profile_picture: "https://randomuser.me/api/portraits/women/76.jpg",
    age: 71,
    status: "Retired Teacher with Arthritis",
    rating: 4,
    testimonial:
      "FitFlo has helped me maintain my independence despite arthritis. The medication reminders and exercise suggestions are perfectly tailored to my needs as a senior.",
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

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  // Lista kata penting yang ingin diwarnai
  const keywordsToHighlight = [
    "control",
    "everything",
    "proper",
    "insightful",
    "ease",
    "easier",
    "reliable",
    "routines",
    "medication",
    "tracking",
    "blood pressure",
    "fitness",
    "treatment",
    "healthcare",
    "reminders",
    "analytics",
    "breeze",
  ];

  // Fungsi untuk mewarnai kata kunci dalam teks
  const highlightKeyword = (text: string) => {
    // Cari kata kunci pertama yang ada dalam teks
    const foundKeyword = keywordsToHighlight.find((keyword) =>
      text.includes(keyword)
    );

    if (!foundKeyword) return text; // Jika tidak ada kata kunci, kembalikan teks asli

    // Pisahkan teks berdasarkan kata kunci yang ditemukan
    const parts = text.split(foundKeyword);

    // Return JSX dengan bagian yang dipisahkan dan kata kunci yang diwarnai
    return (
      <>
        {parts[0]}
        <span className="text-blue-600 font-medium">{foundKeyword}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <Card className="min-w-[380px] max-w-[420px] mx-4 shadow-sm rounded-3xl overflow-hidden bg-white flex flex-col h-full">
      <CardBody className="pt-8 pb-4 px-7 flex flex-col justify-between h-full">
        <div>
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Quote className="text-gray-300" size={24} />
          </div>

          <p className="text-gray-700 text-base leading-relaxed mb-6 whitespace-normal">
            {highlightKeyword(testimonial.testimonial)}
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
                <div className="text-gray-500 text-sm">
                  {testimonial.status}
                </div>
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
};

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Pure white base background */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Sky-100 content area with inset margins to allow for transition */}
      <div className="absolute inset-x-0 top-[60px] bottom-[60px] bg-sky-100/90 z-0" />

      {/* Top transition - subtle gradient from white to sky-100 */}
      <div className="absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-b from-white to-sky-100/90 z-0" />

      {/* Bottom transition - subtle gradient from sky-100 to white */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-white to-sky-100/90 z-0" />

      {/* Title content */}
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

      {/* Content container */}
      <div className="relative z-10">
        {/* First row - moving right - with first set of testimonials */}
        <div className="mb-12 -mx-4">
          <div className="flex animate-marquee">
            {[...testimonialsDataTop, ...testimonialsDataTop].map(
              (testimonial, idx) => (
                <div
                  key={`${testimonial.name}-${idx}`}
                  className="whitespace-normal"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              )
            )}
          </div>
        </div>

        {/* Second row - moving left - with second set of testimonials */}
        <div className="-mx-4">
          <div className="flex animate-marquee-reverse">
            {[...testimonialsDataBottom, ...testimonialsDataBottom].map(
              (testimonial, idx) => (
                <div
                  key={`${testimonial.name}-reverse-${idx}`}
                  className="whitespace-normal"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
