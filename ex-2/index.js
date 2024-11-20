let animals_even = ["Dog", "Cat", "Spider"];
let animals_odd = ["Bat", "Snake", "Bear"];

console.log("Animaux avec une clé paire dans animals_even:");
animals_even.forEach((animal, index) => {
  if (index % 2 === 0) {
    console.log(`Index: ${index}, Animal: ${animal}`);
  }
});

console.log("Animaux avec une clé impaire dans animals_odd:");
animals_odd.forEach((animal, index) => {
  if (index % 2 !== 0) {
    console.log(`Index: ${index}, Animal: ${animal}`);
  }
});
