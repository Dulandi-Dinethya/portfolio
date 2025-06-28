
import { SectionHeader } from '@/components/ui/SectionHeader';
import { skillCategories } from '@/config/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Technical Skills"
          subtitle="Here are the technologies and tools I work with to bring ideas to life"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg px-3 py-2 text-center border border-blue-100 hover:border-blue-300 transition-colors duration-300"
                  >
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
