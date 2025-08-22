import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do I need to back up my files before service?",
      answer: "Dont worry about this, i always back up files before i touch anything. But feel free to still back it up your self if you feel its needed."
    },
    {
      question: "How long does each service take?",
      answer: "Basic Cleanup: 60 minutes. Full Cleanup: 1-3 hours. Deep Cleanup: 3-4 hours. Upgrade installations vary depending on the hardware but typically 30 minutes-2 hours including testing."
    },
    {
      question: "Do you guarantee results?",
      answer: "Absolutely! I offer a 'No Fix – No Fee' guarantee. If I can't resolve your computer issues or significantly improve performance, you don't pay for the service."
    },
    {
      question: "Do I pay for parts upfront?",
      answer: "No! I only purchase parts after you approve the specific items and costs. You'll receive detailed quotes before any purchases are made."
    },
    {
      question: "What areas do you serve?",
      answer: "I provide local computer services in L11 and nearby. Contact me to confirm if I can service your location. Same-day service is often available for urgent issues."
    },
    {
      question: "What if my computer can't be fixed?",
      answer: "If your computer is beyond repair, I'll give you an honest assessment and may offer to buy it for parts. You'll never pay for unsuccessful repair attempts."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our PC services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;