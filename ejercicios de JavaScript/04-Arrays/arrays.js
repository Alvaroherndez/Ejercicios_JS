let animalesTropicales = ["Tucán", "Pez payaso", "Serpiente boa", "Mono araña", "Tigre de Bengala", "Loro", "Jaguar", "Papagayo", "Pez ángel", "Cangrejo ermitaño"];

console.log("Array de animales tropicales:");
console.log(animalesTropicales);

console.log("Elementos en los índices 2, 4 y 11:");
console.log(animalesTropicales[2]);
console.log(animalesTropicales[4]);
console.log(animalesTropicales[11]);

console.log("Tipo de array:");
console.log(typeof animalesTropicales);

console.log("Tamaño del array:");
console.log(animalesTropicales.length);



let animales = ["León", "Tigre", "Elefante", "Jirafa", "Cebra", "Hipopótamo", "Rinoceronte", "Leopardo", "Gorila", "Canguro"];

console.log("Valores del array:");
console.log(animales);

console.log("Elementos en los índices 0, 4, 6 y 11:");
console.log(animales[0]);
console.log(animales[4]);
console.log(animales[6]);
console.log(animales[11]);

// Cambiando el elemento 5 del array
animales[4] = "Pipito feliz";
console.log("Array después de cambiar el elemento 5:");
console.log(animales);

// Añadiendo un nuevo elemento al array
animales.push("Pipito triste");
console.log("Array después de añadir 'Pipito triste':");
console.log(animales);

console.log("Tipo del array:");
console.log(typeof animales);

console.log("Tamaño del array:");
console.log(animales.length);
