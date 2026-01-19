const Testimonials = () => {
  const testimonials = [
    {
      image: "https://randomuser.me/api/portraits/women/43.jpg",
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "Vivant transformed our outdated living room into a modern, functional space that perfectly fits our family's needs. Their attention to detail was remarkable!",
      rating: 5
    },
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Michael Chen",
      role: "Business Owner",
      text: "The commercial space Vivant designed for our startup has become our competitive advantage. Clients always comment on how impressive our office looks.",
      rating: 5
    },
    {
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Emma Rodriguez",
      role: "Restaurateur",
      text: "Our restaurant's redesign by Vivant increased our seating capacity by 30% while making the space more inviting. Our customers love the new ambiance!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-[#35501c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Client Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-brown-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
              <div className="flex mt-4 text-yellow-400">
                {'★'.repeat(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;