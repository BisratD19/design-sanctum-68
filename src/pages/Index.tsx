import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Layers, Box, Wrench, Lightbulb, Eye, Instagram } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Completed Projects" },
  { value: "20+", label: "Happy Clients" },
  { value: "5", label: "Awards" },
];

const skills = [
  { icon: Compass, title: "Architectural Design", desc: "Creating innovative structures that harmonize form, function, and context." },
  { icon: Layers, title: "Interior Space Planning", desc: "Optimizing spatial flow for comfort, efficiency, and aesthetic impact." },
  { icon: Box, title: "3D Visualization", desc: "Photorealistic renders that bring design concepts to life before construction." },
  { icon: Wrench, title: "Renovation & Remodeling", desc: "Transforming existing spaces with modern design sensibility and precision." },
  { icon: Lightbulb, title: "Lighting Design", desc: "Crafting atmosphere through carefully considered natural and artificial lighting." },
  { icon: Eye, title: "Project Supervision", desc: "Ensuring design integrity from concept through to final completion." },
];

const featuredProjects = projects.slice(0, 3);

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Modern architectural project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-tight mb-6"
          >
            Designing Spaces That Inspire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white/70 text-lg md:text-xl tracking-wider uppercase mb-10"
          >
            Architecture & Interior Design Studio
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground text-sm tracking-[0.15em] uppercase hover:bg-white/90 transition-colors"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-white text-sm tracking-[0.15em] uppercase hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-16 bg-white/40"
          />
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">About Us</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-relaxed mb-8 text-foreground">
              With over 8+ years of experience in architectural and interior design, we create functional and aesthetically refined spaces tailored to modern living.
            </h2>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-foreground hover:text-muted-foreground transition-colors border-b border-foreground pb-1"
            >
              Learn More <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <span className="font-serif text-5xl md:text-6xl font-light text-foreground">{stat.value}</span>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-3">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Portfolio</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">Featured Projects</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.15}>
                <Link to={`/projects/${project.id}`} className="group block">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-500 flex items-center justify-center">
                      <span className="text-white text-sm tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        View Project
                      </span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h3 className="font-serif text-xl text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
                    <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-2">{project.category}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-foreground hover:text-muted-foreground transition-colors border-b border-foreground pb-1"
            >
              View All Projects <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Expertise</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">Our Skills</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skills.map((skill, i) => (
              <AnimatedSection key={skill.title} delay={i * 0.1}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background flex items-center justify-center">
                    <skill.icon size={20} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-24 text-center">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Follow Our Work</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-10">Stay Connected</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300 hover:scale-110"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300 hover:scale-110"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact Preview */}
      <section className="py-24 bg-foreground text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/40 mb-4">Get in Touch</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-10">Let's Work Together</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                <p className="text-primary-foreground/40 uppercase tracking-wider text-xs mb-2">Email</p>
                <a href="mailto:hello@atelier-studio.com" className="hover:text-primary-foreground/70 transition-colors">
                  hello@atelier-studio.com
                </a>
              </div>
              <div>
                <p className="text-primary-foreground/40 uppercase tracking-wider text-xs mb-2">Phone</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-primary-foreground/40 uppercase tracking-wider text-xs mb-2">Location</p>
                <p>123 Design District, Los Angeles, CA</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
