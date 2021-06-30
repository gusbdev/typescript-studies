// Tuple

const dadosCliente1: readonly [number, string] = [1, 'Gus']; // Immutable tuple, link Python
const dadosCliente2: [number, string, string] = [1, 'Gus', 'Bar'];
const dadosCliente3: [number, string, string?] = [1, 'Gus'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Gus', 'Bar'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Joao';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// Readonly Array
const array1: readonly string[] = ['Gus', 'Bar'];
const array2: ReadonlyArray<string> = ['Gus', 'Bar'];

console.log(array1);
console.log(array2);
