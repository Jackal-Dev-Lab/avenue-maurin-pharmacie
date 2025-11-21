
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: number;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Comment renforcer son immunité naturellement ?",
    excerpt: "Découvrez les astuces de nos pharmaciens pour stimuler et renforcer vos défenses immunitaires grâce à des remèdes naturels efficaces.",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=500&auto=format&fit=crop",
    date: "20 Mars 2025",
    readTime: 5,
    slug: "renforcer-immunite-naturellement"
  },
  {
    id: 2,
    title: "Les essentiels beauté du printemps",
    excerpt: "Irène vous présente sa sélection de produits de soins et de beauté pour préparer votre peau et votre corps à l'arrivée des beaux jours.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=500&auto=format&fit=crop",
    date: "15 Mars 2025",
    readTime: 7,
    slug: "essentiels-beaute-printemps"
  },
  {
    id: 3,
    title: "Allergies saisonnières : comment les prévenir et les soulager",
    excerpt: "Les allergies saisonnières peuvent être très contraignantes. Suivez nos conseils pour les anticiper et améliorer votre confort au quotidien.",
    image: "https://images.unsplash.com/photo-1527195575508-5b138020c1c5?q=80&w=500&auto=format&fit=crop",
    date: "12 Mars 2025",
    readTime: 6,
    slug: "allergies-saisonnieres-prevention"
  },
];

export function AdviceSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Le coin des conseils</h2>
            <p className="text-muted-foreground mt-2">Astuces, informations et recommandations de nos experts santé</p>
          </div>
          <Button variant="outline" asChild className="mt-4 md:mt-0">
            <Link to="/conseils">Tous les articles</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <Link to={`/conseils/${post.slug}`} className="block">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <CalendarDays size={16} className="mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock size={16} className="mr-1" />
                  <span>{post.readTime} min de lecture</span>
                </div>
                
                <Link to={`/conseils/${post.slug}`} className="block group">
                  <h3 className="text-xl font-medium mb-2 group-hover:text-pharmacy-DEFAULT transition-colors">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                
                <Button variant="ghost" className="text-pharmacy-DEFAULT hover:text-pharmacy-dark hover:bg-pharmacy-light p-0" asChild>
                  <Link to={`/conseils/${post.slug}`} className="flex items-center">
                    <span>Lire l'article</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
