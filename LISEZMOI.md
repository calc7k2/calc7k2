# Sorare Snatch Calculator — version 100 % gratuite et privée

Rien à payer, aucun compte, aucune clé, aucun serveur : l'application tourne **dans le navigateur de votre appareil**.
Vos joueurs, statistiques et historiques sont enregistrés **sur l'appareil** (stockage IndexedDB du navigateur). Rien n'est envoyé à qui que ce soit.

## Ce qui est gratuit et local
- Calculs, base de joueurs, recherche, corrections, doublons, historique : sur l'appareil.
- Lecture des PDF (Snatch Watch), Excel, CSV : sur l'appareil.
- Lecture des captures d'écran : par reconnaissance de texte (OCR, moteur libre Tesseract) **sur l'appareil**, rapprochée de votre base de joueurs. Aucune IA payante.

## Le seul point qui touche Internet (gratuit, sans compte)
La première fois que vous lisez une capture, un PDF ou un Excel, l'application télécharge une bibliothèque libre
(Tesseract.js, pdf.js, SheetJS) depuis des CDN publics et gratuits. Elle est ensuite gardée en cache sur l'appareil.
Aucune de vos données ne part vers ces sites : ils ne font qu'envoyer le code.
Si vous préférez ne jamais passer par un CDN, importez uniquement des CSV/TXT (aucun téléchargement) et ajoutez les joueurs de la capture à la main.

## Installer l'application

### Option A — sur l'iPhone ET l'ordinateur, gratuit : GitHub Pages
1. Créez un compte GitHub gratuit, puis un dépôt public (par ex. `snatch`).
2. Déposez-y tout le contenu de ce dossier (index.html, sw.js, manifest.webmanifest, icônes…). Il ne contient **aucune donnée personnelle**.
3. Dépôt → Settings → Pages → Branch `main` / dossier root → Save. Votre adresse sera `https://VOTRE-NOM.github.io/snatch/`.
4. Sur l'iPhone : ouvrez l'adresse dans Safari → bouton Partager → « Sur l'écran d'accueil ». Faites de même sur l'ordinateur (ou ajoutez simplement aux favoris).

### Option B — sur l'ordinateur seulement, sans rien héberger
1. Installez Node.js (gratuit), ouvrez un terminal dans ce dossier, tapez `node serve.js`.
2. Ouvrez http://localhost:8080.
(Sur l'iPhone, l'adresse « Depuis l'iPhone » affichée par la commande fonctionne aussi tant que l'ordinateur est allumé sur le même Wi-Fi, mais le mode hors-ligne n'est alors pas disponible.)

## Vos données : à savoir
- Chaque appareil (et chaque adresse) a **sa propre base**. iPhone et ordinateur ne se synchronisent pas tout seuls.
- Pour passer vos données d'un appareil à l'autre, ou les sauvegarder : **Réglages → Exporter la base (fichier)**, puis **Restaurer** sur l'autre appareil. Le fichier reste chez vous (iCloud Drive, clé USB…).
- iPhone : installez l'application sur l'écran d'accueil (étape A.4). Safari peut effacer les données de sites non utilisés pendant des semaines ; une application installée est mieux protégée. Faites quand même une exportation de temps en temps.
- Ne videz pas « les données de sites web » de Safari sans avoir exporté avant.

## Fiabilité de la lecture des captures
- Le texte est lu par OCR puis rapproché des noms de VOTRE base. Un nom clairement reconnu est accepté ; un nom douteux est proposé « à confirmer » (un appui) ; rien n'est inventé.
- Un joueur absent de votre base ne peut pas être reconnu : importez d'abord vos classements.
- Si la dernière ligne de cartes est cachée par le bandeau du bas, l'application le signale : vérifiez qu'il ne manque personne.
- Les statistiques viennent toujours de votre base, jamais de la capture.
