
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-tech-light/70 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="glass-card p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-tech-light/80 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-tech-dark/50 border-tech-light/10 focus:border-tech-purple/50 text-tech-light"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-tech-light/80 mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-tech-dark/50 border-tech-light/10 focus:border-tech-purple/50 text-tech-light"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-tech-light/80 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="bg-tech-dark/50 border-tech-light/10 focus:border-tech-purple/50 text-tech-light"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-tech-light/80 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="bg-tech-dark/50 border-tech-light/10 focus:border-tech-purple/50 text-tech-light resize-none"
                  />
                </div>
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-tech-purple hover:bg-tech-purple/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass-card p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-tech-light">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-tech-purple/20 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-tech-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-tech-light/70 mb-1">Email</p>
                      <p className="text-tech-light">adityasingh841238@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-tech-purple/20 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-tech-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-tech-light/70 mb-1">Phone</p>
                      <p className="text-tech-light">+91 7050969525</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-tech-light/70 mb-4">Find me on</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/ajaditya00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-tech-dark/50 p-3 rounded-full hover:bg-tech-purple/20 transition-colors"
                  >
                    <Github className="h-5 w-5 text-tech-light" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aditya-raj-4081782b9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-tech-dark/50 p-3 rounded-full hover:bg-tech-purple/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-tech-light" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
