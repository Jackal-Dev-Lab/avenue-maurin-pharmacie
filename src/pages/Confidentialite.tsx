
import { Layout } from "@/components/layout/layout";

export default function Confidentialite() {
  return (
    <Layout>
      <div className="container py-16 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Politique de confidentialité</h1>
        <p className="mb-6 text-muted-foreground">Votre confiance est essentielle. Découvrez comment nous protégeons vos données et respectons votre vie privée.</p>
        <a href="/cookies" className="inline-block bg-pharmacy-DEFAULT text-white px-6 py-2 rounded-full hover:bg-pharmacy-dark transition-colors">Gestion des cookies</a>
      </div>
    </Layout>
  );
}
