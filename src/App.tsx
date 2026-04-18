import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Lenis from "lenis";
import { 
  Phone, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Star, 
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Smile,
  HeartPulse,
  Award,
  MessageSquare,
  Zap,
  MessageCircle,
  ShieldAlert,
  Menu,
  X
} from "lucide-react";

// Design System Constants
const DESIGN = {
  sectionPadding: "py-24 lg:py-32",
  container: "max-w-7xl mx-auto px-6 lg:px-8",
  cardRadius: "rounded-[2.5rem]",
  buttonRadius: "rounded-full",
  headingMain: "text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]",
  headingSection: "text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight",
  textBody: "text-lg lg:text-xl text-ink-muted leading-relaxed",
};

const services = [
  {
    title: "Tooth Extraction",
    description: "Safe and comfortable removal of damaged or problematic teeth with minimal recovery time.",
    icon: ShieldAlert,
    color: "bg-rose-50",
    iconColor: "text-rose-600"
  },
  {
    title: "General Dentistry",
    description: "Full range of dental care from routine cleanings to comprehensive checkups for all age groups.",
    icon: Stethoscope,
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Painless Treatments",
    description: "Advanced techniques ensuring your comfort throughout dental procedures with minimal to no pain.",
    icon: Zap,
    color: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    title: "Preventive Care",
    description: "Regular screenings and maintenance to protect your natural teeth and prevent future complications.",
    icon: ShieldCheck,
    color: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    title: "Modern Procedures",
    description: "Utilizing the latest dental technologies and techniques for reliable, high-quality treatment results.",
    icon: Smile,
    color: "bg-orange-50",
    iconColor: "text-orange-600"
  }
];

const testimonials = [
  {
    name: "Happy Patient",
    role: "Local Resident",
    text: "Very smooth and painless treatment with clear explanation.",
    rating: 5
  },
  {
    name: "Satisfied Client",
    role: "Jaipur Resident",
    text: "Doctor is polite, skilled, and makes patients comfortable.",
    rating: 5
  },
  {
    name: "Regular Visitor",
    role: "Arjun Nagar Resident",
    text: "High-quality treatment at reasonable cost with excellent hygiene.",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className={`${DESIGN.container} h-16 lg:h-20 flex items-center justify-between`}>
          <a href="#home" className="flex items-center gap-2 lg:gap-3 group">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary rounded-lg lg:rounded-xl flex items-center justify-center text-white font-bold text-lg lg:text-xl shadow-button group-hover:scale-105 transition-transform">
              BDC
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg lg:text-xl tracking-tight">Bansal Dental Care</span>
              <span className="text-[8px] lg:text-[10px] text-ink-muted font-bold uppercase tracking-widest">Dr Ashutosh Bansal</span>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {[
              { name: "Home", href: "#home" },
              { name: "Services", href: "#services" },
              { name: "About", href: "#about" },
              { name: "Testimonials", href: "#testimonials" },
              { name: "Contact", href: "#contact" }
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-sm font-bold text-ink-muted hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 lg:gap-4">
            <a 
              href="tel:09782689909" 
              className="hidden sm:flex items-center gap-2 bg-surface px-4 py-2 rounded-full text-xs lg:text-sm font-bold text-ink hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-3 h-3 lg:w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a 
              href="https://wa.me/919782689909?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20with%20Dr%20Ashutosh%20Bansal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 lg:px-7 py-2.5 lg:py-3 rounded-full text-xs lg:text-sm font-bold hover:bg-primary-hover transition-all shadow-button active:scale-95"
            >
              Book Now
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-ink"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {[
                  { name: "Home", href: "#home" },
                  { name: "Services", href: "#services" },
                  { name: "About", href: "#about" },
                  { name: "Testimonials", href: "#testimonials" },
                  { name: "Contact", href: "#contact" }
                ].map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-bold text-ink hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
                  <a href="tel:09782689909" className="flex items-center gap-3 text-ink font-bold">
                    <Phone className="w-5 h-5 text-primary" />
                    097826 89909
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 lg:pt-48 pb-20 lg:pb-32 relative overflow-hidden">
          <div className={DESIGN.container}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs lg:text-sm font-bold mb-6 lg:mb-10">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Jaipur's Trusted Dental Care</span>
                </div>
                <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] lg:leading-[1.05]">
                  Expert Dental Care with <span className="text-primary">Precision and Comfort.</span>
                </h1>
                <p className="text-base lg:text-xl text-ink-muted mt-6 lg:mt-8 mb-8 lg:mb-12 max-w-xl leading-relaxed">
                  Trusted by 100+ patients for painless and reliable treatment in Jaipur. Led by Dr Ashutosh Bansal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
                  <a 
                    href="https://wa.me/919782689909?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20with%20Dr%20Ashutosh%20Bansal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-ink text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group text-base lg:text-lg shadow-premium"
                  >
                    Book Appointment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex items-center gap-3 lg:gap-4 px-5 py-2.5 lg:px-6 lg:py-3 border border-slate-100 rounded-full bg-surface self-start sm:self-auto">
                    <div className="flex -space-x-2 lg:-space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                          <img 
                            src={`https://picsum.photos/seed/patient_hero_${i}/100/100`} 
                            alt="Patient" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="text-[10px] lg:text-xs">
                      <div className="flex items-center gap-0.5 text-orange-500 mb-0.5">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 lg:w-3 lg:h-3 fill-current" />)}
                      </div>
                      <p className="font-bold text-ink">5.0 Rating (114+ Reviews)</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <div className={`aspect-[4/5] ${DESIGN.cardRadius} overflow-hidden shadow-premium relative z-10 border-4 lg:border-8 border-white`}>
                  <img 
                    src="https://images.unsplash.com/photo-1667133295308-9ef24f71952e?q=80&w=757&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Happy Patient Smile" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 right-6 lg:right-10 text-white">
                    <div className="bg-white/10 backdrop-blur-xl p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] border border-white/20">
                      <div className="flex items-center gap-2 lg:gap-3 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest opacity-80">Open Now</p>
                      </div>
                      <p className="text-xl lg:text-2xl font-bold">Standard Clinic Hours</p>
                      <p className="text-white/70 text-xs lg:text-sm mt-1">10 AM – 2 PM & 5 PM – 9 PM</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-8 -left-8 bg-white p-6 rounded-[1.5rem] shadow-premium z-20 border border-slate-50 max-w-[180px] hidden xl:block">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <ShieldCheck className="w-6 h-6" />
                    <span className="font-bold text-sm">Painless Care</span>
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed font-medium">Expert treatment with a focus on patient comfort.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="about" className={`${DESIGN.sectionPadding} bg-surface`}>
          <div className={DESIGN.container}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  <img 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Clinic Interior" 
                    className={`${DESIGN.cardRadius} w-full aspect-square object-cover shadow-premium`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-4 lg:space-y-6 pt-12 lg:pt-16">
                    <div className="bg-primary p-6 lg:p-10 rounded-[1.5rem] lg:rounded-[2.5rem] text-white shadow-button">
                      <p className="text-3xl lg:text-5xl font-extrabold mb-1 lg:mb-2">13+</p>
                      <p className="text-[10px] lg:text-xs font-bold opacity-80 uppercase tracking-widest">Years of Practice in Jaipur</p>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Dental Care Tools" 
                      className={`${DESIGN.cardRadius} w-full aspect-square object-cover shadow-premium`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <span className="text-primary font-bold tracking-widest uppercase text-xs lg:sm block mb-4 lg:mb-6">About the Doctor</span>
                <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight leading-tight">Expert Care, Patient-First Approach.</h2>
                <p className="text-base lg:text-xl text-ink-muted mt-6 lg:mt-8 mb-8 lg:mb-12 leading-relaxed">
                  Dr Ashutosh Bansal brings over 13 years of experience to Jaipur, ensuring high-quality dental care with a transparent and patient-focused approach.
                </p>
                <div className="space-y-6 lg:space-y-8">
                  {[
                    { title: "Experienced Dentist", desc: "13+ years of clinical practice." },
                    { title: "Patient-Focused", desc: "Transparent and clear explanations." },
                    { title: "Modern Equipment", desc: "High-quality materials and tech." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 lg:gap-5">
                      <div className="flex-shrink-0 w-6 h-6 lg:w-7 lg:h-7 bg-blue-100 rounded-full flex items-center justify-center text-primary mt-1">
                        <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg lg:text-xl font-bold text-ink">{item.title}</h4>
                        <p className="text-sm lg:text-base text-ink-muted mt-0.5 lg:mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section id="services" className={DESIGN.sectionPadding}>
          <div className={DESIGN.container}>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
              <div className="max-w-2xl">
                <h2 className={DESIGN.headingSection}>Modern Techniques for Complete Dental Care</h2>
                <p className={`${DESIGN.textBody} mt-6`}>
                  From routine checkups to complex procedures, we provide comprehensive care with a focus on modern techniques and patient comfort.
                </p>
              </div>
              <a 
                href="https://wa.me/919782689909?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20with%20Dr%20Ashutosh%20Bansal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink text-white px-10 py-5 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center gap-3 shadow-premium"
              >
                Book Appointment <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${service.color} p-12 ${DESIGN.cardRadius} group hover:shadow-premium transition-all duration-500 border border-transparent hover:border-white/50`}
                >
                  <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center ${service.iconColor} mb-12 shadow-sm group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-5">{service.title}</h3>
                  <p className="text-ink-muted mb-12 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <a 
                    href={"https://wa.me/919782689909?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20for%20" + encodeURIComponent(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-extrabold text-sm group-hover:gap-5 transition-all text-ink uppercase tracking-widest"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
              
              <div className={`lg:col-span-1 bg-ink ${DESIGN.cardRadius} overflow-hidden relative group min-h-[400px] lg:min-h-[450px]`}>
                <img 
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Dental Checkup" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-red-500 rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-6 lg:mb-8 shadow-lg shadow-red-500/20">
                    <Zap className="w-6 h-6 lg:w-7 lg:h-7" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 lg:mb-4">Sudden Toothache?</h3>
                  <p className="text-slate-300 mb-8 lg:mb-10 text-base lg:text-lg">We prioritize emergency cases for quick pain relief. Walk-ins welcome.</p>
                  <a 
                    href="tel:09782689909"
                    className="bg-white text-ink px-8 lg:px-10 py-4 lg:py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-slate-100 transition-colors shadow-premium"
                  >
                    Call Now <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 lg:py-32 bg-primary relative overflow-hidden">
          <div className={`${DESIGN.container} relative z-10`}>
            <div className="text-center mb-16 lg:mb-24">
              <h2 className="text-3xl lg:text-6xl font-extrabold text-white mb-6 lg:mb-8">Why Jaipur Trusts Us</h2>
              <p className="text-blue-100 text-base lg:text-xl max-w-3xl mx-auto opacity-90">
                Painless procedures and clear explanations for every patient.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
              {[
                { icon: Award, title: "13+ Yrs Exp", desc: "Skilled professional care." },
                { icon: Zap, title: "Painless", desc: "Smooth treatment process." },
                { icon: ShieldCheck, title: "Hygienic", desc: "Clean and modern clinic." },
                { icon: MessageSquare, title: "Clear Info", desc: "Explained before treatment." }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-6 lg:p-10 rounded-[1.5rem] lg:rounded-[2rem] border border-white/10 text-white hover:bg-white/15 transition-colors">
                  <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white/20 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-8">
                    <item.icon className="w-5 h-5 lg:w-7 lg:h-7" />
                  </div>
                  <h4 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-4">{item.title}</h4>
                  <p className="text-blue-100 text-xs lg:text-base leading-relaxed opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        </section>

        {/* Patient Stories Section */}
        <section id="testimonials" className={`${DESIGN.sectionPadding} bg-surface`}>
          <div className={DESIGN.container}>
            <div className="text-center mb-24">
              <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-6">Patient Stories</span>
              <h2 className={DESIGN.headingSection}>What Our Patients Say</h2>
              <p className={`${DESIGN.textBody} mt-6 max-w-2xl mx-auto`}>
                Read how we've helped our patients in Jaipur experience comfortable and reliable dental care.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {testimonials.map((t, i) => (
                <div key={i} className={`bg-white p-12 ${DESIGN.cardRadius} shadow-sm border border-slate-100 flex flex-col hover:shadow-premium transition-all duration-500`}>
                  <div className="flex gap-1 mb-10">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-ink text-xl font-medium mb-12 italic flex-grow leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4 lg:gap-5 pt-6 lg:pt-8 border-t border-slate-50">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-slate-100 overflow-hidden shadow-inner">
                      <img 
                        src={i === 0 ? "https://images.unsplash.com/photo-1667133295315-820bb6481730?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : i === 1 ? "https://images.unsplash.com/photo-1667133295352-ef4c83620e8e?q=80&w=729&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : "https://picsum.photos/seed/patient_review_2/100/100"} 
                        alt={t.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-ink text-base lg:text-lg">{t.name}</p>
                      <p className="text-[10px] lg:text-sm text-ink-muted font-bold tracking-wide uppercase">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Map Section */}
        <section id="contact" className={DESIGN.sectionPadding}>
          <div className={DESIGN.container}>
            <div className="grid lg:grid-cols-2 gap-20 items-stretch">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-6">Visit Us</span>
                <h2 className={DESIGN.headingSection}>Located in the Heart of Gopal Pura Mode, Jaipur.</h2>
                <p className={`${DESIGN.textBody} mt-8 mb-12`}>
                  Our clinic is located at Roop Nagar Road, Arjun Nagar Phatak, easy to find and accessible for all patients in Jaipur.
                </p>
                
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Address</h4>
                      <p className="text-ink-muted text-lg">Roop Nagar Road, S-26, Arjun Nagar Phatak Rd, Gopal Pura Mode, Jaipur, Rajasthan 302015</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <Clock className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Clinic Timings</h4>
                      <div className="space-y-1 text-ink-muted text-lg">
                        <p className="flex justify-between gap-10"><span>Mon–Sat:</span> <span>10 AM – 2 PM & 5 PM – 9 PM</span></p>
                        <p className="flex justify-between gap-10"><span>Sunday:</span> <span>10 AM – 2 PM</span></p>
                        <p className="text-sm font-bold mt-2 text-ink-muted italic">Hours may vary on holidays</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Call Us</h4>
                      <a href="tel:09782689909" className="text-primary text-2xl font-bold hover:underline">097826 89909</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`relative ${DESIGN.cardRadius} overflow-hidden shadow-premium border-8 border-white min-h-[400px]`}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903984.0757942981!2d75.78723092500684!3d27.742353079009924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db434ee7cae93%3A0x6affa2066b9e15b9!2sDr%20Ashutosh%20Bansal!5e0!3m2!1sen!2sin!4v1776512422437!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 lg:py-32">
          <div className={DESIGN.container}>
            <div className={`bg-ink rounded-[2.5rem] lg:rounded-[3.5rem] p-10 lg:p-32 text-center relative overflow-hidden shadow-premium`}>
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-7xl font-extrabold text-white mb-6 lg:mb-10 max-w-5xl mx-auto leading-tight">
                  Get an Honest Opinion Today.
                </h2>
                <p className="text-slate-400 text-base lg:text-2xl mb-10 lg:mb-16 max-w-3xl mx-auto leading-relaxed">
                  Join 100+ happy patients who trust Dr Ashutosh Bansal for professional dental care in Jaipur.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
                  <a 
                    href="https://wa.me/919782689909?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20with%20Dr%20Ashutosh%20Bansal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-10 lg:px-14 py-4 lg:py-6 rounded-full font-bold hover:bg-primary-hover transition-all text-lg lg:text-xl shadow-button active:scale-95"
                  >
                    Book Appointment
                  </a>
                  <a 
                    href="tel:09782689909" 
                    className="bg-white/10 backdrop-blur-md text-white px-10 lg:px-14 py-4 lg:py-6 rounded-full font-bold hover:bg-white/20 transition-all text-lg lg:text-xl border border-white/10"
                  >
                    Call Now
                  </a>
                </div>
                <p className="text-slate-500 mt-10 lg:mt-12 text-[10px] lg:text-base font-bold tracking-widest uppercase">
                  Located in Jaipur • Open Today until 9:00 PM
                </p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`${DESIGN.sectionPadding} bg-white border-t border-slate-100`}>
          <div className={DESIGN.container}>
            <div className="grid lg:grid-cols-4 gap-20 mb-24">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-button">
                    BDC
                  </div>
                  <span className="font-bold text-2xl tracking-tight">Bansal Dental Care</span>
                </div>
                <p className="text-ink-muted text-lg mb-12 max-w-md leading-relaxed">
                  Providing professional and painless dental care in Jaipur for over 13 years. We prioritize your comfort and health above everything else.
                </p>
                <div className="flex gap-5">
                  <a href="tel:09782689909" className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center hover:bg-primary hover:text-white transition-all text-ink shadow-sm">
                    <Phone className="w-6 h-6" />
                  </a>
                  <a href="#contact" className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center hover:bg-primary hover:text-white transition-all text-ink shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-sm mb-12 uppercase tracking-[0.2em] text-slate-400">Quick Links</h4>
                <ul className="space-y-6 text-ink font-bold">
                  {[
                    { name: "Home", href: "#home" },
                    { name: "Services", href: "#services" },
                    { name: "About", href: "#about" },
                    { name: "Testimonials", href: "#testimonials" },
                    { name: "Contact", href: "#contact" }
                  ].map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="hover:text-primary transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-sm mb-12 uppercase tracking-[0.2em] text-slate-400">Visit Us</h4>
                <p className="text-ink font-bold mb-8 leading-relaxed">
                  Roop Nagar Road, S-26, Arjun Nagar Phatak Rd, Gopal Pura Mode, Jaipur, Rajasthan 302015
                </p>
                <div className="space-y-3 text-ink-muted font-bold text-sm">
                  <p className="flex justify-between"><span>Mon–Sat:</span> <span>10 AM – 2 PM & 5 PM – 9 PM</span></p>
                  <p className="flex justify-between"><span>Sun:</span> <span>10 AM – 2 PM</span></p>
                  <p className="text-[10px] mt-2 italic">Hours may vary on holidays</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
              <p className="text-slate-400 text-sm font-bold">
                © 2026 Bansal Dental Care. All rights reserved.
              </p>
              <div className="flex gap-12 text-sm text-slate-400 font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms</a>
              </div>
            </div>
            
            <div className="mt-32 text-center opacity-[0.03] select-none pointer-events-none">
              <h2 className="text-[18vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap">Bansal Dental</h2>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919782689909?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20with%20Dr%20Ashutosh%20Bansal"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-ink px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">
          Book on WhatsApp
        </span>
      </a>
    </div>
  );
}
