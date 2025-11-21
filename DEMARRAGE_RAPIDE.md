# ⚡ Démarrage Rapide - 5 minutes

Guide ultra-rapide pour lancer le projet.

## 🎯 Ce dont vous avez besoin

- [ ] Node.js 18+ installé
- [ ] Un compte Supabase (gratuit)
- [ ] 5 minutes de votre temps

## 🚀 Étapes

### 1️⃣ Installer les dépendances (1 min)

```bash
npm install
```

### 2️⃣ Créer un projet Supabase (2 min)

1. Allez sur https://supabase.com
2. Créez un compte
3. Cliquez sur "New Project"
4. Remplissez :
   - Name: `pharmacie-maurin`
   - Password: (choisissez un mot de passe)
   - Region: `Europe West`
5. Cliquez sur "Create new project"
6. Attendez 1-2 minutes

### 3️⃣ Configurer la base de données (1 min)

1. Dans Supabase, allez dans **SQL Editor**
2. Cliquez sur "+ New query"
3. Copiez tout le contenu de `supabase-schema.sql`
4. Collez et cliquez sur "Run"
5. Répétez avec `supabase-seed-data.sql`

### 4️⃣ Créer le bucket de stockage (30 sec)

1. Allez dans **Storage**
2. Cliquez sur "Create a new bucket"
3. Name: `pharmacy-images`
4. ✅ Cochez "Public bucket"
5. Create bucket

### 5️⃣ Récupérer vos clés (30 sec)

1. Allez dans **Settings** > **API**
2. Copiez :
   - `Project URL`
   - `anon public key`

### 6️⃣ Configurer le projet (30 sec)

```bash
# Copier le fichier d'exemple
cp .env.example .env.local

# Éditer .env.local avec vos clés
# Remplacez :
# - your-project-url.supabase.co par votre URL
# - your-anon-key-here par votre clé
```

### 7️⃣ Lancer ! (10 sec)

```bash
npm run dev
```

Ouvrez http://localhost:5173 🎉

## ✅ Vérification

Vous devriez voir :
- ✅ Un carousel avec 3 slides
- ✅ Des produits affichés
- ✅ Des images qui chargent
- ✅ Pas d'erreurs dans la console (F12)

## 🐛 Problème ?

### Erreur "Missing Supabase environment variables"
➡️ Vérifiez que `.env.local` existe et contient vos clés

### Les produits ne s'affichent pas
➡️ Vérifiez que vous avez bien exécuté les 2 fichiers SQL

### Les images ne chargent pas
➡️ Vérifiez que le bucket `pharmacy-images` est PUBLIC

## 📚 Pour aller plus loin

- `GUIDE_CONFIGURATION_SUPABASE.md` - Guide détaillé
- `GUIDE_DEPLOIEMENT_VERCEL.md` - Mettre en ligne

## 🎊 C'est tout !

Votre site de pharmacie est maintenant fonctionnel !

**Prochaines étapes :**
1. Personnalisez les produits dans Supabase
2. Uploadez vos propres images
3. Modifiez les textes du site
4. Déployez sur Vercel

Bon développement ! 💊
