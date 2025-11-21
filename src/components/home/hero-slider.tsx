
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  theme: "light" | "dark";
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1600&auto=format&fit=crop",
    title: "Préparez-vous pour l'hiver",
    description: "Protégez votre immunité avec notre sélection de produits naturels",
    buttonText: "Découvrir",
    buttonLink: "/categories/saisonnier",
    theme: "dark"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1600&auto=format&fit=crop",
    title: "La beauté naturelle",
    description: "Notre sélection de soins avec des ingrédients naturels et éthiques",
    buttonText: "Voir les produits",
    buttonLink: "/categories/beaute",
    theme: "light"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1577204551722-5b8ad2630dce?q=80&w=1600&auto=format&fit=crop",
    title: "L'équipe vous conseille",
    description: "Prenez rendez-vous avec un de nos pharmaciens pour un conseil personnalisé",
    buttonText: "Contacter",
    buttonLink: "/contact",
    theme: "light"
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ 
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
            <div className="container px-8 md:px-12">
              <div className="max-w-lg">
                <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
                  slide.theme === 'light' ? 'text-black' : 'text-white'
                }`}>
                  {slide.title}
                </h1>
                <p className={`text-lg mb-6 ${
                  slide.theme === 'light' ? 'text-black/80' : 'text-white/90'
                }`}>
                  {slide.description}
                </p>
                <Button 
                  asChild 
                  className={`text-base px-6 py-3 ${
                    slide.theme === 'light' 
                      ? 'bg-pharmacy-dark hover:bg-black text-white' 
                      : 'bg-white text-pharmacy-dark hover:bg-pharmacy-light'
                  }`}
                >
                  <Link to={slide.buttonLink}>{slide.buttonText}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all"
        aria-label="Précédent"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all"
        aria-label="Suivant"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
