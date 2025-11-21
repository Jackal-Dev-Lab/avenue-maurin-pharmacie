import { useProducts } from "@/hooks/use-supabase";
import { ProductCardSupabase } from "./product-card-supabase";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductListProps {
  categoryId?: string;
  featured?: boolean;
  isNew?: boolean;
  limit?: number;
  size?: "small" | "medium" | "large";
}

export function ProductListSupabase({ 
  categoryId, 
  featured, 
  isNew, 
  limit,
  size = "medium" 
}: ProductListProps) {
  const { data: products, isLoading, error } = useProducts({
    categoryId,
    featured,
    isNew,
    limit
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(limit || 8)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="aspect-square w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Erreur lors du chargement des produits</p>
        <p className="text-sm text-gray-500 mt-2">{error.message}</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Aucun produit disponible pour le moment</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCardSupabase 
          key={product.id} 
          product={product} 
          size={size}
        />
      ))}
    </div>
  );
}
