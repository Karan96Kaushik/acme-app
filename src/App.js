import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    });

    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrollY(window.scrollY);
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Add smooth scrolling for anchor links
    const smoothScroll = (e) => {
      if (e.target.hash) {
        e.preventDefault();
        const element = document.querySelector(e.target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, [scrolled]);

  return (
    <div className="bg-amber-100 text-amber-900 min-h-screen font-serif">
      {/* Header/Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-amber-800 bg-opacity-90 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className={`font-bold text-amber-100 transition-all duration-300 ${
            scrolled ? 'text-2xl' : 'text-4xl'
          }`} style={{ fontFamily: "'Playfair Display', serif" }}>
            ACME Co.
          </h1>
          <nav className={`space-x-6 transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
            {['Products', 'About', 'Newsletter'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-amber-100 hover:text-amber-300 transition-colors relative group">
                {item}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-amber-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* New Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-700 to-amber-900">
        <div className="absolute inset-0 bg-[url('../public/images/retro-pattern.jpeg')] opacity-20"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left" data-aos="fade-right">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-amber-100"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}>
                ACME Co.
              </h1>
              <p className="text-2xl md:text-3xl italic text-amber-200 mb-8"
                 style={{
                   textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                 }}>
                Bringing Tomorrow's Technology to Today's Homes
              </p>
              <div className="flex space-x-4">
                <button className="px-8 py-4 bg-amber-500 text-amber-100 rounded-full hover:bg-amber-400 transition-all duration-300 font-bold text-xl transform hover:scale-105 shadow-lg">
                  Shop Now
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-amber-100 text-amber-100 rounded-full hover:bg-amber-100 hover:text-amber-900 transition-all duration-300 font-bold text-xl transform hover:scale-105 shadow-lg">
                  Our Story
                </button>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img 
                src="/images/retro-product-collage.webp" 
                alt="ACME Products Collage" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-amber-100 px-6 py-3 rounded-full font-bold text-xl transform rotate-12 shadow-lg">
                Since 1950
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fffbeb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-24">
        {/* Bazaar-style Featured Products */}
        <section id="products" className="mb-32">
          <h2 className="text-5xl font-bold mb-16 text-center text-amber-900" data-aos="fade-up" style={{ fontFamily: "'Western', serif", textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>Timeless Treasures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: "Miracle Toaster", price: "$19.99", description: "Toast like it's 1952" },
              { name: "Super Vacuum", price: "$49.99", description: "Sucks up trouble since '55" },
              { name: "Deluxe Radio", price: "$29.99", description: "Tunes that never get old" }
            ].map((item, index) => (
              <div
                key={index}
                className="relative group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="overflow-hidden rounded-lg shadow-xl border-4 border-amber-800">
                  <img
                    src={`/images/retro-product-${index + 1}.webp`}
                    alt={item.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110 sepia"
                  />
                </div>
                <div className="mt-6 text-center bg-amber-200 p-6 rounded-lg shadow-md transform -translate-y-8">
                  <h3 className="text-2xl font-bold mb-2 text-amber-900" style={{ fontFamily: "'Wanted', serif" }}>{item.name}</h3>
                  <p className="text-lg mb-3 text-amber-700 italic">{item.description}</p>
                  <p className="text-xl mb-4 font-bold text-amber-900">{item.price}</p>
                  <button className="bg-amber-800 text-amber-100 px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300 font-bold text-lg shadow-md hover:shadow-lg border-2 border-amber-900">
                    Add to Cart
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-amber-800 text-amber-100 px-4 py-2 rounded-full font-bold text-sm shadow-md transform rotate-12">
                  Limited Stock
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New: Testimonials Section */}
        <section id="testimonials" className="mb-32">
          <h2 className="text-5xl font-semibold mb-16 text-center text-amber-900" data-aos="fade-up" style={{ fontFamily: "'Playfair Display', serif" }}>What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { name: "Jane Doe", quote: "ACME products have revolutionized my home life!" },
              { name: "John Smith", quote: "I can't imagine my kitchen without my ACME Miracle Toaster." }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-amber-50 p-6 border-4 border-amber-800 rounded-lg shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <p className="text-xl italic mb-4">"{item.quote}"</p>
                <p className="text-lg font-semibold">- {item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-32 relative py-32 bg-gradient-to-br from-amber-900 to-amber-800 text-amber-100 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('../public/images/retro-pattern.jpeg')] opacity-10 animate-pulse"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
              <h2 className="text-4xl font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>The ACME Story</h2>
              <p className="text-lg leading-relaxed mb-4">
                Since 1950, ACME Co. has been bringing innovation to American homes. Our founder, John Smith, believed in creating products that make life easier and more enjoyable.
              </p>
              <p className="text-lg leading-relaxed">
                From our humble beginnings in a small garage to becoming a household name, we've never lost sight of our mission: to provide quality, affordable products for the modern family.
              </p>
              <button className="mt-8 px-8 py-3 bg-amber-400 text-amber-900 rounded-full hover:bg-amber-300 transition-colors duration-300 font-bold">
                Learn Our History
              </button>
            </div>
            <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
              <img src="/images/retro-factory.jpeg" alt="ACME Co. Factory" className="w-full h-auto rounded-lg shadow-2xl" />
            </div>
          </div>
        </section>

        {/* New: Features Section */}
        <section id="features" className="mb-32">
          <h2 className="text-5xl font-semibold mb-16 text-center text-amber-900" data-aos="fade-up" style={{ fontFamily: "'Playfair Display', serif" }}>Why Choose ACME?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Quality", description: "Built to last with premium materials" },
              { title: "Innovation", description: "Cutting-edge technology for everyday use" },
              { title: "Customer Service", description: "24/7 support for all your needs" }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 p-16 rounded-xl relative overflow-hidden shadow-2xl" data-aos="fade-up">
          <div className="absolute inset-0 bg-[url('../public/images/retro-pattern.jpeg')] opacity-5 animate-pulse"></div>
          <div className="relative z-10">
            <h2 className="text-5xl font-semibold mb-8 text-amber-900" style={{ fontFamily: "'Playfair Display', serif" }}>Join the ACME Family!</h2>
            <p className="text-amber-900 mb-10 text-xl">Subscribe to our newsletter for exclusive offers, new product announcements, and helpful tips for your ACME products!</p>
            <form className="flex flex-col sm:flex-row max-w-2xl mx-auto" onSubmit={(e) => { e.preventDefault(); /* Handle form submission */ }}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-amber-50 text-amber-900 px-8 py-5 rounded-l-full sm:rounded-r-none mb-4 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-amber-800 flex-grow text-lg"
                required
              />
              <button
                type="submit"
                className="bg-amber-800 text-amber-100 px-10 py-5 rounded-r-full sm:rounded-l-none hover:bg-amber-700 transition-colors duration-300 font-bold text-lg"
              >
                Subscribe Now!
              </button>
            </form>
          </div>
        </section>

        {/* New: FAQ Section */}
        <section id="faq" className="mb-32">
          <h2 className="text-5xl font-semibold mb-16 text-center text-amber-900" data-aos="fade-up" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              { question: "How long is the warranty?", answer: "All ACME products come with a 2-year warranty." },
              { question: "Do you offer international shipping?", answer: "Yes, we ship to most countries worldwide." }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-amber-50 p-6 rounded-lg shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p className="text-lg">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-amber-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; 1950-{new Date().getFullYear()} ACME Co. All rights reserved.</p>
          <div className="mt-6 flex justify-center space-x-8">
            <a href="#" className="hover:text-amber-200 transition-colors text-lg">Catalog</a>
            <a href="#" className="hover:text-amber-200 transition-colors text-lg">Warranty</a>
            <a href="#" className="hover:text-amber-200 transition-colors text-lg">Contact</a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {scrollY > 500 && (
        <button
          className="fixed bottom-8 right-8 bg-amber-600 text-amber-100 p-3 rounded-full shadow-lg hover:bg-amber-500 transition-colors duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;