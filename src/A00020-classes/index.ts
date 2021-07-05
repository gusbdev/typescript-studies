export class Company {
  public readonly name: string; // public non necessary
  private readonly colaborators: Colaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addColaborator(colaborator: Colaborator): void {
    this.colaborators.push(colaborator);
  }

  showColaborator(): void {
    for (const colaborator of this.colaborators) {
      console.log(colaborator);
    }
  }
}

export class Colaborator {
  constructor(public readonly name: string, public readonly surname: string) {}
}

const empresa1 = new Company('Udemy', '11.111.111/0002-01');
const colaborator1 = new Colaborator('Gus', 'Bar');
const colaborator2 = new Colaborator('Fig', 'Bar');
const colaborator3 = new Colaborator('Bar', 'Fig');
empresa1.addColaborator(colaborator1);
empresa1.addColaborator(colaborator2);
empresa1.addColaborator(colaborator3);
console.log(empresa1);
empresa1.showColaborator();
