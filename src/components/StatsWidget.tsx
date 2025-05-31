
import { useState, useEffect } from "react";
import { Eye, Star, GitBranch, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Projects Completed", value: 15, icon: GitBranch, suffix: "+" },
  { label: "GitHub Stars", value: 127, icon: Star, suffix: "" },
  { label: "Code Reviews", value: 89, icon: Eye, suffix: "+" },
  { label: "Cups of Coffee", value: 1337, icon: Coffee, suffix: "+" },
];

const CounterAnimation = ({ target, duration = 2000, suffix = "" }: { target: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

export const StatsWidget = () => {
  return (
    <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <CardContent className="p-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          By The Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label} 
                className="text-center group hover:scale-105 transition-transform duration-200"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-3 flex justify-center">
                  <IconComponent className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <div className="text-3xl font-bold mb-2 text-blue-300">
                  <CounterAnimation target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-gray-300 leading-tight">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
