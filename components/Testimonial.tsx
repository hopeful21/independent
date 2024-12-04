import { FaQuoteLeft } from "react-icons/fa";

const Testimonial: React.FC = () => {
  const testimonials = [
    { name: "John Doe", feedback: "Amazing quality and fast delivery!" },
    { name: "Jane Smith", feedback: "Great customer service and support!" },
    { name: "Robert Brown", feedback: "Highly recommend this printing service!" },
  ];

  return (
    <section id="testimonials" className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <h3 className="text-3xl font-bold text-center text-blue-800 mb-8">
        What Our Customers Say
      </h3>
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 items-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 max-w-md mx-auto text-center"
          >
            <FaQuoteLeft className="text-blue-500 text-4xl mb-4 mx-auto" />
            <p className="italic text-gray-700 mb-4">"{testimonial.feedback}"</p>
            <h5 className="font-bold text-blue-700">- {testimonial.name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
