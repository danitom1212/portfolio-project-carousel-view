
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const ContactWidget = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="overflow-hidden shadow-xl border-0 bg-white/95 backdrop-blur-sm">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Get In Touch</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-gray-700">contact@portfolio.com</span>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-gray-700">+1 (555) 123-4567</span>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-gray-700">Tel Aviv, Israel</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden shadow-xl border-0 bg-white/95 backdrop-blur-sm">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
