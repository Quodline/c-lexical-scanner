## Simple lexical analyser (scanner) for C-style language compiler.

```
"lint": "gts lint",
"clean": "gts clean",
"compile": "tsc",
"fix": "gts fix",
```

### Input
```c
#include <stdio.h>

int main() {
    int arr[3] = {10, 20, 30}; // Example array of 3 integers
    int sum = 0;
    
    // Loop through the array and calculate the sum
    for (int i = 0; i <= 2; i++) {
        sum += arr[i];
    }
    
    // Output the sum
    printf("The sum of the array elements is: %d\n", sum);
    
    return 0;
}
```

### Output
```js
{
  tokens: [
    { type: 'directive', position: 0, value: '#include <stdio.h>' },
    { type: 'keyword', position: 20, value: 'int' },
    { type: 'identifier', position: 24, value: 'main' },
    { type: 'punctuator', position: 28, value: '(' },
    { type: 'punctuator', position: 29, value: ')' },
    { type: 'punctuator', position: 31, value: '{' },
    { type: 'keyword', position: 37, value: 'int' },
    { type: 'identifier', position: 41, value: 'arr' },
    { type: 'punctuator', position: 44, value: '[' },
    { type: 'constant', position: 45, value: '3' },
    { type: 'punctuator', position: 46, value: ']' },
    { type: 'operator', position: 48, value: '=' },
    { type: 'punctuator', position: 50, value: '{' },
    { type: 'constant', position: 51, value: '10' },
    { type: 'operator', position: 53, value: ',' },
    { type: 'constant', position: 55, value: '20' },
    { type: 'operator', position: 57, value: ',' },
    { type: 'constant', position: 59, value: '30' },
    { type: 'punctuator', position: 61, value: '}' },
    { type: 'punctuator', position: 62, value: ';' },
    { type: 'keyword', position: 69, value: 'int' },
    { type: 'identifier', position: 73, value: 'sum' },
    { type: 'operator', position: 77, value: '=' },
    { type: 'constant', position: 79, value: '0' },
    { type: 'punctuator', position: 80, value: ';' },
    { type: 'keyword', position: 96, value: 'for' },
    { type: 'punctuator', position: 100, value: '(' },
    { type: 'keyword', position: 101, value: 'int' },
    { type: 'identifier', position: 105, value: 'i' },
    { type: 'operator', position: 107, value: '=' },
    { type: 'constant', position: 109, value: '0' },
    { type: 'punctuator', position: 110, value: ';' },
    { type: 'identifier', position: 112, value: 'i' },
    { type: 'operator', position: 114, value: '<=' },
    { type: 'constant', position: 117, value: '2' },
    { type: 'punctuator', position: 118, value: ';' },
    { type: 'identifier', position: 120, value: 'i' },
    { type: 'operator', position: 121, value: '++' },
    { type: 'punctuator', position: 123, value: ')' },
    { type: 'punctuator', position: 125, value: '{' },
    { type: 'identifier', position: 135, value: 'sum' },
    { type: 'operator', position: 139, value: '+=' },
    { type: 'identifier', position: 142, value: 'arr' },
    { type: 'punctuator', position: 145, value: '[' },
    { type: 'identifier', position: 146, value: 'i' },
    { type: 'punctuator', position: 147, value: ']' },
    { type: 'punctuator', position: 148, value: ';' },
    { type: 'punctuator', position: 154, value: '}' },
    { type: 'identifier', position: 170, value: 'printf' },
    { type: 'punctuator', position: 176, value: '(' },
    {
      type: 'literal',
      position: 177,
      value: '"The sum of the array elements is: %d\\n"'
    },
    { type: 'operator', position: 217, value: ',' },
    { type: 'identifier', position: 219, value: 'sum' },
    { type: 'punctuator', position: 222, value: ')' },
    { type: 'punctuator', position: 223, value: ';' },
    { type: 'keyword', position: 234, value: 'return' },
    { type: 'constant', position: 241, value: '0' },
    { type: 'punctuator', position: 242, value: ';' },
    { type: 'punctuator', position: 244, value: '}' }
  ],
    tokenCount: 59
}
```
