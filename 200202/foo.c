#include <stdio.h>

int main(){
    int arr[10] = {1, 23, 41, 17, 8 , 5, 21, 32, 38, 13};
    int i, j, sum = 0,  min = 987654321, max = -1;
    float answer_1 = 0.0f;

    for(i = 0; i < 10; i++){
        sum += arr[i];
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i];
        }
    }
    answer_1 = (sum - max - min) / 8.0f;

    printf("%.3f %d %d %d", answer_1, sum, max, min);

    

    return 0;
}
