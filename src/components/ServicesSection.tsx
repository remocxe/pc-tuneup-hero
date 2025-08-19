import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, HardDrive, ShieldCheck } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Basic Cleanup",
      price: "£15",
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      description: "Essential system maintenance for better performance",
      features: [
        "Malware removal",
        "Startup optimization", 
        "Temporary file cleanup"
      ]
    },
    {
      title: "Full Cleanup",
      price: "£25",
      icon: <HardDrive className="w-8 h-8 text-primary" />,
      description: "Comprehensive system optimization and updates",
      features: [
        "Everything in Basic",
        "Windows updates",
        "Driver checks",
        "Performance optimization"
      ],
      popular: true
    },
    {
      title: "Deep Cleanup",
      price: "£35", 
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      description: "Complete system security and performance overhaul",
      features: [
        "Everything in Full",
        "Offline malware scan",
        "Privacy hardening", 
        "Restore point creation"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional PC Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the right service level for your computer's needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-medium hover:-translate-y-2 ${
                service.popular ? 'border-primary shadow-soft scale-105' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <div className="text-4xl font-bold text-primary">{service.price}</div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <HardDrive className="w-6 h-6 text-primary" />
                <span>Upgrades & Parts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                RAM/SSD installation and other hardware upgrades. Parts purchased only after your approval.
              </p>
              <p className="text-sm text-primary font-semibold">
                Free consultation • Professional installation
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>Buying Computers</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                I buy used PCs and laptops. Free evaluation with instant cash offers for working systems.
              </p>
              <p className="text-sm text-primary font-semibold">
                Free evaluation • Instant cash • Fair prices
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;