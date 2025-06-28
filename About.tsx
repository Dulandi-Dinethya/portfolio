import { SectionHeader } from '@/components/ui/SectionHeader';
import { GraduationCap, Award, Code, Users, BookOpen, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="About Me"
          subtitle="Get to know more about my background, education, and what drives my passion for technology"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Profile & Bio */}
          <div className="space-y-8 animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="w-72 h-72 bg-white rounded-3xl flex items-center justify-center backdrop-blur-lg bg-opacity-95">
                  <div className="text-6xl animate-bounce">👩‍💻</div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
                Hello! I'm Dulandi Dinethya Muniweera
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed text-lg">
                  I'm a motivated Information Technology undergraduate student with foundational 
                  knowledge in IT and software development. Currently pursuing my Bachelor of 
                  Science Honours in Information Technology at Sri Lanka Institute of Information 
                  Technology (SLIIT), specializing in Information Technology.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Known for problem-solving skills and a strong eagerness to learn and contribute 
                  to team success. I have hands-on experience in full-stack development, mobile 
                  app development, and database management with expertise in modern technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Skills */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Education Section */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <GraduationCap className="text-white" size={26} />
                  </div>
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">Education</h4>
                </div>
                
                <div className="space-y-6">
                  <div className="group/card hover:scale-[1.02] transition-transform duration-300">
                    <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-6 shadow-md border border-blue-100/50 backdrop-blur-sm">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <BookOpen className="text-purple-600 mr-2" size={18} />
                          <h5 className="text-lg font-semibold text-slate-800">BSc Honours in Information Technology</h5>
                        </div>
                        <span className="text-purple-600 font-medium text-sm bg-purple-100 px-3 py-1 rounded-full flex items-center">
                          <Calendar size={12} className="mr-1" />
                          2023-Present
                        </span>
                      </div>
                      <p className="text-purple-600 font-medium mb-2">Sri Lanka Institute of Information Technology (SLIIT)</p>
                    </div>
                  </div>
                  
                  <div className="group/card hover:scale-[1.02] transition-transform duration-300">
                    <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-6 shadow-md border border-blue-100/50 backdrop-blur-sm">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <BookOpen className="text-purple-600 mr-2" size={18} />
                          <h5 className="text-lg font-semibold text-slate-800">Advanced Level</h5>
                        </div>
                        <span className="text-purple-600 font-medium text-sm bg-purple-100 px-3 py-1 rounded-full flex items-center">
                          <Calendar size={12} className="mr-1" />
                          2020-2023
                        </span>
                      </div>
                      <p className="text-purple-600 font-medium mb-2">De Mazenod College</p>
                    </div>
                  </div>
                  <div className="group/card hover:scale-[1.02] transition-transform duration-300">
                    <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-6 shadow-md border border-blue-100/50 backdrop-blur-sm">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <BookOpen className="text-purple-600 mr-2" size={18} />
                          <h5 className="text-lg font-semibold text-slate-800">Ordinary Level</h5>
                        </div>
                        <span className="text-purple-600 font-medium text-sm bg-purple-100 px-3 py-1 rounded-full flex items-center">
                          <Calendar size={12} className="mr-1" />
                          2009-2019
                        </span>
                      </div>
                      <p className="text-purple-600 font-medium mb-2">Seventhday Adventist High School</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-black to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 via-black to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Award className="text-white" size={26} />
                  </div>
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent">Core Competencies</h4>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group/skill hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-br from-white to-purple-50/50 rounded-xl p-5 shadow-md border border-purple-100/50 backdrop-blur-sm">
                      <div className="flex items-center mb-3">
                        <Code className="text-purple-600 mr-2" size={20} />
                        <h5 className="font-semibold text-slate-800">Technical Expertise</h5>
                      </div>
                      <ul className="space-y-2 text-slate-600 text-sm">
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Full-Stack Development</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Mobile App Development</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Database Management</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Software Architecture</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="group/skill hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-br from-white to-purple-50/50 rounded-xl p-5 shadow-md border border-purple-100/50 backdrop-blur-sm">
                      <div className="flex items-center mb-3">
                        <Users className="text-purple-600 mr-2" size={20} />
                        <h5 className="font-semibold text-slate-800">Soft Skills</h5>
                      </div>
                      <ul className="space-y-2 text-slate-600 text-sm">
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Management Skills</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Leadership</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Critical Thinking</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Digital Marketing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <h4 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-indigo-800 bg-clip-text text-transparent mb-4">Languages</h4>
                <div className="flex gap-4">
                  <div className="group/lang hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-r from-white to-cyan-50 rounded-lg px-6 py-3 shadow-md border border-cyan-100/50 backdrop-blur-sm">
                      <span className="text-slate-700 font-medium">English</span>
                    </div>
                  </div>
                  <div className="group/lang hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-r from-white to-blue-50 rounded-lg px-6 py-3 shadow-md border border-blue-100/50 backdrop-blur-sm">
                      <span className="text-slate-700 font-medium">Sinhala</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
