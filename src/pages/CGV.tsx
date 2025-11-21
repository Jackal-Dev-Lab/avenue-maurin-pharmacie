
import { Layout } from "@/components/layout/layout";

export default function CGV() {
  return (
    <Layout>
      <div className="container py-16 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Conditions générales de vente</h1>
        <p className="mb-6 text-muted-foreground">Veuillez lire attentivement nos conditions générales de vente pour toute commande sur le site Pharmacie Avenue de Maurin.</p>
        <a href="/mentions-legales" className="inline-block bg-pharmacy-DEFAULT text-white px-6 py-2 rounded-full hover:bg-pharmacy-dark transition-colors">Mentions légales</a>
      </div>
    </Layout>
  );
}
