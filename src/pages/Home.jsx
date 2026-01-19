import Hero from '../components/sections/Hero';
import DesignProcess from '../components/sections/DesignProcess';
import Portfolio from '../components/sections/Portfolio';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import InteriorCategories from '../components/sections/categories';


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     
      <Hero />
      <DesignProcess />
      <InteriorCategories />
      <Portfolio />
      <Testimonials />
      <CTA />
     
     
    </div>
  );
};

export default Home;