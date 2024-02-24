#include <stdio.h>

/**
 * @brief Generates the Fibonacci series up to a specified number of terms.
 *
 * @param n The number of terms in the Fibonacci series to generate.
 */
void fibonacci(int n) {
    int first = 0, second = 1, next, i;

    printf("Fibonacci Series up to %d terms: \n", n);

    for (i = 0; i < n; i++) {
        if (i <= 1)
            next = i;
        else {
            next = first + second;
            first = second;
            second = next;
        }
        printf("%d ", next);
    }
}

int main() {
    int n;

    // Prompting the user to enter the number of terms
    printf("Enter the number of terms: ");
    scanf("%d", &n);

    // Generating and printing the Fibonacci series
    fibonacci(n);
    return 0;
}
