import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, TransformControls, Text, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const DesignCustomizer3D = () => {
  const [currentRoom, setCurrentRoom] = useState('living-room');
  const [selectedColor, setSelectedColor] = useState('#8B4513');
  const [customColor, setCustomColor] = useState('');
  const [furniture, setFurniture] = useState([]);
  const [selectedFurniture, setSelectedFurniture] = useState(null);
  const [transformMode, setTransformMode] = useState('translate');
  const [roomWallColor, setRoomWallColor] = useState('#d4d4d4');
  const [roomFloorColor, setRoomFloorColor] = useState('#e8e8e8');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const rooms = {
    'living-room': {
      name: 'Living Room',
      furniture: ['sofa', 'coffee-table', 'tv-stand', 'armchair', 'bookshelf', 'rug', 'lamp']
    },
    'bedroom': {
      name: 'Bedroom', 
      furniture: ['bed', 'nightstand', 'wardrobe', 'dresser', 'vanity', 'rug', 'lamp']
    },
    'kitchen': {
      name: 'Kitchen',
      furniture: ['kitchen-cabinet', 'dining-table', 'dining-chair', 'island', 'stool', 'refrigerator']
    },
    'office': {
      name: 'Office',
      furniture: ['desk', 'office-chair', 'bookshelf', 'filing-cabinet', 'lamp', 'side-table']
    }
  };

  const colors = [
    '#8B4513', '#D2B48C', '#A0522D', '#654321', '#DEB887', // Browns
    '#2F4F4F', '#696969', '#808080', '#A9A9A9', '#C0C0C0', // Grays
    '#FFFFFF', '#F5F5F5', '#FFEBCD', '#F0E68C', '#FAFAD2', // Lights
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFD700', // Colors
    '#8A2BE2', '#FF69B4', '#32CD32', '#FF4500', '#1E90FF'  // Bright Colors
  ];

  const furnitureLibrary = {
    'sofa': {
      name: 'Sofa',
      styles: [
        { id: 'modern-sofa', name: 'Modern Sofa', size: [2.2, 0.8, 0.9], color: '#8B4513' },
        { id: 'sectional-sofa', name: 'Sectional Sofa', size: [2.8, 0.8, 1.2], color: '#D2B48C' }
      ]
    },
    'coffee-table': {
      name: 'Coffee Table',
      styles: [
        { id: 'glass-table', name: 'Glass Table', size: [1.2, 0.4, 0.7], color: '#C0C0C0' },
        { id: 'wood-table', name: 'Wood Table', size: [1.1, 0.4, 0.6], color: '#8B4513' }
      ]
    },
    'bed': {
      name: 'Bed',
      styles: [
        { id: 'queen-bed', name: 'Queen Bed', size: [2, 1, 1.5], color: '#FFFFFF' },
        { id: 'king-bed', name: 'King Bed', size: [2.2, 1, 1.8], color: '#F5F5F5' }
      ]
    },
    'dining-table': {
      name: 'Dining Table',
      styles: [
        { id: 'round-table', name: 'Round Table', size: [1.4, 0.8, 1.4], color: '#8B4513' },
        { id: 'rectangular-table', name: 'Rectangular Table', size: [1.6, 0.8, 0.9], color: '#D2B48C' }
      ]
    },
    'dining-chair': {
      name: 'Dining Chair',
      styles: [
        { id: 'wooden-chair', name: 'Wooden Chair', size: [0.45, 0.9, 0.45], color: '#A0522D' },
        { id: 'upholstered-chair', name: 'Upholstered Chair', size: [0.5, 0.9, 0.5], color: '#FF6B6B' }
      ]
    },
    'desk': {
      name: 'Desk',
      styles: [
        { id: 'l-shaped-desk', name: 'L-Shaped Desk', size: [1.6, 0.8, 1.2], color: '#2F4F4F' },
        { id: 'standing-desk', name: 'Standing Desk', size: [1.4, 0.8, 0.7], color: '#696969' }
      ]
    },
    'office-chair': {
      name: 'Office Chair',
      styles: [
        { id: 'ergonomic-chair', name: 'Ergonomic Chair', size: [0.6, 1, 0.6], color: '#000000' },
        { id: 'executive-chair', name: 'Executive Chair', size: [0.7, 1.1, 0.7], color: '#2F4F4F' }
      ]
    }
  };

  const addFurniture = (itemType, style) => {
    const newItem = {
      id: Date.now(),
      type: itemType,
      style: style,
      position: [Math.random() * 3 - 1.5, 0, Math.random() * 3 - 1.5],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      color: selectedColor
    };
    setFurniture([...furniture, newItem]);
    setSelectedFurniture(newItem);
  };

  const updateFurniture = (id, updates) => {
    setFurniture(furniture.map(item => 
      item.id === id ? { ...item, ...updates } : item
    ));
  };

  const deleteFurniture = (id) => {
    setFurniture(furniture.filter(item => item.id !== id));
    if (selectedFurniture?.id === id) {
      setSelectedFurniture(null);
    }
  };

  const handleSaveDesign = () => {
    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }
    // Save logic here
    alert('Design saved successfully!');
  };

  const addCustomColor = () => {
    if (customColor && !colors.includes(customColor)) {
      setSelectedColor(customColor);
      setCustomColor('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#35501c] to-[#2a4016] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              3D Design Studio
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Design your space in real-time 3D with realistic furniture
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-3xl"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Controls Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            
            {/* Room Selection */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-[#35501c] mb-3">Select Room</h3>
              <div className="space-y-2">
                {Object.entries(rooms).map(([id, room]) => (
                  <button
                    key={id}
                    onClick={() => setCurrentRoom(id)}
                    className={`w-full text-left p-3 rounded transition-all ${
                      currentRoom === id 
                        ? 'bg-[#35501c] text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {room.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Room Customization */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-[#35501c] mb-3">Room Colors</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Wall Color</label>
                  <input
                    type="color"
                    value={roomWallColor}
                    onChange={(e) => setRoomWallColor(e.target.value)}
                    className="w-full h-8 rounded border"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Floor Color</label>
                  <input
                    type="color"
                    value={roomFloorColor}
                    onChange={(e) => setRoomFloorColor(e.target.value)}
                    className="w-full h-8 rounded border"
                  />
                </div>
              </div>
            </div>

            {/* Furniture Library */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-[#35501c] mb-3">
                {rooms[currentRoom].name} Furniture
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {rooms[currentRoom].furniture.map(itemType => {
                  const item = furnitureLibrary[itemType];
                  if (!item) return null;
                  
                  return (
                    <div key={itemType} className="border-b pb-3 last:border-b-0">
                      <h4 className="font-medium text-gray-800 mb-2">{item.name}</h4>
                      <div className="space-y-2">
                        {item.styles.map(style => (
                          <button
                            key={style.id}
                            onClick={() => addFurniture(itemType, style)}
                            className="w-full p-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded text-left text-sm transition-all"
                          >
                            + {style.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Color Picker */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-[#35501c] mb-3">Choose Color</h3>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? 'border-[#35501c]' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              
              {/* Custom Color */}
              <div className="space-y-2">
                <label className="block text-sm text-gray-700">Custom Color</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={customColor}
                    onChange={(e) => setCustomColor(e.target.value)}
                    className="flex-1 h-8 rounded border"
                  />
                  <button
                    onClick={addCustomColor}
                    className="px-3 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Transformation Controls */}
            {selectedFurniture && (
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold text-[#35501c] mb-3">Edit Furniture</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Transformation Mode</label>
                    <div className="grid grid-cols-3 gap-1">
                      {['translate', 'rotate', 'scale'].map(mode => (
                        <button
                          key={mode}
                          onClick={() => setTransformMode(mode)}
                          className={`p-2 rounded text-sm capitalize ${
                            transformMode === mode
                              ? 'bg-[#35501c] text-white'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {mode === 'translate' ? 'Move' : mode === 'rotate' ? 'Rotate' : 'Scale'}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => deleteFurniture(selectedFurniture.id)}
                    className="w-full p-2 bg-red-500 hover:bg-red-600 text-white rounded text-sm"
                  >
                    🗑️ Delete Selected
                  </button>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-[#35501c] mb-3">Actions</h3>
              <div className="space-y-2">
                <button 
                  onClick={handleSaveDesign}
                  className="w-full p-3 bg-green-500 hover:bg-green-600 text-white rounded transition-all"
                >
                  {isLoggedIn ? '💾 Save Design' : '🔐 Login to Save'}
                </button>
                <button 
                  onClick={() => setFurniture([])}
                  className="w-full p-3 bg-red-500 hover:bg-red-600 text-white rounded transition-all"
                >
                  🗑️ Clear All
                </button>
              </div>
            </div>

          </div>

          {/* 3D Canvas */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-1 h-[600px] relative">
              <Canvas camera={{ position: [8, 8, 8], fov: 50 }}>
                <color attach="background" args={['#f8fafc']} />
                
                {/* Lighting */}
                <ambientLight intensity={0.6} />
                <directionalLight
                  position={[10, 10, 5]}
                  intensity={1}
                  castShadow
                  shadow-mapSize-width={2048}
                  shadow-mapSize-height={2048}
                />
                
                {/* Room with proper colors */}
                <RealisticRoom 
                  roomType={currentRoom} 
                  wallColor={roomWallColor}
                  floorColor={roomFloorColor}
                />
                
                {/* Furniture */}
                <Suspense fallback={null}>
                  {furniture.map(item => (
                    <RealisticFurniture
                      key={item.id}
                      item={item}
                      isSelected={selectedFurniture?.id === item.id}
                      onSelect={setSelectedFurniture}
                      transformMode={transformMode}
                      onUpdate={(updates) => updateFurniture(item.id, updates)}
                      selectedColor={selectedColor}
                    />
                  ))}
                </Suspense>
                
                {/* Controls */}
                <OrbitControls makeDefault />
                <Environment preset="apartment" />
                
                {/* Help Text */}
                <Text
                  position={[0, 3, 0]}
                  fontSize={0.3}
                  color="#333"
                  anchorX="center"
                  anchorY="middle"
                >
                  Drag to rotate • Scroll to zoom
                </Text>
              </Canvas>

              {/* Loading Fallback */}
              <Suspense fallback={
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-lg text-[#35501c]">Loading 3D Environment...</div>
                </div>
              }>
              </Suspense>
            </div>

            {/* Stats and Info */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-gray-600">
              <div className="bg-white p-3 rounded-lg shadow">
                <p>🛋️ {furniture.length} furniture items</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow">
                <p>🎨 {rooms[currentRoom].name}</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow">
                <p>👆 {selectedFurniture ? 'Editing: ' + furnitureLibrary[selectedFurniture.type]?.name : 'Select an item'}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Login Modal */}
        {showLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-xl font-semibold text-[#35501c] mb-4">Sign In to Save Your Design</h3>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setIsLoggedIn(true);
                      setShowLogin(false);
                      handleSaveDesign();
                    }}
                    className="flex-1 bg-[#35501c] text-white p-3 rounded-lg hover:bg-[#2a4016]"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setShowLogin(false)}
                    className="flex-1 bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
                <p className="text-center text-sm text-gray-600">
                  Don't have an account? <button className="text-[#35501c] hover:underline">Sign up</button>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-[#35501c] mb-4">How to Design Your Space:</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-2xl mb-2">1️⃣</div>
              <p>Select a room type and choose furniture from the library</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-2xl mb-2">2️⃣</div>
              <p>Customize colors for furniture and room surfaces</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-2xl mb-2">3️⃣</div>
              <p>Click on furniture to move, rotate, or scale it</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-2xl mb-2">4️⃣</div>
              <p>Sign in to save your design and share it with others</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Realistic Room with proper color application
const RealisticRoom = ({ roomType, wallColor, floorColor }) => {
  const roomConfig = {
    'living-room': { size: [6, 3, 5] },
    'bedroom': { size: [5, 3, 4] },
    'kitchen': { size: [5, 3, 4] },
    'office': { size: [4, 3, 4] }
  };

  const room = roomConfig[roomType] || roomConfig['living-room'];

  return (
    <group>
      {/* Floor with proper color */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -room.size[1]/2, 0]} receiveShadow>
        <planeGeometry args={[room.size[0], room.size[2]]} />
        <meshStandardMaterial 
          color={floorColor} 
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
      
      {/* Walls with proper colors */}
      <mesh position={[0, 0, -room.size[2]/2]} receiveShadow>
        <boxGeometry args={[room.size[0], room.size[1], 0.1]} />
        <meshStandardMaterial color={wallColor} roughness={0.7} />
      </mesh>
      
      <mesh position={[-room.size[0]/2, 0, 0]} rotation={[0, Math.PI/2, 0]} receiveShadow>
        <boxGeometry args={[room.size[2], room.size[1], 0.1]} />
        <meshStandardMaterial color={wallColor} roughness={0.7} />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 0, room.size[2]/2]} receiveShadow>
        <boxGeometry args={[room.size[0], room.size[1], 0.1]} />
        <meshStandardMaterial color={wallColor} roughness={0.7} />
      </mesh>

      {/* Right Wall (semi-transparent for better view) */}
      <mesh position={[room.size[0]/2, 0, 0]} rotation={[0, Math.PI/2, 0]} receiveShadow>
        <boxGeometry args={[room.size[2], room.size[1], 0.1]} />
        <meshStandardMaterial 
          color={wallColor} 
          transparent 
          opacity={0.3} 
          roughness={0.7}
        />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, room.size[1]/2, 0]}>
        <planeGeometry args={[room.size[0], room.size[2]]} />
        <meshStandardMaterial color="#f8f8f8" transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

// Realistic Furniture Components
const RealisticFurniture = ({ item, isSelected, onSelect, transformMode, onUpdate, selectedColor }) => {
  const meshRef = useRef();
  const transformRef = useRef();

  const handleTransform = () => {
    if (transformRef.current && isSelected) {
      const position = transformRef.current.position.toArray();
      const rotation = transformRef.current.rotation.toArray();
      const scale = transformRef.current.scale.toArray();
      
      onUpdate({ position, rotation, scale });
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    onSelect(item);
  };

  const renderFurniture = () => {
    const { type, style } = item;
    
    switch (type) {
      case 'sofa':
        return <RealisticSofa style={style} color={selectedColor} />;
      case 'bed':
        return <RealisticBed style={style} color={selectedColor} />;
      case 'dining-table':
        return <RealisticDiningTable style={style} color={selectedColor} />;
      case 'dining-chair':
        return <RealisticDiningChair style={style} color={selectedColor} />;
      case 'desk':
        return <RealisticDesk style={style} color={selectedColor} />;
      case 'office-chair':
        return <RealisticOfficeChair style={style} color={selectedColor} />;
      default:
        return <BasicFurniture style={style} color={selectedColor} />;
    }
  };

  return (
    <group>
      <TransformControls
        ref={transformRef}
        enabled={isSelected}
        mode={transformMode}
        onMouseUp={handleTransform}
      >
        <group
          ref={meshRef}
          position={item.position}
          rotation={item.rotation}
          scale={item.scale}
          onClick={handleClick}
        >
          {renderFurniture()}
        </group>
      </TransformControls>
    </group>
  );
};

// Realistic Sofa Component
const RealisticSofa = ({ style, color }) => {
  return (
    <group>
      {/* Base */}
      <mesh castShadow receiveShadow position={[0, style.size[1]/2, 0]}>
        <boxGeometry args={[style.size[0], style.size[1], style.size[2]]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
      
      {/* Back */}
      <mesh castShadow position={[0, style.size[1] + 0.3, -style.size[2]/2]}>
        <boxGeometry args={[style.size[0], 0.6, 0.1]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      
      {/* Arms */}
      <mesh castShadow position={[style.size[0]/2, style.size[1]/2 + 0.15, 0]}>
        <boxGeometry args={[0.2, style.size[1] + 0.3, style.size[2]]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      <mesh castShadow position={[-style.size[0]/2, style.size[1]/2 + 0.15, 0]}>
        <boxGeometry args={[0.2, style.size[1] + 0.3, style.size[2]]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      
      {/* Cushions */}
      <mesh castShadow position={[0, style.size[1] + 0.1, style.size[2]/4]}>
        <boxGeometry args={[style.size[0] - 0.4, 0.2, style.size[2]/2]} />
        <meshStandardMaterial color={color} roughness={0.9} />
      </mesh>
    </group>
  );
};

// Realistic Bed Component
const RealisticBed = ({ style, color }) => {
  return (
    <group>
      {/* Mattress */}
      <mesh castShadow receiveShadow position={[0, style.size[1]/2, 0]}>
        <boxGeometry args={[style.size[0], style.size[1], style.size[2]]} />
        <meshStandardMaterial color={color} roughness={0.9} />
      </mesh>
      
      {/* Headboard */}
      <mesh castShadow position={[0, style.size[1] + 0.3, style.size[2]/2]}>
        <boxGeometry args={[style.size[0], 0.8, 0.1]} />
        <meshStandardMaterial color="#8B4513" roughness={0.6} />
      </mesh>
      
      {/* Bed Frame */}
      <mesh castShadow position={[0, 0.05, 0]}>
        <boxGeometry args={[style.size[0] + 0.1, 0.1, style.size[2] + 0.1]} />
        <meshStandardMaterial color="#654321" roughness={0.5} />
      </mesh>
      
      {/* Legs */}
      {[[1, -1], [1, 1], [-1, -1], [-1, 1]].map(([x, z], i) => (
        <mesh key={i} castShadow position={[
          x * (style.size[0]/2 - 0.1),
          0.05,
          z * (style.size[2]/2 - 0.1)
        ]}>
          <cylinderGeometry args={[0.05, 0.05, 0.1, 8]} />
          <meshStandardMaterial color="#654321" roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
};

// Realistic Dining Table Component
const RealisticDiningTable = ({ style, color }) => {
  if (style.id === 'round-table') {
    return (
      <group>
        {/* Tabletop */}
        <mesh castShadow receiveShadow position={[0, style.size[1]/2, 0]}>
          <cylinderGeometry args={[style.size[0]/2, style.size[0]/2, 0.05, 32]} />
          <meshStandardMaterial color={color} roughness={0.6} />
        </mesh>
        
        {/* Central Pedestal */}
        <mesh castShadow position={[0, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.3, style.size[1], 16]} />
          <meshStandardMaterial color={color} roughness={0.5} />
        </mesh>
      </group>
    );
  }
  
  // Rectangular Table
  return (
    <group>
      {/* Tabletop */}
      <mesh castShadow receiveShadow position={[0, style.size[1]/2, 0]}>
        <boxGeometry args={[style.size[0], 0.05, style.size[2]]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>
      
      {/* Table Legs */}
      {[[1, 1], [1, -1], [-1, 1], [-1, -1]].map(([x, z], i) => (
        <mesh key={i} castShadow position={[
          x * (style.size[0]/2 - 0.1),
          0,
          z * (style.size[2]/2 - 0.1)
        ]}>
          <cylinderGeometry args={[0.05, 0.05, style.size[1], 8]} />
          <meshStandardMaterial color={color} roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
};

// Realistic Dining Chair Component
const RealisticDiningChair = ({ style, color }) => {
  return (
    <group>
      {/* Seat */}
      <mesh castShadow receiveShadow position={[0, style.size[1]/3, 0]}>
        <boxGeometry args={[style.size[0], 0.05, style.size[2]]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      
      {/* Back */}
      <mesh castShadow position={[0, style.size[1]/2 + 0.2, -style.size[2]/2]}>
        <boxGeometry args={[style.size[0], 0.4, 0.05]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      
      {/* Legs */}
      {[[1, 1], [1, -1], [-1, 1], [-1, -1]].map(([x, z], i) => (
        <mesh key={i} castShadow position={[
          x * (style.size[0]/2 - 0.05),
          0,
          z * (style.size[2]/2 - 0.05)
        ]}>
          <cylinderGeometry args={[0.02, 0.02, style.size[1]/1.5, 8]} />
          <meshStandardMaterial color="#654321" roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
};

// Realistic Desk Component
const RealisticDesk = ({ style, color }) => {
  return (
    <group>
      {/* Desktop */}
      <mesh castShadow receiveShadow position={[0, style.size[1]/2, 0]}>
        <boxGeometry args={[style.size[0], 0.05, style.size[2]]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>
      
      {/* Drawers */}
      <mesh castShadow position={[0, 0.3, style.size[2]/2 - 0.2]}>
        <boxGeometry args={[style.size[0] - 0.2, 0.6, 0.3]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      
      {/* Legs */}
      {[[1, -1], [-1, -1]].map(([x, z], i) => (
        <mesh key={i} castShadow position={[
          x * (style.size[0]/2 - 0.1),
          0,
          z * (style.size[2]/2 - 0.1)
        ]}>
          <cylinderGeometry args={[0.05, 0.05, style.size[1], 8]} />
          <meshStandardMaterial color={color} roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
};

// Realistic Office Chair Component
const RealisticOfficeChair = ({ style, color }) => {
  return (
    <group>
      {/* Seat */}
      <mesh castShadow receiveShadow position={[0, style.size[1]/3, 0]}>
        <boxGeometry args={[style.size[0], 0.1, style.size[2]]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
      
      {/* Back */}
      <mesh castShadow position={[0, style.size[1]/2, -style.size[2]/2]}>
        <boxGeometry args={[style.size[0], 0.4, 0.1]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
      
      {/* Base */}
      <mesh castShadow position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 0.2, 16]} />
        <meshStandardMaterial color="#2F4F4F" roughness={0.4} metalness={0.3} />
      </mesh>
      
      {/* Wheels */}
      {[...Array(5)].map((_, i) => (
        <mesh key={i} castShadow position={[
          Math.cos(i * Math.PI * 0.4) * 0.25,
          0.05,
          Math.sin(i * Math.PI * 0.4) * 0.25
        ]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#2F4F4F" roughness={0.3} metalness={0.5} />
        </mesh>
      ))}
    </group>
  );
};

// Basic Furniture Fallback
const BasicFurniture = ({ style, color }) => {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={style.size} />
      <meshStandardMaterial color={color} roughness={0.7} />
    </mesh>
  );
};

export default DesignCustomizer3D;