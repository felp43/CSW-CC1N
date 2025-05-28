#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int numero = get_int("Digite o número para descobrir sua tabuada: ");
    printf("A tabuada desse número é:\n");
    for (int contador = 1; contador <= 10; contador ++)
    {
        int resultado = (numero * contador);
        printf("%d x %d\n", contador, resultado);
    }
}
