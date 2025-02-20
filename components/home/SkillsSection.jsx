import React from 'react';
import SkillBar from './SkillBar';

const SkillsSection = () => {
  const skills = [
    { skill: 'C++', level: 90 },
    { skill: 'Python', level: 80 },
    { skill: 'Java', level:78 },
    { skill: 'Javascript/HTML/CSS', level: 60 },
    { skill: 'React', level: 55 },
    { skill: 'Nextjs', level: 50 },
    { skill: 'Database', level: 30 },
    { skill: 'Threejs/GSAP', level: 15 },
  ];

  return (
    <section id="skills" className="p-8 bg-light-mode dark:bg-dark-mode">
      <h2 className="text-4xl font-bold text-center mb-8 text-dark-mode dark:text-light-mode">
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