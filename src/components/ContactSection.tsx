import { useState, useEffect } from "react";
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

  // Auto-fill service based on URL hash and listen to hash changes
  useEffect(() => {
    const applyFromHash = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#contact-')) {
        const serviceType = hash.replace('#contact-', '');
        const map: Record<string, string> = {
          'basic-cleanup': 'basic',
          'full-cleanup': 'full',
          'deep-cleanup': 'deep',
        };
        const serviceValue = map[serviceType];
        if (serviceValue) {
          setFormData(prev => ({ ...prev, service: serviceValue }));
          // Clear the hash after setting the service
          window.history.replaceState(null, '', window.location.pathname);
        }
      }
    };

    applyFromHash();
    window.addEventListener('hashchange', applyFromHash);
    return () => window.removeEventListener('hashchange', applyFromHash);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send to Discord webhook based on device type
    const sendToDiscord = async () => {
      let webhookUrl;
      
      switch (formData.deviceType) {
        case 'laptop':
          webhookUrl = "https://discord.com/api/webhooks/1407786323330470141/UCCxy-0TjnRrU5u3EPCuRy6EdvD6r_SU_FdONNbBA4Vv9Qm6iCGywGtFXPex8tFnx3b7";
          break;
        case 'other':
          webhookUrl = "https://discord.com/api/webhooks/1407786427856720025/67J-trfpBDIHuq2zZajcHkMciDWEPd1gqBT5zQK5jRXVbV_g8jJZuIVNsBtCUVloY9fZ";
          break;
        case 'desktop':
        default:
          webhookUrl = "https://discord.com/api/webhooks/1407781598748737546/7pRx9mjXI1DMxrb6EGEIy16bEMRLXWq4PeGo3Sh2Hjj_9n-3Q75GylW_e-2U8ziNbWqZ";
          break;
      }
      
      const discordEmbed = {
        embeds: [{
          title: "🖥️ New Service Request",
          color: 0x00ff00,
          fields: [
            {
              name: "👤 Name",
              value: formData.name,
              inline: true
            },
            {
              name: "📧 Email",
              value: formData.email,
              inline: true
            },
            {
              name: "💻 Device Type",
              value: formData.deviceType || "Not specified",
              inline: true
            },
            {
              name: "🔧 Service Requested",
              value: formData.service,
              inline: true
            },
            {
              name: "📋 Notes",
              value: formData.notes || "No additional notes",
              inline: false
            },
            {
              name: "✅ Parts Approval",
              value: formData.partsApproval ? "Yes" : "No",
              inline: true
            }
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "PC Tuneup Hero Contact Form"
          }
        }]
      };

      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(discordEmbed)
        });

        if (!response.ok) {
          throw new Error('TuneUp Hero Error #1000');
        }

        toast({
          title: "Message Sent!",
          description: "Your request has been sent. We'll respond within 24 hours!"
        });
        
        setFormData({
          name: "",
          email: "",
          deviceType: "",
          service: "",
          notes: "",
          partsApproval: false
        });
      } catch (error) {
        console.error('TuneUp Hero Errror:', error);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive"
        });
      }
    };

    // Send to Discord only
    sendToDiscord();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to fix your computer? Fill out the form below and we'll get back to you within 24 hours.
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
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic Cleanup (£10)</SelectItem>
                        <SelectItem value="full">Full Cleanup (£15)</SelectItem>
                        <SelectItem value="deep">Deep Cleanup (£30)</SelectItem>
                        <SelectItem value="upgrade">Upgrades & Parts</SelectItem>
                        <SelectItem value="buying">Selling Computer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
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
                  We respond within 24 hours
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
