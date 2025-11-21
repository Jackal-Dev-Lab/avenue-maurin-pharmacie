
import { Layout } from "@/components/layout/layout";

export default function MonCompte() {
  return (
    <Layout>
      <div className="container py-16 max-w-xl">
        <h1 className="text-3xl font-bold mb-4">Mon compte</h1>
        <p className="text-lg mb-4">Accédez à vos informations personnelles, consultez vos commandes et gérez vos préférences en toute sécurité.</p>
        <a href="/connexion" className="inline-block bg-pharmacy-DEFAULT text-white px-6 py-2 rounded-full hover:bg-pharmacy-dark transition-colors">Se connecter</a>
      </div>
    </Layout>
  );
}
