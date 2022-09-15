class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }
    
    // Método estático
    static trocaPilha() {
        console.log('Ok, vou trocar')
    }
}

const c1 = new ControleRemoto('LG')
console.log(c1)
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
console.log(c1)
ControleRemoto.trocaPilha()