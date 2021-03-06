function Carro(VelocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let VelocidadeAtual = 0

    // metodo publico
    this.acelerar = function() {
        if (VelocidadeAtual + delta <= VelocidadeMaxima) {
            VelocidadeAtual += delta
        }else {
            VelocidadeAtual = VelocidadeMaxima
        }

    }

    // metodo publico
    this.getVelocidadeAtual = function() {
        return VelocidadeAtual
    }

}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)