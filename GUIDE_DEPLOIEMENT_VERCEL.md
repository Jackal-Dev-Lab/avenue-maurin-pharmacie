# 🚀 Guide de Déploiement sur Vercel

Ce guide vous explique comment déployer votre site de pharmacie sur Vercel.

## 📋 Prérequis

- Compte Vercel (gratuit) : https://vercel.com
- Compte GitHub/GitLab/Bitbucket
- Projet Supabase configuré (voir GUIDE_CONFIGURATION_SUPABASE.md)
- Code source sur un dépôt Git

---

## 🎯 Méthode 1 : Déploiement via Git (Recommandé)

### Étape 1 : Pousser le code sur Git

```bash
# Initialiser Git si ce n'est pas déjà fait
git init

# Ajouter tous les fichiers
git add .

# Commit
git commit -m "Initial commit - Pharmacie Maurin"

# Ajouter le remote (GitHub/GitLab/Bitbucket)
git remote add origin https://github.com/votre-username/pharmacie-maurin.git

# Pousser le code
git push -u origin main
```

### Étape 2 : Connecter à Vercel

1. Allez sur https://vercel.com
2. Cliquez sur "Add New" > "Project"
3. Importez votre dépôt Git
4. Vercel détecte automatiquement Vite

### Étape 3 : Configurer les variables d'environnement

Dans les paramètres du projet Vercel :
1. Allez dans "Settings" > "Environment Variables"
2. Ajoutez les variables suivantes :

```
VITE_SUPABASE_URL = https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY = votre-cle-anon-publique
VITE_SUPABASE_STORAGE_BUCKET = pharmacy-images
```

### Étape 4 : Déployer

1. Cliquez sur "Deploy"
2. Attendez la fin du build (1-2 minutes)
3. Votre site est en ligne ! 🎉

---

## 🎯 Méthode 2 : Déploiement via CLI Vercel

### Étape 1 : Installer Vercel CLI

```bash
npm install -g vercel
```

### Étape 2 : Login

```bash
vercel login
```

### Étape 3 : Déployer

```bash
# Première fois
vercel

# Suivre les instructions
# Répondre aux questions :
# - Set up and deploy? Y
# - Which scope? Votre compte
# - Link to existing project? N
# - Project name? pharmacie-maurin
# - Directory? ./
# - Override settings? N
```

### Étape 4 : Ajouter les variables d'environnement

```bash
vercel env add VITE_SUPABASE_URL
# Entrez votre URL Supabase

vercel env add VITE_SUPABASE_ANON_KEY
# Entrez votre clé ANON

vercel env add VITE_SUPABASE_STORAGE_BUCKET
# Entrez: pharmacy-images
```

### Étape 5 : Redéployer avec les variables

```bash
vercel --prod
```

---

## ⚙️ Configuration automatique

Le fichier `vercel.json` est déjà configuré pour :
- ✅ Build automatique avec Vite
- ✅ Redirections SPA (Single Page App)
- ✅ Variables d'environnement
- ✅ Output dans le dossier `dist`

---

## 🔧 Configuration manuelle (si nécessaire)

Si Vercel ne détecte pas automatiquement :

**Build Command:**
```
npm run build
```

**Output Directory:**
```
dist
```

**Install Command:**
```
npm install
```

**Framework Preset:**
```
Vite
```

---

## 🌍 Domaine personnalisé

### Ajouter un domaine

1. Allez dans "Settings" > "Domains"
2. Cliquez sur "Add"
3. Entrez votre domaine
4. Suivez les instructions pour configurer le DNS

### Exemple de configuration DNS

Pour `pharmacie-maurin.fr` :

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 📊 Monitoring et Analytics

### Activer Vercel Analytics

1. Allez dans votre projet Vercel
2. Onglet "Analytics"
3. Cliquez sur "Enable"
4. C'est automatique ! Pas de code à ajouter

### Activer Speed Insights

1. Onglet "Speed Insights"
2. Cliquez sur "Enable"
3. Voir les performances en temps réel

---

## 🔄 Déploiement continu

### Automatique via Git

Chaque fois que vous poussez du code sur Git :
- ✅ Vercel build automatiquement
- ✅ Tests de build
- ✅ Déploiement automatique
- ✅ URL de preview pour chaque branche

### Branches

- **main/master** → Production (pharmacie-maurin.vercel.app)
- **dev** → Preview (pharmacie-maurin-dev.vercel.app)
- **feat/xxx** → Preview (pharmacie-maurin-xxx.vercel.app)

---

## 🐛 Résolution de problèmes

### Erreur : "Missing environment variables"

**Solution :**
1. Vérifiez que les variables sont bien configurées dans Vercel
2. Redéployez : `vercel --prod`

### Erreur : "Page not found" sur les routes

**Solution :**
Le fichier `vercel.json` doit contenir :
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Build échoue

**Solution :**
1. Vérifiez les logs de build dans Vercel
2. Testez localement : `npm run build`
3. Vérifiez que toutes les dépendances sont dans package.json

### Images ne chargent pas

**Solution :**
1. Vérifiez que Supabase Storage est configuré en PUBLIC
2. Vérifiez les URLs dans la base de données
3. Testez une URL manuellement dans le navigateur

---

## 🔒 Sécurité

### Variables d'environnement

- ✅ JAMAIS committer `.env` ou `.env.local`
- ✅ Utiliser les variables d'environnement Vercel
- ✅ La clé ANON Supabase est safe pour le frontend

### HTTPS

- ✅ Automatiquement activé par Vercel
- ✅ Certificat SSL gratuit
- ✅ Renouvellement automatique

---

## 💰 Coûts

### Plan Hobby (Gratuit)

- ✅ 100 GB de bande passante / mois
- ✅ Déploiements illimités
- ✅ SSL automatique
- ✅ 6000 minutes de build / mois
- ✅ Analytics de base

**Parfait pour un site de pharmacie !**

### Limites à surveiller

- Bande passante : ~10 000 visiteurs / mois
- Builds : ~200 déploiements / mois

---

## 📈 Optimisations

### Performance

1. **Images** : Utilisez Supabase Storage avec CDN
2. **Cache** : Vercel met en cache automatiquement
3. **Compression** : Gzip/Brotli automatique

### SEO

1. Ajoutez un `robots.txt` (déjà présent)
2. Configurez les meta tags dans chaque page
3. Activez sitemap.xml

---

## 🎯 Workflow recommandé

```
1. Développement local
   ↓
2. Git commit & push
   ↓
3. Vercel build automatique
   ↓
4. Preview deployment
   ↓
5. Tests sur preview
   ↓
6. Merge vers main
   ↓
7. Production automatique
```

---

## 📱 Preview Deployments

Chaque PR/branche a sa propre URL :
```
https://pharmacie-maurin-git-dev-username.vercel.app
https://pharmacie-maurin-git-feat-nouveau-produit.vercel.app
```

Parfait pour tester avant de merger !

---

## 🔗 Liens utiles

- [Documentation Vercel](https://vercel.com/docs)
- [Vercel CLI](https://vercel.com/docs/cli)
- [Variables d'environnement](https://vercel.com/docs/concepts/projects/environment-variables)
- [Domaines personnalisés](https://vercel.com/docs/concepts/projects/domains)

---

## ✅ Checklist de déploiement

- [ ] Code sur Git
- [ ] Supabase configuré
- [ ] Variables d'environnement sur Vercel
- [ ] Build réussi
- [ ] Site accessible
- [ ] Images chargent
- [ ] Produits s'affichent
- [ ] Navigation fonctionne
- [ ] Mobile testé
- [ ] Analytics activé
- [ ] Domaine configuré (optionnel)

---

## 🎉 Félicitations !

Votre site est maintenant en ligne sur Vercel !

**URL par défaut :** https://votre-projet.vercel.app

Pour toute question, consultez la [documentation Vercel](https://vercel.com/docs) ou les logs de build.

**Bon déploiement ! 🚀**
