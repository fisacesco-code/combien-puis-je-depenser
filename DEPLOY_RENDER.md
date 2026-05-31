# Deploy sur Render

Ce site est prêt pour un déploiement **Render Static Site**.

## 1. Préparer le dépôt GitHub

Comme `git` n'est pas installé dans cet environnement, le plus simple est :

1. créer un nouveau dépôt GitHub
2. y envoyer le contenu de ce dossier

Fichiers importants à inclure :

- `index.html`
- `styles.css`
- `script.js`
- `site-config.js`
- `render.yaml`

## 2. Garder le mode bêta pour les tests

Dans `site-config.js`, la configuration actuelle permet à ton entourage de tout tester gratuitement :

```js
paymentsEnabled: false,
betaFreeAccess: true,
promoCode: "GRATUIT"
```

Tu peux publier tel quel pour les premiers retours.

## 3. Créer le site sur Render

Selon la doc officielle Render actuelle :

- un site statique se crée via **New > Static Site**
- Render déploie depuis un dépôt GitHub/GitLab/Bitbucket
- chaque site reçoit une URL `onrender.com`

Références :

- [Static Sites](https://render.com/docs/static-sites)
- [Connect GitHub](https://render.com/docs/github)
- [Blueprint YAML Reference](https://render.com/docs/blueprint-spec)

### Option A — la plus simple

1. Ouvre Render
2. Clique sur **New > Static Site**
3. Connecte le dépôt GitHub
4. Laisse Render détecter `render.yaml`
5. Lance le déploiement

### Option B — configuration manuelle

Si Render ne prend pas automatiquement `render.yaml`, mets :

- **Build Command** : `true`
- **Publish Directory** : `.`

## 4. Quand tu voudras activer les paiements

Dans `site-config.js` :

```js
paymentsEnabled: true,
betaFreeAccess: true,
promoCode: "GRATUIT",
paymentLinks: {
  light: "https://...",
  standard: "https://...",
  generous: "https://..."
}
```

Puis plus tard, quand la bêta est finie :

```js
paymentsEnabled: true,
betaFreeAccess: false
```

Le code `GRATUIT` peut rester actif si tu veux continuer à ouvrir l'accès à certaines personnes.
