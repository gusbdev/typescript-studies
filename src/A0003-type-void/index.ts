function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Gus',
  sobrenome: 'Bar',

  exibirNome(): void {
    console.log(this.nome + this.sobrenome);
  },
};

noReturn('Gustavo', 'Barbosa');
pessoa.exibirNome();

export { pessoa };
