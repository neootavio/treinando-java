public class SaldoReajuste1Porcento {
    public static void main(String[] args) {
        double saldo = 100, taxaDeJuros = 0.01, saldoAtual=0;

        saldoAtual = saldo+(saldo*taxaDeJuros);

        System.out.println("Saldo atual: " + saldoAtual);
    }
}
