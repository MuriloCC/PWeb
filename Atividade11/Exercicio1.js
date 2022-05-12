function Retangulo (x, y) {
    this.base = x
    this.altura = y

    this.area = () => base * altura
}

const retangulo = new Retangulo(2, 2)

console.log(retangulo.area())