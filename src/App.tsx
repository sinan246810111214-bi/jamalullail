/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MapPin, 
  ChevronDown, 
  BookOpen, 
  Laptop, 
  Users, 
  Building2, 
  Facebook, 
  Instagram, 
  Youtube, 
  Video, 
  Palette, 
  Globe, 
  Layout, 
  ArrowUp,
  Menu,
  X,
  Stethoscope,
  School,
  Send,
  CheckCircle,
  Trash2,
  Lock,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Inbox,
  Plane
} from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState("home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", id: "home" },
    { name: "CEO Vision", href: "#ceo", id: "ceo" },
    { name: "Facilities", href: "#infrastructure", id: "facilities" },
    { name: "Modern Skills", href: "#skills", id: "skills" },
    { name: "FAQ", href: "#faq", id: "faq" },
  ];

  return (
    <header 
      className={`fixed left-0 right-0 z-50 transition-all duration-700 px-4 md:px-8 pt-6`}
    >
      <nav className={`max-w-7xl mx-auto transition-all duration-700 px-6 py-4 rounded-[24px] flex items-center justify-between border backdrop-blur-xl bg-emerald-deep/80 border-gold-premium/20 shadow-2xl shadow-emerald-deep/20`}>
        <div className="flex items-center gap-3 md:gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.05 }}
            className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl overflow-hidden flex items-center justify-center border border-gold-premium/30 shadow-lg"
          >
             <img src="https://i.ibb.co/BVn75Bw5/Chat-GPT-Image-Apr-20-2026-02-57-00-PM.png" alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-cream-soft uppercase leading-none">
              Jamalullail
            </span>
            <span className="text-[7px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-gold-premium/80 font-bold mt-1">
              Islamic Dawa College
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveSegment(link.id)}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative group py-2 ${
                activeSegment === link.id ? "text-gold-premium" : "text-cream-soft/70 hover:text-gold-premium"
              }`}
            >
              {link.name}
              {activeSegment === link.id && (
                <motion.span 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-premium rounded-full"
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-6">
          <a
            href="#admissions"
            className="hidden lg:flex items-center gap-3 px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest bg-gold-premium text-white shadow-lg shadow-gold-premium/20 hover:bg-gold-premium/90 hover:-translate-y-0.5 transition-all"
          >
            Apply Now <Send size={12} className="rotate-45" />
          </a>
          
          <button 
            className="lg:hidden p-3 text-gold-premium bg-white/5 backdrop-blur-md rounded-xl border border-gold-premium/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            className="absolute top-full left-4 right-4 mt-6 bg-[#042f24]/98 backdrop-blur-3xl border border-gold-premium/30 p-10 md:hidden shadow-2xl rounded-[40px] z-50"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif font-bold text-cream-soft hover:text-gold-premium transition-colors flex justify-between items-center group"
                >
                  {link.name}
                  <div className="w-8 h-px bg-gold-premium/20 group-hover:w-16 transition-all" />
                </motion.a>
              ))}
              <div className="pt-4">
                <a
                  href="#admissions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-5 bg-gold-premium text-emerald-deep rounded-3xl font-bold uppercase tracking-widest shadow-gold-glow flex items-center justify-center gap-3"
                >
                  Enquiry for Admissions <Send size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-emerald-deep">
      {/* Background with Motion */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://i.ibb.co/vScL096/muswabbah.jpg" 
          alt="Jamalullail Islamic Dawa College Campus" 
          className="w-full h-full object-cover origin-center grayscale brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/40 to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gold-premium/20 border border-gold-premium/30 text-gold-premium text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
              Est. 1999 • Sacred Knowledge
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-bold text-white leading-[0.95] tracking-tighter mb-10">
              Jamalullail <br />
              <span className="font-serif italic text-gold-premium">Islamic Dawa College</span> <br />
              <div className="text-white/20 text-lg sm:text-2xl md:text-3xl lg:text-[2.5rem] mt-6 uppercase tracking-[0.3em] font-sans">
                Integrated Education <br /> & Digital Skills
              </div>
            </h1>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="flex flex-col md:flex-row gap-12 items-start md:items-center"
          >
            <p className="text-lg md:text-xl text-cream-soft/60 leading-relaxed font-light max-w-xl italic border-l border-gold-premium/50 pl-8">
              Empowering the next generation of Islamic scholars through a synthesis of classical tradition and modern academic rigor.
            </p>
            
            <a 
              href="#admissions" 
              className="group relative px-10 py-5 bg-white text-emerald-deep rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-3"
            >
              <span className="relative z-10 text-[10px] uppercase tracking-widest">Begin Journey</span>
              <Send size={16} className="relative z-10 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 text-cream-soft/30"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-gold-premium to-transparent" />
      </motion.div>
    </section>
  );
};

const CEOProfile = () => {
  return (
    <section id="ceo" className="py-24 md:py-40 bg-cream-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -50 }}
             viewport={{ once: true }}
             className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden border-2 border-gold-premium/20 shadow-2xl">
              <img 
                src="https://i.ibb.co/ksBvJ3Qj/Chat-GPT-Image-2026-20-10-23-40-AM.png" 
                alt="Sayyid Muqthar Ahmad Jamalullaili Al Adani" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-[2000ms]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Glass Float Quote */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-4 md:-right-10 p-10 backdrop-blur-2xl bg-emerald-deep/90 border border-gold-premium/30 rounded-3xl shadow-2xl max-w-xs"
            >
              <p className="text-gold-premium font-serif text-xl italic leading-relaxed">
                "Knowledge is the light that illuminates the path to divine proximity."
              </p>
              <div className="mt-4 w-12 h-0.5 bg-gold-premium/30" />
            </motion.div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <span className="text-gold-premium font-bold uppercase tracking-[0.4em] text-[10px] block mb-6">Our Leadership</span>
            <h2 className="text-5xl md:text-7xl font-bold text-emerald-deep leading-tight mb-8">
              Sayyid Muqthar <br />
              <span className="font-serif italic text-gold-premium font-light">Ahmad Jamalullaili Al Adani</span>
            </h2>
            <div className="space-y-6 text-emerald-deep/70 text-lg md:text-xl font-light leading-relaxed mb-12">
              <p>
                A descendant of the noble Jamalullail lineage, Sayyid Muqthar Ahmad Jamalullaili Al Adani embodies the synthesis of spiritual heritage and progressive vision.
              </p>
              <p>
                His leadership at Jamalullail Islamic Dawa College is dedicated to cultivating a generation of scholars who are as grounded in their faith as they are competent in the modern world.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-10 pt-10 border-t border-emerald-deep/10">
              <div>
                <p className="text-gold-premium font-bold text-[10px] uppercase tracking-widest mb-2">Vision</p>
                <p className="font-bold text-emerald-deep">Holistic Excellence</p>
              </div>
              <div>
                <p className="text-gold-premium font-bold text-[10px] uppercase tracking-widest mb-2">Values</p>
                <p className="font-bold text-emerald-deep">Adab & Intellectual Growth</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ModernSkills = () => {
  const skillSets = [
    {
      category: "Vocational Excellence",
      icon: <Video className="text-gold-premium" />,
      skills: ["Digital Marketing", "Poster Designing", "Pro Video Editing"]
    },
    {
      category: "Global Fluency",
      icon: <Globe className="text-gold-premium" />,
      skills: ["Arabic Coaching", "English Proficiency", "Multilingual Support"]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-40 bg-emerald-deep relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <span className="text-gold-premium font-bold uppercase tracking-[0.6em] text-[10px] block mb-6">The Lab of Future</span>
          <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-tight">
            Advanced Skill <br />
            <span className="font-serif italic text-gold-premium">Mastery</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillSets.map((set, i) => (
            <motion.div
              key={set.category}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group p-10 md:p-16 backdrop-blur-2xl bg-white/5 border border-gold-premium/20 rounded-[48px] hover:bg-white/10 transition-all duration-700 hover:shadow-2xl hover:shadow-gold-premium/10"
            >
              <div className="w-20 h-20 bg-gold-premium/20 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                {React.cloneElement(set.icon as React.ReactElement, { size: 40 })}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">{set.category}</h3>
              <ul className="space-y-4">
                {set.skills.map(s => (
                  <li key={s} className="flex items-center gap-4 text-cream-soft/60 text-lg font-light">
                    <div className="w-8 h-px bg-gold-premium/40" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Visual Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gold-premium/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-deep/20 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

const Infrastructure = () => {
  const items = [
    {
      title: "Divine Library",
      category: "Archive",
      desc: "A sanctuary for classical manuscripts and modern digital resources.",
      img: "https://i.ibb.co/yBf6bYZH/612fa333-f8eb-4156-9918-2443f6b5a768.png",
      span: "lg:col-span-2 lg:row-span-2"
    },
    {
      title: "Sacred Courtyards",
      category: "Campus",
      desc: "Architectural harmony designed for contemplative learning.",
      img: "https://i.ibb.co/0ypyh6LQ/arabic.jpg",
      span: "lg:col-span-2 lg:row-span-1"
    },
    {
      title: "Digital Lab",
      category: "Innovation",
      desc: "Advanced technology labs for modern vocational skills.",
      img: "https://i.ibb.co/QjQ7zh15/c70f2ba0-be44-498c-be1e-49fdbf7d2cd4.png",
      span: "lg:col-span-1 lg:row-span-1"
    },
    {
      title: "Scholarly Mentors",
      category: "Faculty",
      desc: "Expert guides mentoring students in virtue and wisdom.",
      img: "https://i.ibb.co/VWDPC9hn/Whats-App-Image-2026-04-20-at-10-42-19-AM-1.jpg",
      span: "lg:col-span-1 lg:row-span-1"
    }
  ];

  return (
    <section id="infrastructure" className="py-24 md:py-40 bg-cream-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-32">
          <div className="max-w-3xl">
            <span className="text-gold-premium font-bold uppercase tracking-[0.6em] text-[10px] block mb-6">Our Sanctuary</span>
            <h2 className="text-5xl md:text-8xl font-bold text-emerald-deep tracking-tighter leading-tight">
              Elite <br />
              <span className="font-serif italic text-gold-premium">Facilities</span>
            </h2>
          </div>
          <p className="text-emerald-deep/50 text-xl font-light italic max-w-sm hidden md:block border-l border-gold-premium/30 pl-8">
            "We shape our buildings; thereafter they shape us."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-8 lg:h-[900px]">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-[48px] overflow-hidden group shadow-2xl transition-all duration-700 ${item.span}`}
            >
              <img 
                src={item.img} 
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110 ease-out grayscale group-hover:grayscale-0" 
                referrerPolicy="no-referrer"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute top-10 left-10">
                <span className="px-5 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-gold-premium/30 text-white text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-cream-soft/60 text-base font-light leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationalExcellence = () => {
  const pillars = [
    { 
      id: "I", 
      title: "Academic Pedagogy", 
      desc: "A rigorous high school curriculum (8th-10th) harmonized with divine principles of knowledge." 
    },
    { 
      id: "II", 
      title: "Linguistic Depth", 
      desc: "Specialized focus on Arabic and English to master the languages of both scripture and modern industry." 
    },
    { 
      id: "III", 
      title: "Ethical Character", 
      desc: "Cultivating Adab (decorum) through the storied tradition of Jamiat-ul-Hind mentors." 
    }
  ];

  return (
    <section id="excellence" className="py-24 md:py-40 bg-emerald-deep relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-gold-premium font-bold uppercase tracking-[0.6em] text-[10px] block mb-6">Pedagogical Pillars</span>
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-tight mb-16">
              A Noble <br />
              <span className="font-serif italic text-gold-premium">Education</span>
            </h2>

            <div className="space-y-12">
              {pillars.map((p) => (
                <motion.div 
                  key={p.id}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -30 }}
                  viewport={{ once: true }}
                  className="group flex gap-8 p-10 backdrop-blur-2xl bg-white/5 border border-gold-premium/20 rounded-3xl hover:bg-white/10 transition-all duration-500"
                >
                  <span className="text-3xl md:text-4xl font-serif italic text-gold-premium/40 group-hover:text-gold-premium transition-colors">{p.id}</span>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{p.title}</h4>
                    <p className="text-cream-soft/50 text-base font-light leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[64px] overflow-hidden border-2 border-gold-premium/20 shadow-2xl shadow-gold-premium/10"
          >
            <img 
              src="https://i.ibb.co/bq3ZGL6/Chat-GPT-Image-Apr-20-2026-11-25-08-AM.png" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-[2000ms]" 
              referrerPolicy="no-referrer"
              alt="Jamalullail Islamic Dawa College Campus"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-12 left-12">
              <p className="text-gold-premium font-serif text-3xl italic">"Scholarship grounded in virtue."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AdmissionEnquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    lastClass: "",
    phone: "",
    place: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const whatsappNumber = "+918593007071";
    const text = `*New Admission Enquiry - Jamalullail Islamic Dawa College*%0A%0A` +
      `*Student Name:* ${formData.studentName}%0A` +
      `*Parent Name:* ${formData.parentName}%0A` +
      `*Last Class:* ${formData.lastClass}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Location:* ${formData.place}%0A` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    const savedMessages = JSON.parse(localStorage.getItem("enquiries") || "[]");
    const newMessage = {
      id: Date.now(),
      ...formData,
      timestamp: new Date().toLocaleString()
    };
    localStorage.setItem("enquiries", JSON.stringify([newMessage, ...savedMessages]));

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <section id="admissions" className="py-24 md:py-40 bg-cream-soft">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-emerald-deep p-12 md:p-24 rounded-[48px] shadow-2xl border border-gold-premium/30 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-24 h-24 bg-gold-premium rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg">
                <CheckCircle className="text-white w-12 h-12" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Wisdom Received</h3>
              <p className="text-cream-soft/60 text-lg md:text-xl font-light mb-12 max-w-lg mx-auto italic">
                "To seek knowledge is a sacred obligation." Your journey towards excellence has begun. Our admissions council will contact you within 24 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-12 py-5 bg-gold-premium text-white rounded-xl font-bold uppercase tracking-widest hover:bg-gold-premium/90 transition-all"
              >
                Return to Portal
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="admissions" className="py-24 md:py-40 bg-cream-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-gold-premium font-bold uppercase tracking-[0.6em] text-[10px] block mb-6">Admission Cycle 2026</span>
            <h2 className="text-5xl md:text-8xl font-bold text-emerald-deep leading-tight mb-10 tracking-tighter">
              Begin Your <br />
              <span className="font-serif italic text-gold-premium">Transformation</span>
            </h2>
            <p className="text-emerald-deep/60 text-xl font-light leading-relaxed max-w-xl mb-12">
              Our admissions process is designed to identify students who possess the intellectual curiosity and moral character to thrive in our elite environment.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "Standard 8-10", meta: "High School Excellence" },
                { title: "Divine Studies", meta: "Classical Islamic Heritage" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-8 group">
                  <div className="w-12 h-px bg-gold-premium/40 group-hover:w-20 transition-all duration-500" />
                  <div>
                    <p className="text-2xl font-bold text-emerald-deep">{item.title}</p>
                    <p className="text-[10px] uppercase tracking-widest text-gold-premium/60 font-bold">{item.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 backdrop-blur-2xl bg-emerald-deep shadow-2xl rounded-[48px] border border-gold-premium/20"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gold-premium ml-4">Student Name</label>
                  <input required name="studentName" value={formData.studentName} onChange={handleChange} type="text" placeholder="Full name" className="w-full px-8 py-5 bg-white/5 border border-gold-premium/10 rounded-2xl focus:outline-none focus:border-gold-premium text-white placeholder:text-white/20 transition-all font-light" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gold-premium ml-4">Parent/Guardian</label>
                  <input required name="parentName" value={formData.parentName} onChange={handleChange} type="text" placeholder="Guardian name" className="w-full px-8 py-5 bg-white/5 border border-gold-premium/10 rounded-2xl focus:outline-none focus:border-gold-premium text-white placeholder:text-white/20 transition-all font-light" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gold-premium ml-4">Previous Class</label>
                  <select required name="lastClass" value={formData.lastClass} onChange={handleChange} className="w-full px-8 py-5 bg-white/5 border border-gold-premium/10 rounded-2xl focus:outline-none focus:border-gold-premium text-white/60 transition-all cursor-pointer font-light">
                    <option value="">Select Level</option>
                    <option value="7th">Std 7 Completed</option>
                    <option value="8th">Std 8 Completed</option>
                    <option value="9th">Std 9 Completed</option>
                    <option value="10th">Std 10 Completed</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gold-premium ml-4">Contact Number</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 XXXX XXX XXX" className="w-full px-8 py-5 bg-white/5 border border-gold-premium/10 rounded-2xl focus:outline-none focus:border-gold-premium text-white placeholder:text-white/20 transition-all font-light" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gold-premium ml-4">Place/District</label>
                <input required name="place" value={formData.place} onChange={handleChange} type="text" placeholder="e.g. Kondotty, Malappuram" className="w-full px-8 py-5 bg-white/5 border border-gold-premium/10 rounded-2xl focus:outline-none focus:border-gold-premium text-white placeholder:text-white/20 transition-all font-light" />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-6 bg-gold-premium text-white rounded-2xl font-bold uppercase tracking-[0.3em] shadow-lg hover:bg-gold-premium/90 transition-all flex items-center justify-center gap-4 disabled:opacity-50"
              >
                {loading ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Request Prospectus <ArrowUp className="rotate-45" size={16} /></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What defines the Jamalullail academic cycle?",
      a: "Our cycle is defined by an uncompromising integration of the Jamiat-ul-Hind Islamic syllabus with high school education, creating well-rounded scholars of the future."
    },
    {
      q: "Is there a specific selection criteria?",
      a: "Admissions are primarily for students completing 7th to 9th standards. Candidates are evaluated on academic potential and alignment with our moral values."
    },
    {
      q: "How does the college ensure student safety?",
      a: "Our campus is strategically located near major healthcare providers and educational hubs, maintained by 24/7 dedicated surveillance and warden systems."
    },
    {
      q: "Can international students apply?",
      a: "Yes, we welcome students from across the globe. We provide linguistic support in Arabic and English to ensure seamless integration into our community."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <span className="text-gold-premium font-bold uppercase tracking-[0.6em] text-[10px] block mb-6">Inquiries & Clarity</span>
          <h2 className="text-5xl md:text-8xl font-bold text-emerald-deep tracking-tighter leading-tight">
            Frequently <br />
            <span className="font-serif italic text-gold-premium">Asked</span>
          </h2>
        </div>

        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group overflow-hidden transition-all duration-500 rounded-[32px] border ${openIndex === index ? "border-gold-premium bg-emerald-deep text-white" : "border-emerald-deep/10 bg-cream-soft/50 hover:border-gold-premium/40"}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-10 text-left flex items-center justify-between outline-none"
              >
                <div className="flex items-center gap-8">
                  <span className={`text-4xl font-serif italic ${openIndex === index ? "text-gold-premium" : "text-emerald-deep/10"}`}>0{index + 1}</span>
                  <span className="text-xl md:text-2xl font-bold leading-tight">{faq.q}</span>
                </div>
                <div className={`w-12 h-12 flex-shrink-0 rounded-full border flex items-center justify-center transition-all duration-500 ${openIndex === index ? "bg-gold-premium border-gold-premium text-emerald-deep rotate-180" : "border-emerald-deep/10 text-gold-premium"}`}>
                   <ChevronDown size={20} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-10 pb-10 pt-0 text-lg md:text-xl font-light leading-relaxed opacity-70 pl-24 max-w-3xl">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Sacred Geography */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-24 backdrop-blur-2xl bg-emerald-deep rounded-[64px] border border-gold-premium/20 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="text-gold-premium font-bold uppercase tracking-[0.6em] text-[10px] block mb-6">Strategic Proximity</span>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tighter leading-tight">Secured <br />Geography</h3>
              <p className="text-cream-soft/50 text-lg font-light italic">
                Our Ozhukur campus is perfectly situated for rapid healthcare and educational access, ensuring total peace of mind for parents and scholars.
              </p>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-3 gap-8">
              {[
                { icon: <Stethoscope />, val: "2km", label: "Medical" },
                { icon: <School />, val: "2km", label: "Education" },
                { icon: <Plane />, val: "10km", label: "CCJ Airport" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gold-premium/10 rounded-full flex items-center justify-center text-gold-premium mb-4 border border-gold-premium/20">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <span className="text-3xl font-bold text-white mb-1">{item.val}</span>
                  <span className="text-[10px] uppercase font-bold text-gold-premium/60 tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-emerald-deep pt-24 md:pt-40 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 pb-20 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-white rounded-2xl overflow-hidden flex items-center justify-center shadow-lg shadow-gold-premium/20">
                <img src="https://i.ibb.co/BVn75Bw5/Chat-GPT-Image-Apr-20-2026-02-57-00-PM.png" alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <span className="font-serif text-3xl font-bold text-white tracking-tight uppercase">Jamalullail</span>
            </div>
            <p className="text-cream-soft/40 text-xl font-light italic leading-relaxed max-w-md mb-12">
              "Harmonizing classical divine wisdom with contemporary academic rigor for the leaders of tomorrow."
            </p>
            <div className="flex gap-6">
              {[
                { icon: <Instagram />, href: "https://www.instagram.com/jamalulail_edu_campus_/" },
                { icon: <Youtube />, href: "https://www.youtube.com/@sadathmedia6648" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold-premium hover:text-emerald-deep transition-all duration-500">
                  {React.cloneElement(social.icon as React.ReactElement, { size: 20 })}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <span className="text-gold-premium font-bold uppercase tracking-[0.4em] text-[10px] block mb-10">Connect</span>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-premium">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">+91 8593007071</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Admission Concierge</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-premium">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Palekkod, Ozhukur, Malappuram</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Kondotty, Kerala</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-between">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileActive={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-20 h-20 bg-gold-premium text-white rounded-full flex items-center justify-center shadow-2xl shadow-gold-premium/30"
            >
              <ArrowUp size={32} />
            </motion.button>
            <div className="text-right hidden lg:block">
              <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Est. 1999 • Sacred Legacy</p>
            </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em]">
            © 2026 Jamalullail Islamic Dawa College
          </p>
          <div className="flex gap-10">
            {["Academic Charter", "Institutional Terms"].map(link => (
              <a key={link} href="#" className="text-white/20 text-[10px] font-bold uppercase tracking-widest hover:text-gold-premium transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const AdminDashboard = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    if (isOpen) {
      const saved = JSON.parse(localStorage.getItem("enquiries") || "[]");
      setMessages(saved);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const deleteMessage = (id: number) => {
    const updated = messages.filter(m => m.id !== id);
    setMessages(updated);
    localStorage.setItem("enquiries", JSON.stringify(updated));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 bg-emerald-deep/30 backdrop-blur-3xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="bg-white w-full h-full md:max-w-6xl md:h-[85vh] md:rounded-[48px] lg:rounded-[64px] shadow-2xl border-t md:border border-gold-premium/30 overflow-hidden flex flex-col"
          >
            {/* Intel Dashboard Header */}
            <div className="px-6 md:px-12 py-6 md:py-10 border-b border-emerald-deep/5 flex items-center justify-between bg-cream-soft/30 relative overflow-hidden shrink-0">
               <div className="absolute top-0 right-0 p-2 opacity-[0.02] pointer-events-none hidden md:block">
                  <Building2 size={240} />
               </div>
               <div className="relative z-10 flex items-center gap-4 md:gap-8">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-emerald-deep rounded-xl md:rounded-2xl flex items-center justify-center border border-gold-premium/40 shadow-gold-glow">
                     <ShieldCheck className="text-gold-premium w-5 h-5 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-4xl font-bold text-emerald-deep tracking-tight mb-0.5">Admin Portal</h3>
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                       <p className="text-[8px] md:text-[10px] text-emerald-deep/40 font-bold uppercase tracking-[0.2em] md:tracking-[0.4em]">Secure Ledger</p>
                    </div>
                  </div>
               </div>
               <button 
                onClick={onClose}
                className="group w-10 h-10 md:w-14 md:h-14 bg-emerald-deep text-gold-premium rounded-[14px] md:rounded-[20px] flex items-center justify-center hover:shadow-gold-glow transition-all duration-500"
              >
                <X size={20} md:size={24} className="group-hover:rotate-180 transition-transform duration-700" />
              </button>
            </div>
            
            {/* Intel Grid */}
            <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-gray-50/30">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full opacity-10">
                   <Inbox size={80} md:size={120} strokeWidth={0.5} className="text-emerald-deep" />
                   <p className="mt-4 md:mt-8 text-xl md:text-3xl font-serif italic text-center">Repository Empty</p>
                </div>
              ) : (
                <div className="space-y-6 md:space-y-10">
                  <div className="flex items-center justify-between border-b border-emerald-deep/5 pb-6 mb-2">
                     <h4 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-gold-premium">Active Ledger</h4>
                     <span className="bg-emerald-deep/5 text-emerald-deep px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-bold border border-gold-premium/10 uppercase tracking-widest">{messages.length} Entries</span>
                  </div>
                  
                  <div className="grid gap-6">
                    {messages.map((m, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        layout
                        key={m.id}
                        className="p-6 md:p-10 bg-white rounded-[32px] border border-gold-premium/5 group hover:border-gold-premium/40 hover:shadow-xl transition-all duration-500 transform"
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 md:gap-16">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-6 md:gap-y-10 flex-1 w-full">
                            <div className="sm:col-span-2">
                              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-gold-premium mb-1.5">Student Identity</p>
                              <p className="text-lg md:text-2xl font-bold text-emerald-deep tracking-tight">{m.studentName}</p>
                              <p className="text-[9px] text-emerald-deep/40 font-medium mt-0.5 uppercase tracking-widest italic">{m.timestamp}</p>
                            </div>
                            <div>
                              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-gold-premium mb-1.5">Guardian</p>
                              <p className="text-base md:text-lg font-bold text-emerald-deep/80">{m.parentName}</p>
                            </div>
                            <div>
                              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-gold-premium mb-1.5">Academic Level</p>
                              <span className="inline-block px-2.5 py-0.5 bg-emerald-deep text-gold-premium text-[9px] font-bold rounded-lg uppercase tracking-widest">{m.lastClass}</span>
                            </div>
                            <div>
                              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-gold-premium mb-1.5">Direct Contact</p>
                              <p className="text-base md:text-lg font-bold text-emerald-deep">{m.phone}</p>
                            </div>
                            <div>
                              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-gold-premium mb-1.5">Territory</p>
                              <p className="text-base md:text-lg font-bold text-emerald-deep/60">{m.place}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-row sm:flex-col gap-3 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                            <button 
                              onClick={() => deleteMessage(m.id)}
                              className="flex-1 sm:w-11 sm:h-11 md:w-14 md:h-14 bg-red-50 text-red-500 rounded-xl md:rounded-2xl flex items-center justify-center p-3 sm:p-0 transition-all duration-300 hover:bg-red-500 hover:text-white"
                            >
                              <Trash2 size={20} />
                            </button>
                            <a 
                              href={`tel:${m.phone}`}
                              className="flex-1 sm:w-11 sm:h-11 md:w-14 md:h-14 bg-emerald-deep/5 text-emerald-deep rounded-xl md:rounded-2xl flex items-center justify-center p-3 sm:p-0 transition-all duration-300 hover:bg-emerald-deep hover:text-gold-premium"
                            >
                              <Phone size={20} />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Intel Status Bar */}
            <div className="px-6 md:px-12 py-4 md:py-6 bg-emerald-deep flex flex-col md:flex-row items-center justify-between gap-4 shrink-0">
               <div className="flex gap-6 md:gap-10">
                  <div className="flex items-center gap-2 md:gap-3">
                     <div className="w-1 h-1 rounded-full bg-gold-premium" />
                     <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-gold-premium/40 font-bold">Encrypted</p>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                     <div className="w-1 h-1 rounded-full bg-gold-premium" />
                     <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-gold-premium/40 font-bold">Secure Access</p>
                  </div>
               </div>
               <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.5em] text-gold-premium italic font-bold text-center">Intel Vault • Access Restricted</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const AdminAuthModal = ({ isOpen, onClose, onSuccess }: { isOpen: boolean; onClose: () => void; onSuccess: () => void }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "edu123") {
      onSuccess();
      setPassword("");
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-emerald-deep/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-sm bg-white rounded-[24px] md:rounded-[32px] shadow-2xl p-6 md:p-8 border border-gold-premium/30"
          >
            <div className="text-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-deep rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-gold-glow">
                <Lock className="text-gold-premium w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-emerald-deep">Admin Access</h3>
              <p className="text-xs md:text-sm text-emerald-deep/60 mt-1">Please enter security password</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <input 
                  autoFocus
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className={`w-full px-5 py-4 bg-cream-soft border rounded-2xl focus:outline-none transition-all text-sm md:text-base ${
                    error ? "border-red-500 animate-shake" : "border-emerald-deep/10 focus:border-gold-premium"
                  }`}
                />
                {error && <p className="text-red-500 text-[10px] mt-2 text-center font-bold uppercase tracking-widest animate-pulse">Access Denied</p>}
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-emerald-deep text-gold-premium rounded-2xl font-bold text-base md:text-lg hover:shadow-gold-heavy active:scale-95 transition-all"
              >
                Unlock Repository
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/+918593007071"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] w-14 h-14 md:w-16 md:h-16 bg-emerald-deep text-gold-premium rounded-full flex items-center justify-center shadow-gold-glow border-2 border-gold-premium/30"
    >
      <MessageCircle size={24} md:size={32} />
      <span className="absolute -top-1 -right-1 flex h-4 md:h-5 w-4 md:w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-premium opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 md:h-5 w-4 md:w-5 bg-gold-premium"></span>
      </span>
    </motion.a>
  );
};

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const keysPressed = new Set<string>();

    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.add(e.key.toLowerCase());
      
      const isShift = e.shiftKey;
      const hasE = keysPressed.has('e');
      const hasD = keysPressed.has('d');
      const hasU = keysPressed.has('u');

      if (isShift && hasE && hasD && hasU) {
        setIsAuthOpen(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.delete(e.key.toLowerCase());
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-gold-premium/30">
      <Header />
      <main>
        <Hero />
        <CEOProfile />
        <ModernSkills />
        <Infrastructure />
        <EducationalExcellence />
        <AdmissionEnquiryForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <AdminAuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onSuccess={() => {
          setIsAuthOpen(false);
          setIsAdminOpen(true);
        }}
      />
      <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
}
