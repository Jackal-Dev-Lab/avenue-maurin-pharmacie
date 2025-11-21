
import { Layout } from "@/components/layout/layout";
import { Section } from "@/components/section/Section";

export default function ConseilArticle() {
  return (
    <Layout>
      <div className="container py-16 max-w-2xl">
        <Section
          title="Bien préparer le printemps"
          description="Publié par Irène Watfa • 1 mars 2025"
        >
          <div className="space-y-5">
            <p>
              Allergies, fatigue, système immunitaire au ralenti ? Le retour du printemps peut être anticipé ! Notre équipe vous conseille pour booster vos défenses :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4">
              <li>Adoptez une cure de probiotiques ou de vitamine D</li>
              <li>Renforcez l’hydratation et adaptez votre alimentation</li>
              <li>Pensez à l’activité physique et au sommeil réparateur</li>
              <li>Demandez conseil à votre pharmacien sur les produits adaptés</li>
            </ul>
            <a
              href="/conseils"
              className="inline-block bg-pharmacy-DEFAULT text-white px-6 py-2 rounded-full hover:bg-pharmacy-dark transition-colors"
            >
              Retour aux conseils
            </a>
          </div>
        </Section>
      </div>
    </Layout>
  );
}
