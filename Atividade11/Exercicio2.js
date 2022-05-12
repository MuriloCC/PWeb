function Conta () {
    this.nomeCorrentista
    this.banco
    this.numeroConta
    this.saldo

    this.getNomeCorrentista = () => {
        return this.nomeCorrentista
    }

    
    this.setNomeCorrentista = (nomeCorrentista) => {
        this.nomeCorrentista = nomeCorrentista
    }

    this.getBanco = () => {
        return this.banco
    }

    
    this.setBanco = (banco) => {
        this.banco = banco
    }

    this.getNumeroConta = () => {
        return this.numeroConta
    }

    
    this.setNumeroConta = (numeroConta) => {
        this.numeroConta = numeroConta
    }

    this.getSaldo = () => {
        return this.saldo
    }

    
    this.setSaldo = (saldo) => {
        this.saldo = saldo
    }
}

function Corrente () {
    this.saldoEspecial

    this.getSaldoEspecial = () => {
        return this.saldoEspecial
    }

    
    this.setSaldoEspecial = (saldoEspecial) => {
        this.saldoEspecial = saldoEspecial
    }
}

function Poupanca () {
    this.juros
    this.dataVencimento

    this.getJuros = () => {
        return this.juros
    }

    
    this.setJuros = (juros) => {
        this.juros = juros
    }

    this.getDataNascimento = () => {
        return this.dataNascimento
    }

    
    this.setDataNascimento = (dataNascimento) => {
        this.dataNascimento = dataNascimento
    }
}

Corrente.prototype = new Conta()
Poupanca.prototype = new Conta()

contaCorrente = new Corrente()
contaPoupanca = new Poupanca()

contaCorrente.setNomeCorrentista("Muras")
contaCorrente.setBanco("001 - ITAU")


contaPoupanca.setNomeCorrentista("Antonio Carlos")
contaPoupanca.setBanco("002 - Bradesco")

console.log(contaPoupanca.getNomeCorrentista())
console.log(contaPoupanca.getBanco())
console.log(contaCorrente.getNomeCorrentista())
console.log(contaCorrente.getBanco())
