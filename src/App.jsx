import React from 'react';
import { 
  CheckCircle, 
  Layout, 
  Zap, 
  Shield, 
  Smartphone, 
  ArrowRight, 
  Send, 
  Briefcase,
  Globe,
  Star,
  Layers,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import TodoApp from './components/TodoApp';

const Section = ({ children, className = "" }) => (
  <section className={`py-20 px-6 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 glass rounded-3xl border border-white/20 hover:border-brand-primary/30 transition-all group"
  >
    <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6 border-b border-white/10 glass">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold">V</div>
        <span className="text-xl font-black tracking-tight text-slate-900 uppercase">Velox</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
        <a href="#features" className="hover:text-brand-primary transition-colors">Features</a>
        <a href="#about" className="hover:text-brand-primary transition-colors">About</a>
        <a href="#demo" className="hover:text-brand-primary transition-colors">Live Demo</a>
      </div>
      <button className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95">
        Get Started
      </button>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-20 px-6 border-t border-slate-800">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold">V</div>
          <span className="text-xl font-black tracking-tight text-white uppercase">Velox</span>
        </div>
        <p className="text-sm">Revolutionizing personal productivity with minimalist design and powerful workflows. Join 50,000+ creators today.</p>
        <div className="flex gap-4">
          <Send className="hover:text-white cursor-pointer transition-colors" size={20} />
          <Globe className="hover:text-white cursor-pointer transition-colors" size={20} />
          <Briefcase className="hover:text-white cursor-pointer transition-colors" size={20} />
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Product</h4>
        <ul className="space-y-4 text-sm">
          <li><a href="#" className="hover:underline">Roadmap</a></li>
          <li><a href="#" className="hover:underline">Integrations</a></li>
          <li><a href="#" className="hover:underline">Pricing</a></li>
          <li><a href="#" className="hover:underline">API Docs</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Company</h4>
        <ul className="space-y-4 text-sm">
          <li><a href="#" className="hover:underline">Our Story</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">Press Kit</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      <div className="space-y-6">
        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Newsletter</h4>
        <p className="text-sm">Get productivity tips delivered to your inbox every week.</p>
        <div className="flex gap-2">
          <input type="email" placeholder="email@ext.com" className="bg-slate-800 border-none rounded-lg px-4 py-2 flex-1 text-sm focus:ring-1 ring-brand-primary outline-none" />
          <button className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-bold">Join</button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 text-center text-xs">
      <p>&copy; 2026 VELOX PRODUCTIVITY. ALL RIGHTS RESERVED. DESIGNED FOR PERFORMANCE.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-brand-primary selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-40 pb-20 hero-gradient">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/20 blur-[120px] rounded-full -z-10 opacity-30"></div>
        <Section>
          <div className="text-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full border border-brand-primary/20 text-brand-primary text-sm font-bold tracking-wide transition-all"
            >
              <Sparkles size={14} />
              <span>OVER 50,000 HAPPY USERS</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[0.9]"
            >
              Stop Tracking,<br />
              <span className="gradient-text">Start Doing.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed"
            >
              The minimal task manager that helps you focus on what truly matters. No bloat, no friction, just pure productivity.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 hover:shadow-2xl transition-all group active:scale-95">
                Launch Dashboard <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 glass text-slate-900 rounded-2xl font-bold border border-slate-200 hover:bg-white transition-all active:scale-95">
                Watch Demo
              </button>
            </motion.div>
          </div>
        </Section>
      </div>

      {/* Social Proof */}
      <Section className="!py-0">
        <div className="border-y border-slate-200 py-10 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="font-bold text-2xl flex items-center gap-1 uppercase tracking-tighter">Goldman Sachs</div>
          <div className="font-bold text-2xl flex items-center gap-1 uppercase tracking-tighter italic">Vogue</div>
          <div className="font-bold text-2xl flex items-center gap-1 uppercase tracking-tighter">Morgan Stanley</div>
          <div className="font-bold text-2xl flex items-center gap-1 uppercase tracking-tighter italic font-serif">The Times</div>
          <div className="font-bold text-2xl flex items-center gap-1 uppercase tracking-tighter">Product Hunt</div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section id="features">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Engineered for Flow.</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Everything you need to manage complex projects, simplified into a single, intuitive interface.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Zap} 
            title="Instant Sync" 
            description="Our edge-network protocol ensures your tasks are synced across all devices in under 100ms." 
          />
          <FeatureCard 
            icon={Layout} 
            title="Unified View" 
            description="Switch between List, Kanban, and Calendar views with a single click. No context switching." 
          />
          <FeatureCard 
            icon={Shield} 
            title="Enterprise Grade" 
            description="End-to-end encryption and automatic backups. Your peak performance is safe with us." 
          />
          <FeatureCard 
            icon={Smartphone} 
            title="Mobile Ready" 
            description="Full-featured mobile application with offline capabilities and smart notifications." 
          />
          <FeatureCard 
            icon={Layers} 
            title="Integrations" 
            description="Connect with Slack, Notion, GitHub, and 2,000+ other tools via Zapier." 
          />
          <FeatureCard 
            icon={CheckCircle} 
            title="Smart Priority" 
            description="AI-driven priority suggestions based on your deadlines and workload." 
          />
        </div>
      </Section>

      {/* About Section / Showcase */}
      <Section id="about" className="bg-slate-900 text-white rounded-[50px] mx-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl font-black leading-tight text-white">Focus on the output,<br />Not the admin.</h2>
            <div className="space-y-6">
              {[
                "Smart keyboard shortcuts for everything.",
                "Custom themes to match your workspace.",
                "Dynamic task dependencies and subtasks.",
                "Real-time collaboration with your team."
              ].map((text, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <p className="text-slate-400 font-medium">{text}</p>
                </div>
              ))}
            </div>
            <button className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-brand-primary/20">
              Read Our Manifesto
            </button>
          </div>
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl rotate-3 opacity-20 absolute -z-10 blur-3xl"></div>
            <motion.div 
              initial={{ rotate: 0 }}
              whileHover={{ rotate: -2 }}
              className="bg-slate-800 p-8 rounded-[40px] border border-white/10 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">system_os_v3.2</div>
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-slate-700 rounded-full w-3/4"></div>
                <div className="h-4 bg-slate-700 rounded-full w-1/2"></div>
                <div className="h-20 bg-brand-primary/20 rounded-2xl border border-brand-primary/30 flex items-center justify-center">
                  <span className="text-brand-primary text-xs font-bold uppercase tracking-widest italic group-hover:scale-110 transition-transform cursor-pointer underline">Analyze Weekly Report</span>
                </div>
                <div className="h-4 bg-slate-700 rounded-full w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* The Live App Demo Section */}
      <Section id="demo">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-black uppercase tracking-widest mb-4">
            Interactive Dashboard
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">Test drive Velox.</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Try the core features right here, right now. No sign-up required for the preview.</p>
        </div>
        
        <div className="relative">
          <TodoApp />
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-secondary/20 blur-[100px] -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-primary/20 blur-[100px] -z-10"></div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-brand-primary text-white text-center py-32 mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-full bg-white opacity-[0.03] skew-x-[30deg] translate-x-1/2"></div>
        <div className="relative z-10 space-y-10">
          <h2 className="text-6xl font-black tracking-tight leading-tight">Ready to boost your<br />productivity?</h2>
          <p className="text-brand-primary-foreground/80 max-w-xl mx-auto text-lg font-medium">Join over 50,000 users who have reclaimed their time and focus. Start your 14-day free trial today.</p>
          <div className="flex justify-center gap-4">
            <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black hover:shadow-2xl transition-all active:scale-95">
              Create Free Account
            </button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
