#include <stdio.h>

int main(void)
{
    int hours, minutes, seconds;
    printf("초를 입력하시오 : ");
    scanf("%d", &seconds);
    
    minutes = seconds / 60;
    seconds = seconds % 60;

    hours = minutes / 60;
    minutes = minutes % 60;

    printf("%d hours, %d minutes and %d seconds\n", hours, minutes, seconds);
    printf("계속하려면 아무 키나 누르십시오.");
}