/* eslint-disable */
//Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Gus'; // Qualquer tipo de string: '' "" ``
let idade: number = 26; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true or false
let simbolo: symbol = Symbol('qualquer-symbol'); //symbol
//let big: bigint = 10n; // bigint

// Array
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeString: Array<string> = ['a', 'b', 'c'];
let arrayDeString2: string[] = ['a', 'b', 'c'];

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Gus',
  idade: 26,
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
