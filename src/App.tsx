import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CategoriesPharmacie from "./pages/CategoriesPharmacie";
import CategoriesParapharmacie from "./pages/CategoriesParapharmacie";
import CategoriesSaisonnier from "./pages/CategoriesSaisonnier";
import CategoriesBeaute from "./pages/CategoriesBeaute";
import CategoriesNutrition from "./pages/CategoriesNutrition";
import CategoriesBebe from "./pages/CategoriesBebe";
import CategoriesImmunite from "./pages/CategoriesImmunite";
import CategoriesArticulations from "./pages/CategoriesArticulations";
import Promotions from "./pages/Promotions";
import Conseils from "./pages/Conseils";
import ConseilArticle from "./pages/ConseilArticle";
import APropos from "./pages/APropos";
import NotreEquipe from "./pages/NotreEquipe";
import Contact from "./pages/Contact";
import Panier from "./pages/Panier";
import MonCompte from "./pages/MonCompte";
import Favoris from "./pages/Favoris";
import FAQ from "./pages/FAQ";
import MentionsLegales from "./pages/MentionsLegales";
import CGV from "./pages/CGV";
import Confidentialite from "./pages/Confidentialite";
import Cookies from "./pages/Cookies";
import Produit from "./pages/Produit";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Main Routes */}
          <Route path="/categories/pharmacie" element={<CategoriesPharmacie />} />
          <Route path="/categories/parapharmacie" element={<CategoriesParapharmacie />} />
          <Route path="/categories/saisonnier" element={<CategoriesSaisonnier />} />
          <Route path="/categories/beaute" element={<CategoriesBeaute />} />
          <Route path="/categories/nutrition" element={<CategoriesNutrition />} />
          <Route path="/categories/bebe" element={<CategoriesBebe />} />
          <Route path="/categories/immunite" element={<CategoriesImmunite />} />
          <Route path="/categories/articulations" element={<CategoriesArticulations />} />
          <Route path="/produit/:productSlug" element={<Produit />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/conseils" element={<Conseils />} />
          <Route path="/conseils/:articleSlug" element={<ConseilArticle />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/notre-equipe" element={<NotreEquipe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/mon-compte" element={<MonCompte />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/faq" element={<FAQ />} />
          {/* Legal Pages */}
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/cookies" element={<Cookies />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
