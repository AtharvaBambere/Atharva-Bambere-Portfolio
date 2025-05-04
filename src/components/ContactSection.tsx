
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail, Download } from 'lucide-react';

const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:atharva.bamberework@gmail.com";
  };

  const handleResumeDownload = () => {
    // This is a placeholder. In a real scenario, you'd provide an actual path to a PDF file
    alert("Resume download functionality would be linked to an actual file in production");
  };

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container">
        <h2 className="section-title">
          Let's Work <span className="text-gradient">Together</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>

        <div className="flex flex-col md:flex-row gap-12 items-center max-w-4xl mx-auto">
          <div className="md:w-1/2 animate-slide-up">
            <div className="bg-card p-8 rounded-xl glass-card">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2"
                  onClick={handleEmailClick}
                >
                  <Mail className="h-5 w-5" />
                  Drop a Mail
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-border hover:bg-secondary flex items-center justify-center gap-2"
                  onClick={handleResumeDownload}
                >
                  <Download className="h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-center md:text-left space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Connect With Me</h3>
                <p className="text-muted-foreground mb-6">
                  Let's connect on social platforms and build amazing things together.
                </p>
              </div>
              
              <div className="flex justify-center md:justify-start gap-4">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-full shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 glass-card"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-full shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 glass-card"
                >
                  <Linkedin className="h-6 w-6 text-blue-400" />
                </a>
                <a 
                  href="https://instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-full shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 glass-card"
                >
                  <Instagram className="h-6 w-6 text-pink-400" />
                </a>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-center md:text-left text-muted-foreground">
                  Alternatively, you can reach me directly at:
                </p>
                <p className="text-primary font-medium mt-2">atharva.bamberework@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
