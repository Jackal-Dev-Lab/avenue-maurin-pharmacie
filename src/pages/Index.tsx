
import { Layout } from "@/components/layout/layout";
import { HeroSlider } from "@/components/home/hero-slider";
import { CategoryPreview } from "@/components/home/category-preview";
import { FeaturedProducts } from "@/components/home/featured-products";
import { TeamSection } from "@/components/home/team-section";
import { AdviceSection } from "@/components/home/advice-section";
import { NewsletterBanner } from "@/components/home/newsletter-banner";
import { Features } from "@/components/home/features";
import { useProducts } from "@/hooks/use-products";

export default function Index() {
  const { 
    isLoading, 
    error, 
    getFeaturedProducts, 
    getPromotions, 
    getIreneChoices 
  } = useProducts();

  const featuredProducts = getFeaturedProducts();
  const promotionProducts = getPromotions();
  const ireneChoices = getIreneChoices();

  return (
    <Layout>
      <HeroSlider />
      <CategoryPreview />
      <FeaturedProducts 
        title="Nos produits populaires" 
        subtitle="Découvrez les produits préférés de nos clients"
        viewAllLink="/produits-populaires"
        products={featuredProducts}
      />
      <Features />
      <FeaturedProducts 
        title="Le choix d'Irène" 
        subtitle="Les produits recommandés par notre pharmacienne"
        viewAllLink="/choix-irene"
        products={ireneChoices}
      />
      <TeamSection />
      <FeaturedProducts 
        title="Promotions" 
        subtitle="Profitez de nos offres spéciales du moment"
        viewAllLink="/promotions"
        products={promotionProducts}
      />
      <AdviceSection />
      <NewsletterBanner />
    </Layout>
  );
}
