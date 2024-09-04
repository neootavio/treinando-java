import java.util.Scanner;

public class AnosParaDias {
    public static void main(String[] args) {
        /*  Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e
            mostre-a expressa em dias. Leve em consideração o ano com 365 dias e o mês com 30.
            (Ex: 3 anos, 2 meses e 15 dias = 1170 dias.)
        * */
        int anos, meses, dias, totalDias;

        Scanner scanner = new Scanner(System.in);

        System.out.println("Quantos anos: ");
        anos = scanner.nextInt();
        System.out.println("Quantos meses: ");
        meses = scanner.nextInt();
        System.out.println("Dias: ");
        dias = scanner.nextInt();

        totalDias = (anos*365) + (meses*30) + (dias);

        System.out.println("Total de " + totalDias + " dias.");
    }
}
