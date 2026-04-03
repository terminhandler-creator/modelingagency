export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#" className="font-display text-2xl font-bold text-primary-600">Visage Models</a>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-600 hover:text-primary-600 transition">Roster</a>
            <a href="#about" className="text-gray-600 hover:text-primary-600 transition">About</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary-600 transition">Reviews</a>
            <a href="#faq" className="text-gray-600 hover:text-primary-600 transition">FAQ</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600 transition">Contact</a>
          </nav>
          <a href="#contact" className="bg-primary-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-600 transition">Apply Now</a>
        </div>
      </header>

      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <video src="/hero.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">Discover the Next Face of Fashion</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">A boutique modeling agency representing talent across fashion, commercial, editorial, and runway.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#services" className="bg-primary-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary-600 transition">View Our Roster</a>
            <a href="#contact" className="bg-white/20 backdrop-blur text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white/30 transition border border-white/30">Submit Your Portfolio</a>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Our Divisions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">We represent diverse talent across every category of the modeling industry.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "/service-1.jpg", title: "Fashion & Editorial", desc: "High-fashion talent for magazine covers, designer campaigns, and editorial spreads with top publications." },
              { img: "/service-2.jpg", title: "Commercial Print", desc: "Relatable, expressive models for advertising campaigns, product packaging, and brand marketing." },
              { img: "/service-3.jpg", title: "Runway & Shows", desc: "Experienced runway models for fashion weeks, trunk shows, designer presentations, and live events." },
              { img: "/service-4.jpg", title: "Fitness & Lifestyle", desc: "Athletic, wellness-focused talent for activewear brands, sports campaigns, and lifestyle content." },
              { img: "/service-5.jpg", title: "Plus Size Division", desc: "Celebrating beauty at every size with dedicated representation for plus-size fashion and beauty campaigns." },
              { img: "/service-6.jpg", title: "New Faces", desc: "Our development program for aspiring models with the potential to become the next big name in the industry." },
            ].map((s, i) => (
              <div key={i} className="group bg-primary-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-52 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">About Visage Models</h2>
            <p className="text-gray-700 text-lg mb-6">Visage Models was founded with a commitment to authentic representation and ethical talent management. We discover, develop, and champion extraordinary faces.</p>
            <p className="text-gray-700 text-lg mb-8">Our bookers and agents have deep relationships with the top brands, photographers, and creative directors. When you sign with Visage, doors open.</p>
            <div className="flex gap-8">
              <div><p className="text-3xl font-bold text-primary-600">15+</p><p className="text-gray-600">Years in Business</p></div>
              <div><p className="text-3xl font-bold text-primary-600">200+</p><p className="text-gray-600">Active Models</p></div>
              <div><p className="text-3xl font-bold text-primary-600">50+</p><p className="text-gray-600">Brand Partners</p></div>
            </div>
          </div>
          <img src="/about.jpg" alt="About Visage Models" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h3 className="font-display text-3xl font-bold text-gray-900 mb-10 text-center">Agency Leadership</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: "/team-1.jpg", name: "Dominique Laurent", role: "Founder & President" },
              { img: "/team-2.jpg", name: "Kenji Watanabe", role: "Head Booker" },
              { img: "/team-3.jpg", name: "Amara Osei", role: "Talent Development" },
            ].map((m, i) => (
              <div key={i} className="text-center">
                <img src={m.img} alt={m.name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
                <h4 className="font-display text-xl font-bold text-gray-900">{m.name}</h4>
                <p className="text-primary-600">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-16 text-center">What Our Models Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Visage got me my first Vogue booking within six months of signing. They genuinely invest in your career.", name: "Taylor K.", role: "Fashion Model" },
              { quote: "Unlike other agencies, Visage actually cares about your wellbeing. They never push you into uncomfortable situations.", name: "Jordan M.", role: "Commercial Model" },
              { quote: "The new faces program was exactly what I needed. Professional coaching, test shoots, and real industry connections.", name: "Lena S.", role: "New Face" },
            ].map((t, i) => (
              <div key={i} className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>)}</div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-primary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "How do I apply?", a: "Submit your portfolio through our contact form or attend one of our open calls held quarterly in major cities." },
              { q: "Do I need professional photos?", a: "No. We prefer to see clean, natural photos: a headshot, full body, and profile. No heavy makeup or editing." },
              { q: "What age range do you represent?", a: "We represent models ages 16 and up. Models under 18 require parental consent and have adjusted work schedules." },
              { q: "Is there a fee to join?", a: "Legitimate agencies never charge upfront fees. We earn commission only when you book paid work." },
              { q: "What markets do you cover?", a: "We are based domestically with partnerships in London, Paris, Milan, and Tokyo for international placements." },
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-xl p-6 border border-primary-100">
                <summary className="cursor-pointer font-bold text-gray-900 flex justify-between items-center">
                  {item.q}
                  <svg className="w-5 h-5 text-primary-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
                </summary>
                <p className="mt-4 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">Join Visage</h2>
              <p className="text-gray-600 text-lg mb-8">Think you have what it takes? We would love to see your look. Send us your photos today.</p>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>880 Fashion District</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>(555) 555-0880</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>submissions@visagemodels.com</p>
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="How can we help?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none" placeholder="Your message..." />
              </div>
              <button type="submit" className="w-full bg-primary-500 text-white py-3 rounded-full font-medium hover:bg-primary-600 transition">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display text-xl font-bold mb-4">Visage Models</h3>
              <p className="text-gray-400">Boutique modeling agency representing talent across fashion, commercial, editorial, runway, fitness, and new faces divisions.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-white transition">Roster</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition">About</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <p className="text-gray-400">Mon-Fri: 10am-6pm</p>
              <p className="text-gray-400"></p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 Visage Models. A Tideline demo.</p>
            <p className="mt-1">Designed by <a href="https://tideline.torreypines.io" className="text-gray-400 hover:text-white transition">Tideline</a> &mdash; AI-powered web design</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
