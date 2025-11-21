
import { Layout } from "@/components/layout/layout";

export default function Produit() {
  return (
    <Layout>
      <div className="container py-16 max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Fiche produit</h1>
        <p className="mb-6 text-muted-foreground">
          Détail professionnel, qualité pharmaceutique, photos, conseils, avis et achat rapide.<br />
          (Ceci est un gabarit, à personnaliser pour chaque produit réel.)
        </p>
        <a href="/panier" className="inline-block bg-pharmacy-DEFAULT text-white px-6 py-2 rounded-full hover:bg-pharmacy-dark transition-colors">Acheter maintenant</a>
      </div>
    </Layout>
  );
}
