
import { Layout } from "@/components/layout/layout";
import { ProductCard, Product } from "@/components/product/product-card";
import { Section } from "@/components/section/Section";

const promoProducts: Product[] = [
  {
    id: 201,
    name: "Gel Aloe Vera 98% - 150ml",
    brand: "Pur'Aloe",
    price: 6.90,
    oldPrice: 9.80,
    images: [
      "https://images.unsplash.com/photo-1628605358466-c1b96a7d813e?q=80&w=400&auto=format&fit=crop"
    ],
    rating: 5,
    reviewCount: 47,
    stockStatus: "available",
    slug: "aloe-vera-gel",
  },
  {
    id: 202,
    name: "Brumisateur Eau Thermale - 300ml",
    brand: "Uriage",
    price: 5.40,
    oldPrice: 8.10,
    images: [
      "https://images.unsplash.com/photo-1611851122449-405bd47f4216?q=80&w=400&auto=format&fit=crop"
    ],
    rating: 4,
    reviewCount: 21,
    stockStatus: "available",
    slug: "brumisateur-uriage",
  },
];

export default function Promotions() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Promotions du moment</h1>
        <p className="text-lg mb-6">
          Profitez de nos offres spéciales sur des produits sélectionnés en pharmacie et parapharmacie : remises exclusives, lots duo, ventes flash !
        </p>
        <Section
          title="Nos offres à saisir"
          description="Promotion limitée dans la limite des stocks disponibles. Prix barré = Prix initial conseillé."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {promoProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Section>

        <Section>
          <a
            href="/categories/pharmacie"
            className="inline-block bg-pharmacy-DEFAULT text-white px-6 py-2 rounded-full hover:bg-pharmacy-dark transition-colors"
          >
            Continuer mes achats
          </a>
        </Section>
      </div>
    </Layout>
  );
}
