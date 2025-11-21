import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Database } from '@/lib/database.types';

type Product = Database['public']['Tables']['products']['Row'];
type ProductWithImages = Product & {
  images: Database['public']['Tables']['product_images']['Row'][];
  category?: Database['public']['Tables']['categories']['Row'];
};
type HeroSlide = Database['public']['Tables']['hero_slides']['Row'];
type Category = Database['public']['Tables']['categories']['Row'];
type SiteImage = Database['public']['Tables']['site_images']['Row'];
type TeamMember = Database['public']['Tables']['team_members']['Row'];
type AdviceArticle = Database['public']['Tables']['advice_articles']['Row'];

// ============================================
// PRODUCTS
// ============================================

export function useProducts(options?: {
  categoryId?: string;
  featured?: boolean;
  isNew?: boolean;
  limit?: number;
}) {
  return useQuery({
    queryKey: ['products', options],
    queryFn: async () => {
      let query = supabase
        .from('products')
        .select(`
          *,
          images:product_images(*),
          category:categories(*)
        `)
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (options?.categoryId) {
        query = query.eq('category_id', options.categoryId);
      }
      if (options?.featured) {
        query = query.eq('is_featured', options.featured);
      }
      if (options?.isNew) {
        query = query.eq('is_new', options.isNew);
      }
      if (options?.limit) {
        query = query.limit(options.limit);
      }

      const { data, error } = await query;
      
      if (error) throw error;
      
      // Transformer les données pour correspondre au format attendu
      return (data as ProductWithImages[]).map(product => ({
        ...product,
        images: product.images
          .sort((a, b) => a.display_order - b.display_order)
          .map(img => img.image_url)
      }));
    },
  });
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          images:product_images(*),
          category:categories(*)
        `)
        .eq('slug', slug)
        .eq('is_active', true)
        .single();

      if (error) throw error;

      // Transformer les données
      const product = data as ProductWithImages;
      return {
        ...product,
        images: product.images
          .sort((a, b) => a.display_order - b.display_order)
          .map(img => img.image_url)
      };
    },
  });
}

// ============================================
// CATEGORIES
// ============================================

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      return data as Category[];
    },
  });
}

export function useCategory(slug: string) {
  return useQuery({
    queryKey: ['category', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('slug', slug)
        .eq('is_active', true)
        .single();

      if (error) throw error;
      return data as Category;
    },
  });
}

// ============================================
// HERO SLIDES
// ============================================

export function useHeroSlides() {
  return useQuery({
    queryKey: ['hero-slides'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('hero_slides')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      
      return (data as HeroSlide[]).map(slide => ({
        id: slide.id,
        image: slide.image_url,
        title: slide.title,
        description: slide.description || '',
        buttonText: slide.button_text || '',
        buttonLink: slide.button_link || '',
        theme: slide.theme as 'light' | 'dark'
      }));
    },
  });
}

// ============================================
// SITE IMAGES
// ============================================

export function useSiteImages() {
  return useQuery({
    queryKey: ['site-images'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_images')
        .select('*')
        .eq('is_active', true);

      if (error) throw error;
      return data as SiteImage[];
    },
  });
}

export function useSiteImage(key: string) {
  return useQuery({
    queryKey: ['site-image', key],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_images')
        .select('*')
        .eq('key', key)
        .eq('is_active', true)
        .single();

      if (error) throw error;
      return data as SiteImage;
    },
  });
}

// ============================================
// TEAM MEMBERS
// ============================================

export function useTeamMembers() {
  return useQuery({
    queryKey: ['team-members'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      return data as TeamMember[];
    },
  });
}

// ============================================
// ADVICE ARTICLES
// ============================================

export function useAdviceArticles(options?: {
  limit?: number;
  category?: string;
}) {
  return useQuery({
    queryKey: ['advice-articles', options],
    queryFn: async () => {
      let query = supabase
        .from('advice_articles')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (options?.category) {
        query = query.eq('category', options.category);
      }
      if (options?.limit) {
        query = query.limit(options.limit);
      }

      const { data, error } = await query;
      
      if (error) throw error;
      return data as AdviceArticle[];
    },
  });
}

export function useAdviceArticle(slug: string) {
  return useQuery({
    queryKey: ['advice-article', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('advice_articles')
        .select(`
          *,
          author:team_members(*)
        `)
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error) throw error;
      
      // Incrémenter le compteur de vues
      await supabase
        .from('advice_articles')
        .update({ views_count: (data.views_count || 0) + 1 })
        .eq('id', data.id);

      return data as AdviceArticle & { 
        author: TeamMember | null 
      };
    },
  });
}

// ============================================
// SITE SETTINGS
// ============================================

export function useSiteSettings() {
  return useQuery({
    queryKey: ['site-settings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*');

      if (error) throw error;
      
      // Convertir en objet key-value pour faciliter l'utilisation
      return data.reduce((acc, setting) => {
        acc[setting.key] = setting.value;
        return acc;
      }, {} as Record<string, string | null>);
    },
  });
}

export function useSiteSetting(key: string) {
  return useQuery({
    queryKey: ['site-setting', key],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .eq('key', key)
        .single();

      if (error) throw error;
      return data.value;
    },
  });
}

// ============================================
// MUTATIONS (pour les opérations d'écriture)
// ============================================

export function useCreateProduct() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (product: Database['public']['Tables']['products']['Insert']) => {
      const { data, error } = await supabase
        .from('products')
        .insert(product)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
}

export function useUpdateProduct() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ 
      id, 
      updates 
    }: { 
      id: string; 
      updates: Database['public']['Tables']['products']['Update'] 
    }) => {
      const { data, error } = await supabase
        .from('products')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
}
