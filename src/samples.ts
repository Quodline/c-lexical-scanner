export const sample_code: string = `\
#include <stdio.h>

int main() {
    int arr[3] = {10, 20, 30}; // Example array of 3 integers
    int sum = 0;
    
    // Loop through the array and calculate the sum
    for (int i = 0; i <= 2; i++) {
        sum += arr[i];
    }
    
    // Output the sum
    printf("The sum of the array elements is: %d\\n", sum);
    
    return 0;
}`;
