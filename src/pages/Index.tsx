
import { useState } from "react";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    id: "cars4u",
    title: "Cars4u",
    description: "Cars4u is a multi-page web application for showcasing and potentially selling luxury cars from brands like BMW, Bentley, and Mercedes-Benz. Built using HTML5, CSS3, JavaScript, Bootstrap for responsive design, and jQuery for interactivity, it provides an engaging user experience.",
    github: "https://github.com/danitom1212/cars",
    images: [
      "https://i.ibb.co/4fvkvcY/car-sign-Up.png",
      "https://i.ibb.co/FYLWM4x/car.png",
      "https://i.ibb.co/HBYb3DG/2024-06-08-190254.png",
      "https://i.ibb.co/nc0r8T3/cars-home.png"
    ]
  },
  {
    id: "animals4u",
    title: "Animals4u",
    description: "Animals4u is a website dedicated to animal lovers. It features a comprehensive database of animals, allowing users to explore various species, read interesting facts, and view high-quality images. The site is designed using HTML, CSS, and JavaScript with Bootstrap for responsiveness.",
    github: "https://github.com/danitom1212/animels",
    images: [
      "https://i.ibb.co/TRFjCS8/animel-1.jpg",
      "https://i.ibb.co/FbBSZ41/toolbar.png",
      "https://i.ibb.co/tcrYnNg/animel-2.jpg"
    ]
  },
  {
    id: "todo",
    title: "TO-DO",
    description: "This simple web-based To-Do List application built using HTML, CSS, and JavaScript, with Bootstrap for styling. Users can perform basic operations like adding tasks, viewing tasks, deleting specific tasks, and ending the program.",
    github: "https://github.com/danitom1212/To-do",
    images: [
      "https://i.ibb.co/bm4p09x/todo-1.png",
      "https://i.ibb.co/FKQFkvN/todo-02.png",
      "https://i.ibb.co/xJHC5RB/todo-03.png",
      "https://i.ibb.co/Vpv7Lbb/todo-04.png"
    ]
  },
  {
    id: "locationgps",
    title: "LocationGps",
    description: "Show your location with GPS maps; if you want to change your location, you can change it.",
    github: "https://github.com/danitom1212/LocationGps",
    images: [
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "luckystorm",
    title: "Lucky Storm",
    description: "Lucky Storm is an exciting arcade game where players navigate through various levels of increasing difficulty. Using intuitive controls, players must avoid obstacles and collect power-ups to achieve the highest score possible.",
    github: "https://github.com/danitom1212/gamblingApp",
    images: [
      "https://i.ibb.co/JmVqdWm/game-01.png",
      "https://i.ibb.co/Rv0sbk1/game-02.png",
      "https://i.ibb.co/mq9FdcD/game-03.png",
      "https://i.ibb.co/bLvN5Mr/game-05.png"
    ]
  }
];

const ProjectCarousel = ({ project }: { project: typeof projects[0] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <Card className="overflow-hidden shadow-xl border-0 bg-white/95 backdrop-blur-sm">
      <CardContent className="p-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          {project.title}
        </h2>
        
        <div className="relative mb-6 group">
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg bg-gray-100">
            <img
              src={project.images[currentImage]}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              className="w-full h-full object-contain transition-all duration-500 transform group-hover:scale-105"
            />
            
            {/* Navigation arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
            
            {/* Image indicators */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImage ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">{project.title} Website</h3>
          <p className="text-gray-200 leading-relaxed">{project.description}</p>
        </div>

        <div className="flex justify-center">
          <Button 
            asChild 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1535316954385-399d2486d808?w=1920&h=1080&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            My Portfolio
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
            Showcasing innovative web applications and creative projects
          </p>
          <Button 
            asChild 
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold animate-fade-in transition-all duration-200 transform hover:scale-105"
          >
            <a href="#projects">
              View Projects
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="container mx-auto px-4 py-16">
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCarousel project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <p className="text-gray-300 mb-6">
            Interested in working together? Let's connect!
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              Contact Me
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
