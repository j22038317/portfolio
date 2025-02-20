"use client";
import React, { useEffect, useRef, useState } from 'react';

const SkillBar = ({ skill, level }) => {
  const [width, setWidth] = useState(0);
  const skillBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidth(level);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillBarRef.current) {
      observer.observe(skillBarRef.current);
    }

    // 清理 observer
    return () => {
      if (skillBarRef.current) {
        observer.unobserve(skillBarRef.current);
      }
    };
  }, [level]);

  return (
    <div className="w-full bg-gray-200 rounded-xl mb-4" ref={skillBarRef}>
      <div className="flex justify-between items-center px-4 py-2">
        <span className="font-bold text-dark-mode">{skill}</span>
        <span className="text-sm text-gray-600">{level}%</span>
      </div>
      <div
        className="h-2 bg-blue-600 rounded-full transition-all duration-1000 ease-in-out"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default SkillBar;