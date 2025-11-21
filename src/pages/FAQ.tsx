
import { Layout } from "@/components/layout/layout";

export default function FAQ() {
  return (
    <Layout>
      <div className="container py-16 max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Foire aux questions</h1>
        <ul className="space-y-5">
          <li>
            <strong>Comment commander en ligne ?</strong>
            <p className="mt-1 text-muted-foreground">Sélectionnez vos produits, ajoutez-les au panier puis suivez le tunnel de commande sécurisé.</p>
          </li>
          <li>
            <strong>Quels moyens de paiement acceptez-vous ?</strong>
            <p className="mt-1 text-muted-foreground">Carte bancaire, PayPal, Apple Pay et d’autres solutions sécurisées.</p>
          </li>
          <li>
            <strong>Puis-je retirer ma commande en pharmacie ?</strong>
            <p className="mt-1 text-muted-foreground">Oui, choisissez l’option « Retrait en pharmacie » lors du paiement.</p>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
