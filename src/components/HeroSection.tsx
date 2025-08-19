import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pc-setup.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 text-center text-white relative z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
          Local Computer Cleanup & Virus Removal
          <span className="block text-accent font-normal mt-2">No Fix, No Fee</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
          Malware removal, performance optimization, upgrades, and I buy computers. 
          Same-day service available.
        </p>
        
        <Button 
          onClick={scrollToContact}
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 shadow-strong hover:shadow-medium transition-all duration-300 hover:scale-105"
        >
          Book Service Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;