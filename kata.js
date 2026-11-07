import { writeFileSync, readFileSync } from "fs";

// Écriture du fichier
writeFileSync("bonjour.txt", "Au revoir Ada !");

// Lecture du fichier
const contenu = readFileSync("bonjour.txt", "utf-8");

// Affichage
console.log(contenu);

