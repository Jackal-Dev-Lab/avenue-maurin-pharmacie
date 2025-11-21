
import { ProductCard, Product } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  products: Product[];
}

export function FeaturedProducts({ title, subtitle, viewAllLink, products }: FeaturedProductsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      if (!containerRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft + clientWidth < scrollWidth - 10);
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
      
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    
    const scrollAmount = containerRef.current.clientWidth * 0.8;
    containerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };
  
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
            {subtitle && (
              <p className="text-muted-foreground mt-2">{subtitle}</p>
            )}
          </div>
          {viewAllLink && (
            <Button variant="outline" asChild className="mt-4 md:mt-0">
              <a href={viewAllLink}>Voir tous</a>
            </Button>
          )}
        </div>

        <div className="relative">
          {/* Left scroll button */}
          {showLeftScroll && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow-md rounded-full p-2 hover:bg-white"
              aria-label="Défiler à gauche"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Products container */}
          <div 
            ref={containerRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map(product => (
              <div key={product.id} className="min-w-[240px] md:min-w-[280px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Right scroll button */}
          {showRightScroll && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow-md rounded-full p-2 hover:bg-white"
              aria-label="Défiler à droite"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
