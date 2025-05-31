
import { useState, useEffect } from "react";
import { Code, Database, Globe, Palette, Smartphone, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "Frontend Development", level: 90, icon: Globe, color: "bg-blue-500" },
  { name: "JavaScript/TypeScript", level: 85, icon: Code, color: "bg-yellow-500" },
  { name: "React & Next.js", level: 88, icon: Code, color: "bg-cyan-500" },
  { name: "Database Design", level: 80, icon: Database, color: "bg-green-500" },
  { name: "UI/UX Design", level: 75, icon: Palette, color: "bg-purple-500" },
  { name: "Mobile Development", level: 70, icon: Smartphone, color: "bg-pink-500" },
];

const SkillBar = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skill.level);
    }, 200 + index * 100);

    return () => clearTimeout(timer);
  }, [skill.level, index]);

  const IconComponent = skill.icon;

  return (
    <div className="mb-6 group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <IconComponent className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-gray-800">{skill.name}</span>
        </div>
        <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export const SkillsWidget = () => {
  return (
    <Card className="overflow-hidden shadow-xl border-0 bg-white/95 backdrop-blur-sm">
      <CardContent className="p-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
