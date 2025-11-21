
import { Link } from "react-router-dom";

interface Category {
  id: number;
  name: string;
  image: string;
  link: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Saisonnier",
    image: "https://images.unsplash.com/photo-1611082144608-94d5f8661518?q=80&w=400&auto=format&fit=crop",
    link: "/categories/saisonnier",
    count: 43
  },
  {
    id: 2,
    name: "Beauté",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop",
    link: "/categories/beaute",
    count: 87
  },
  {
    id: 3,
    name: "Nutrition",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&auto=format&fit=crop",
    link: "/categories/nutrition",
    count: 64
  },
  {
    id: 4,
    name: "Bébé",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=400&auto=format&fit=crop",
    link: "/categories/bebe",
    count: 39
  },
  {
    id: 5,
    name: "Immunité",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=400&auto=format&fit=crop",
    link: "/categories/immunite",
    count: 51
  },
  {
    id: 6,
    name: "Articulations",
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=400&auto=format&fit=crop",
    link: "/categories/articulations",
    count: 28
  }
];

export function CategoryPreview() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Explorez nos univers santé
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.link}
              className="group relative overflow-hidden rounded-lg flex flex-col items-center text-center hover:shadow-md transition-all duration-300"
            >
              <div className="rounded-lg overflow-hidden w-full aspect-square relative">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>
              <div className="absolute bottom-0 w-full p-4">
                <h3 className="text-lg font-medium text-white">{category.name}</h3>
                <p className="text-sm text-white/80">{category.count} produits</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
