class Veiculo {
  placa;
  ano;

  constructor(placa, ano) {
    this.placa = placa;
    this.ano = ano;
  }

  exibirDados() {
    console.log(`Placa: ${this.placa}`)
    console.log(`Ano: ${this.ano}`)
  }
}

const novoVeiculo = new Veiculo('QWE789', 2015);

novoVeiculo.exibirDados();

class Caminhao extends Veiculo {
  eixos;

  constructor(placa, ano, eixos) {
    super(placa, ano);
    this.eixos = eixos;
  }

  showInfo() {
    console.log("Placa: ", this.placa);
    console.log("Ano: ", this.ano);
    console.log("Eixos: ", this.eixos);
  }
}

const caminhao = new Caminhao("QWE987", 2018, 3);
caminhao.showInfo();

class Onibus extends Veiculo {
  assentos;

  constructor(placa, ano, assentos) {
    super(placa, ano);
    this.assentos = assentos;
  }

  introduzir() {
    console.log("Placa: ", this.placa);
    console.log("Ano: ", this.ano);
    console.log("Assentos: ", this.assentos);
  }
}

const onibus = new Onibus("BVH024", 2023, 35);
onibus.introduzir();
