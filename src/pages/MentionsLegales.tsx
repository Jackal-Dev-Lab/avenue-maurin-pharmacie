
import { Layout } from "@/components/layout/layout";

export default function MentionsLegales() {
  return (
    <Layout>
      <div className="container py-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Mentions légales</h1>
        <p className="mb-4 text-sm text-muted-foreground">Conformément à la législation française, retrouvez toutes les informations légales relatives à la Pharmacie Avenue de Maurin.</p>
        <ul className="space-y-2 mb-8">
          <li>Pharmacie exploitée par : <strong>Irène Watfa & Elie Watfa</strong></li>
          <li>Adresse : 1479 Avenue de Maurin, 34070 Montpellier</li>
          <li>Numéro SIRET : 402 791 764 00034</li>
          <li>Contact : contact@pharmaciedemaurin.fr</li>
        </ul>
        <a href="/confidentialite" className="inline-block bg-pharmacy-DEFAULT text-white px-6 py-2 rounded-full hover:bg-pharmacy-dark transition-colors">Politique de confidentialité</a>
      </div>
    </Layout>
  );
}
