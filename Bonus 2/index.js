let nombreMystere = parseInt(
  prompt("Choisissez un nombre mystère entre 0 et 10000 :")
);

let min = 0;
let max = 10000;
let tentatives = 0;
let devine = Math.floor((min + max) / 2);

while (devine !== nombreMystere) {
  tentatives++;
  if (devine < nombreMystere) {
    min = devine + 1;
  } else {
    max = devine - 1;
  }
  devine = Math.floor((min + max) / 2);
}

console.log("Nombre de tentatives : " + tentatives);
