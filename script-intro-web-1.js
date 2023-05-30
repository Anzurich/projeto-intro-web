const animal1 = "Gato";
const filhotes1 = 2;
const animalDomestico1 = true;
const alimentacao1 = ["Ração Felina", "Sachês"];

const animal2 = "Elefante";
const filhotes2 = 1;
const animalDomestico2 = false;
const alimentacao2 = ["Arbustos", "Frutas"];

const animal3 = "Camundongo";
const filhotes3 = 5;
const animalDomestico3 = false;
const alimentacao3 = ["Verduras", "Grãos"];

const mediaFilhotes = ((filhotes1 + filhotes2 + filhotes3)/3);
console.log(mediaFilhotes);

const animalDomestico = animalDomestico1 && animalDomestico2 && animalDomestico3;
console.log(animalDomestico);

console.log(animal1.toUpperCase());
console.log("Possui "+filhotes1+" filhotes");
console.log("É animal doméstico? "+animalDomestico1);
console.log("Qual é a alimentação deste animal? "+alimentacao1);

console.log(animal2.toUpperCase());
console.log("Possui "+filhotes2+" filhotes");
console.log("É animal doméstico? "+animalDomestico2);
console.log("Qual é a alimentação deste animal? "+alimentacao2);

console.log(animal3.toUpperCase());
console.log("Possui "+filhotes3+" filhotes");
console.log("É animal doméstico? "+animalDomestico3);
console.log("Qual é a alimentação deste animal? "+alimentacao3);