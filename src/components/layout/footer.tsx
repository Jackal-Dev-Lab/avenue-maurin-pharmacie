
import { Logo } from "@/components/ui/logo";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-pharmacy-light text-pharmacy-dark border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div>
            <Logo />
            <p className="mt-4 text-sm">
              Votre pharmacie de proximité à Montpellier, au service de votre santé et votre bien-être depuis 1995.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-white p-2 rounded-full hover:bg-pharmacy-DEFAULT hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white p-2 rounded-full hover:bg-pharmacy-DEFAULT hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white p-2 rounded-full hover:bg-pharmacy-DEFAULT hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/a-propos" className="text-sm hover:text-pharmacy-DEFAULT transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/notre-equipe" className="text-sm hover:text-pharmacy-DEFAULT transition-colors">
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link to="/conseils" className="text-sm hover:text-pharmacy-DEFAULT transition-colors">
                  Conseils santé
                </Link>
              </li>
              <li>
                <Link to="/promotions" className="text-sm hover:text-pharmacy-DEFAULT transition-colors">
                  Promotions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:text-pharmacy-DEFAULT transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-pharmacy-DEFAULT transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/saisonnier" className="text-sm hover:text-pharmacy-DEFAULT transition-colors">
                  Saisonnier
                </Link>
              </li>
              <li>
                <Link to="/categories/beaute" className="text-sm hover:text-pharmacy-DEFAULT transition-colors">
                  Beauté
                </Link>
              </li>
              <li>
                <Link to="/categories/nutrition" className="text-sm hover:text-pharmacy-DEFAULT transition-colors">
                  Nutrition
                </Link>
              </li>
              <li>
                <Link to="/categories/bebe" className="text-sm hover:text-pharmacy-DEFAULT transition-colors">
                  Bébé
                </Link>
              </li>
              <li>
                <Link to="/categories/immunite" className="text-sm hover:text-pharmacy-DEFAULT transition-colors">
                  Immunité
                </Link>
              </li>
              <li>
                <Link to="/categories/articulations" className="text-sm hover:text-pharmacy-DEFAULT transition-colors">
                  Articulations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 shrink-0 mt-0.5" />
                <span className="text-sm">1479 Avenue de Maurin, 34070 Montpellier</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 shrink-0" />
                <a href="tel:+33467270000" className="text-sm hover:text-pharmacy-DEFAULT transition-colors">
                  04 67 27 00 00
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 shrink-0" />
                <a href="mailto:contact@pharmaciedemaurin.fr" className="text-sm hover:text-pharmacy-DEFAULT transition-colors">
                  contact@pharmaciedemaurin.fr
                </a>
              </li>
              <li className="text-sm mt-4">
                <strong>Horaires:</strong>
                <br />
                Lun-Ven: 8h30-19h30
                <br />
                Samedi: 9h-19h
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 py-6 border-t border-pharmacy-DEFAULT/20">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
            <p className="text-sm mb-4">
              Inscrivez-vous pour recevoir nos conseils santé et nos offres exclusives
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-md border border-pharmacy-DEFAULT/20 focus:outline-none focus:ring-2 focus:ring-pharmacy-DEFAULT"
              />
              <button className="bg-pharmacy-DEFAULT text-white px-4 py-2 rounded-md hover:bg-pharmacy-dark transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-pharmacy-DEFAULT/20 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Pharmacie Avenue de Maurin. Tous droits réservés.
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/mentions-legales" className="hover:text-pharmacy-DEFAULT transition-colors">
              Mentions légales
            </Link>
            <Link to="/cgv" className="hover:text-pharmacy-DEFAULT transition-colors">
              CGV
            </Link>
            <Link to="/confidentialite" className="hover:text-pharmacy-DEFAULT transition-colors">
              Politique de confidentialité
            </Link>
            <Link to="/cookies" className="hover:text-pharmacy-DEFAULT transition-colors">
              Gestion des cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
