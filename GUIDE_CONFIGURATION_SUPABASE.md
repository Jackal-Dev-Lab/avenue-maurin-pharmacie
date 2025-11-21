# 🏥 Guide de Configuration Supabase - Pharmacie Maurin

Ce guide vous explique comment configurer Supabase pour votre site de pharmacie en ligne.

## 📋 Table des matières

1. [Prérequis](#prérequis)
2. [Configuration Supabase](#configuration-supabase)
3. [Configuration du projet](#configuration-du-projet)
4. [Structure de la base de données](#structure-de-la-base-de-données)
5. [Utilisation](#utilisation)
6. [Gestion des images](#gestion-des-images)
7. [FAQ](#faq)

---

## 🎯 Prérequis

- Un compte Supabase (gratuit) : https://supabase.com
- Node.js version 18+ installé
- Le code source du projet

---

## ⚙️ Configuration Supabase

### Étape 1 : Créer un projet Supabase

1. Connectez-vous à https://supabase.com
2. Cliquez sur "New Project"
3. Remplissez les informations :
   - **Name** : pharmacie-maurin (ou votre nom)
   - **Database Password** : Choisissez un mot de passe fort
   - **Region** : Choisissez la région la plus proche (ex: Europe West)
4. Cliquez sur "Create new project"
5. Attendez 1-2 minutes que le projet soit créé

### Étape 2 : Créer le schéma de base de données

1. Dans votre projet Supabase, allez dans **SQL Editor** (menu de gauche)
2. Cliquez sur "+ New query"
3. Copiez tout le contenu du fichier `supabase-schema.sql`
4. Collez-le dans l'éditeur
5. Cliquez sur "Run" (ou Ctrl+Enter)
6. Attendez que toutes les tables soient créées

### Étape 3 : Ajouter les données de test

1. Toujours dans le **SQL Editor**, créez une nouvelle requête
2. Copiez tout le contenu du fichier `supabase-seed-data.sql`
3. Collez-le dans l'éditeur
4. Cliquez sur "Run"
5. Vérifiez le message de confirmation

### Étape 4 : Configurer le stockage d'images

1. Allez dans **Storage** (menu de gauche)
2. Cliquez sur "Create a new bucket"
3. Nom du bucket : `pharmacy-images`
4. **Public bucket** : OUI (cochez la case)
5. Cliquez sur "Create bucket"

### Étape 5 : Récupérer vos clés API

1. Allez dans **Settings** > **API** (menu de gauche)
2. Vous verrez deux informations importantes :
   - **Project URL** : commence par `https://xxx.supabase.co`
   - **anon public key** : une longue chaîne de caractères

**⚠️ IMPORTANT : Gardez ces informations en lieu sûr !**

---

## 🔧 Configuration du projet

### Étape 1 : Installer les dépendances

```bash
npm install @supabase/supabase-js
# ou
yarn add @supabase/supabase-js
```

### Étape 2 : Configurer les variables d'environnement

1. Copiez le fichier `.env.example` en `.env.local` :
   ```bash
   cp .env.example .env.local
   ```

2. Modifiez `.env.local` avec vos informations :
   ```env
   VITE_SUPABASE_URL=https://votre-projet.supabase.co
   VITE_SUPABASE_ANON_KEY=votre-cle-anon-publique
   VITE_SUPABASE_STORAGE_BUCKET=pharmacy-images
   ```

### Étape 3 : Mettre à jour le code

Remplacez les anciens composants par les nouveaux :

**Dans `src/components/home/hero-slider.tsx`** :
```tsx
// Remplacer par :
export { HeroSlider } from './hero-slider-supabase';
```

**Dans `src/components/product/product-card.tsx`** :
```tsx
// Remplacer par :
export { ProductCardSupabase as ProductCard } from './product-card-supabase';
```

**Créer `src/components/product/ProductList.tsx`** :
```tsx
export { ProductListSupabase as ProductList } from './product-list-supabase';
```

### Étape 4 : Tester

```bash
npm run dev
```

Visitez http://localhost:5173 et vérifiez que :
- ✅ Les slides du carousel s'affichent
- ✅ Les produits s'affichent
- ✅ Les images se chargent

---

## 🗄️ Structure de la base de données

### Tables principales

#### `products` - Produits
- Informations produit (nom, prix, description)
- Stock et disponibilité
- Tags (nouveau, coup de cœur, etc.)
- SEO (slug, meta)

#### `product_images` - Images des produits
- Plusieurs images par produit
- Ordre d'affichage
- Image principale

#### `categories` - Catégories
- Hiérarchie (parent/enfant)
- Image et icône

#### `hero_slides` - Slides du carousel
- Titre, description
- Image de fond
- Bouton d'action
- Thème (clair/sombre)

#### `site_images` - Images du site
- Logo, bannières, icônes
- Identifiées par une clé unique

#### `team_members` - Équipe
- Noms, rôles, photos
- Contact

#### `advice_articles` - Articles de conseils
- Contenu riche
- Auteur, catégorie
- Publication

#### `site_settings` - Paramètres du site
- Configuration générale
- Contacts, réseaux sociaux

---

## 📱 Utilisation

### Afficher des produits

```tsx
import { ProductListSupabase } from '@/components/product/product-list-supabase';

// Tous les produits
<ProductListSupabase />

// Produits d'une catégorie
<ProductListSupabase categoryId="uuid-de-la-categorie" />

// Produits mis en avant
<ProductListSupabase featured={true} limit={4} />

// Nouveaux produits
<ProductListSupabase isNew={true} limit={8} />
```

### Afficher le carousel

```tsx
import { HeroSlider } from '@/components/home/hero-slider-supabase';

<HeroSlider />
```

### Utiliser les hooks personnalisés

```tsx
import { useProducts, useCategories, useSiteSettings } from '@/hooks/use-supabase';

function MaPage() {
  const { data: products, isLoading } = useProducts({ limit: 10 });
  const { data: categories } = useCategories();
  const { data: settings } = useSiteSettings();

  if (isLoading) return <div>Chargement...</div>;

  return (
    <div>
      {products?.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

---

## 🖼️ Gestion des images

### Option 1 : Utiliser Supabase Storage (Recommandé)

1. **Uploader une image** :
   - Allez dans Storage > pharmacy-images
   - Cliquez sur "Upload file"
   - Sélectionnez votre image
   - Copiez l'URL publique

2. **Utiliser l'URL dans la base de données** :
   ```sql
   UPDATE products 
   SET image_url = 'https://xxx.supabase.co/storage/v1/object/public/pharmacy-images/mon-image.jpg'
   WHERE slug = 'mon-produit';
   ```

### Option 2 : Utiliser des URLs externes

Vous pouvez aussi utiliser :
- Unsplash : `https://images.unsplash.com/photo-xxx`
- Cloudinary
- Votre propre CDN

### Organiser les images

Structure recommandée dans Storage :
```
pharmacy-images/
├── products/
│   ├── pharmacie/
│   ├── beaute/
│   └── nutrition/
├── hero/
│   └── slides/
├── team/
└── articles/
```

---

## 🎨 Personnalisation

### Ajouter un nouveau produit

Deux méthodes :

**1. Via l'interface Supabase** (recommandé pour débuter) :
1. Allez dans **Table Editor** > **products**
2. Cliquez sur "+ Insert row"
3. Remplissez les champs
4. Cliquez sur "Save"

**2. Via SQL** :
```sql
-- Insérer un produit
INSERT INTO products (name, slug, brand, price, category_id, stock_quantity)
VALUES (
  'Mon nouveau produit',
  'mon-nouveau-produit',
  'Ma Marque',
  15.90,
  (SELECT id FROM categories WHERE slug = 'pharmacie'),
  100
);

-- Ajouter son image
INSERT INTO product_images (product_id, image_url, is_primary)
VALUES (
  (SELECT id FROM products WHERE slug = 'mon-nouveau-produit'),
  'https://mon-url-image.jpg',
  true
);
```

### Modifier un slide du carousel

```sql
UPDATE hero_slides 
SET 
  title = 'Mon nouveau titre',
  image_url = 'https://nouvelle-image.jpg'
WHERE id = 'uuid-du-slide';
```

### Ajouter un paramètre du site

```sql
INSERT INTO site_settings (key, value, type, description)
VALUES (
  'promo_banner_text',
  'Profitez de -20% sur tous les produits beauté !',
  'text',
  'Texte de la bannière promotionnelle'
);
```

---

## 🔒 Sécurité

### Row Level Security (RLS)

Le schéma inclut des politiques RLS :
- ✅ Lecture publique des données actives
- ❌ Écriture réservée aux administrateurs

### Pour ajouter un administrateur

1. Allez dans **Authentication** > **Users**
2. Créez un utilisateur
3. Modifiez les politiques RLS pour autoriser cet utilisateur

---

## 🐛 Dépannage

### Les produits ne s'affichent pas

1. Vérifiez vos variables d'environnement dans `.env.local`
2. Vérifiez la console du navigateur (F12) pour les erreurs
3. Vérifiez que les produits sont bien marqués comme `is_active = true`

### Les images ne se chargent pas

1. Vérifiez que le bucket `pharmacy-images` est public
2. Vérifiez les URLs dans la base de données
3. Testez l'URL dans un navigateur

### Erreurs de connexion Supabase

1. Vérifiez que votre projet Supabase est actif
2. Vérifiez la `SUPABASE_URL` et `SUPABASE_ANON_KEY`
3. Rechargez la page

---

## 📚 Ressources

- [Documentation Supabase](https://supabase.com/docs)
- [Documentation React Query](https://tanstack.com/query/latest)
- [Guide Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

---

## 🆘 Support

Pour toute question :
1. Consultez la FAQ ci-dessous
2. Vérifiez les logs Supabase (Logs > Database)
3. Consultez la documentation

---

## ❓ FAQ

**Q : Combien de produits puis-je ajouter ?**
R : Le plan gratuit Supabase permet jusqu'à 500 MB de base de données, soit environ 50 000 produits.

**Q : Les images sont-elles sauvegardées dans Supabase ?**
R : Vous pouvez stocker les images dans Supabase Storage (1 GB gratuit) ou utiliser des URLs externes.

**Q : Puis-je modifier la structure de la base de données ?**
R : Oui ! Utilisez le SQL Editor pour ajouter/modifier des colonnes.

**Q : Comment sauvegarder ma base de données ?**
R : Allez dans Database > Backups pour télécharger une sauvegarde.

**Q : Le site fonctionne-t-il hors ligne ?**
R : Non, une connexion Internet est nécessaire pour charger les données depuis Supabase.

---

## 🎉 Félicitations !

Votre site est maintenant connecté à Supabase. Vous pouvez :
- ✅ Gérer tous les produits depuis la base de données
- ✅ Modifier les images sans toucher au code
- ✅ Ajouter du contenu facilement
- ✅ Faire évoluer le site selon vos besoins

**Bon courage avec votre pharmacie en ligne ! 💊**
