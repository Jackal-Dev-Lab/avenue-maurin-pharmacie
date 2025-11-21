
import { Layout } from "@/components/layout/layout";
import { TeamProfiles } from "@/components/team/TeamProfiles";
import { Section } from "@/components/section/Section";

export default function APropos() {
  return (
    <Layout>
      <div className="container py-16 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">À propos de la Pharmacie Avenue de Maurin</h1>
        <Section
          description="Depuis 1995, notre équipe s’engage pour votre santé, avec expertise, bienveillance et proximité. Notre histoire locale, nos valeurs, votre confiance."
        >
          <ul className="mb-6 list-inside list-disc">
            <li>Accompagnement personnalisé</li>
            <li>Engagement local et conseils adaptés</li>
            <li>Charte qualité & confidentialité</li>
            <li>Écoute, services et innovation</li>
          </ul>
        </Section>
        <Section title="Notre équipe">
          <TeamProfiles />
        </Section>
      </div>
    </Layout>
  );
}
