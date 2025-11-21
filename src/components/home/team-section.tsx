
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  specialties: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Irène Watfa",
    role: "Pharmacienne titulaire",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=300&auto=format&fit=crop",
    specialties: ["Nutrition", "Phytothérapie", "Conseils beauté"]
  },
  {
    id: 2,
    name: "Elie Watfa",
    role: "Pharmacien",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=300&auto=format&fit=crop",
    specialties: ["Matériel médical", "Orthopédie", "Suivi patient"]
  },
  {
    id: 3,
    name: "Sophie Legrand",
    role: "Préparatrice",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    specialties: ["Homéopathie", "Aromathérapie", "Conseils maman-bébé"]
  }
];

export function TeamSection() {
  return (
    <section className="py-16 bg-pharmacy-light">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Notre équipe vous conseille</h2>
          <p className="text-muted-foreground">
            Notre équipe de professionnels de santé est à votre écoute pour vous accompagner 
            et vous conseiller au quotidien. Nous mettons notre expertise à votre service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-pharmacy-DEFAULT mb-3">{member.role}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Spécialités :</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className="bg-pharmacy-light text-pharmacy-dark text-sm px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-2" asChild>
                  <Link to="/notre-equipe">En savoir plus</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-pharmacy-DEFAULT hover:bg-pharmacy-dark">
            <Link to="/contact">Prendre conseil</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
