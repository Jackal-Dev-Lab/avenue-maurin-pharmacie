
import { Layout } from "@/components/layout/layout";

export default function Cookies() {
  return (
    <Layout>
      <div className="container py-16 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Gestion des cookies</h1>
        <p className="mb-6 text-muted-foreground">En poursuivant votre navigation, vous acceptez l’utilisation de cookies pour améliorer votre expérience utilisateur dans le respect du RGPD.</p>
        <a href="/confidentialite" className="inline-block bg-pharmacy-DEFAULT text-white px-6 py-2 rounded-full hover:bg-pharmacy-dark transition-colors">Lire la politique de confidentialité</a>
      </div>
    </Layout>
  );
}
