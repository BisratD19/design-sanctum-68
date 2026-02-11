import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const timeline = [
  { year: "2016", title: "Studio Founded", desc: "Established ATELIER with a vision to redefine contemporary living spaces." },
  { year: "2018", title: "First Major Award", desc: "Recognized by the AIA for excellence in residential design." },
  { year: "2020", title: "Commercial Expansion", desc: "Expanded into boutique hospitality and creative office design." },
  { year: "2022", title: "International Projects", desc: "Completed first international commissions in Europe and Asia." },
  { year: "2024", title: "Studio Growth", desc: "Grew to a team of 12 multidisciplinary designers and architects." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">About</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground">Our Story</h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Architect portrait"
                className="w-full aspect-[3/4] object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">The Principal</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-6">
                Alexander Mitchell
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With a Master's degree in Architecture from Columbia University and over eight years of professional practice, Alexander founded ATELIER with the belief that exceptional design has the power to transform how people live, work, and feel.
                </p>
                <p>
                  His approach combines rigorous spatial thinking with an intuitive understanding of materials, light, and human experience. Every project begins with deep listening — understanding the client's aspirations, the site's unique qualities, and the cultural context that will shape the final design.
                </p>
                <p>
                  Alexander's work has been recognized by the American Institute of Architects, Architectural Digest, and Dezeen, and his projects have been featured in numerous international publications.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Our Mission</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-relaxed">
              "We believe that architecture is not merely about building structures — it is about creating environments that elevate the human experience, fostering well-being, creativity, and connection."
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Journey</p>
            <h2 className="font-serif text-4xl font-light text-foreground">Experience Timeline</h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 mb-12 md:mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-foreground -translate-x-1.5 mt-2 z-10" />

                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="font-serif text-2xl text-foreground">{item.year}</span>
                    <h3 className="font-serif text-lg text-foreground mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
