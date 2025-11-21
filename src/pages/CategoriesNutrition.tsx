
import { Layout } from "@/components/layout/layout";

export default function CategoriesNutrition() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Nutrition</h1>
        <p className="text-lg mb-6">Compléments, conseils nutritionnels, produits diététiques… Offrez à votre organisme le meilleur accompagnement santé sur-mesure.</p>
        <a href="/conseils" className="inline-block bg-pharmacy-DEFAULT text-white px-6 py-2 rounded-full hover:bg-pharmacy-dark transition-colors">Lire nos conseils nutrition</a>
      </div>
    </Layout>
  );
}
