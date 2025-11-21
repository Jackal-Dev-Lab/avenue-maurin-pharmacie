
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  images: string[];
  rating: number;
  reviewCount: number;
  stockStatus: "available" | "lowStock" | "outOfStock";
  isNew?: boolean;
  isIreneChoice?: boolean;
  slug: string;
}

interface ProductCardProps {
  product: Product;
  size?: "small" | "medium" | "large";
}

export function ProductCard({ product, size = "medium" }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const discountPercentage = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (product.images.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div 
      className={`group relative flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md border ${
        size === "small" ? "p-2" : size === "large" ? "p-5" : "p-3"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col items-start gap-2">
        {product.isNew && (
          <Badge className="bg-accent px-2 text-xs" variant="secondary">
            Nouveau
          </Badge>
        )}
        {product.oldPrice && (
          <Badge className="bg-destructive text-destructive-foreground text-xs">
            -{discountPercentage}%
          </Badge>
        )}
        {product.isIreneChoice && (
          <Badge className="bg-pharmacy-DEFAULT text-white px-2 text-xs">
            Choix d'Irène
          </Badge>
        )}
      </div>

      {/* Favorite Button */}
      <button
        onClick={toggleFavorite}
        className={`absolute right-2 top-2 z-10 p-1.5 rounded-full transition-all ${
          isFavorite 
            ? "bg-pink-100 text-pink-500" 
            : "bg-gray-100 text-gray-400 opacity-70 group-hover:opacity-100"
        }`}
      >
        <Heart size={16} fill={isFavorite ? "#ec4899" : "none"} />
      </button>

      {/* Image Container */}
      <Link to={`/produit/${product.slug}`} className="relative w-full">
        <div className="relative pt-[100%]">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.name}
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Stock Status */}
        {product.stockStatus === "lowStock" && (
          <div className="absolute bottom-0 left-0 right-0 bg-amber-100 text-amber-800 text-xs text-center py-1">
            Bientôt indisponible
          </div>
        )}
        {product.stockStatus === "outOfStock" && (
          <div className="absolute bottom-0 left-0 right-0 bg-red-100 text-red-800 text-xs text-center py-1">
            Rupture de stock
          </div>
        )}
      </Link>

      {/* Content */}
      <div className={`flex flex-col flex-grow ${size === "small" ? "mt-2" : "mt-3"}`}>
        <Link to={`/produit/${product.slug}`} className="flex-grow">
          <p className={`text-sm text-muted-foreground ${size === "small" ? "mb-1" : "mb-2"}`}>{product.brand}</p>
          <h3 className={`${size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base"} font-medium line-clamp-2`}>
            {product.name}
          </h3>
          
          {/* Rating */}
          {(size === "medium" || size === "large") && (
            <div className="flex items-center my-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground ml-1">{product.reviewCount}</span>
            </div>
          )}
        </Link>

        {/* Price */}
        <div className={`flex items-center gap-2 ${size === "small" ? "mt-1" : size === "large" ? "mt-4" : "mt-2"}`}>
          <span className={`font-semibold ${size === "small" ? "text-sm" : size === "large" ? "text-xl" : "text-lg"}`}>
            {product.price.toFixed(2)} €
          </span>
          {product.oldPrice && (
            <span className="text-muted-foreground line-through text-sm">
              {product.oldPrice.toFixed(2)} €
            </span>
          )}
        </div>

        {/* Add to Cart */}
        {product.stockStatus === "available" && (size === "medium" || size === "large") && (
          <div className="mt-3">
            <Button 
              className="w-full flex items-center justify-center gap-1 bg-pharmacy-DEFAULT hover:bg-pharmacy-dark" 
              size={size === "large" ? "lg" : "default"}
            >
              <ShoppingCart size={size === "large" ? 18 : 16} />
              <span>Ajouter</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
