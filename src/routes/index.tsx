import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Navigation } from '../components'

// Product data
const products = [
  {
    id: 1,
    name: "Minimalist Table Lamp",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    rating: 4.5,
    reviews: 42,
    description: "Elegant ceramic lamp perfect for bedside or living room.",
    categories: ["living-room"]
  },
  {
    id: 2,
    name: "Modern Accent Chair",
    price: "$249.99",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    rating: 5,
    reviews: 67,
    description: "Comfortable and stylish addition to any room.",
    categories: ["living-room", "bedroom"]
  },
  {
    id: 3,
    name: "Abstract Wall Art Set",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    rating: 4,
    reviews: 35,
    description: "Set of 3 canvas prints to elevate your walls.",
    categories: ["living-room", "kitchen", "office"]
  },
  {
    id: 4,
    name: "Ceramic Decorative Vase",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    rating: 4.5,
    reviews: 28,
    description: "Handcrafted vase for flowers or standalone decor.",
    categories: ["bedroom", "office", "kitchen"]
  }
];

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "10 Minimalist Living Room Ideas for 2025",
    excerpt: "Discover how to create a serene and stylish living space with these minimalist design principles and product recommendations.",
    image: "https://images.unsplash.com/photo-1615529162924-f8605388463a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    date: "June 12, 2025",
    category: "Living Room"
  },
  {
    id: 2,
    title: "Affordable Luxury: High-End Look for Less",
    excerpt: "Get the luxury home aesthetic without breaking the bank with these budget-friendly finds and smart shopping tips.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    date: "May 28, 2025",
    category: "Budget Decor"
  },
  {
    id: 3,
    title: "Pinterest's Most Popular Home Decor Trends",
    excerpt: "Explore the top home decor trends taking over Pinterest and how to incorporate them into your space.",
    image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    date: "May 15, 2025",
    category: "Decor Tips"
  },
  {
    id: 4,
    title: "Small Space Solutions: Big Style for Tiny Rooms",
    excerpt: "Maximize your small space with multifunctional furniture, smart storage, and visual tricks that make any room feel bigger and brighter.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    date: "April 30, 2025",
    category: "Small Spaces"
  },
  {
    id: 5,
    title: "Eco-Friendly Decor: Sustainable Style for Modern Homes",
    excerpt: "Learn how to decorate with eco-conscious choices, upcycled finds, and sustainable materials for a greener, healthier home.",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    date: "April 8, 2025",
    category: "Eco-Friendly"
  }
];

// Categories data
const categories = [
  {
    id: "living-room",
    name: "Living Room",
    description: "Sofas, Chairs & Tables",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
  },
  {
    id: "bedroom",
    name: "Bedroom",
    description: "Beds, Dressers & Decor",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
  },
  {
    id: "kitchen",
    name: "Kitchen & Dining",
    description: "Tables, Chairs & Accessories",
    image: "https://images.unsplash.com/photo-1556911220-ef412ae179a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
  },
  {
    id: "office",
    name: "Home Office",
    description: "Desks, Chairs & Storage",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
  }
];

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex items-center gap-1 text-yellow-400 mb-2">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
      <span className="text-gray-600 text-sm ml-1">({reviews} reviews)</span>
    </div>
  );
}

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(products.filter(product => 
        product.categories.includes(selectedCategory)
      ));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation currentPath="/" />

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Modern<span className="text-rose-400">Nest</span>Decor
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-rose-400 font-medium transition-colors">Home</button>
            <button onClick={() => scrollToSection('shop')} className="text-gray-700 hover:text-rose-400 font-medium transition-colors">Shop</button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-rose-400 font-medium transition-colors">Blog</button>
            <button onClick={() => scrollToSection('resources')} className="text-gray-700 hover:text-rose-400 font-medium transition-colors">Resources</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-white/80 to-white/80 py-24" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 font-serif">
            Transform Your Home with Modern Decor
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover curated home decor ideas and products that bring elegance and comfort to your living space. Perfect for modern living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('shop')}
              className="bg-rose-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-500 transition-all transform hover:scale-105"
            >
              Shop Top Picks
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="border-2 border-rose-400 text-rose-400 px-8 py-3 rounded-full font-semibold hover:bg-rose-400 hover:text-white transition-all"
            >
              Read Our Blog
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif relative inline-block">
              Shop by Category
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-rose-400"></div>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  scrollToSection('shop');
                }}
                className="group relative h-80 rounded-lg overflow-hidden shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="shop" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif relative inline-block">
              Featured Products
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-rose-400"></div>
            </h2>
            {selectedCategory && (
              <div className="mt-4">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm hover:bg-rose-200 transition-colors"
                >
                  Clear Filter
                </button>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <StarRating rating={product.rating} reviews={product.reviews} />
                  <div className="text-xl font-bold text-rose-400 mb-2">{product.price}</div>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <button className="w-full bg-rose-400 text-white py-2 rounded-lg font-semibold hover:bg-rose-500 transition-colors">
                    Shop Now
                  </button>
                  <div className="mt-3 text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded inline-block">
                    Amazon Affiliate Link
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif relative inline-block">
              Latest Blog Posts
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-rose-400"></div>
            </h2>
            <p className="text-gray-600">Home decor tips, trends, and product recommendations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 min-h-[3.5rem]">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="bg-rose-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-rose-500 transition-colors">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif relative inline-block">
              Free Decor Resources
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-rose-400"></div>
            </h2>
            <p className="text-gray-600">Tools and guides to help you create your dream home</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl text-rose-400 mb-6">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Color Scheme Guide</h3>
              <p className="text-gray-600 mb-6">Download our free guide to choosing the perfect color palette for every room in your home.</p>
              <a 
                href="https://www.canva.com/colors/color-palettes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-rose-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-rose-500 transition-colors inline-block"
              >
                Download Now
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl text-rose-400 mb-6">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Room Layout Planner</h3>
              <p className="text-gray-600 mb-6">Our interactive tool helps you visualize furniture placement before you buy.</p>
              <a 
                href="https://www.roomstyler.com/3dplanner" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-rose-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-rose-500 transition-colors inline-block"
              >
                Try the Planner
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">ModernNestDecor</h3>
              <p className="text-gray-300">Transform your home with curated decor ideas and affiliate products.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-rose-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('shop')} className="text-gray-300 hover:text-rose-400 transition-colors">Shop</button></li>
                <li><button onClick={() => scrollToSection('blog')} className="text-gray-300 hover:text-rose-400 transition-colors">Blog</button></li>
                <li><button onClick={() => scrollToSection('resources')} className="text-gray-300 hover:text-rose-400 transition-colors">Resources</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button 
                      onClick={() => {
                        setSelectedCategory(category.id);
                        scrollToSection('shop');
                      }}
                      className="text-gray-300 hover:text-rose-400 transition-colors"
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 ModernNestDecor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Home,
})