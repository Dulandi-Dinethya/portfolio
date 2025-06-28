
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContactInfoCard } from '@/components/ui/ContactInfoCard';
import { useContactForm } from '@/hooks/useContactForm';
import { contactInfo } from '@/config/portfolio';

const Contact = () => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Get In Touch"
          subtitle="I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology."
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're a recruiter, fellow developer, or someone with an exciting project idea, 
                I'd love to hear from you. Feel free to reach out through any of the following channels.
              </p>
            </div>

            <div className="space-y-4">
              <ContactInfoCard 
                icon={Mail}
                title="Email"
                value={contactInfo.email}
              />
              <ContactInfoCard 
                icon={Phone}
                title="Phone"
                value={contactInfo.phone}
              />
              <ContactInfoCard 
                icon={MapPin}
                title="Location"
                value={contactInfo.location}
              />
              <ContactInfoCard 
                icon={Github}
                title="GitHub"
                value="github.com/Dulandi-Dinethya"
              />
              <ContactInfoCard 
                icon={Linkedin}
                title="LinkedIn"
                value="linkedin.com/in/dulandi-dinethya-muniweera"
              />
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-700">Download CV</h4>
                  <p className="text-sm text-gray-500">View my professional experience and skills</p>
                </div>
                <Button 
                  variant="outline" 
                  className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full px-4 py-2"
                  onClick={() => window.open('/src/uploads/CV.pdf', '_blank')}
                >
                  Download CV
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">Send a Message</CardTitle>
              <CardDescription>
                Drop me a message and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    required 
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                  <Input 
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    required 
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required 
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
                <Input 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  required 
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
                <Textarea 
                  placeholder="Your Message" 
                  rows={5} 
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  required 
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
