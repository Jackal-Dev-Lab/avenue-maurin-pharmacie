
import { Layout } from "@/components/layout/layout";
import { Section } from "@/components/section/Section";
import { TeamProfiles } from "@/components/team/TeamProfiles";

export default function NotreEquipe() {
  return (
    <Layout>
      <div className="container py-16 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Notre équipe</h1>
        <Section description="Faites connaissance avec les professionnels de santé qui vous accompagnent au quotidien.">
          <TeamProfiles />
        </Section>
        <Section>
          <a
            href="/contact"
            className="inline-block mt-6 bg-pharmacy-DEFAULT text-white px-6 py-2 rounded-full hover:bg-pharmacy-dark transition-colors"
          >
            Contacter l’équipe
          </a>
        </Section>
      </div>
    </Layout>
  );
}
