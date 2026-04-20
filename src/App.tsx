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
  MessageCircle
} from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "CEO Vision", href: "#ceo" },
    { name: "Facilities", href: "#infrastructure" },
    { name: "Modern Skills", href: "#skills" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-header py-3 shadow-2xl" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-deep rounded-lg flex items-center justify-center border border-gold-premium/30 shadow-gold-glow">
             <Building2 className="text-gold-premium w-6 h-6" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-emerald-deep hidden sm:block">
            Jamalullail
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest hover:text-gold-premium transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-premium transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#admissions"
            className="hidden lg:flex items-center gap-2 px-6 py-3 bg-emerald-deep text-gold-premium rounded-xl text-xs font-bold uppercase tracking-widest hover:shadow-gold-heavy transition-all border border-gold-premium/20"
          >
            Admission Enquiry
          </a>
          
          <button 
            className="md:hidden p-2 text-emerald-deep"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-cream-soft border-b border-gold-premium/20 p-8 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif font-bold text-emerald-deep hover:text-gold-premium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#admissions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-4 bg-emerald-deep text-gold-premium rounded-xl font-bold uppercase tracking-widest shadow-lg"
              >
                Admission Enquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/vScL096/muswabbah.jpg" 
          alt="Jamalullail Islamic Dawa College Malappuram campus building" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-emerald-deep/70 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-premium/20 border border-gold-premium/30 text-gold-premium text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-premium opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-premium"></span>
            </span>
            Admission Open 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream-soft leading-[1] mb-6">
            Jamalullail <br />
            <span className="text-gold-premium italic">Islamic Dawa</span> <br />
            College
          </h1>
          
          <p className="text-lg md:text-xl text-cream-soft/80 max-w-xl mb-10 leading-relaxed font-light">
            Now enrolling students from 8th to 10th Standard. We provide Integrated High School Education alongside the divine Jamiat-ul-Hind Syllabus.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#excellence" 
              className="px-8 py-4 bg-gold-premium text-emerald-deep rounded-2xl font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all text-center"
            >
              View Courses
            </a>
            <a 
              href="tel:+918593007071"
              className="px-8 py-4 border-2 border-cream-soft/30 text-cream-soft rounded-2xl font-bold hover:bg-cream-soft/10 transition-all text-center flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              +91 8593007071
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CEOProfile = () => {
  return (
    <section id="ceo" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -50 }}
             viewport={{ once: true }}
             className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-premium/10">
              <img 
                src="https://i.ibb.co/ksBvJ3Qj/Chat-GPT-Image-2026-20-10-23-40-AM.png" 
                alt="Sayyid Muqthar Ahmad Jamalullaili - Visionary of Jamalullail Islamic Dawa College" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Design accents */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-gold-premium/20 rounded-full" />
            <div className="absolute -bottom-5 -right-5 bg-emerald-deep p-8 rounded-2xl shadow-xl z-20">
              <p className="text-cream-soft font-serif text-xl">"Education is the light of faith."</p>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-gold-premium uppercase tracking-[0.2em] font-sans text-sm font-bold mb-4">Visionary Leadership</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-deep">Sayyid Muqthar Ahmad Jamalullaili</h3>
            <p className="text-lg text-emerald-deep/70 mb-8 leading-relaxed italic border-l-4 border-gold-premium pl-6">
              "Our mission is to foster a generation that is spiritually enlightened and intellectually empowered. We strive to provide an environment where classical Islamic wisdom meets modern scientific inquiry."
            </p>
            <div className="space-y-4 text-emerald-deep/80">
              <p>Hailing from the esteemed Jamalullail family, Sayyid Muqthar Ahmad has dedicated his life to the dissemination of values that integrate the soul and the mind.</p>
              <p>Under his guidance, Jamalullail Islamic Dawa College has emerged as a premier institution, nurturing students into leaders who serve humanity with integrity and faith.</p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 py-8 border-t border-emerald-deep/10">
              <div>
                <p className="text-3xl font-bold text-emerald-deep">8+</p>
                <p className="text-sm text-gold-premium uppercase font-bold tracking-widest">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-deep">1,500+</p>
                <p className="text-sm text-gold-premium uppercase font-bold tracking-widest">Global Alumnae</p>
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
      category: "Vocational Skills",
      icon: <Video className="text-gold-premium" />,
      skills: [
        { name: "Digital Marketing", desc: "Professional strategy and management." },
        { name: "Poster Making", desc: "Graphic design for impactful visual comms." },
        { name: "Video Editing", desc: "Expert cinematic storytelling & post-production." }
      ]
    },
    {
      category: "Global Languages",
      icon: <Globe className="text-gold-premium" />,
      skills: [
        { name: "Arabic Coaching", desc: "Classical and modern communicative Arabic." },
        { name: "English Proficiency", desc: "Fluent communication and academic writing." },
        { name: "Foreign Languages", desc: "Special coaching for global career opportunities." }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-gold-premium uppercase tracking-[0.2em] font-sans text-sm font-bold mb-4">Future-Ready</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-emerald-deep">Modern Skills & Languages</h3>
          </div>
          <p className="text-emerald-deep/60 max-w-md italic border-l-2 border-gold-premium pl-4">
            Empowering students with 21st-century vocational expertise and linguistic mastery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillSets.map((set, i) => (
            <motion.div 
              key={set.category}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              className="p-10 bg-cream-soft rounded-[40px] border border-gold-premium/10 shadow-lg relative h-full"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-emerald-deep rounded-2xl shadow-xl">
                  {set.icon}
                </div>
                <h4 className="text-2xl font-bold text-emerald-deep">{set.category}</h4>
              </div>

              <div className="space-y-8">
                {set.skills.map((skill) => (
                  <div key={skill.name} className="group cursor-default">
                    <h5 className="text-lg font-bold text-emerald-deep mb-1 group-hover:text-gold-premium transition-colors">{skill.name}</h5>
                    <p className="text-sm text-emerald-deep/60">{skill.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none group-hover:opacity-10 transition-opacity">
                {i === 0 ? <Layout size={150} /> : <Globe size={150} />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Infrastructure = () => {
  const items = [
    {
      title: "Resource Library",
      desc: "A sanctuary for research and classical learning with thousands of volumes.",
      icon: <BookOpen />,
      img: "https://i.ibb.co/yBf6bYZH/612fa333-f8eb-4156-9918-2443f6b5a768.png"
    },
    {
      title: "Arabic-Style Campus",
      desc: "Architecturally designed for a spiritual learning atmosphere and peace.",
      icon: <Building2 />,
      img: "https://i.ibb.co/0ypyh6LQ/arabic.jpg"
    },
    {
      title: "Modern Computer Hall",
      desc: "Bridging the gap between tradition and technology with high-speed labs.",
      icon: <Laptop />,
      img: "https://i.ibb.co/QjQ7zh15/c70f2ba0-be44-498c-be1e-49fdbf7d2cd4.png"
    },
    {
      title: "Team Power",
      desc: "Our dedicated faculty committed to student excellence and moral growth.",
      icon: <Users />,
      img: "https://i.ibb.co/VWDPC9hn/Whats-App-Image-2026-04-20-at-10-42-19-AM-1.jpg"
    }
  ];

  return (
    <section id="infrastructure" className="py-24 bg-cream-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-premium uppercase tracking-[0.2em] font-sans text-sm font-bold mb-4">World-Class Facilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-emerald-deep">Our Infrastructure</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/40 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-white/50 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-deep/20 group-hover:bg-emerald-deep/0 transition-colors" />
                <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur rounded-2xl text-emerald-deep shadow-lg">
                  {item.icon}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3 text-emerald-deep">{item.title}</h4>
                <p className="text-emerald-deep/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationalExcellence = () => {
  return (
    <section id="excellence" className="py-24 bg-emerald-deep text-cream-soft relative overflow-hidden">
      <div className="absolute inset-0 islamic-pattern dark opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-gold-premium uppercase tracking-[0.2em] font-sans text-sm font-bold mb-4">Curriculum</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">Jamiat-ul-Hind Syllabus: <br /><span className="text-gold-premium italic">Integrated Schooling Excellence</span></h3>
          
          <div className="space-y-6">
            <div className="p-6 bg-cream-soft/5 rounded-3xl border border-gold-premium/20 backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-premium/20 flex items-center justify-center text-gold-premium text-sm italic">01</div>
                High School Education
              </h4>
              <p className="text-cream-soft/70">Complete High School Education from 8th to 10th Standard with expert government-aligned faculty.</p>
            </div>
            
            <div className="p-6 bg-cream-soft/5 rounded-3xl border border-gold-premium/20 backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-premium/20 flex items-center justify-center text-gold-premium text-sm italic">02</div>
                Language Mastery
              </h4>
              <p className="text-cream-soft/70">Expertise in Arabic, English, and Malayalam, enabling students to communicate effectively in diverse global and local contexts.</p>
            </div>

            <div className="p-6 bg-cream-soft/5 rounded-3xl border border-gold-premium/20 backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-premium/20 flex items-center justify-center text-gold-premium text-sm italic">03</div>
                Moral Character
              </h4>
              <p className="text-cream-soft/70">A deep focus on 'Adab' (etiquette) and character building, forging future leaders who are ethically grounded.</p>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="grid grid-cols-2 gap-4">
            <img 
               src="https://i.ibb.co/bq3ZGL6/Chat-GPT-Image-Apr-20-2026-11-25-08-AM.png" 
               className="rounded-3xl shadow-2xl mt-12 w-full aspect-[4/5] object-cover" 
               referrerPolicy="no-referrer"
               alt="Integrated High School with Islamic Studies at Jamalullail College"
            />
            <img 
               src="https://i.ibb.co/4nMnRnZ9/Chat-GPT-Image-Apr-20-2026-11-33-14-AM.png" 
               className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover" 
               referrerPolicy="no-referrer"
               alt="Jamiat-ul-Hind Syllabus Kerala - Jamalullail Islamic Dawa Ozhukur"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold-premium rounded-full flex items-center justify-center shadow-2xl border-4 border-emerald-deep">
             <BookOpen size={48} className="text-emerald-deep" />
          </div>
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

    // Format WhatsApp Message
    const whatsappNumber = "+918593007071";
    const text = `*New Admission Enquiry - Jamalullail Islamic Dawa College*%0A%0A` +
      `*Student Name:* ${formData.studentName}%0A` +
      `*Parent Name:* ${formData.parentName}%0A` +
      `*Last Class:* ${formData.lastClass}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Location:* ${formData.place}%0A` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    // Save to Local Storage for Admin Inbox
    const savedMessages = JSON.parse(localStorage.getItem("enquiries") || "[]");
    const newMessage = {
      id: Date.now(),
      ...formData,
      timestamp: new Date().toLocaleString()
    };
    localStorage.setItem("enquiries", JSON.stringify([newMessage, ...savedMessages]));

    // Simulate delay for modern UX, then redirect
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <section id="admissions" className="py-24 bg-cream-soft">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-[40px] shadow-2xl border border-gold-premium/20 text-center"
          >
            <div className="w-20 h-20 bg-emerald-deep rounded-full flex items-center justify-center mx-auto mb-8 shadow-gold-glow">
              <CheckCircle className="text-gold-premium w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold text-emerald-deep mb-4">Thank You!</h3>
            <p className="text-emerald-deep/60 text-lg mb-8">Your enquiry has been successfully submitted. Our admission team will contact you shortly.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-emerald-deep text-cream-soft rounded-2xl font-bold hover:shadow-lg transition-all"
            >
              Back to Form
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="admissions" className="py-24 bg-cream-soft relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-premium/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-deep/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-gold-premium uppercase tracking-[0.2em] font-sans text-sm font-bold mb-4">Join Our Community</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-emerald-deep mb-8">Admission Enquiry</h3>
            <p className="text-lg text-emerald-deep/70 mb-10 leading-relaxed">
              Begin your journey towards spiritual and academic excellence. Fill out the form, and our representatives will guide you through the admission process for the 2026 academic year.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "8th to 10th Standard Admissions", icon: <School className="text-gold-premium" /> },
                { title: "Integrated Schooling Program", icon: <CheckCircle className="text-gold-premium" /> },
                { title: "Personal Counseling Available", icon: <Users className="text-gold-premium" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl border border-gold-premium/10 backdrop-blur-sm">
                  <div className="p-3 bg-emerald-deep rounded-xl shadow-lg">
                    {item.icon}
                  </div>
                  <span className="font-bold text-emerald-deep">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gold-premium/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-emerald-deep mb-2">Student Name</label>
                  <input 
                    required
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Enter full name"
                    className="w-full px-5 py-4 bg-cream-soft border border-emerald-deep/10 rounded-2xl focus:outline-none focus:border-gold-premium transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-emerald-deep mb-2">Parent/Guardian Name</label>
                  <input 
                    required
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Enter parent name"
                    className="w-full px-5 py-4 bg-cream-soft border border-emerald-deep/10 rounded-2xl focus:outline-none focus:border-gold-premium transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-emerald-deep mb-2">Last Completed Class</label>
                  <select 
                    required
                    name="lastClass"
                    value={formData.lastClass}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-cream-soft border border-emerald-deep/10 rounded-2xl focus:outline-none focus:border-gold-premium transition-colors text-emerald-deep/70"
                  >
                    <option value="">Select Class</option>
                    <option value="7th">7th Standard</option>
                    <option value="8th">8th Standard</option>
                    <option value="9th">9th Standard</option>
                    <option value="10th">10th Standard</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-emerald-deep mb-2">Phone Number</label>
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full px-5 py-4 bg-cream-soft border border-emerald-deep/10 rounded-2xl focus:outline-none focus:border-gold-premium transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-emerald-deep mb-2">Location/Place</label>
                <input 
                  required
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                  type="text" 
                  placeholder="e.g., Kondotty, Malappuram"
                  className="w-full px-5 py-4 bg-cream-soft border border-emerald-deep/10 rounded-2xl focus:outline-none focus:border-gold-premium transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-emerald-deep mb-2">Message/Enquiry</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="w-full px-5 py-4 bg-cream-soft border border-emerald-deep/10 rounded-2xl focus:outline-none focus:border-gold-premium transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-emerald-deep text-gold-premium rounded-2xl font-bold text-lg hover:shadow-gold-heavy hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:translate-y-0"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-gold-premium border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={20} />
                    Submit Enquiry
                  </>
                )}
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
      q: "What makes the Jamiat-ul-Hind Syllabus unique?",
      a: "The syllabus is designed to provide a comprehensive Islamic education while integrating modern sciences, humanities, and languages. It ensures students are well-versed in classical texts while being capable of navigating the modern world."
    },
    {
      q: "Who is the lead visionary behind the college?",
      a: "The college is guided by the visionary leadership of Sayyid Muqthar Ahmad Jamalullaili, who brings decades of spiritual and educational experience to the institution."
    },
    {
      q: "What are the location advantages of the college?",
      a: "Ideally located in Ozhukur (Palekkod), Malappuram, just 2km from Kondotty. We are strategically positioned near top-tier hospitals and schools, providing a safe and accessible environment for students."
    },
    {
      q: "How can I apply for admission?",
      a: "You can contact us directly at +91 8593007071 or visit our campus in Palekkod for detailed admission procedures and course information."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-premium uppercase tracking-[0.2em] font-sans text-sm font-bold mb-4">Support</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-emerald-deep">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-emerald-deep/10 rounded-2xl overflow-hidden transition-all shadow-sm"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 text-left flex items-center justify-between bg-cream-soft/30 hover:bg-cream-soft transition-colors"
              >
                <span className="font-serif text-xl font-semibold text-emerald-deep">{faq.q}</span>
                <ChevronDown 
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-white"
                  >
                    <div className="p-6 text-emerald-deep/70 leading-relaxed border-t border-emerald-deep/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        {/* Proximity Stats */}
        <div className="mt-16 bg-emerald-deep text-cream-soft p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
             <MapPin size={100} />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold mb-2">Location Context</h4>
              <p className="text-cream-soft/70">Strategically located for convenience and accessibility.</p>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-gold-premium/20 rounded-2xl mb-3">
                  <Stethoscope className="text-gold-premium" />
                </div>
                <span className="font-bold">2km</span>
                <span className="text-xs uppercase tracking-tighter opacity-70">to Hospitals</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-gold-premium/20 rounded-2xl mb-3">
                  <School className="text-gold-premium" />
                </div>
                <span className="font-bold">2km</span>
                <span className="text-xs uppercase tracking-tighter opacity-70">to Schools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-cream-soft border-t border-gold-premium/10 pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 bg-emerald-deep rounded-lg flex items-center justify-center border border-gold-premium/30">
                  <Building2 className="text-gold-premium w-6 h-6" />
               </div>
               <span className="font-serif text-2xl font-bold text-emerald-deep">Jamalullail</span>
            </div>
            <p className="text-emerald-deep/60 max-w-sm mb-8 leading-relaxed">
              Empowering the next generation of Islamic scholars with a balanced integration of divine knowledge and modern excellence.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/jamalulail_edu_campus_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-emerald-deep/10 flex items-center justify-center text-emerald-deep hover:bg-gold-premium hover:text-emerald-deep hover:border-gold-premium transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@sadathmedia6648" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-emerald-deep/10 flex items-center justify-center text-emerald-deep hover:bg-gold-premium hover:text-emerald-deep hover:border-gold-premium transition-all"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-emerald-deep">Contact Info</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Phone className="text-gold-premium shrink-0" size={18} />
                <div className="text-emerald-deep/70">
                  <p>+91 8593007071</p>
                  <p>+91 9061693028</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-premium shrink-0" size={18} />
                <p className="text-emerald-deep/70">Palekkod, Ozhukur, Malappuram (Near Kondotty), Kerala.</p>
              </li>
            </ul>
            
            {/* Google Maps Placeholder */}
            <div className="w-full h-40 rounded-2xl overflow-hidden shadow-inner border border-emerald-deep/5 bg-emerald-deep/5 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15663.76562095!2d75.95254!3d11.08254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba645f000000000%3A0x0!2zMTHCsDA0JzU3LjEiTiA3NcKwNTcnMDkuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end justify-center">
            <button 
              onClick={scrollToTop}
              className="group p-4 bg-emerald-deep text-cream-soft rounded-2xl hover:shadow-gold-heavy transition-all"
            >
              <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            </button>
            <span className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-gold-premium">Back to Top</span>
          </div>
        </div>

        <div className="pt-10 border-t border-emerald-deep/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-emerald-deep/40">
            © 2026 Jamalullail Islamic Dawa College. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-emerald-deep/40">
            <a href="#" className="hover:text-gold-premium transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold-premium transition-colors">Terms</a>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-emerald-deep/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-cream-soft rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
          >
            <div className="p-8 border-b border-gold-premium/20 flex items-center justify-between bg-white">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-deep rounded-2xl shadow-gold-glow">
                  <Lock className="text-gold-premium w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-emerald-deep">Secret Admin Inbox</h3>
                  <p className="text-sm text-emerald-deep/60">Managed internally via "edu" access key</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-3 hover:bg-emerald-deep/5 rounded-full text-emerald-deep transition-colors"
              >
                <X />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-cream-soft">
              {messages.length === 0 ? (
                <div className="text-center py-20 px-8">
                  <p className="text-emerald-deep/40 font-serif text-xl italic">No enquiries found in the system.</p>
                </div>
              ) : (
                <div className="p-8">
                  <div className="bg-white rounded-3xl border border-gold-premium/20 overflow-hidden shadow-xl">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-emerald-deep text-gold-premium text-xs font-bold uppercase tracking-widest">
                          <th className="px-6 py-4">Student</th>
                          <th className="px-6 py-4">Class</th>
                          <th className="px-6 py-4">Contact</th>
                          <th className="px-6 py-4">Location</th>
                          <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-emerald-deep/5">
                        {messages.map((m) => (
                          <tr key={m.id} className="hover:bg-cream-soft transition-colors group">
                            <td className="px-6 py-5">
                              <p className="font-bold text-emerald-deep">{m.studentName}</p>
                              <p className="text-xs text-emerald-deep/40">{m.timestamp}</p>
                            </td>
                            <td className="px-6 py-5">
                              <span className="px-2 py-1 bg-emerald-deep/5 text-emerald-deep text-[10px] font-bold rounded-md border border-emerald-deep/10">
                                {m.lastClass}
                              </span>
                            </td>
                            <td className="px-6 py-5">
                              <p className="text-sm font-medium">{m.phone}</p>
                              <p className="text-[10px] text-emerald-deep/40">Parent: {m.parentName}</p>
                            </td>
                            <td className="px-6 py-5 text-sm text-emerald-deep/70">
                              {m.place}
                            </td>
                            <td className="px-6 py-5 text-right">
                              <button 
                                onClick={() => deleteMessage(m.id)}
                                className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                title="Delete Entry"
                              >
                                <Trash2 size={18} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
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
            className="relative w-full max-w-md bg-white rounded-[32px] shadow-2xl p-8 border border-gold-premium/30"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-emerald-deep rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-gold-glow">
                <Lock className="text-gold-premium w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-deep">Admin Access</h3>
              <p className="text-sm text-emerald-deep/60">Please enter the security password</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  autoFocus
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className={`w-full px-6 py-4 bg-cream-soft border rounded-2xl focus:outline-none transition-all ${
                    error ? "border-red-500 animate-shake" : "border-emerald-deep/10 focus:border-gold-premium"
                  }`}
                />
                {error && <p className="text-red-500 text-xs mt-2 text-center font-bold uppercase tracking-widest">Access Denied</p>}
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-emerald-deep text-gold-premium rounded-2xl font-bold text-lg hover:shadow-gold-heavy transition-all"
              >
                Unlock Dashboard
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const FloatingAdmissions = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-[55]"
    >
      <div className="bg-emerald-deep border-t-2 border-gold-premium py-3 px-6 shadow-2xl flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-premium opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-premium"></span>
          </span>
          <p className="text-gold-premium font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm">
            Admissions Open: 8th Std to 10th Completed Students
          </p>
        </div>
        <div className="hidden md:block w-px h-4 bg-gold-premium/30" />
        <p className="text-cream-soft/80 text-[10px] md:text-sm font-medium">
          Integrated High School schooling with Jamiat-ul-Hind Syllabus. <span className="text-gold-premium font-bold italic">Limited Seats!</span>
        </p>
        <a 
          href="#admissions" 
          className="px-4 py-1.5 bg-gold-premium text-emerald-deep rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
        >
          Enquire Now
        </a>
      </div>
    </motion.div>
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
      className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-emerald-deep text-gold-premium rounded-full flex items-center justify-center shadow-gold-glow border-2 border-gold-premium/30"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -right-2 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-premium opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-gold-premium"></span>
      </span>
    </motion.a>
  );
};

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [keyBuffer, setKeyBuffer] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const nextBuffer = (keyBuffer + e.key).toLowerCase().slice(-3);
      setKeyBuffer(nextBuffer);
      if (nextBuffer === "edu") {
        setIsAuthOpen(true);
        setKeyBuffer("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keyBuffer]);

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
      <FloatingAdmissions />
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
