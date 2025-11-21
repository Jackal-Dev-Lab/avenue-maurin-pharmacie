
import { Layout } from "@/components/layout/layout";
import { Section } from "@/components/section/Section";
import { ProductCard, Product } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";

const panierProducts: Product[] = [
  {
    id: 888,
    name: "Doliprane 1000mg - 8 cp",
    brand: "Sanofi",
    price: 2.90,
    images: [
      "https://images.unsplash.com/photo-1584308074727-e93a738ed1b5?q=80&w=400&auto=format&fit=crop"
    ],
    rating: 4,
    reviewCount: 13,
    stockStatus: "available",
    slug: "doliprane-1000",
  },
];

export default function Panier() {
  return (
    <Layout>
      <div className="container py-16 max-w-xl">
        <h1 className="text-3xl font-bold mb-4">Mon panier</h1>
        <Section
          title="Vos articles"
          description="Vérifiez, modifiez ou validez votre sélection."
        >
          <div className="flex flex-col gap-5 mb-6">
            {panierProducts.length > 0 ? (
              panierProducts.map((p) => <ProductCard key={p.id} product={p} />)
            ) : (
              <div className="text-muted-foreground">Votre panier est vide.</div>
            )}
          </div>
        </Section>
        <Section>
          <Button className="w-full bg-pharmacy-DEFAULT hover:bg-pharmacy-dark text-xl py-3">
            Valider ma commande
          </Button>
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
