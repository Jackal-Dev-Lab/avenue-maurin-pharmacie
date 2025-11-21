# 🏥 Pharmacie Maurin - Site E-commerce avec Supabase

Site web de pharmacie en ligne moderne avec gestion dynamique des produits et images via Supabase, prêt pour le déploiement sur Vercel.

## ✨ Caractéristiques

- ✅ **Gestion dynamique des produits** - Ajoutez, modifiez et supprimez des produits depuis Supabase
- ✅ **Images configurables** - Toutes les images (produits, slides, logos) gérées en base de données
- ✅ **Carousel dynamique** - Slides de la page d'accueil modifiables sans code
- ✅ **Catégories flexibles** - Système de catégories hiérarchique
- ✅ **Articles de conseils** - Blog intégré avec gestion d'articles
- ✅ **Équipe** - Présentation des membres de l'équipe
- ✅ **SEO optimisé** - Meta tags et slugs configurables
- ✅ **Performance** - React Query pour le cache et les requêtes optimisées
- ✅ **Responsive** - Design adaptatif pour mobile, tablette et desktop
- ✅ **Modern UI** - Interface utilisateur avec Shadcn/ui et Tailwind CSS
- ✅ **Déploiement Vercel** - Configuration optimisée pour Vercel

## 🚀 Démarrage rapide

### Option 1 : Installation locale

#### 1. Installer les dépendances

```bash
npm install
```

#### 2. Configuration Supabase

Suivez le guide complet dans `GUIDE_CONFIGURATION_SUPABASE.md`

En résumé :
1. Créez un compte sur https://supabase.com
2. Créez un nouveau projet
3. Exécutez le fichier `supabase-schema.sql` dans le SQL Editor
4. Exécutez le fichier `supabase-seed-data.sql` pour les données de test
5. Créez un bucket `pharmacy-images` dans Storage (public)

#### 3. Variables d'environnement

```bash
cp .env.example .env.local
```

Puis modifiez `.env.local` :

```env
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-cle-publique
VITE_SUPABASE_STORAGE_BUCKET=pharmacy-images
```

#### 4. Lancer le projet

```bash
npm run dev
```

Le site sera disponible sur http://localhost:5173

### Option 2 : Déploiement sur Vercel

Voir le guide complet : `GUIDE_DEPLOIEMENT_VERCEL.md`

## 🛠️ Technologies utilisées

- React 18 + TypeScript
- Vite
- Supabase (Backend as a Service)
- React Query
- Tailwind CSS + Shadcn/ui
- React Router
- Vercel (déploiement)

## 📚 Documentation

- `GUIDE_CONFIGURATION_SUPABASE.md` - Configuration de la base de données
- `GUIDE_DEPLOIEMENT_VERCEL.md` - Déploiement sur Vercel
- `supabase-schema.sql` - Schéma de la base de données
- `supabase-seed-data.sql` - Données de test

## 🎨 Utilisation

### Afficher des produits

```tsx
import { ProductListSupabase } from '@/components/product/product-list-supabase';

<ProductListSupabase featured={true} limit={4} />
```

### Utiliser les hooks

```tsx
import { useProducts } from '@/hooks/use-supabase';

const { data: products, isLoading } = useProducts({ limit: 10 });
```

## 📄 Licence

MIT

---

**Développé avec ❤️ pour Pharmacie Maurin**
