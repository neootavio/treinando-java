public class MediaAritmetica {
    public static void main(String[] args) {
        /*
            Fazer um programa que imprima a média aritmética dos números 8,9 e 7. A média dos
            números 4, 5 e 6. A soma das duas médias. A média das médias.
        * */
        int[] sequencia1 = {8,9,7};
        int[] sequencia2 = {4,5,6};

        int soma1 = 0, soma2 = 0, media1 = 0, media2 = 0, mediaGeral = 0;

        for(int i=0; i<sequencia1.length; i++){
            soma1 += sequencia1[i];
        }
        for(int i=0; i<sequencia2.length; i++){
            soma2 += sequencia2[i];
        }
        media1 = soma1 / sequencia1.length;
        media2 = soma2 / sequencia2.length;

        mediaGeral = (soma1 + soma2) / (sequencia1.length + sequencia2.length);

        System.out.println("A média geral das 2 sequencias é: "+mediaGeral);
    }
}
