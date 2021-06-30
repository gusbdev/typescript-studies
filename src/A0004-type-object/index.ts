const ObjetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; // index signature
} = {
  chaveA: 'valorA',
  chaveB: 'ValorB',
};

// ObjetoA.chaveA = 'Outro valor';
ObjetoA.chaveC = 'Nova chave';
ObjetoA.chaveD = 'Nova chave';
ObjetoA.outraChave = 'Outra chave';

console.log(ObjetoA);
