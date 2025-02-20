import React from 'react';

const SkillBar = ({ skill, level }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full mb-4">
      <div className="flex justify-between items-center px-4 py-2">
        <span className="font-bold text-gray-800">{skill}</span>
        <span className="text-sm text-gray-600">{level}%</span>
      </div>
      <div
        className="h-2 bg-blue-500 rounded-full"
        style={{ width: `${level}%`, transition: 'width 2s ease-in-out' }}
      ></div>
    </div>
  );
};

export default SkillBar;