
import { ProductCard, Product } from "@/components/product/product-card";

const demoProducts: Product[] = [
  {
    id: 91,
    name: "Doliprane 1000mg - 8 cp",
    brand: "Sanofi",
    price: 2.90,
    images: [
      "https://images.unsplash.com/photo-1584308074727-e93a738ed1b5?q=80&w=400&auto=format&fit=crop",
    ],
    rating: 4,
    reviewCount: 13,
    stockStatus: "available",
    slug: "doliprane-1000",
  },
  {
    id: 92,
    name: "Spray antiseptique - 50ml",
    brand: "Gifrer",
    price: 4.80,
    oldPrice: 6.20,
    images: [
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=400&auto=format&fit=crop",
    ],
    rating: 5,
    reviewCount: 22,
    stockStatus: "lowStock",
    slug: "spray-antiseptique",
    isNew: true,
  },
  {
    id: 93,
    name: "Thermomètre digital rapide",
    brand: "Pic Solution",
    price: 6.50,
    images: [
      "https://images.unsplash.com/photo-1559364344-d0a73121e614?q=80&w=400&auto=format&fit=crop",
    ],
    rating: 4.5,
    reviewCount: 31,
    stockStatus: "available",
    slug: "thermometre-pic",
  },
  {
    id: 94,
    name: "Masques chirurgicaux - 50 unités",
    brand: "3M Health",
    price: 8.80,
    images: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&auto=format&fit=crop",
    ],
    rating: 4,
    reviewCount: 11,
    stockStatus: "available",
    slug: "masques-chirurgicaux",
  },
  {
    id: 95,
    name: "Gel hydroalcoolique - 100ml",
    brand: "Mercurochrome",
    price: 3.10,
    images: [
      "https://images.unsplash.com/photo-1633171973277-90c4d32977dc?q=80&w=400&auto=format&fit=crop",
    ],
    rating: 4.5,
    reviewCount: 19,
    stockStatus: "outOfStock",
    slug: "gel-hydroalcoolique",
  },
  {
    id: 96,
    name: "Kit tensiomètre bras",
    brand: "Omron",
    price: 37.90,
    images: [
      "https://images.unsplash.com/photo-1612573248650-bfa85697d046?q=80&w=400&auto=format&fit=crop",
    ],
    rating: 5,
    reviewCount: 56,
    stockStatus: "available",
    slug: "tensiometre-omron",
    isIreneChoice: true,
  },
];

export function ProductDemoList({ title = "Nos produits phares", products = demoProducts }) {
  return (
    <div>
      {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
