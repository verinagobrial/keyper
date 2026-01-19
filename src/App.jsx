import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BookConsultation from './pages/bookconsultation.jsx'; 
import Navbar from './components/layout/Navbar'; 
import Footer from './components/layout/Footer'; 
import DesignCustomizer3D from './pages/DesignCustomizer3D.jsx';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage.jsx';
import AIInteriorDesigner from './pages/AIInteriorDesigner.jsx';
import CategoriesPage from './pages/categories.jsx';
import PortfolioPage from './pages/portfolio.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/consultation" element={<BookConsultation />} />
          <Route path="/design-studio" element={<DesignCustomizer3D />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/ai" element={<AIInteriorDesigner/>}/>
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;