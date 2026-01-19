import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Camera, 
  Upload, 
  Wand2, 
  Download, 
  Lightbulb,
  Ruler,
  Palette,
  Loader
} from 'lucide-react';
import { generateAIDesign } from '../aiDesignService'; // Import the service
import '../index.css';

const AIInteriorDesigner = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [designDescription, setDesignDescription] = useState('');
  const [roomType, setRoomType] = useState('bedroom');
  const [designStyle, setDesignStyle] = useState('bohemian');
  const [budgetRange, setBudgetRange] = useState('medium');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDesign, setGeneratedDesign] = useState(null);
  const [designTips, setDesignTips] = useState([]);
  const [designRules, setDesignRules] = useState([]);
  const [progress, setProgress] = useState(0);
  const [aiService, setAiService] = useState('Initializing...');
  const fileInputRef = useRef(null);

  const roomTypes = [
    { value: 'living-room', label: 'Living Room' },
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'kitchen', label: 'Kitchen' },
    { value: 'bathroom', label: 'Bathroom' },
    { value: 'dining-room', label: 'Dining Room' },
    { value: 'home-office', label: 'Home Office' }
  ];

  const designStyles = [
    'modern', 'contemporary', 'minimalist', 'industrial', 
    'scandinavian', 'bohemian', 'traditional', 'coastal',
    'mid-century', 'farmhouse', 'art-deco', 'transitional'
  ];

  const budgetRanges = [
    { value: 'low', label: 'Budget Friendly ($)' },
    { value: 'medium', label: 'Moderate ($$)' },
    { value: 'high', label: 'Luxury ($$$)' }
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setGeneratedDesign(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateDesign = async () => {
    if (!selectedImage) {
      alert('Please upload a room photo first');
      return;
    }

    setIsGenerating(true);
    setProgress(0);
    setAiService('Processing...');
    
    // Simulate progress for better UX
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 80) {
          clearInterval(progressInterval);
          return 80;
        }
        return prev + 10;
      });
    }, 500);

    try {
      // Call the real AI service
      const designData = {
        image: selectedImage,
        description: designDescription,
        roomType: roomType,
        style: designStyle,
        budget: budgetRange
      };

      const designResult = await generateAIDesign(designData);
      
      setGeneratedDesign(designResult);
      setDesignTips(generateDesignTips(roomType, designStyle, budgetRange));
      setDesignRules(generateDesignRules(roomType));
      setAiService(designResult.service || 'AI Service');
      setProgress(100);
      
      // Celebration effect
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
      });
      
      setTimeout(() => setProgress(0), 1000);
      
    } catch (error) {
      console.error('Error generating design:', error);
      alert(`Design generation failed: ${error.message}. Please try again or use a different style.`);
    } finally {
      clearInterval(progressInterval);
      setIsGenerating(false);
    }
  };

  const generateDesignTips = (roomType, style, budget) => {
    const tips = [];
    
    const styleTips = {
      'bohemian': [
        'Layer at least 3 different textile textures',
        'Mix patterns of different scales (small, medium, large)',
        'Incorporate vintage or handmade decor pieces',
        'Use warm lighting for cozy ambiance',
        'Add plenty of plants and greenery'
      ],
      'modern': [
        'Stick to a limited color palette (3-4 colors max)',
        'Choose furniture with clean, straight lines',
        'Use metallic accents sparingly for elegance',
        'Incorporate statement lighting as focal point',
        'Keep surfaces clutter-free for minimalist look'
      ],
      'mid-century': [
        'Use tapered furniture legs on all pieces',
        'Incorporate walnut or teak wood tones',
        'Add bold accent colors like mustard or avocado',
        'Choose geometric patterns for textiles',
        'Use vintage-inspired lighting fixtures'
      ],
      'scandinavian': [
        'Maximize natural light with light window treatments',
        'Use white or light neutral wall colors',
        'Incorporate natural wood elements',
        'Add cozy textiles like wool throws',
        'Keep decor minimal and functional'
      ],
      'industrial': [
        'Expose architectural elements when possible',
        'Mix metal and wood materials',
        'Use Edison bulb lighting fixtures',
        'Incorporate vintage or repurposed furniture',
        'Add raw textures like concrete or brick'
      ],
      'coastal': [
        'Use light, airy color palette (blues, whites, beiges)',
        'Incorporate natural materials like rattan and jute',
        'Add subtle nautical elements (ropes, shells)',
        'Choose breezy, light-filtering window treatments',
        'Use durable, weather-resistant fabrics'
      ]
    };

    tips.push(...(styleTips[style] || [
      'Consider the room\'s natural light sources',
      'Create clear pathways for easy movement',
      'Mix different types of lighting (ambient, task, accent)',
      'Add personal touches that reflect your style',
      'Consider furniture scale relative to room size'
    ]));

    return tips.slice(0, 5);
  };

  const generateDesignRules = (roomType) => {
    const rules = [];
    
    const roomRules = {
      'bedroom': [
        'Bed should be the focal point of the room',
        'Leave at least 24 inches on each side of bed',
        'Bedside tables should match bed height',
        'Use calming, restful colors for better sleep',
        'Include adequate storage to reduce clutter'
      ],
      'living-room': [
        'Arrange seating to facilitate conversation',
        'Coffee table should be 14-18 inches from sofa',
        'Rug should be large enough for all furniture legs',
        'Create a focal point (fireplace, artwork, view)',
        'Ensure clear traffic flow through the room'
      ],
      'kitchen': [
        'Maintain work triangle between sink, stove, fridge',
        'Counter depth should be 24-25 inches standard',
        'Leave 42-48 inches between counter and island',
        'Include task lighting over work areas',
        'Ensure adequate counter space near appliances'
      ]
    };

    rules.push('Maintain 36-inch wide pathways for accessibility');
    rules.push('Follow 60-30-10 color rule (60% dominant, 30% secondary, 10% accent)');
    rules.push('Consider furniture scale relative to room size');
    rules.push('Layer lighting for functionality and ambiance');
    rules.push(...(roomRules[roomType] || []));

    return rules.slice(0, 5);
  };

  const downloadDesign = () => {
    if (generatedDesign) {
      const link = document.createElement('a');
      link.download = `keyper-design-${roomType}-${designStyle}-${Date.now()}.jpg`;
      link.href = generatedDesign.image;
      link.click();
    }
  };

  // Get style description for preview
  const getStyleDescription = (style) => {
    const descriptions = {
      'bohemian': 'Free-spirited with layered textiles, mixed patterns, and global influences',
      'modern': 'Clean lines, minimal decor, and sophisticated simplicity',
      'mid-century': 'Retro charm with organic shapes, tapered legs, and bold colors',
      'scandinavian': 'Light, airy spaces with functional furniture and cozy textiles',
      'industrial': 'Raw materials, exposed structures, and utilitarian design',
      'coastal': 'Beach-inspired with light colors, natural materials, and nautical touches',
      'traditional': 'Classic elegance with rich woods, symmetry, and formal details'
    };
    return descriptions[style] || 'A beautifully designed space';
  };

  return (
    <div className="ai-designer-container">
      <div className="designer-header">
        <h1>🎨 AI Interior Design Transformer</h1>
        <p>Upload your room and watch AI completely redesign it in your chosen style</p>
      </div>

      <div className="designer-content">
        {/* Input Section */}
        <div className="input-section">
          <div className="upload-section">
            <h3>📸 Upload Your Room Photo</h3>
            <div className="upload-options">
              <button 
                className="btn btn-upload"
                onClick={() => fileInputRef.current?.click()}
                disabled={isGenerating}
              >
                <Upload size={20} />
                Choose Room Photo
              </button>
            </div>
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              style={{ display: 'none' }}
            />

            {selectedImage && (
              <div className="image-preview">
                <img src={selectedImage} alt="Your room" />
                <p className="preview-label">Your Original Room</p>
              </div>
            )}
          </div>

          <div className="design-controls">
            <div className="form-group">
              <label>🏠 Room Type</label>
              <select 
                value={roomType} 
                onChange={(e) => setRoomType(e.target.value)}
                disabled={isGenerating}
              >
                {roomTypes.map(room => (
                  <option key={room.value} value={room.value}>
                    {room.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>🎨 Design Style</label>
              <select 
                value={designStyle} 
                onChange={(e) => setDesignStyle(e.target.value)}
                disabled={isGenerating}
              >
                {designStyles.map(style => (
                  <option key={style} value={style}>
                    {style.charAt(0).toUpperCase() + style.slice(1)}
                  </option>
                ))}
              </select>
              <div className="style-description">
                {getStyleDescription(designStyle)}
              </div>
            </div>

            <div className="form-group">
              <label>💰 Budget Range</label>
              <select 
                value={budgetRange} 
                onChange={(e) => setBudgetRange(e.target.value)}
                disabled={isGenerating}
              >
                {budgetRanges.map(budget => (
                  <option key={budget.value} value={budget.value}>
                    {budget.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>✏️ Design Description (Optional)</label>
              <textarea
                value={designDescription}
                onChange={(e) => setDesignDescription(e.target.value)}
                placeholder="Add specific requests... (e.g., 'Add a reading nook', 'Use blue and gold colors', 'Make it feel more spacious')"
                rows="3"
                disabled={isGenerating}
              />
            </div>

            <button 
              className="btn btn-generate"
              onClick={generateDesign}
              disabled={isGenerating || !selectedImage}
            >
              {isGenerating ? (
                <>
                  <Loader size={20} className="spinner" />
                  {progress < 50 ? 'Analyzing room...' : 'Generating design...'} {progress}%
                </>
              ) : (
                <>
                  <Wand2 size={20} />
                  Generate Complete Redesign
                </>
              )}
            </button>

            {isGenerating && (
              <div className="progress-container">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="ai-service-info">
                  Using: {aiService}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Output Section */}
        <div className="output-section">
          {generatedDesign ? (
            <div className="design-results">
              <div className="result-header">
                <div>
                  <h2>✨ Your New {generatedDesign.style} {generatedDesign.roomType}</h2>
                  <p className="service-info">Generated with {generatedDesign.service}</p>
                </div>
                <button className="btn btn-download" onClick={downloadDesign}>
                  <Download size={16} />
                  Download
                </button>
              </div>

              <div className="design-comparison">
                <div className="comparison-item">
                  <div className="image-container">
                    <img src={selectedImage} alt="Original room" />
                    <div className="image-overlay">BEFORE</div>
                  </div>
                  <p>Your Original Room</p>
                </div>
                <div className="comparison-item">
                  <div className="image-container">
                    <img src={generatedDesign.image} alt="AI redesigned room" />
                    <div className="image-overlay style-badge">
                      {generatedDesign.style.toUpperCase()}
                    </div>
                  </div>
                  <p>AI Redesigned Room</p>
                </div>
              </div>

              <div className="design-info">
                <div className="info-card">
                  <h4><Palette size={18} /> Key Design Elements</h4>
                  <ul>
                    {generatedDesign.elements.map((element, index) => (
                      <li key={index}>{element}</li>
                    ))}
                  </ul>
                </div>

                <div className="info-card">
                  <h4><Lightbulb size={18} /> Implementation Tips</h4>
                  <ul>
                    {designTips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>

                <div className="info-card">
                  <h4><Ruler size={18} /> Design Principles</h4>
                  <ul>
                    {designRules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="action-buttons">
                <button 
                  className="btn btn-secondary"
                  onClick={() => setGeneratedDesign(null)}
                >
                  Try Another Style
                </button>
                <button className="btn btn-download" onClick={downloadDesign}>
                  <Download size={16} />
                  Download High-Quality Image
                </button>
              </div>
            </div>
          ) : (
            <div className="placeholder">
              <div className="placeholder-icon">
                <Palette size={64} />
                <div className="magic-wand">✨</div>
              </div>
              <h3>Ready for Transformation</h3>
              <p>Upload your room photo and choose a style to see a complete AI redesign</p>
              {selectedImage && (
                <div className="ready-indicator">
                  <span>✅ Room photo uploaded! Select a style above and click "Generate Complete Redesign"</span>
                </div>
              )}
              <div className="style-previews">
                <div className="style-preview">
                  <div className="preview-color bohemian"></div>
                  <span>Bohemian</span>
                </div>
                <div className="style-preview">
                  <div className="preview-color modern"></div>
                  <span>Modern</span>
                </div>
                <div className="style-preview">
                  <div className="preview-color mid-century"></div>
                  <span>Mid-Century</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIInteriorDesigner;