import React from 'react';
import SkillBar from './SkillBar';

const SkillsSection = () => {
  const skills = [
    { skill: 'Python', level: 90 },
    { skill: 'SQL', level: 85 },
    { skill: 'Data Structures', level: 80 },
    { skill: 'C/C++', level: 75 },
    { skill: 'JavaScript', level: 90 },
    { skill: 'React', level: 85 },
    { skill: 'HTML/CSS', level: 95 },
    { skill: 'C#', level: 70 },
  ];

  return (
    <section id="skills" className="p-8 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Skills
      </h2>
      <div className="max-w-2xl mx-auto">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill.skill} level={skill.level} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;