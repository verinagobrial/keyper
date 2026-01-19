import { Link } from 'react-router-dom';
const CTA = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-[#35501c]">Ready to Transform Your Space?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-yellow-400">Schedule a free consultation with our design experts today.</p>
        <Link to="/consultation">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-md text-sm md:text-base font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none whitespace-nowrap">
          Book Consultation
        </button>
      </Link>
    </div>
  </section>
);

export default CTA;