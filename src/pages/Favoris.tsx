
import { Layout } from "@/components/layout/layout";
import { ProductCard, Product } from "@/components/product/product-card";
import { Section } from "@/components/section/Section";

const favorisProducts: Product[] = [
  {
    id: 301,
    name: "Baume Réparateur Lèvres - 15ml",
    brand: "La Roche-Posay",
    price: 5.90,
    images: [
      "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=400&auto=format&fit=crop"
    ],
    rating: 5,
    reviewCount: 19,
    stockStatus: "available",
    slug: "baume-levres-lrp",
  },
];

export default function Favoris() {
  return (
    <Layout>
      <div className="container py-16 max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Mes favoris</h1>
        <Section
          description="Retrouvez facilement vos produits favoris pour vos achats récurrents ou découverte."
        >
          <div className="grid grid-cols-1 gap-4">
            {favorisProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Section>
        <Section>
          <a
            href="/panier"
            className="inline-block bg-pharmacy-DEFAULT text-white px-6 py-2 rounded-full hover:bg-pharmacy-dark transition-colors"
          >
            Voir mon panier
          </a>
        </Section>
      </div>
    </Layout>
  );
}
