#include <stdio.h>

/**
 * @brief Solves the Tower of Hanoi problem for a given number of disks.
 *
 * @param n The number of disks to be moved.
 * @param source The peg from which disks are moved.
 * @param auxiliary The auxiliary peg used for moving disks.
 * @param destination The peg to which disks are moved.
 */
void towerOfHanoi(int n, char source, char auxiliary, char destination) {
    if (n == 1) {
        // Base case: If there is only one disk, move it directly from source to destination
        printf("Move disk 1 from %c to %c\n", source, destination);
        return;
    }

    // Move n-1 disks from source to auxiliary, using destination as auxiliary peg
    towerOfHanoi(n - 1, source, destination, auxiliary);

    // Move the nth disk from source to destination
    printf("Move disk %d from %c to %c\n", n, source, destination);

    // Move n-1 disks from auxiliary to destination, using source as auxiliary peg
    towerOfHanoi(n - 1, auxiliary, source, destination);
}

int main() {
    int n;

    // Prompting the user to enter the number of disks
    printf("Enter the number of disks: ");
    scanf("%d", &n);

    // Solving the Tower of Hanoi problem
    printf("Steps to solve the Tower of Hanoi problem:\n");
    towerOfHanoi(n, 'A', 'B', 'C');

    return 0;
}
