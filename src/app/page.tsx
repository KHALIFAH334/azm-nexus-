'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Activity, Shield, Users, Globe, BarChart3, 
  Smartphone, MessageSquare, Zap, Target, Search, Settings,
  CheckCircle2, Mail, Phone, MapPin, ArrowRight, Instagram, Twitter, Linkedin
} from 'lucide-react';
import Image from 'next/image';

// --- Types & Constants ---
const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'about', label: 'About' },
  { id: 'process', label: 'Process' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'contact', label: 'Contact' },
];

const SOLUTIONS = [
  {
    title: "Virtual Care Suite",
    desc: "Seamless HD video consultations with integrated diagnostic tools.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "bg-brand-soft"
  },
  {
    title: "Health Analytics",
    desc: "Real-time patient monitoring and data-driven insights.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "bg-brand-lavender/30"
  },
  {
    title: "Secure Infrastructure",
    desc: "HIPAA-compliant data encryption and secure cloud storage.",
    icon: <Shield className="w-8 h-8" />,
    color: "bg-brand-soft"
  }
];

const STATS = [
  { value: "500+", label: "Medical Partners" },
  { value: "10M+", label: "Patients Served" },
  { value: "99.9%", label: "Platform Uptime" },
  { value: "50+", label: "Global Regions" },
];

const PROCESS_STEPS = [
  { step: "01", title: "Discovery", desc: "Understanding your facility's unique challenges and patient needs." },
  { step: "02", title: "Strategy", desc: "Architecting a customized telemedicine roadmap tailored for you." },
  { step: "03", title: "Implementation", desc: "Seamlessly deploying technology with zero clinical downtime." },
  { step: "04", title: "Optimization", desc: "Continuous monitoring and scaling to ensure peak performance." },
];

const CAPABILITIES = [
  { title: "Universal Interoperability", icon: <Globe />, desc: "Connects with any existing EHR system." },
  { title: "AI Diagnostics", icon: <Zap />, desc: "Automated preliminary analysis for faster triage." },
  { title: "24/7 Support", icon: <Target />, desc: "Specialized technical medical support around the clock." },
  { title: "Multi-device Access", icon: <Smartphone />, desc: "Accessible via web, iOS, and Android." },
  { title: "Patient Portals", icon: <Users />, desc: "Intuitive self-service tools for patient autonomy." },
  { title: "Smart Scheduling", icon: <Settings />, desc: "Automated booking system with reminder logic." },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="bg-brand-teal p-1.5 rounded-lg">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-dark">
            AZM <span className="text-brand-teal">Nexus</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {SECTIONS.map((sec) => (
            <a key={sec.id} href={`#${sec.id}`} className="nav-link">
              {sec.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary py-2 text-sm">Get Started</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden shadow-xl"
          >
            <div className="flex flex-col gap-4 p-6">
              {SECTIONS.map((sec) => (
                <a key={sec.id} href={`#${sec.id}`} onClick={() => setIsOpen(false)} className="text-lg font-medium text-brand-dark">
                  {sec.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary text-center">Get Started</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-brand-soft/30 to-transparent rounded-bl-full" />
        <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-brand-teal bg-brand-soft/50 rounded-full">
              NEXT-GEN TELEMEDICINE
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Healthcare at the <br/>
              <span className="gradient-text">Speed of Connection</span>
            </h1>
            <p className="text-xl text-brand-dark/70 mb-10 max-w-lg leading-relaxed">
              AZM Nexus bridges the gap between expert care and patient accessibility. 
              Deploying enterprise-grade virtual solutions tailored for the modern medical era.
            </p>
            <div className="flex flex-col sm:row gap-4">
              <a href="#solutions" className="btn-primary flex items-center justify-center gap-2">
                Explore Solutions <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="btn-action text-center">
                Book a Demo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-teal/10 rounded-full blur-3xl" />
            <div className="relative glass-card aspect-square flex items-center justify-center overflow-hidden border-8 border-white">
              <div className="text-brand-teal flex flex-col items-center">
                 <Activity className="w-48 h-48 animate-pulse" />
                 <p className="font-bold text-2xl tracking-widest mt-4">AZM NEXUS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="bg-brand-dark text-white py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Core Solutions</h2>
            <p className="text-brand-soft/80 max-w-2xl mx-auto text-lg leading-relaxed">
              We provide the digital backbone for modern medical facilities with focus on security, usability, and clinical precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SOLUTIONS.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`${sol.color} w-16 h-16 rounded-2xl flex items-center justify-center text-brand-dark mb-6 group-hover:scale-110 transition-transform`}>
                  {sol.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{sol.title}</h3>
                <p className="text-brand-soft/60 leading-relaxed">
                  {sol.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section & Stats */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-lavender/20 rounded-full blur-2xl" />
              <div className="relative glass-card p-4">
                 <div className="aspect-video bg-brand-dark rounded-xl flex items-center justify-center text-white">
                    <Users className="w-24 h-24 opacity-50" />
                 </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-action p-8 rounded-2xl text-brand-dark shadow-xl">
                 <p className="text-3xl font-bold">100%</p>
                 <p className="font-medium text-xs">Compliance Guaranteed</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Vision for <br/><span className="text-brand-teal">Global Health Integrity</span></h2>
              <p className="text-lg text-brand-dark/70 mb-8 leading-relaxed">
                Founded on the belief that geography should not dictate the quality of care, 
                AZM Nexus has evolved into a global leader in telemedicine strategy and deployment. 
                Our team combines medical expertise with cutting-edge engineering.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {STATS.map((stat, i) => (
                  <div key={i}>
                    <p className="text-4xl font-bold text-brand-teal mb-1">{stat.value}</p>
                    <p className="text-brand-dark/60 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-brand-soft/20 py-24 border-y border-brand-teal/10">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Methodology</h2>
            <p className="text-brand-dark/60 max-w-2xl mx-auto">
              A structured approach to clinical digitization that ensures reliability and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="relative group p-6">
                <span className="text-6xl font-black text-brand-teal/5 absolute top-0 left-0 group-hover:text-brand-teal/20 transition-colors">
                  {step.step}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 mt-4 text-brand-dark">{step.title}</h3>
                  <p className="text-brand-dark/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-6 leading-tight">Advanced <br/>Technological <br/><span className="text-brand-teal">Capabilities</span></h2>
              <p className="text-brand-dark/60 mb-8">
                Built on a scalable microservices architecture to provide institutional robustness.
              </p>
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full border border-brand-teal flex items-center justify-center text-brand-teal">
                    <CheckCircle2 className="w-6 h-6" />
                 </div>
                 <p className="text-sm font-medium pt-3">HIPAA / GDPR Ready</p>
              </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {CAPABILITIES.map((cap, i) => (
                <div key={i} className="glass-card p-8 flex gap-6 group hover:bg-brand-teal hover:text-white">
                  <div className="w-12 h-12 bg-brand-soft/40 rounded-xl flex-shrink-0 flex items-center justify-center text-brand-dark group-hover:bg-white">
                    {cap.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{cap.title}</h4>
                    <p className="text-sm opacity-70 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-action" />
        <div className="section-container grid lg:grid-cols-2 gap-20">
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-8">Get in Touch <br/>with Our Strategy Team</h2>
            <p className="text-xl text-brand-soft/60 mb-12">
              Ready to modernize your healthcare delivery? Let's discuss a solution that fits your exact requirements.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-action">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-brand-soft/40 text-sm font-bold uppercase tracking-wider">Email Us</p>
                  <p className="text-xl font-medium">azmnexuslimited@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-action">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-brand-soft/40 text-sm font-bold uppercase tracking-wider">Call Us</p>
                  <p className="text-xl font-medium">+234 (0) 800-AZM-NEXUS</p>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-action">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-brand-soft/40 text-sm font-bold uppercase tracking-wider">Headquarters</p>
                  <p className="text-xl font-medium">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-2xl">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Full Name</label>
                  <input type="text" className="w-full bg-brand-soft/20 border-transparent rounded-xl p-4 focus:ring-2 focus:ring-brand-teal outline-none transition-all" placeholder="Dr. John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Organization</label>
                  <input type="text" className="w-full bg-brand-soft/20 border-transparent rounded-xl p-4 focus:ring-2 focus:ring-brand-teal outline-none transition-all" placeholder="City Medical Center" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-dark mb-2">Work Email</label>
                <input type="email" className="w-full bg-brand-soft/20 border-transparent rounded-xl p-4 focus:ring-2 focus:ring-brand-teal outline-none transition-all" placeholder="john@hospital.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-dark mb-2">How can we help?</label>
                <textarea rows={4} className="w-full bg-brand-soft/20 border-transparent rounded-xl p-4 focus:ring-2 focus:ring-brand-teal outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full btn-primary py-5 text-lg font-bold shadow-brand-teal/20 shadow-xl">
                Send Strategic Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-brand-teal" />
            <span className="text-xl font-bold tracking-tight text-brand-dark">AZM <span className="text-brand-teal">Nexus</span></span>
          </div>

          <p className="text-brand-dark/40 text-sm">
            © {new Date().getFullYear()} AZM Nexus Limited. All rights reserved. 
            <span className="mx-2">|</span> 
            <a href="#" className="hover:text-brand-teal">Privacy Policy</a>
          </p>

          <div className="flex gap-6">
            <Linkedin className="w-5 h-5 text-brand-dark/40 hover:text-brand-teal cursor-pointer" />
            <Twitter className="w-5 h-5 text-brand-dark/40 hover:text-brand-teal cursor-pointer" />
            <Instagram className="w-5 h-5 text-brand-dark/40 hover:text-brand-teal cursor-pointer" />
          </div>
        </div>
      </footer>
    </main>
  );
}
