import { Button } from "@/components/ui/button";
import { Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="text-center mb-12 pb-12 border-b border-primary-foreground/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Fix Your Computer?
          </h2>
          <p className="text-lg mb-6 text-primary-foreground/90">
            Get professional service with our No Fix, No Fee guarantee
          </p>
          <Button 
            onClick={scrollToContact}
            variant="secondary"
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold shadow-soft hover:shadow-medium transition-all duration-300"
          >
            Book Service Now
          </Button>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
              </div>
              <p className="text-primary-foreground/80">
                TuneUpHero@gmail.com<br />
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/90">
              <li>Virus & Malware Removal</li>
              <li>Performance Optimization</li>
              <li>Hardware Upgrades</li>
              <li>Computer Buying</li>
              <li>Same-day Service</li>
            </ul>
          </div>

          {/* Social & Guarantee */}
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              </Button>
            </div>
            <div className="bg-accent/20 p-4 rounded-lg">
              <p className="font-bold text-accent">No Fix – No Fee</p>
              <p className="text-sm text-primary-foreground/90 mt-1">
                Your satisfaction guaranteed
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/80">
            © 2025 TuneUp Hero. All rights reserved. | Professional Computer Repair & Upgrades
          </p>
          <Button 
            onClick={scrollToTop}
            variant="ghost" 
            className="mt-4 text-primary-foreground hover:bg-primary-foreground/10"
          >
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;