
import { Layout } from "@/components/layout/layout";

export default function CategoriesBebe() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Bébé & Maman</h1>
        <p className="text-lg mb-6">Tout pour le bien-être de votre enfant et l’accompagnement de la maternité : laits, soins, accessoires, conseils personnalisés.</p>
        <a href="/contact" className="inline-block bg-pharmacy-DEFAULT text-white px-6 py-2 rounded-full hover:bg-pharmacy-dark transition-colors">Contactez notre équipe petite enfance</a>
      </div>
    </Layout>
  );
}
