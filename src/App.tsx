/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  MapPin, 
  Phone, 
  Instagram, 
  Clock, 
  ChevronRight, 
  ChevronLeft,
  Menu as MenuIcon, 
  X, 
  MessageCircle, 
  Navigation,
  Wifi,
  Palette,
  UtensilsCrossed,
  Star
} from 'lucide-react';
import { MENU_ITEMS, REVIEWS, FEATURES } from './constants';

const IconMap: Record<string, any> = {
  Coffee,
  Croissant: UtensilsCrossed,
  Palette,
  Wifi
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1A1A1A] font-sans selection:bg-[#5A5A40] selection:text-white" dir="rtl">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 text-[#1A1A1A]' : 'bg-transparent py-6 text-white'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className={`${scrolled ? 'bg-[#1A1A1A] text-white' : 'bg-white text-[#1A1A1A]'} px-2 py-1 rounded transition-colors`}>קפה</span>
            <span className={scrolled ? 'text-[#5A5A40]' : 'text-white'}>בצלאל</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium">
            {['תפריט', 'עלינו', 'גלריה', 'מיקום'].map((item, i) => (
              <button 
                key={i} 
                onClick={() => scrollTo(item === 'תפריט' ? 'menu' : item === 'עלינו' ? 'about' : item === 'גלריה' ? 'gallery' : 'location')}
                className="hover:opacity-70 transition-opacity"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('tel:02-590-6457', '_self')}
              className={`${scrolled ? 'bg-[#5A5A40] text-white' : 'bg-white text-[#1A1A1A]'} px-6 py-2 rounded-full hover:opacity-90 transition-all transform hover:scale-105`}
            >
              התקשרו עכשיו
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <MenuIcon size={28} className={scrolled ? 'text-[#1A1A1A]' : 'text-white'} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-[60] bg-white p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8 mt-12 text-3xl font-bold">
              <button onClick={() => scrollTo('menu')} className="text-right">תפריט</button>
              <button onClick={() => scrollTo('about')} className="text-right">עלינו</button>
              <button onClick={() => scrollTo('gallery')} className="text-right">גלריה</button>
              <button onClick={() => scrollTo('location')} className="text-right">מיקום</button>
              <button 
                onClick={() => window.open('tel:02-590-6457', '_self')}
                className="bg-[#5A5A40] text-white py-4 rounded-xl text-center mt-4"
              >
                התקשרו עכשיו
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=2000" 
            alt="Cafe Atmosphere" 
            className="w-full h-full object-cover brightness-[0.6]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white pt-16 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-4 md:mb-6">
              קפה בצלאל – <br />
              <span className="text-[#D4C3A3]">חוויה ירושלמית</span> אמיתית
            </h1>
            <p className="text-lg md:text-2xl mb-8 md:mb-10 opacity-90 font-light max-w-xl">
              קפה איכותי, אוכל טרי ואווירה יצירתית בלב ירושלים. המקום שבו אמנות וטעם נפגשים.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=בצלאל+8+ירושלים', '_blank')}
                className="bg-white text-[#1A1A1A] px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg flex items-center justify-center gap-2 hover:bg-[#D4C3A3] transition-all"
              >
                <Navigation size={20} />
                נווט אלינו
              </button>
              <button 
                onClick={() => scrollTo('menu')}
                className="bg-transparent border-2 border-white text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-[#1A1A1A] transition-all"
              >
                הזמן עכשיו
              </button>
            </div>
          </motion.div>
        </div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-50 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {FEATURES.map((feature, i) => {
              const Icon = IconMap[feature.icon];
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-[#FDFCF8] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#5A5A40] group-hover:text-white transition-all duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-24 bg-[#FDFCF8]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">התפריט שלנו</h2>
            <div className="w-20 h-1 bg-[#5A5A40] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {MENU_ITEMS.slice(0, 3).map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
              >
                <h3 className="text-2xl font-bold mb-8 text-[#5A5A40] border-b pb-4">{cat.category}</h3>
                <div className="space-y-8">
                  {cat.items.slice(0, 3).map((item, j) => (
                    <div key={j} className="group">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-lg font-bold group-hover:text-[#5A5A40] transition-colors">{item.name}</h4>
                        <span className="font-mono font-medium text-gray-400">₪{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => setIsFullMenuOpen(true)}
              className="bg-[#1A1A1A] text-white px-12 py-4 rounded-full font-bold hover:bg-[#333] transition-all"
            >
              לתפריט המלא
            </button>
          </div>
        </div>
      </section>

      {/* Gallery / Instagram */}
      <section id="gallery" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-2">רגעים מבצלאל</h2>
              <p className="text-gray-500 italic">עקבו אחרינו באינסטגרם @cafe.bezalel</p>
            </div>
            <button 
              onClick={() => window.open('https://www.instagram.com/cafe.bezalel/', '_blank')}
              className="flex items-center gap-2 text-[#5A5A40] font-bold hover:underline group transition-all"
            >
              לפרופיל המלא <ChevronLeft size={20} className="group-hover:translate-x-[-4px] transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800"
            ].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer"
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white" size={32} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-[#5A5A40] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">מה הלקוחות שלנו אומרים</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <div className="flex gap-1 mb-4 text-[#D4C3A3]">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg mb-6 italic leading-relaxed">"{review.text}"</p>
                <p className="font-bold">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">איפה אנחנו נמצאים?</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FDFCF8] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#5A5A40]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">כתובת</h4>
                    <p className="text-gray-500">רחוב בצלאל 8, ירושלים</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FDFCF8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#5A5A40]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">שעות פתיחה</h4>
                    <p className="text-gray-500">א' - ה': 07:00 - 20:00</p>
                    <p className="text-gray-500">ו': 07:00 - 17:00</p>
                    <p className="text-gray-500">שבת: 08:00 - 20:00</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FDFCF8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#5A5A40]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">טלפון</h4>
                    <p className="text-gray-500">02-590-6457</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex flex-wrap gap-4">
                <button 
                  onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=בצלאל+8+ירושלים', '_blank')}
                  className="bg-[#5A5A40] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#4A4A35] transition-all"
                >
                  <Navigation size={20} />
                  ניווט ב-Google Maps
                </button>
                <button 
                  onClick={() => window.open('tel:02-590-6457', '_self')}
                  className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#333] transition-all"
                >
                  <Phone size={20} />
                  התקשרו עכשיו
                </button>
              </div>
            </div>
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.744111304253!2d35.2138888!3d31.7811111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d8e8e8e8e8%3A0x1234567890abcdef!2z16fXpNeUINeR16bXnNeZIDgsINeZ16jXlde some-fake-id!5e0!3m2!1siw!2sil!4v1234567890123" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
              
              {/* Custom Red Pin Overlay */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5
                  }}
                  className="text-red-600 drop-shadow-lg mb-8"
                >
                  <MapPin size={48} fill="currentColor" fillOpacity={0.3} />
                </motion.div>
              </div>

              {/* Navigation Button Overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=קפה+בצלאל+בצלאל+8+ירושלים', '_blank')}
                  className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 hover:bg-[#5A5A40] transition-all whitespace-nowrap"
                >
                  <Navigation size={20} />
                  נווט עכשיו
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-bold mb-6">קפה <span className="text-[#5A5A40]">בצלאל</span></div>
              <p className="text-gray-400 max-w-sm mb-8">
                הבית של הסטודנטים, האמנים וכל מי שאוהב קפה טוב באמת בלב ירושלים. מחכים לכם עם מאפה חם וחיוך.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/cafe.bezalel/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#5A5A40] transition-all"><Instagram size={20} /></a>
                <a href="tel:02-590-6457" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#5A5A40] transition-all"><Phone size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">ניווט מהיר</h4>
              <ul className="space-y-4 text-gray-400">
                <li><button onClick={() => scrollTo('menu')} className="hover:text-white">תפריט</button></li>
                <li><button onClick={() => scrollTo('about')} className="hover:text-white">עלינו</button></li>
                <li><button onClick={() => scrollTo('gallery')} className="hover:text-white">גלריה</button></li>
                <li><button onClick={() => scrollTo('location')} className="hover:text-white">מיקום</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">צור קשר</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-2"><Phone size={16} /> 02-590-6457</li>
                <li className="flex items-center gap-2"><MapPin size={16} /> בצלאל 8, ירושלים</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} קפה בצלאל ירושלים. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>

      {/* Full Menu Modal */}
      <AnimatePresence>
        {isFullMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md overflow-y-auto p-6 md:p-12"
          >
            <div className="max-w-4xl mx-auto bg-[#FDFCF8] rounded-3xl p-8 md:p-16 relative">
              <button 
                onClick={() => setIsFullMenuOpen(false)}
                className="absolute top-6 left-6 text-[#1A1A1A] hover:text-[#5A5A40] transition-colors"
              >
                <X size={32} />
              </button>
              
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-2">התפריט המלא</h2>
                <p className="text-[#5A5A40] font-medium">קפה בצלאל - ירושלים</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {MENU_ITEMS.map((cat, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-bold mb-6 text-[#5A5A40] border-b-2 border-[#5A5A40]/20 pb-2">{cat.category}</h3>
                    <div className="space-y-6">
                      {cat.items.map((item, j) => (
                        <div key={j}>
                          <div className="flex justify-between items-baseline mb-1">
                            <h4 className="text-lg font-bold">{item.name}</h4>
                            <span className="font-mono text-gray-500">₪{item.price}</span>
                          </div>
                          <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t text-center text-gray-400 text-sm">
                <p>* המחירים עשויים להשתנות. ט.ל.ח</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open('tel:02-590-6457', '_self')}
          className="w-14 h-14 bg-[#1A1A1A] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#333] transition-all"
        >
          <Phone size={28} />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open('https://wa.me/97225906457', '_blank')}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#128C7E] transition-all"
        >
          <MessageCircle size={28} />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=בצלאל+8+ירושלים', '_blank')}
          className="w-14 h-14 bg-[#5A5A40] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#4A4A35] transition-all"
        >
          <Navigation size={28} />
        </motion.button>
      </div>
    </div>
  );
}
