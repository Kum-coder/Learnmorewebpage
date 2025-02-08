import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "LearnMoreTechnology helped us streamline our business with their expert guidance. Highly recommended!",
      role: "CEO, TechCorp",
    },
    {
      name: "Jane Smith",
      feedback:
        "The training sessions were insightful and hands-on. I learned a lot about modern tools and technologies.",
      role: "Software Engineer, InnovateX",
    },
    {
      name: "Robert Brown",
      feedback:
        "Their web development service transformed our online presence completely. Exceptional work!",
      role: "Marketing Head, DigiGrow",
    },
  ];

  return (
    <section className="bg-gray-100 py-16" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic mb-4">
                "{testimonial.feedback}"
              </p>
              <h3 className="text-xl font-bold text-blue-600">
                {testimonial.name}
              </h3>
              <p className="text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
