import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import pharmacyImage from '../assets/pharmacy-products.jpg';
import medicalImage from '../assets/medical-equipment.jpg';
import prescriptionImage from '../assets/prescription-meds.jpg';
import allergyImage from "../assets/Antihistamine-Allergy-Relief.jpeg";
import digitalBloodPressure from "../assets/digital-blood-pressure.jpg";
import firstAidKit from "../assets/first-aid-kit.jpg";
import infraredThermometer from "../assets/infrared-thermometer.jpg";
import ibuprofin from "../assets/ibuprofin.jpeg"; 

const Pharmacy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('recommended');

  // Comprehensive pharmacy and medical products data
  const pharmacyProducts = [
    {
      id: 1,
      image: pharmacyImage,
      title: "Ibuprofen 200mg Tablets",
      sku: "IBU-200-100",
      price: 8.99,
      unit: "bottle",
      rating: 4.8,
      category: "Pain Relief",
      supplier: "PharmaCorp",
      inStock: true,
      bestseller: true,
      image: ibuprofin,
      description: "Fast-acting pain relief for headaches, muscle aches, and fever reduction."
    },
    {
      id: 2,
      image: medicalImage,
      title: "Digital Blood Pressure Monitor",
      sku: "BP-DIG-001",
      price: 89.99,
      unit: "unit",
      rating: 4.9,
      category: "Medical Devices",
      supplier: "MedTech Solutions",
      inStock: true,
      trending: true,
      image: digitalBloodPressure,
      description: "Accurate automated blood pressure monitoring with large digital display."
    },
    {
      id: 3,
      image: prescriptionImage,
      title: "Vitamin D3 2000 IU Softgels",
      sku: "VIT-D3-2000",
      price: 15.49,
      unit: "bottle",
      rating: 4.7,
      category: "Vitamins",
      supplier: "NutriHealth",
      inStock: true,
      description: "High-potency vitamin D3 for bone health and immune support."
    },
    {
      id: 4,
      image: pharmacyImage,
      title: "First Aid Kit - Comprehensive",
      sku: "FAK-COMP-001",
      price: 24.99,
      unit: "kit",
      rating: 4.6,
      category: "First Aid",
      supplier: "SafeCare",
      inStock: true,
      bestseller: true,
      image: firstAidKit,
      description: "Complete first aid kit with bandages, antiseptic, and emergency supplies."
    },
    {
      id: 5,
      image: medicalImage,
      title: "Infrared Thermometer",
      sku: "THERM-IR-001",
      price: 34.99,
      unit: "unit",
      rating: 4.5,
      category: "Medical Devices",
      supplier: "TempTech",
      inStock: true,
      trending: true,
      image: infraredThermometer,
      description: "Non-contact infrared thermometer for quick and accurate temperature readings."
    },
    {
      id: 6,
      image: prescriptionImage,
      title: "Omega-3 Fish Oil Capsules",
      sku: "OMG-3-1000",
      price: 19.99,
      unit: "bottle",
      rating: 4.8,
      category: "Vitamins",
      supplier: "OceanHealth",
      inStock: true,
      description: "High-quality omega-3 fatty acids for heart and brain health."
    },
    {
      id: 7,
      image: pharmacyImage,
      title: "Acetaminophen 500mg Extra Strength",
      sku: "ACE-500-100",
      price: 7.49,
      unit: "bottle",
      rating: 4.7,
      category: "Pain Relief",
      supplier: "PharmaCorp",
      inStock: false,
      description: "Extra strength pain reliever and fever reducer."
    },
    {
      id: 8,
      image: medicalImage,
      title: "Pulse Oximeter",
      sku: "PO-FTG-001",
      price: 29.99,
      unit: "unit",
      rating: 4.6,
      category: "Medical Devices",
      supplier: "MedTech Solutions",
      inStock: true,
      trending: true,
      description: "Fingertip pulse oximeter for measuring blood oxygen saturation and pulse rate."
    },
    {
      id: 9,
      image: prescriptionImage,
      title: "Multivitamin Complete Daily",
      sku: "MV-COMP-30",
      price: 12.99,
      unit: "bottle",
      rating: 4.4,
      category: "Vitamins",
      supplier: "NutriHealth",
      inStock: true,
      description: "Complete daily multivitamin with essential nutrients for overall health."
    },
    {
      id: 10,
      image: pharmacyImage,
      title: "Antihistamine Allergy Relief",
      sku: "AH-ALL-24",
      price: 11.99,
      unit: "box",
      rating: 4.5,
      category: "Allergy",
      supplier: "AllergyFree",
      inStock: true,
      image: allergyImage,
      description: "24-hour allergy relief from seasonal and environmental allergens."
    },
    {
      id: 11,
      image: medicalImage,
      title: "Stethoscope Professional",
      sku: "STETH-PRO-001",
      price: 79.99,
      unit: "unit",
      rating: 4.9,
      category: "Medical Devices",
      supplier: "MedEquip Pro",
      inStock: true,
      bestseller: true,
      description: "Professional-grade stethoscope with superior acoustic performance."
    },
    {
      id: 12,
      image: prescriptionImage,
      title: "Probiotic Complex 30 Billion CFU",
      sku: "PRO-30B-60",
      price: 28.99,
      unit: "bottle",
      rating: 4.7,
      category: "Digestive Health",
      supplier: "GutHealth",
      inStock: true,
      description: "High-potency probiotic for digestive and immune system support."
    }
  ];

  const categories = ['All', 'Pain Relief', 'Medical Devices', 'Vitamins', 'First Aid', 'Allergy', 'Digestive Health'];

  const reasons = [
    "High demand in your area",
    "Seasonal recommendation",
    "Frequently restocked item",
    "Customer favorite",
    "New product launch",
    "Inventory optimization",
    "Trending in healthcare"
  ];

  // Filter and sort products
  const filteredProducts = pharmacyProducts
    .filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.sku.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.title.localeCompare(b.title);
        default: // recommended
          return (b.bestseller ? 1 : 0) + (b.trending ? 1 : 0) - (a.bestseller ? 1 : 0) - (a.trending ? 1 : 0);
      }
    });

  const handleQuickAdd = (product) => {
    console.log('Adding to cart:', product.title);
    // Here you would implement cart functionality
    alert(`Added ${product.title} to cart!`);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: 'var(--space-xl)' }}>
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-2xl">
          <div className="badge badge-recommendation mb-md" style={{ margin: '0 auto' }}>
            🏥 Pharmacy & Medical
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-lg">
            Pharmacy & Medical Products
          </h1>
          <p className="text-lg text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive selection of pharmacy items, medical devices, vitamins, and healthcare supplies 
            with AI-powered recommendations for your pharmacy needs.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md mb-lg">
            {/* Search Bar */}
            <div className="md:col-span-2">
              <div className="search-container" style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search pharmacy products..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="input"
                  style={{ paddingLeft: '40px' }}
                />
                <svg 
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '16px',
                    height: '16px',
                    color: 'hsl(var(--text-muted))'
                  }}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-lg">
            <p className="text-muted">
              Showing {filteredProducts.length} of {pharmacyProducts.length} products
              {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-lg mb-xl">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              reason={reasons[index % reasons.length]}
              confidence={Math.floor(Math.random() * 20) + 80}
              onQuickAdd={handleQuickAdd}
              className="animate-fade-in"
              style={{ animationDelay: `${(index % 8) * 0.1}s` }}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-2xl">
            <div className="text-6xl mb-lg">🔍</div>
            <h3 className="text-xl font-bold mb-md">No products found</h3>
            <p className="text-muted mb-lg">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="btn btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md mt-2xl">
          <div className="card p-lg text-center">
            <div className="text-2xl font-bold mb-sm" style={{ color: 'hsl(var(--primary))' }}>
              {pharmacyProducts.filter(p => p.category === 'Medical Devices').length}
            </div>
            <div className="text-sm text-muted">Medical Devices</div>
          </div>
          <div className="card p-lg text-center">
            <div className="text-2xl font-bold mb-sm" style={{ color: 'hsl(var(--secondary))' }}>
              {pharmacyProducts.filter(p => p.category === 'Vitamins').length}
            </div>
            <div className="text-sm text-muted">Vitamins & Supplements</div>
          </div>
          <div className="card p-lg text-center">
            <div className="text-2xl font-bold mb-sm" style={{ color: 'hsl(var(--recommendation))' }}>
              {pharmacyProducts.filter(p => p.inStock).length}
            </div>
            <div className="text-sm text-muted">In Stock</div>
          </div>
          <div className="card p-lg text-center">
            <div className="text-2xl font-bold mb-sm" style={{ color: 'hsl(var(--trending))' }}>
              {pharmacyProducts.filter(p => p.bestseller || p.trending).length}
            </div>
            <div className="text-sm text-muted">Trending Items</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;