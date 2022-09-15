class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado)
            return console.log(`Dispotivivo ${this.nome} já está ligado.`)
        
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado)
            return console.log(`Dispositivo ${this.nome} já está desligado.`)
        
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Você alterou o método ligar.');
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10')

const t1 = new Tablet('iPad', true);
t1.ligar();