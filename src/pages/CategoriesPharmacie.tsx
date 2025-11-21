
import { Layout } from "@/components/layout/layout";
import { ProductDemoList } from "@/components/product/ProductDemoList";
import { Section } from "@/components/section/Section";

export default function CategoriesPharmacie() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Univers Pharmacie</h1>
        <p className="text-lg mb-8">
          Retrouvez tous les médicaments essentiels et dispositifs médicaux pour votre santé, soumis à réglementation, délivrés sur conseil et disponibles sans ordonnance.
        </p>
        <Section
          title="Produits incontournables"
          description="Doliprane, soins blessures, matériels médicaux… Accédez à une offre large, conforme et au juste prix."
        >
          <ProductDemoList />
        </Section>
        <Section title="Besoin d’un conseil personnalisé ?">
          <a
            href="/contact"
            className="inline-block bg-pharmacy-DEFAULT text-white px-6 py-2 rounded-full hover:bg-pharmacy-dark transition-colors"
          >
            Contactez un pharmacien
          </a>
        </Section>
      </div>
    </Layout>
  );
}
