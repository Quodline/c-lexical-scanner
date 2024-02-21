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
    { type: 'directive', position: 18, value: '#include <stdio.h>' },
    { type: 'keyword', position: 23, value: 'int' },
    { type: 'identifier', position: 28, value: 'main' },
    { type: 'punctuator', position: 29, value: '(' },
    { type: 'punctuator', position: 30, value: ')' },
    { type: 'punctuator', position: 32, value: '{' },
    { type: 'keyword', position: 40, value: 'int' },
    { type: 'identifier', position: 44, value: 'arr' },
    { type: 'punctuator', position: 45, value: '[' },
    { type: 'constant', position: 46, value: '3' },
    { type: 'punctuator', position: 47, value: ']' },
    { type: 'operator', position: 49, value: '=' },
    { type: 'punctuator', position: 51, value: '{' },
    { type: 'constant', position: 53, value: '10' },
    { type: 'operator', position: 54, value: ',' },
    { type: 'constant', position: 57, value: '20' },
    { type: 'operator', position: 58, value: ',' },
    { type: 'constant', position: 61, value: '30' },
    { type: 'punctuator', position: 62, value: '}' },
    { type: 'punctuator', position: 63, value: ';' },
    { type: 'keyword', position: 72, value: 'int' },
    { type: 'identifier', position: 76, value: 'sum' },
    { type: 'operator', position: 78, value: '=' },
    { type: 'constant', position: 80, value: '0' },
    { type: 'punctuator', position: 81, value: ';' },
    { type: 'keyword', position: 99, value: 'for' },
    { type: 'punctuator', position: 101, value: '(' },
    { type: 'keyword', position: 104, value: 'int' },
    { type: 'identifier', position: 106, value: 'i' },
    { type: 'operator', position: 108, value: '=' },
    { type: 'constant', position: 110, value: '0' },
    { type: 'punctuator', position: 111, value: ';' },
    { type: 'identifier', position: 113, value: 'i' },
    { type: 'operator', position: 116, value: '<=' },
    { type: 'constant', position: 118, value: '2' },
    { type: 'punctuator', position: 119, value: ';' },
    { type: 'identifier', position: 121, value: 'i' },
    { type: 'operator', position: 123, value: '++' },
    { type: 'punctuator', position: 124, value: ')' },
    { type: 'punctuator', position: 126, value: '{' },
    { type: 'identifier', position: 138, value: 'sum' },
    { type: 'operator', position: 141, value: '+=' },
    { type: 'identifier', position: 145, value: 'arr' },
    { type: 'punctuator', position: 146, value: '[' },
    { type: 'identifier', position: 147, value: 'i' },
    { type: 'punctuator', position: 148, value: ']' },
    { type: 'punctuator', position: 149, value: ';' },
    { type: 'punctuator', position: 155, value: '}' },
    { type: 'identifier', position: 176, value: 'printf' },
    { type: 'punctuator', position: 177, value: '(' },
    {
      type: 'literal',
      position: 217,
      value: '"The sum of the array elements is: %d\\n"'
    },
    { type: 'operator', position: 218, value: ',' },
    { type: 'identifier', position: 222, value: 'sum' },
    { type: 'punctuator', position: 223, value: ')' },
    { type: 'punctuator', position: 224, value: ';' },
    { type: 'keyword', position: 240, value: 'return' },
    { type: 'constant', position: 242, value: '0' },
    { type: 'punctuator', position: 243, value: ';' },
    { type: 'punctuator', position: 245, value: '}' }
  ],
  tokenCount: 59
}
```
