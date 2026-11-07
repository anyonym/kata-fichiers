import { writeFileSync, readFileSync } from "fs";

// Écriture du fichier bonjour.txt
writeFileSync("bonjour.txt", "Au revoir Ada !");

// Lecture du fichier bonjour.txt
const contenu = readFileSync("bonjour.txt", "utf-8");

// Affichage de contenu
console.log(contenu);

// Tableau d'objets
const courses = ["pain", "lait", "pommes"];

// Transformation en str
const resultat = courses.join("\n");

// Écriture du fichier courses.txt
writeFileSync("courses.txt", resultat);

// Affichage de résultat
console.log(resultat);

// objet javascript
const profil = {
  prenom: "Ada",
  langages: ["HTML", "CSS", "JavaScript"],
  debutante: true,
};

// Écriture du fichier profil.json
writeFileSync("profil.json", JSON.stringify(profil, null, 2));

// Lecture du fichier profil.json
const contenuProfil = readFileSync("profil.json", "utf-8");

// Tranformation en objet javascript
const profilLu = JSON.parse(contenuProfil);

// Affichage prénom
console.log(profilLu.prenom);

// Affichage nombre de langages
console.log(profilLu.langages.length);

//
const taches = [
  { nom: "lire le cours", faite: true },
  { nom: "finir le TP", faite: true },
  { nom: "relire mes notes", faite: false },
];

ecrireBilan("bilan.txt", taches);

function ecrireBilan(chemin, taches) {
  const lignes = taches.map((tache) => {
    const emoji = tache.faite ? "✅" : "❌";
    return `${emoji} ${tache.nom}`;
  });

  const faites = taches.filter((tache) => tache.faite).length;

  const pourcentage = Math.round((faites / taches.length) * 100);

  const bilan = lignes.join("\n") + "\n\n" + pourcentage + "%";

  writeFileSync(chemin, bilan);
}
