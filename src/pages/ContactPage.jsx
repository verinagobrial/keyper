import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      projectType: '',
      budget: '',
      timeline: ''
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'info@vivantdesign.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+20 3 123 4567',
      description: 'Mon to Fri 9am to 6pm'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: '123 Stanley Street, Alexandria',
      description: 'Come say hello at our studio'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      details: '+20 100 123 4567',
      description: 'Quick responses via WhatsApp'
    }
  ];

  const branches = [
    {
      name: 'Main Office - Stanley',
      address: '123 Stanley Street, Alexandria, Egypt',
      phone: '+20 3 123 4567',
      hours: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Design Studio - Smouha',
      address: '45 Smouha Square, Alexandria, Egypt',
      phone: '+20 3 123 4568',
      hours: 'Sunday - Thursday: 10:00 AM - 8:00 PM',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Showroom - Montaza',
      address: '78 Montaza Corniche, Alexandria, Egypt',
      phone: '+20 3 123 4569',
      hours: 'Saturday - Thursday: 10:00 AM - 10:00 PM',
      image: 'https://images.unsplash.com/photo-1505842381624-c2a38a0b2b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const projectTypes = [
    'Full Home Design',
    'Single Room Makeover',
    'Commercial Space',
    'Office Design',
    'Kitchen & Bath',
    'Renovation',
    'Consultation Only',
    'Other'
  ];

  const budgetRanges = [
    'Less than 50,000 EGP',
    '50,000 - 100,000 EGP',
    '100,000 - 250,000 EGP',
    '250,000 - 500,000 EGP',
    '500,000 - 1,000,000 EGP',
    'More than 1,000,000 EGP',
    'Not sure yet'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#35501c] to-[#2a4016] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Let's bring your design vision to life. Get in touch with our expert team.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-3xl"></div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#35501c] mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-yellow-500 mb-8">
                Ready to transform your space? We'd love to hear about your project. 
                Fill out the form and our design team will get back to you within 24 hours.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#35501c] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                      <p className="text-[#35501c] font-medium">{item.details}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['Facebook', 'Instagram', 'Twitter', 'Pinterest'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="bg-gray-100 hover:bg-[#35501c] hover:text-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    >
                      {social[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-[#35501c] mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been received. Our design team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#35501c] hover:bg-[#2a4016] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-[#35501c] mb-6">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                          placeholder="+20 XXX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Type
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Estimated Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map(budget => (
                            <option key={budget} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          <option value="Immediately">Immediately</option>
                          <option value="1-3 months">1-3 months</option>
                          <option value="3-6 months">3-6 months</option>
                          <option value="6+ months">6+ months</option>
                          <option value="Just exploring">Just exploring</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                        placeholder="Tell us about your project, ideas, and vision..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105"
                    >
                      Send Message
                    </button>

                    <p className="text-center text-sm text-gray-600">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#35501c] mb-4">
              Visit Our Studios
            </h2>
            <p className="text-lg text-yellow-500 max-w-2xl mx-auto">
              Come visit us at any of our conveniently located branches across Alexandria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#35501c] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#35501c] mb-3">{branch.name}</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-[#35501c] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">{branch.address}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-[#35501c] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm">{branch.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-[#35501c] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">{branch.hours}</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#35501c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-yellow-500 max-w-2xl mx-auto">
              Quick answers to common questions about our design process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical interior design project take?",
                answer: "Most residential projects take 8-12 weeks from concept to completion, depending on the scope and complexity."
              },
              {
                question: "Do you work with a specific budget range?",
                answer: "We work with various budget ranges starting from 50,000 EGP for single rooms to multi-million EGP projects."
              },
              {
                question: "Can I see examples of your previous work?",
                answer: "Absolutely! Visit our portfolio page or schedule a consultation to see our complete project gallery."
              },
              {
                question: "Do you handle the entire renovation process?",
                answer: "Yes, we offer full-service interior design including project management, contractor coordination, and installation."
              },
              {
                question: "What areas in Alexandria do you serve?",
                answer: "We serve all areas of Alexandria including Stanley, Smouha, Montaza, Gleem, Sidi Bishr, and surrounding areas."
              },
              {
                question: "How do I get started with my project?",
                answer: "Simply contact us through this form, and we'll schedule a free initial consultation to discuss your vision."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-[#35501c] text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link to="/contact">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-[#35501c] px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                Contact Us Directly
              </button>
            </Link>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-[#35501c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#35501c]">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-yellow-500 mb-8 max-w-2xl mx-auto ">
            Let's schedule your free consultation and begin transforming your space today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105">
                Book Free Consultation
              </button>
            </Link>
            <Link to="/design-studio">
              <button className="bg-[#35501c] hover:bg-[#293f17]  text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105">
                Try 3D Design Studio
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;