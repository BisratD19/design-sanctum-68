import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

const categories = ["All", "Residential", "Commercial"] as const;

const Projects = () => {
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Portfolio</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground">Our Projects</h1>
          </AnimatedSection>

          {/* Filters */}
          <div className="flex justify-center gap-8 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm tracking-[0.15em] uppercase transition-colors duration-300 pb-2 border-b-2 ${
                  filter === cat
                    ? "text-foreground border-foreground"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
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
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
