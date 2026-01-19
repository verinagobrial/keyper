// services/aiDesignService.js
const API_ENDPOINTS = {
  OPENAI_DALLE: 'https://api.openai.com/v1/images/generations',
  STABILITY_AI: 'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
  REPLICATE: 'https://api.replicate.com/v1/predictions',
  // Free alternative (limited but works)
  HUGGINGFACE: 'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1'
};

// Choose which AI service to use (configure based on your API keys)
const getActiveService = () => {
  if (process.env.REACT_APP_OPENAI_API_KEY) return 'OPENAI';
  if (process.env.REACT_APP_STABILITY_API_KEY) return 'STABILITY';
  if (process.env.REACT_APP_HUGGINGFACE_API_KEY) return 'HUGGINGFACE';
  return 'SIMULATED'; // Fallback to simulation
};

export const generateAIDesign = async (designData) => {
  const activeService = getActiveService();
  
  try {
    switch (activeService) {
      case 'OPENAI':
        return await generateWithOpenAI(designData);
      case 'STABILITY':
        return await generateWithStabilityAI(designData);
      case 'HUGGINGFACE':
        return await generateWithHuggingFace(designData);
      default:
        return await simulateAIDesign(designData);
    }
  } catch (error) {
    console.error('AI Design Service Error:', error);
    // Fallback to enhanced simulation
    return await simulateAIDesign(designData, true);
  }
};

// OpenAI DALL-E 3 (Best quality)
const generateWithOpenAI = async (designData) => {
  const { image, description, roomType, style, budget } = designData;
  
  const prompt = createDesignPrompt(designData);
  
  const response = await fetch(API_ENDPOINTS.OPENAI_DALLE, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt: prompt,
      size: "1024x1024",
      quality: "standard",
      n: 1,
      style: "vivid"
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`OpenAI API error: ${error.error?.message || 'Unknown error'}`);
  }

  const data = await response.json();
  
  return {
    image: data.data[0].url,
    style: style,
    roomType: roomType,
    elements: extractDesignElements(style, roomType),
    service: 'OpenAI DALL-E 3'
  };
};

// Stability AI
const generateWithStabilityAI = async (designData) => {
  const prompt = createDesignPrompt(designData);
  
  const response = await fetch(API_ENDPOINTS.STABILITY_AI, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_STABILITY_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text_prompts: [
        {
          text: prompt,
          weight: 1
        }
      ],
      cfg_scale: 7,
      height: 1024,
      width: 1024,
      samples: 1,
      steps: 30,
    }),
  });

  const data = await response.json();
  
  // Stability AI returns base64 image
  const base64Image = `data:image/png;base64,${data.artifacts[0].base64}`;
  
  return {
    image: base64Image,
    style: designData.style,
    roomType: designData.roomType,
    elements: extractDesignElements(designData.style, designData.roomType),
    service: 'Stability AI'
  };
};

// Hugging Face (Free tier)
const generateWithHuggingFace = async (designData) => {
  const prompt = createDesignPrompt(designData);
  
  const response = await fetch(API_ENDPOINTS.HUGGINGFACE, {
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_HUGGINGFACE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      inputs: prompt,
      options: {
        wait_for_model: true,
      },
    }),
  });

  const imageBlob = await response.blob();
  const imageUrl = URL.createObjectURL(imageBlob);
  
  return {
    image: imageUrl,
    style: designData.style,
    roomType: designData.roomType,
    elements: extractDesignElements(designData.style, designData.roomType),
    service: 'Hugging Face'
  };
};

// Enhanced simulation with better transformations
const simulateAIDesign = async (designData, enhanced = false) => {
  const { image, style, roomType, description } = designData;
  
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw original
      ctx.drawImage(img, 0, 0);
      
      if (enhanced) {
        // Apply advanced transformations
        applyAdvancedStyleTransformation(ctx, canvas.width, canvas.height, style, roomType);
        addFurnitureAndDecor(ctx, canvas.width, canvas.height, style, roomType);
        addLightingEffects(ctx, canvas.width, canvas.height, style);
      } else {
        // Basic transformation
        applyBasicStyleTransformation(ctx, canvas.width, canvas.height, style);
      }
      
      // Add design badge
      addDesignBadge(ctx, canvas.width, style);
      
      const transformedImage = canvas.toDataURL('image/jpeg', 0.9);
      
      resolve({
        image: transformedImage,
        style: style,
        roomType: roomType,
        elements: extractDesignElements(style, roomType),
        service: 'AI Design Simulator'
      });
    };
    img.src = image;
  });
};

// Create detailed prompts for AI
const createDesignPrompt = (designData) => {
  const { roomType, style, budget, description } = designData;
  
  const styleDescriptions = {
    'bohemian': 'bohemian style with layered textiles, mixed patterns, natural materials, warm earthy tones, jewel accents, macrame, plants, vintage furniture, global decor, cozy atmosphere',
    'modern': 'modern minimalist style with clean lines, neutral color palette, metallic accents, geometric shapes, statement lighting, sleek furniture, open space, contemporary art',
    'mid-century': 'mid-century modern style with organic shapes, tapered legs, walnut wood, teak furniture, bold colors like mustard and orange, geometric patterns, vintage lighting, retro decor',
    'scandinavian': 'Scandinavian style with light wood, white walls, functional furniture, cozy textiles, natural light, minimal decor, hygge atmosphere, simple lines, pastel accents',
    'industrial': 'industrial style with exposed brick, metal pipes, concrete floors, raw materials, vintage furniture, Edison bulbs, reclaimed wood, open space, utilitarian design',
    'coastal': 'coastal style with light blues, sandy beige, white accents, natural materials, nautical elements, breezy fabrics, shell decor, driftwood, ocean views, relaxed vibe',
    'traditional': 'traditional style with classic furniture, rich woods, patterned fabrics, symmetry, formal layout, warm colors, ornate details, Persian rugs, elegant lighting'
  };
  
  const basePrompt = `Professional interior design photo of a ${roomType} in ${styleDescriptions[style] || style} style. `;
  
  const qualityPrompt = `High quality, photorealistic, 8k resolution, professional photography, architectural digest style, detailed materials, realistic lighting, proper proportions. `;
  
  const budgetPrompt = budget === 'high' ? 'Luxury furniture, high-end materials, custom design.' : 
                       budget === 'medium' ? 'Mid-range furniture, quality materials, stylish decor.' : 
                       'Budget-friendly solutions, smart shopping, DIY elements.';
  
  return basePrompt + qualityPrompt + budgetPrompt + ' ' + description;
};

// Extract design elements based on style
const extractDesignElements = (style, roomType) => {
  const elements = {
    'bohemian': ['Layered textiles', 'Mixed patterns', 'Natural materials', 'Plants & greenery', 'Global decor', 'Vintage pieces'],
    'modern': ['Clean lines', 'Minimal decor', 'Metallic accents', 'Neutral palette', 'Geometric shapes', 'Statement lighting'],
    'mid-century': ['Tapered legs', 'Organic shapes', 'Walnut wood', 'Bold colors', 'Retro patterns', 'Vintage lighting'],
    'scandinavian': ['Light wood', 'White walls', 'Functional furniture', 'Cozy textiles', 'Minimal accessories', 'Natural light'],
    'industrial': ['Exposed materials', 'Metal accents', 'Raw textures', 'Vintage furniture', 'Edison bulbs', 'Reclaimed wood'],
    'coastal': ['Nautical elements', 'Light colors', 'Natural materials', 'Breezy fabrics', 'Shell decor', 'Ocean tones']
  };
  
  return elements[style] || ['Updated layout', 'New color scheme', 'Improved lighting', 'Style-appropriate decor'];
};

// Enhanced transformation functions for simulation
const applyAdvancedStyleTransformation = (ctx, width, height, style, roomType) => {
  // Strong color grading
  ctx.globalCompositeOperation = 'multiply';
  
  const styleColors = {
    'bohemian': ['rgba(139, 69, 19, 0.3)', 'rgba(218, 112, 214, 0.2)', 'rgba(205, 133, 63, 0.2)'],
    'modern': ['rgba(44, 62, 80, 0.4)', 'rgba(231, 76, 60, 0.1)', 'rgba(52, 152, 219, 0.1)'],
    'mid-century': ['rgba(210, 105, 30, 0.3)', 'rgba(255, 165, 0, 0.2)', 'rgba(0, 128, 0, 0.1)'],
    'scandinavian': ['rgba(255, 255, 255, 0.5)', 'rgba(189, 195, 199, 0.2)', 'rgba(236, 240, 241, 0.2)'],
    'industrial': ['rgba(102, 102, 102, 0.4)', 'rgba(128, 128, 128, 0.3)', 'rgba(255, 107, 53, 0.2)'],
    'coastal': ['rgba(135, 206, 235, 0.3)', 'rgba(240, 248, 255, 0.3)', 'rgba(176, 224, 230, 0.2)']
  };
  
  const colors = styleColors[style] || ['rgba(128, 128, 128, 0.3)'];
  
  colors.forEach(color => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
  });
  
  ctx.globalCompositeOperation = 'source-over';
};

const addFurnitureAndDecor = (ctx, width, height, style, roomType) => {
  // Add virtual furniture based on style and room type
  ctx.globalAlpha = 0.6;
  
  if (roomType === 'bedroom') {
    drawBed(ctx, width, height, style);
    drawNightstands(ctx, width, height, style);
  } else if (roomType === 'living-room') {
    drawSofa(ctx, width, height, style);
    drawCoffeeTable(ctx, width, height, style);
  }
  
  // Add decorative elements
  addDecorativeElements(ctx, width, height, style);
  
  ctx.globalAlpha = 1.0;
};

const drawBed = (ctx, width, height, style) => {
  const bedWidth = width * 0.5;
  const bedHeight = height * 0.3;
  const bedX = width * 0.25;
  const bedY = height * 0.5;
  
  // Bed frame
  ctx.fillStyle = getStyleColor(style, 'primary');
  ctx.fillRect(bedX, bedY, bedWidth, bedHeight);
  
  // Bedding with pattern
  ctx.fillStyle = getStyleColor(style, 'secondary');
  ctx.fillRect(bedX + 20, bedY + 10, bedWidth - 40, bedHeight - 30);
  
  // Pillows
  ctx.fillStyle = getStyleColor(style, 'accent');
  for (let i = 0; i < 3; i++) {
    ctx.fillRect(bedX + 30 + (i * 50), bedY + 15, 40, 25);
  }
};

const drawSofa = (ctx, width, height, style) => {
  const sofaWidth = width * 0.4;
  const sofaHeight = height * 0.25;
  const sofaX = width * 0.3;
  const sofaY = height * 0.5;
  
  ctx.fillStyle = getStyleColor(style, 'primary');
  ctx.fillRect(sofaX, sofaY, sofaWidth, sofaHeight);
  
  // Cushions
  ctx.fillStyle = getStyleColor(style, 'accent');
  for (let i = 0; i < 2; i++) {
    ctx.fillRect(sofaX + 20 + (i * 60), sofaY + 10, 50, sofaHeight - 20);
  }
};

const getStyleColor = (style, type) => {
  const colors = {
    'bohemian': { primary: '#8B4513', secondary: '#CD853F', accent: '#DA70D6' },
    'modern': { primary: '#2c3e50', secondary: '#34495e', accent: '#e74c3c' },
    'mid-century': { primary: '#8B4513', secondary: '#228B22', accent: '#FF8C00' },
    'scandinavian': { primary: '#ffffff', secondary: '#f0f0f0', accent: '#2c3e50' },
    'industrial': { primary: '#666666', secondary: '#888888', accent: '#ff6b35' },
    'coastal': { primary: '#87CEEB', secondary: '#F0F8FF', accent: '#4682B4' }
  };
  
  return colors[style]?.[type] || '#666666';
};

const addDesignBadge = (ctx, width, style) => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
  ctx.fillRect(width - 220, 30, 200, 70);
  
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(`${style.toUpperCase()} STYLE`, width - 120, 60);
  
  ctx.font = '14px Arial';
  ctx.fillText('AI GENERATED DESIGN', width - 120, 85);
};