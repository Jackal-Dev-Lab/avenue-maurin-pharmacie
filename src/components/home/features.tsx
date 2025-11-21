
import { Truck, CheckCircle, CreditCard, Clock } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Truck size={36} className="text-pharmacy-DEFAULT" />,
    title: "Livraison rapide",
    description: "Livraison en 24/48h et gratuite dès 49€ d'achat"
  },
  {
    icon: <CheckCircle size={36} className="text-pharmacy-DEFAULT" />,
    title: "Produits authentiques",
    description: "Sélectionnés avec soin par nos pharmaciens"
  },
  {
    icon: <CreditCard size={36} className="text-pharmacy-DEFAULT" />,
    title: "Paiement sécurisé",
    description: "Carte bancaire, PayPal et Apple Pay acceptés"
  },
  {
    icon: <Clock size={36} className="text-pharmacy-DEFAULT" />,
    title: "Retrait en pharmacie",
    description: "Commandez en ligne et retirez en 1h en officine"
  }
];

export function Features() {
  return (
    <section className="py-12 border-t border-b">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
