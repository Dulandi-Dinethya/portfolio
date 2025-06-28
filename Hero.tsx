
import { ArrowDown, Github, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { personalInfo, contactInfo } from '@/config/portfolio';

const Hero = () => {
  const scrollToSection = useScrollToSection();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="relative w-40 h-52 rounded-lg mx-auto mb-6 overflow-hidden group">
              <img 
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover animate-fade-in animate-scale hover:scale-105 transition-all duration-400 ease-in-out"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
            {personalInfo.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('#projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href={contactInfo.github} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
              <Mail size={28} />
            </a>
            <a href={contactInfo.linkedin} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
