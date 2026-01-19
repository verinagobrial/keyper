const Footer = () => {
  return (
    <footer className="bg-[#35501c] text-yellow-500 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Keyper</h3>
            <p className="text-white">Creating beautiful, functional spaces that inspire and delight.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-white hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#" className="text-white hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-white hover:text-yellow-400transition-colors">Portfolio</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white">
              <li>123 Design Avenue</li>
              <li>Alexandria, NY 10001</li>
              <li>info@keyperdesign.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <span className="text-white">Facebook</span>
              <span className="text-white">Instagram</span>
              <span className="text-white">Twitter</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-white">
          <p>&copy; 2023 Keyper Interior Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;