import React, { useState } from 'react'; 

const BookConsultation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    name: '',
    email: '',
    phone: '',
    address: '',
    
    // Step 2: Project Type
    projectType: '',
    propertyType: '',
    rooms: [],
    totalArea: '',
    
    // Step 3: Style Preferences
    preferredStyles: [],
    colorPreferences: [],
    budgetRange: '',
    timeline: '',
    
    // Step 4: Specific Requirements
    specialRequirements: '',
    inspirationImages: [],
    existingFurniture: '',
    
    // Step 5: Additional Details
    heardAboutUs: '',
    preferredContact: 'email',
    urgency: 'medium'
  });

  const [styleQuiz, setStyleQuiz] = useState([]);
  const [budgetBreakdown, setBudgetBreakdown] = useState(null);

  // Removed: const [aiSuggestions, setAiSuggestions] = useState([]);
  // Removed: const styleSuggestions = {...} (unused variable)

  // Project types with descriptions
  const projectTypes = [
    {
      id: 'full-home',
      name: 'Full Home Design',
      description: 'Complete interior design for your entire home',
      icon: '🏠',
      averageTimeline: '8-12 weeks',
      averageBudget: '$15,000+'
    },
    {
      id: 'single-room',
      name: 'Single Room Makeover',
      description: 'Transform one room with professional design',
      icon: '🛋️',
      averageTimeline: '4-6 weeks',
      averageBudget: '$5,000-$15,000'
    },
    {
      id: 'consultation',
      name: 'Design Consultation',
      description: 'Expert advice and design direction',
      icon: '💬',
      averageTimeline: '2-4 weeks',
      averageBudget: '$500-$2,000'
    },
    {
      id: 'renovation',
      name: 'Renovation & Remodeling',
      description: 'Structural changes and complete transformation',
      icon: '🔨',
      averageTimeline: '12-20 weeks',
      averageBudget: '$25,000+'
    },
    {
      id: 'commercial',
      name: 'Commercial Space',
      description: 'Office, retail, or hospitality design',
      icon: '🏢',
      averageTimeline: '10-16 weeks',
      averageBudget: '$30,000+'
    },
    {
      id: 'virtual',
      name: 'Virtual Design',
      description: 'Online design service with digital deliverables',
      icon: '💻',
      averageTimeline: '2-3 weeks',
      averageBudget: '$1,000-$5,000'
    }
  ];

  // Design styles
  const designStyles = [
    { id: 'modern', name: 'Modern', description: 'Clean lines, minimal decor', color: '#2c3e50' },
    { id: 'contemporary', name: 'Contemporary', description: 'Current trends, fluid style', color: '#34495e' },
    { id: 'minimalist', name: 'Minimalist', description: 'Simplicity and functionality', color: '#7f8c8d' },
    { id: 'industrial', name: 'Industrial', description: 'Raw materials, exposed elements', color: '#95a5a6' },
    { id: 'scandinavian', name: 'Scandinavian', description: 'Light, natural, cozy', color: '#ecf0f1' },
    { id: 'traditional', name: 'Traditional', description: 'Classic, elegant, detailed', color: '#d35400' },
    { id: 'bohemian', name: 'Bohemian', description: 'Eclectic, colorful, layered', color: '#e74c3c' },
    { id: 'coastal', name: 'Coastal', description: 'Beachy, light, airy', color: '#3498db' },
    { id: 'mid-century', name: 'Mid-Century Modern', description: 'Retro, organic forms', color: '#e67e22' },
    { id: 'rustic', name: 'Rustic', description: 'Natural, rugged, warm', color: '#8b4513' },
    { id: 'transitional', name: 'Transitional', description: 'Mix of traditional and modern', color: '#bdc3c7' },
    { id: 'art-deco', name: 'Art Deco', description: 'Bold, glamorous, geometric', color: '#f39c12' }
  ];

  // Budget ranges
  const budgetRanges = [
    { id: 'budget', range: '$2,000 - $5,000', description: 'Budget-friendly updates' },
    { id: 'moderate', range: '$5,000 - $15,000', description: 'Moderate transformation' },
    { id: 'premium', range: '$15,000 - $30,000', description: 'Premium design service' },
    { id: 'luxury', range: '$30,000+', description: 'Luxury bespoke design' },
    { id: 'custom', range: 'Custom Quote', description: 'Large or complex projects' }
  ];

  // AI-powered style quiz
  const styleQuizQuestions = [
    {
      id: 1,
      question: "How would you describe your ideal space?",
      options: [
        { text: "Clean and organized", style: "minimalist" },
        { text: "Warm and cozy", style: "scandinavian" },
        { text: "Bold and dramatic", style: "art-deco" },
        { text: "Natural and earthy", style: "rustic" }
      ]
    },
    {
      id: 2,
      question: "Which colors appeal to you most?",
      options: [
        { text: "Neutrals and whites", style: "modern" },
        { text: "Blues and greens", style: "coastal" },
        { text: "Warm earth tones", style: "bohemian" },
        { text: "Rich jewel tones", style: "traditional" }
      ]
    },
    {
      id: 3,
      question: "What's your approach to furniture?",
      options: [
        { text: "Functional and practical", style: "industrial" },
        { text: "Vintage and unique", style: "mid-century" },
        { text: "Comfortable and inviting", style: "transitional" },
        { text: "Statement pieces", style: "contemporary" }
      ]
    }
  ];

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle array fields (multiple selections)
  const handleArrayChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  // AI Style Recommendation based on quiz
  const calculateStyleRecommendation = () => {
    const styleCount = {};
    styleQuiz.forEach(answer => {
      styleCount[answer] = (styleCount[answer] || 0) + 1;
    });
    
    const topStyles = Object.entries(styleCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([style]) => style);
    
    return topStyles;
  };

  // Generate AI budget breakdown - removed unused projectType parameter
  const generateBudgetBreakdown = (budgetRange) => {
    const breakdowns = {
      'budget': { furniture: 40, labor: 30, materials: 20, decor: 10 },
      'moderate': { furniture: 35, labor: 25, materials: 25, decor: 15 },
      'premium': { furniture: 30, labor: 20, materials: 30, decor: 20 },
      'luxury': { furniture: 25, labor: 15, materials: 35, decor: 25 },
      'custom': { furniture: 30, labor: 25, materials: 30, decor: 15 }
    };
    
    return breakdowns[budgetRange] || breakdowns.moderate;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your consultation request! We will contact you within 24 hours.');
    // Reset form or redirect
  };

  // Next step
  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  // Previous step
  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  // Calculate progress percentage
  const progress = (step / 5) * 100;

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#35501c] to-[#2a4016] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Book Your Design Consultation
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Let's create your dream space together. Our AI-powered system will match you with the perfect design solution.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-3xl"></div>
      </section>
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-[#35501c]">Step {step} of 5</span>
            <span className="text-sm font-medium text-[#35501c]">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#35501c] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#35501c] mb-6">Tell Us About Yourself</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                      placeholder="+20 XXX XXX XXXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Address
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                      placeholder="Where is your project located?"
                    />
                  </div>
                </div>

                {/* AI Welcome Message */}
                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <span className="text-blue-600">🤖</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">AI Design Assistant</h4>
                      <p className="text-blue-800 text-sm mt-1">
                        Hello {formData.name || 'there'}! I'll help you find the perfect design solution. 
                        Based on thousands of successful projects, I can suggest styles that match your personality and space.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Project Details */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#35501c] mb-6">Project Information</h2>
                
                {/* Project Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    What type of project are you planning? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projectTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                          formData.projectType === type.id
                            ? 'border-[#35501c] bg-[#35501c] bg-opacity-5'
                            : 'border-gray-200 hover:border-[#35501c] hover:bg-gray-50'
                        }`}
                        onClick={() => handleInputChange('projectType', type.id)}
                      >
                        <div className="text-2xl mb-2">{type.icon}</div>
                        <h3 className="font-semibold text-gray-900">{type.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                        <div className="mt-2 text-xs text-gray-500">
                          <div>Timeline: {type.averageTimeline}</div>
                          <div>Budget: {type.averageBudget}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Property Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type *
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => handleInputChange('propertyType', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                    >
                      <option value="">Select property type</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="duplex">Duplex</option>
                      <option value="office">Office Space</option>
                      <option value="commercial">Commercial</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Area (m²) *
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.totalArea}
                      onChange={(e) => handleInputChange('totalArea', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                      placeholder="Enter area in square meters"
                    />
                  </div>
                </div>

                {/* Rooms Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Which rooms need design? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Dining Room', 'Home Office', 'Guest Room', 'Outdoor Space'].map((room) => (
                      <button
                        key={room}
                        type="button"
                        onClick={() => handleArrayChange('rooms', room)}
                        className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                          formData.rooms.includes(room)
                            ? 'bg-[#35501c] text-white border-[#35501c]'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-[#35501c]'
                        }`}
                      >
                        {room}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Style & Budget */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#35501c] mb-6">Design Preferences & Budget</h2>
                
                {/* Style Quiz */}
                <div className="bg-purple-50 p-6 rounded-xl mb-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">🎨 AI Style Finder Quiz</h3>
                  <p className="text-purple-800 mb-4">
                    Answer a few questions to help our AI understand your style preferences better.
                  </p>
                  
                  {styleQuizQuestions.map((question, qIndex) => (
                    <div key={question.id} className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-3">{question.question}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {question.options.map((option, oIndex) => (
                          <button
                            key={oIndex}
                            type="button"
                            onClick={() => {
                              const newQuiz = [...styleQuiz];
                              newQuiz[qIndex] = option.style;
                              setStyleQuiz(newQuiz);
                            }}
                            className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                              styleQuiz[qIndex] === option.style
                                ? 'border-purple-500 bg-purple-100'
                                : 'border-gray-200 hover:border-purple-300'
                            }`}
                          >
                            {option.text}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {styleQuiz.length === styleQuizQuestions.length && (
                    <div className="mt-4 p-4 bg-white rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-2">🎯 Your Style Profile</h4>
                      <p className="text-purple-800">
                        Based on your answers, we recommend: {calculateStyleRecommendation().join(', ')}
                      </p>
                    </div>
                  )}
                </div>

                {/* Design Styles */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Which design styles appeal to you? (Select up to 3)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {designStyles.map((style) => (
                      <div
                        key={style.id}
                        className={`border-2 rounded-lg p-3 cursor-pointer transition-all duration-200 ${
                          formData.preferredStyles.includes(style.id)
                            ? 'border-[#35501c] bg-[#35501c] bg-opacity-5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleArrayChange('preferredStyles', style.id)}
                      >
                        <div 
                          className="w-6 h-6 rounded-full mb-2 border border-gray-300"
                          style={{ backgroundColor: style.color }}
                        ></div>
                        <h3 className="font-medium text-sm text-gray-900">{style.name}</h3>
                        <p className="text-xs text-gray-600 mt-1">{style.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    What's your estimated budget range? *
                  </label>
                  <div className="space-y-3">
                    {budgetRanges.map((budget) => (
                      <div
                        key={budget.id}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                          formData.budgetRange === budget.id
                            ? 'border-[#35501c] bg-[#35501c] bg-opacity-5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => {
                          handleInputChange('budgetRange', budget.id);
                          setBudgetBreakdown(generateBudgetBreakdown(budget.id));
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold text-gray-900">{budget.range}</h3>
                            <p className="text-sm text-gray-600">{budget.description}</p>
                          </div>
                          {formData.budgetRange === budget.id && (
                            <span className="bg-[#35501c] text-white px-2 py-1 rounded-full text-xs">Selected</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Budget Breakdown */}
                  {budgetBreakdown && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">💰 AI Budget Breakdown</h4>
                      <div className="space-y-2">
                        {Object.entries(budgetBreakdown).map(([category, percentage]) => (
                          <div key={category} className="flex items-center justify-between">
                            <span className="text-sm text-gray-700 capitalize">{category}</span>
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-[#35501c] h-2 rounded-full"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-gray-900 w-8 text-right">{percentage}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Desired Timeline *
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Within 2 weeks (Urgent)</option>
                    <option value="soon">1-2 months</option>
                    <option value="flexible">2-4 months (Flexible)</option>
                    <option value="planning">4+ months (Just planning)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 4: Additional Details */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#35501c] mb-6">Additional Information</h2>
                
                {/* Special Requirements */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Any special requirements or considerations?
                  </label>
                  <textarea
                    value={formData.specialRequirements}
                    onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                    placeholder="E.g., accessibility needs, pet-friendly, smart home integration, etc."
                  ></textarea>
                </div>

                {/* Existing Furniture */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What will happen to your existing furniture?
                  </label>
                  <select
                    value={formData.existingFurniture}
                    onChange={(e) => handleInputChange('existingFurniture', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="keep-all">Keep all existing furniture</option>
                    <option value="keep-some">Keep some, replace some</option>
                    <option value="replace-all">Replace all furniture</option>
                    <option value="empty-space">Starting with empty space</option>
                  </select>
                </div>

                {/* Contact Preferences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      value={formData.heardAboutUs}
                      onChange={(e) => handleInputChange('heardAboutUs', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                    >
                      <option value="">Select source</option>
                      <option value="google">Google Search</option>
                      <option value="social-media">Social Media</option>
                      <option value="friend">Friend Recommendation</option>
                      <option value="previous-client">Previous Client</option>
                      <option value="advertisement">Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method *
                    </label>
                    <select
                      value={formData.preferredContact}
                      onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35501c] focus:border-transparent"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="video-call">Video Call</option>
                    </select>
                  </div>
                </div>

                {/* AI Summary */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <span className="text-green-600">🤖</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-900">AI Project Analysis</h4>
                      <p className="text-green-800 text-sm mt-1">
                        Based on your inputs, I've identified potential design solutions that match your 
                        {formData.preferredStyles.length > 0 ? ` ${formData.preferredStyles.join(', ')} style preferences` : ' style preferences'} 
                        and {formData.budgetRange ? ` ${formData.budgetRange} budget` : ' budget range'}.
                        Our designers will prepare 3 initial concepts for your review.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Review & Submit */}
            {step === 5 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#35501c] mb-6">Review Your Consultation Request</h2>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Summary</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Personal Information */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Personal Information</h4>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Name:</span> {formData.name}</p>
                        <p><span className="font-medium">Email:</span> {formData.email}</p>
                        <p><span className="font-medium">Phone:</span> {formData.phone}</p>
                        <p><span className="font-medium">Address:</span> {formData.address || 'Not provided'}</p>
                      </div>
                    </div>
                    
                    {/* Project Details */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Project Details</h4>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Project Type:</span> {projectTypes.find(p => p.id === formData.projectType)?.name}</p>
                        <p><span className="font-medium">Property Type:</span> {formData.propertyType}</p>
                        <p><span className="font-medium">Total Area:</span> {formData.totalArea} m²</p>
                        <p><span className="font-medium">Rooms:</span> {formData.rooms.join(', ') || 'Not specified'}</p>
                      </div>
                    </div>
                    
                    {/* Design Preferences */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Design Preferences</h4>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Preferred Styles:</span> {formData.preferredStyles.map(s => designStyles.find(d => d.id === s)?.name).join(', ') || 'Not specified'}</p>
                        <p><span className="font-medium">Budget Range:</span> {budgetRanges.find(b => b.id === formData.budgetRange)?.range}</p>
                        <p><span className="font-medium">Timeline:</span> {formData.timeline}</p>
                      </div>
                    </div>
                    
                    {/* Additional Information */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Additional Information</h4>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Existing Furniture:</span> {formData.existingFurniture || 'Not specified'}</p>
                        <p><span className="font-medium">Contact Method:</span> {formData.preferredContact}</p>
                        <p><span className="font-medium">Heard About Us:</span> {formData.heardAboutUs || 'Not specified'}</p>
                      </div>
                    </div>
                  </div>
                  
                  {formData.specialRequirements && (
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900 mb-2">Special Requirements</h4>
                      <p className="text-sm text-gray-700 bg-white p-3 rounded-lg border">{formData.specialRequirements}</p>
                    </div>
                  )}
                </div>

                {/* Final AI Recommendation */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <span className="text-blue-600">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">AI Design Recommendation</h4>
                      <p className="text-blue-800 text-sm mt-1">
                        Perfect! Based on your project details, I recommend starting with a {formData.preferredStyles[0] || 'contemporary'} 
                        approach. Our design team will create personalized concepts that align with your vision and budget. 
                        You'll receive initial concepts within 3-5 business days.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Consent */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 rounded focus:ring-[#35501c]"
                  />
                  <label className="text-sm text-gray-600">
                    I agree to the terms of service and privacy policy. I understand that Vivant Design will contact me 
                    to discuss my project and schedule a consultation. I consent to receiving design recommendations and 
                    promotional materials.
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  ← Previous
                </button>
              ) : (
                <div></div>
              )}
              
              {step < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 bg-[#35501c] text-white rounded-lg hover:bg-[#2a4016] transition-colors"
                >
                  Next Step →
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 bg-yellow-400 text-[#35501c] rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
                  🚀 Submit Consultation Request
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="font-semibold text-[#35501c] mb-2">AI-Powered Matching</h3>
            <p className="text-gray-600">Our AI analyzes your preferences to match you with the perfect designer</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="font-semibold text-[#35501c] mb-2">24h Response Time</h3>
            <p className="text-gray-600">Get matched with a designer and receive initial concepts within 24 hours</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="font-semibold text-[#35501c] mb-2">Budget Optimization</h3>
            <p className="text-gray-600">AI-powered budget breakdown ensures optimal allocation of your resources</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;