
import { useState, useEffect } from "react";
import { Product } from "@/components/product/product-card";

// Mock products data
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Vitamine D3 1000 UI - 90 Comprimés",
    brand: "Laboratoire XYZ",
    price: 14.90,
    images: [
      "https://images.unsplash.com/photo-1584308074727-e93a738ed1b5?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&auto=format&fit=crop"
    ],
    rating: 4.5,
    reviewCount: 87,
    stockStatus: "available",
    isIreneChoice: true,
    slug: "vitamine-d3-1000ui"
  },
  {
    id: 2,
    name: "Crème Hydratante Visage - Peaux Sensibles",
    brand: "Cosmétique Pharma",
    price: 9.95,
    images: [
      "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop"
    ],
    rating: 4,
    reviewCount: 53,
    stockStatus: "available",
    slug: "creme-hydratante-visage"
  },
  {
    id: 3,
    name: "Spray Nasal Eau de Mer - 100ml",
    brand: "NatureSea",
    price: 6.50,
    oldPrice: 8.20,
    images: [
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633171973277-90c4d32977dc?q=80&w=400&auto=format&fit=crop"
    ],
    rating: 4.5,
    reviewCount: 121,
    stockStatus: "available",
    slug: "spray-nasal-eau-mer"
  },
  {
    id: 4,
    name: "Gel Arnica - Contusions et Muscles Endoloris - 75ml",
    brand: "PhytoHealth",
    price: 8.75,
    images: [
      "https://images.unsplash.com/photo-1628605358466-c1b96a7d813e?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=400&auto=format&fit=crop"
    ],
    rating: 5,
    reviewCount: 39,
    stockStatus: "lowStock",
    slug: "gel-arnica-contusions"
  },
  {
    id: 5,
    name: "Probiotiques Digestion Optimale - 30 Gélules",
    brand: "BioFlore",
    price: 19.90,
    images: [
      "https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&auto=format&fit=crop"
    ],
    rating: 4,
    reviewCount: 66,
    stockStatus: "available",
    isNew: true,
    slug: "probiotiques-digestion"
  },
  {
    id: 6,
    name: "Huile Essentielle de Lavande Bio - 10ml",
    brand: "Aromathéra",
    price: 7.50,
    images: [
      "https://images.unsplash.com/photo-1611329532992-0b7b1b6e2a5e?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611851122449-405bd47f4216?q=80&w=400&auto=format&fit=crop"
    ],
    rating: 5,
    reviewCount: 152,
    stockStatus: "available",
    slug: "huile-essentielle-lavande"
  },
  {
    id: 7,
    name: "Shampoing Doux Usage Fréquent - 250ml",
    brand: "DermaHair",
    price: 8.95,
    oldPrice: 10.95,
    images: [
      "https://images.unsplash.com/photo-1626766632602-d88d080602f7?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1647891349498-34e4c13d5dc1?q=80&w=400&auto=format&fit=crop"
    ],
    rating: 4,
    reviewCount: 27,
    stockStatus: "available",
    slug: "shampoing-doux-usage-frequent"
  },
  {
    id: 8,
    name: "Comprimés Magnésium Marin B6 - 60 Comprimés",
    brand: "VitalNature",
    price: 15.90,
    images: [
      "https://images.unsplash.com/photo-1559364344-d0a73121e614?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585870969430-e303c17b0e97?q=80&w=400&auto=format&fit=crop"
    ],
    rating: 4.5,
    reviewCount: 93,
    stockStatus: "outOfStock",
    slug: "comprimes-magnesium-marin"
  },
  {
    id: 9,
    name: "Crème Mains Réparatrice Intense - 75ml",
    brand: "DermaSoin",
    price: 6.90,
    images: [
      "https://images.unsplash.com/photo-1612573248650-bfa85697d046?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592136957897-b2b6ca21e10d?q=80&w=400&auto=format&fit=crop"
    ],
    rating: 4.5,
    reviewCount: 46,
    stockStatus: "available",
    slug: "creme-mains-reparatrice"
  },
  {
    id: 10,
    name: "Lait Hydratant Corps - Peaux Sèches - 400ml",
    brand: "DermaSoin",
    price: 11.95,
    images: [
      "https://images.unsplash.com/photo-1625328998831-d97ae9ce1243?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=400&auto=format&fit=crop"
    ],
    rating: 5,
    reviewCount: 58,
    stockStatus: "available",
    isIreneChoice: true,
    slug: "lait-hydratant-corps"
  }
];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating API fetch with a delay
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        
        // In a real implementation, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setProducts(mockProducts);
        setIsLoading(false);
      } catch (err) {
        setError("Erreur lors du chargement des produits");
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getProductsByCategory = (category: string): Product[] => {
    // This is a mock implementation
    // In a real app, you would filter based on actual categories
    return mockProducts.slice(0, 6);
  };

  const getNewProducts = (): Product[] => {
    return mockProducts.filter(product => product.isNew);
  };

  const getFeaturedProducts = (): Product[] => {
    // Return a subset of products for featured display
    return mockProducts.slice(0, 6);
  };

  const getIreneChoices = (): Product[] => {
    return mockProducts.filter(product => product.isIreneChoice);
  };

  const getPromotions = (): Product[] => {
    return mockProducts.filter(product => product.oldPrice);
  };

  return {
    products,
    isLoading,
    error,
    getProductsByCategory,
    getNewProducts,
    getFeaturedProducts,
    getIreneChoices,
    getPromotions
  };
}
