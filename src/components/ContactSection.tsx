import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    deviceType: "",
    service: "",
    notes: "",
    partsApproval: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "I'll respond within 24 hours. Thank you for choosing our service!"
    });
    setFormData({
      name: "",
      email: "",
      deviceType: "",
      service: "",
      notes: "",
      partsApproval: false
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to fix your computer? Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-medium">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Book Your Service</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="deviceType">Device Type</Label>
                    <Select onValueChange={(value) => setFormData({...formData, deviceType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select device type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="desktop">Desktop PC</SelectItem>
                        <SelectItem value="laptop">Laptop</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Requested</Label>
                    <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic Cleanup (£15)</SelectItem>
                        <SelectItem value="full">Full Cleanup (£25)</SelectItem>
                        <SelectItem value="deep">Deep Cleanup (£35)</SelectItem>
                        <SelectItem value="upgrade">Upgrades & Parts</SelectItem>
                        <SelectItem value="buying">Selling Computer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notes / Issue Description</Label>
                  <Textarea
                    id="notes"
                    placeholder="Describe your computer issues or what you'd like to upgrade..."
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    rows={4}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="partsApproval"
                    checked={formData.partsApproval}
                    onCheckedChange={(checked) => setFormData({...formData, partsApproval: checked as boolean})}
                  />
                  <Label htmlFor="partsApproval" className="text-sm">
                    I understand that any parts/upgrades require my approval before purchase
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  Submit Request
                </Button>
              </form>

              <div className="mt-8 text-center p-4 bg-secondary rounded-lg">
                <p className="text-foreground font-semibold mb-2">
                  I respond within 24 hours
                </p>
                <p className="text-accent font-bold text-lg">
                  No Fix – No Fee Guarantee
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;