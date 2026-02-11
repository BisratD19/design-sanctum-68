import { useState } from "react";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Contact</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground">Get in Touch</h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Form */}
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">Name</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="border-border bg-transparent rounded-none border-0 border-b focus-visible:ring-0 px-0"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">Email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="border-border bg-transparent rounded-none border-0 border-b focus-visible:ring-0 px-0"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="border-border bg-transparent rounded-none border-0 border-b focus-visible:ring-0 px-0 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-none h-12 text-sm tracking-[0.15em] uppercase"
                >
                  Send Message
                </Button>
              </form>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-10 lg:pl-8">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Contact Information</p>
                  <ul className="space-y-4">
                    <li>
                      <a href="mailto:hello@atelier-studio.com" className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors">
                        <Mail size={18} className="text-muted-foreground" />
                        hello@atelier-studio.com
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-foreground">
                      <Phone size={18} className="text-muted-foreground" />
                      +1 (555) 123-4567
                    </li>
                    <li className="flex items-center gap-3 text-foreground">
                      <MapPin size={18} className="text-muted-foreground" />
                      123 Design District, Los Angeles, CA
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Map placeholder */}
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Location</p>
                  <div className="aspect-[4/3] bg-secondary rounded-sm overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.38951875!3d34.0522342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
