import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Search, CheckCircle, ShoppingCart, Wrench } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Describe Your Needs",
      description: "Tell me about your upgrade goals or performance issues"
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Get Options & Estimate", 
      description: "Receive detailed options and transparent cost estimates"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Approve Parts",
      description: "Review and approve all parts before any purchase"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-primary" />,
      title: "I Purchase & Install",
      description: "I source the parts and perform professional installation"
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Final Testing",
      description: "Comprehensive testing to ensure everything works perfectly"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Upgrades & Parts Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A transparent, step-by-step process with no surprises
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center hover:shadow-soft transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-secondary rounded-full">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-0.5 bg-primary"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;