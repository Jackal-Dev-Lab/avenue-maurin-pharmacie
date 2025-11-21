
import { Layout } from "@/components/layout/layout";
import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/section/Section";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="container py-16 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Contact & Accès</h1>
        <Section title="Nous contacter">
          <div className="mb-8 grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p>
                <Phone className="inline mr-2" size={18} /> 
                <a href="tel:+33467270000" className="text-pharmacy-DEFAULT hover:underline">04 67 27 00 00</a>
              </p>
              <p>
                <Mail className="inline mr-2" size={18} />
                <a href="mailto:contact@pharmaciedemaurin.fr" className="text-pharmacy-DEFAULT hover:underline">
                  contact@pharmaciedemaurin.fr
                </a>
              </p>
              <p>
                Adresse : <span className="ml-1">1479 Avenue de Maurin, 34070 Montpellier</span>
              </p>
            </div>
            <ContactForm />
          </div>
        </Section>
        <Section title="Venir à la pharmacie">
          <div className="rounded overflow-hidden shadow aspect-w-16 aspect-h-5 mb-3">
            <iframe
              title="Google Maps - Pharmacie Avenue de Maurin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.33101397752!2d3.8423793155795984!3d43.59926357912221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6aedb9bfe06b7%3A0x50f16027b33bbcd5!2sPharmacie%20de%20Maurin!5e0!3m2!1sfr!2sfr!4v1674498929965!5m2!1sfr!2sfr"
              width="600" height="180" style={{ border: 0, width: "100%" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Section>
      </div>
    </Layout>
  );
}
