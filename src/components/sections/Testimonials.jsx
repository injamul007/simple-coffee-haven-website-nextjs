"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      role: "Software Developer",
      company: "StartupXYZ",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content:
        "As someone who needs quality coffee to fuel long coding sessions, Coffee Haven delivers exactly what I need. Their cold brew is fantastic, and the staff always remembers my order.",
      rating: 5,
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      role: "Interior Designer",
      company: "Design Studio",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content:
        "I love the atmosphere and attention to detail at Coffee Haven. Every latte is a work of art, and the flavor profiles are incredible. It's become my creative sanctuary.",
      rating: 5,
    },
    {
      id: 3,
      name: "David Thompson",
      role: "Business Owner",
      company: "Local Bookstore",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content:
        "Coffee Haven has become my daily ritual. The consistency in quality and the passion they put into every cup is evident. It's the perfect place for business meetings too.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="section-padding bg-cream-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            What Our Coffee Lovers Say
          </h2>
          <p className="text-xl text-coffee-700 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what real customers have to
            say about their Coffee Haven experience.
          </p>
        </div>

        <div className="relative">
          {/* Main testimonial display */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Image
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map(
                    (_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ),
                  )}
                </div>

                <blockquote className="text-lg md:text-xl text-coffee-700 mb-6 leading-relaxed italic">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>

                <div>
                  <div className="font-semibold text-coffee-900 text-lg">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-coffee-600">
                    {testimonials[activeTestimonial].role} at{" "}
                    {testimonials[activeTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === activeTestimonial ? "bg-coffee-600" : "bg-coffee-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
