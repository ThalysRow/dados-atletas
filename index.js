class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas
    }

    calculaCategoria() {
        if (this.idade > 8 && this.idade < 12)
            return "Infantil"
        if (this.idade > 11 && this.idade < 14)
            return "Juvenil"
        if (this.idade > 13 && this.idade < 16)
            return "Intermediário"
        if (this.idade > 15 && this.idade < 31)
            return "Adulto"
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura)
    }