
import { Layout } from "@/components/layout/layout";
import { ProductDemoList } from "@/components/product/ProductDemoList";
import { Section } from "@/components/section/Section";
import { Product } from "@/components/product/product-card";

const parapharmaProducts: Product[] = [
  {
    id: 51,
    name: "Crème visage hydratante - 50ml",
    brand: "Avene",
    price: 15.50,
    images: [
      "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?q=80&w=400&auto=format&fit=crop",
    ],
    rating: 4.5,
    reviewCount: 32,
    stockStatus: "available",
    slug: "creme-visage-avene",
    isNew: true,
  },
  {
    id: 52,
    name: "Gel douche surgras - 400ml",
    brand: "La Roche-Posay",
    price: 10.90,
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop",
    ],
    rating: 5,
    reviewCount: 14,
    stockStatus: "available",
    slug: "gel-douche-lrp",
  },
  {
    id: 53,
    name: "Complément capillaire vitalité",
    brand: "Oenobiol",
    price: 19.90,
    images: [
      "https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=400&auto=format&fit=crop",
    ],
    rating: 4,
    reviewCount: 21,
    stockStatus: "lowStock",
    slug: "oenobiol-capillaire",
  },
  {
    id: 54,
    name: "Démaquillant douceur yeux",
    brand: "Bioderma",
    price: 8.75,
    images: [
      "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=400&auto=format&fit=crop",
    ],
    rating: 5,
    reviewCount: 18,
    stockStatus: "available",
    slug: "demaquillant-bioderma",
  },
];

export default function CategoriesParapharmacie() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Univers Parapharmacie</h1>
        <p className="text-lg mb-6">
          Beauté, bien-être et prévention au quotidien : sélection de soins experts et de produits respectueux pour prendre soin de toute la famille.
        </p>
        <Section
          title="Nos best-sellers parapharmacie"
          description="Dermocosmétique, hygiène, compléments : retrouvez nos coups de cœur et nouveautés."
        >
          <ProductDemoList title="" products={parapharmaProducts} />
        </Section>
        <Section title="Envie d'une routine personnalisée ?">
          <a
            href="/contact"
            className="inline-block bg-pharmacy-DEFAULT text-white px-6 py-2 rounded-full hover:bg-pharmacy-dark transition-colors"
          >
            Demander un conseil beauté/bien-être
          </a>
        </Section>
      </div>
    </Layout>
  );
}
