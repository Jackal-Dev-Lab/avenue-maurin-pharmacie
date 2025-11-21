
import { Layout } from "@/components/layout/layout";

export default function CategoriesBeaute() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Beauté</h1>
        <p className="text-lg mb-6">Cosmétiques, dermocosmétiques et soins experts sélectionnés par nos pharmaciens pour révéler votre beauté naturelle.</p>
        <ul className="mb-4 list-disc list-inside">
          <li>Soins visage, corps, cheveux</li>
          <li>Maquillage, solaires</li>
          <li>Produits respectueux et innovants</li>
        </ul>
        <a href="/categories/nutrition" className="inline-block bg-pharmacy-DEFAULT text-white px-6 py-2 rounded-full hover:bg-pharmacy-dark transition-colors">Découvrir la Nutrition</a>
      </div>
    </Layout>
  );
}
