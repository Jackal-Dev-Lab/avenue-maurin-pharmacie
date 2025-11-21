
import { Layout } from "@/components/layout/layout";

export default function CategoriesSaisonnier() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Saisonnier</h1>
        <p className="text-lg mb-6">Préparez-vous à chaque saison avec une sélection adaptée : allergies, vitamines, prévention grippe et rhume, protections solaires…</p>
        <a href="/categories/immunite" className="inline-block bg-pharmacy-DEFAULT text-white px-6 py-2 rounded-full hover:bg-pharmacy-dark transition-colors">Renforcer son immunité</a>
      </div>
    </Layout>
  );
}
