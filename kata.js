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
console.log(resultat)