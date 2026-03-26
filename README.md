# 🌌 Portfolio Interactif & CV Numérique - BARRY Mamadou Bailo

Bienvenue dans le dépôt officiel de mon portfolio personnel. Ce projet est une vitrine numérique haut de gamme conçue pour présenter mon parcours, mes compétences techniques et mes projets en tant qu'étudiant en BUT Informatique.

![Aperçu du Portfolio](https://portfolio-1-gamma-azure.vercel.app/images/projects/sae/portfolio.png)

## 🚀 Liens Utiles
- **Site Live** : [portfolio-1-gamma-azure.vercel.app](https://portfolio-1-gamma-azure.vercel.app)
- **GitHub** : [mounabarry620-star/Portfolio-1](https://github.com/mounabarry620-star/Portfolio-1)

---

## ✨ Fonctionnalités Clés

### 1. Interface HUD Immersive
Une interface inspirée du style "Heads-Up Display" (HUD) avec une esthétique premium, des effets de flou (Apple-style blur) et des animations fluides.

### 2. Assistant IA Intégré (ChatBot)
Un chatbot intelligent capable de répondre aux questions sur mon parcours, mes formations (BUT Info) et mes projets techniques (SAE).

### 3. CV Numériques Multilingues
Deux versions professionnelles (Français & Anglais) intégrées directement au site, optimisées pour la lecture et l'impression PDF.

### 4. Visualisation de Projets 3D
Utilisation de **Three.js** et **React Three Fiber** pour des animations 3D et des effets de particules immersifs.

### 5. Design Responsif "Pixel Perfect"
Optimisation complète pour tous les supports : Mobile, Tablette et Desktop.

---

## 🏗️ Architecture du Projet

Le projet est structuré selon une architecture moderne séparant le client et le serveur :

```
Portfolio/
├── frontend/             # Application Next.js (Client)
│   ├── src/
│   │   ├── app/         # App Router (Pages & Routing)
│   │   ├── components/  # Composants UI (Framer Motion, Lucide)
│   │   └── canvas/      # Scènes 3D (Three.js / R3F)
│   ├── public/          # Assets (Images, Logos, Vidéos)
│   └── next.config.ts   # Configuration Next.js
├── backend/              # Serveur NestJS (API & Contact)
└── README.md             # Documentation principale
```

---

## 🛠️ Stack Technique

- **Frontend** : [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
- **Style** : [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
- **3D** : [Three.js](https://threejs.org/), [@react-three/fiber](https://github.com/pmndrs/react-three-fiber)
- **Backend** : [NestJS](https://nestjs.com/)
- **Déploiement** : [Vercel](https://vercel.com/)

---

## 📥 Installation Locale

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/mounabarry620-star/Portfolio-1.git
   cd Portfolio-1/frontend
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## 👨‍💻 Créé par BARRY Mamadou Bailo
Étudiant en 1ère année de BUT Informatique à l'IUT d'Arles.
- **LinkedIn** : [Mamadou Baillo Barry](https://www.linkedin.com/in/mamadou-baillo-barry/)
- **Contact** : [mounabarry620@gmail.com](mailto:mounabarry620@gmail.com)

---
*Ce projet est sous licence MIT.*
