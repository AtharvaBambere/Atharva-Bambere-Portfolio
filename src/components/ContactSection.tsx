
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:atharva.bamberework@gmail.com";
  };

  const handleResumeDownload = () => {
    // This is a placeholder. In a real implementation, you'd link to the actual resume file
    alert("Resume download functionality will be implemented with the actual file.");
  };

  return (
    <section id="contact" className="min-h-screen flex items-center section-padding bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out.
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-6 delayed-fade">
            <div className="bg-card p-6 rounded-lg glass-card">
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">atharva.bamberework@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button 
                onClick={handleEmailClick}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Mail className="mr-2 h-4 w-4" /> Drop a Mail
              </Button>
              
              <Button 
                onClick={handleResumeDownload}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
            
            <div className="flex justify-center md:justify-start space-x-4 pt-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noreferrer"
                className="bg-card p-3 rounded-full hover:bg-card/80 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noreferrer"
                className="bg-card p-3 rounded-full hover:bg-card/80 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card p-6 rounded-lg shadow-lg glass-card delayed-fade" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-secondary/50 rounded-lg border border-border focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-secondary/50 rounded-lg border border-border focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-secondary/50 rounded-lg border border-border focus:ring-1 focus:ring-primary focus:outline-none resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
