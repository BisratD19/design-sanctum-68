import { useParams, Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <Layout>
        <div className="pt-32 pb-24 text-center">
          <h1 className="font-serif text-4xl text-foreground">Project Not Found</h1>
          <Link to="/projects" className="text-muted-foreground mt-4 inline-block hover:text-foreground">
            ← Back to Projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white/60 text-sm tracking-wider uppercase hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={14} /> Back to Projects
            </Link>
            <h1 className="font-serif text-4xl md:text-6xl text-white font-light">{project.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Meta */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Location", value: project.location },
              { label: "Year", value: project.year },
              { label: "Area", value: project.area },
              { label: "Category", value: project.category },
            ].map((item) => (
              <AnimatedSection key={item.label}>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{item.label}</p>
                <p className="font-serif text-lg text-foreground">{item.value}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <h2 className="font-serif text-3xl text-foreground mb-6">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Concept */}
      <section className="py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <h2 className="font-serif text-3xl text-foreground mb-6">Design Concept</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.concept}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Materials */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <h2 className="font-serif text-3xl text-foreground mb-6">Materials & Lighting Strategy</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.materials}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif text-3xl text-foreground">Project Gallery</h2>
          </AnimatedSection>
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {project.images.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <img
                  src={img}
                  alt={`${project.title} - ${i + 1}`}
                  className="w-full rounded-sm cursor-pointer hover:opacity-90 transition-opacity"
                  loading="lazy"
                  onClick={() => setLightboxIndex(i)}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <button className="absolute top-6 right-6 text-white/60 hover:text-white" onClick={() => setLightboxIndex(null)}>
            <X size={28} />
          </button>
          <img
            src={project.images[lightboxIndex]}
            alt={project.title}
            className="max-w-full max-h-[85vh] object-contain"
          />
        </motion.div>
      )}
    </Layout>
  );
};

export default ProjectDetail;
