// void brainfuck(const char *code, const char *input, char *output)
// code - The Brainfuck program to be executed
// input - A stream of input bytes to the Brainfuck program being executed
// output - A writable character buffer large enough to hold the expected output of the
//          Brainfuck program being executed
// Your task: Execute the Brainfuck program with the given input, writing the program output
// to the output buffer provided as a NUL-terminated C-string

#include <stdlib.h>
#include <stdio.h>
void brainfuck(const char *code, const char *input, char *output) {
  unsigned char *tape = (unsigned char *)malloc(sizeof(unsigned char) * 5000);
  for (int i = 0; i < 5000; i++)
  {
    tape[i] = 0; 
  }
  int tapePtr = 2500;
  int codePtr = 0;
  int inputPtr = 0;
  int outputPtr = 0;
  
  
  while (code[codePtr] != '\0')
  {
    switch (code[codePtr])
    {
      case '>':
        tapePtr++;
        break;
      case '<':
        tapePtr--;
        break;
      case '+':
        if (tape[tapePtr] == 255)
        {
          tape[tapePtr] = 0;
        }
        else
        {
          tape[tapePtr]++;
        }
        break;
      case '-':
        if (tape[tapePtr] == 0)
        {
          tape[tapePtr] = 255;
        }
        else
        {
          tape[tapePtr]--;
        }
        break;
      case '.':
        output[outputPtr] = tape[tapePtr];
        outputPtr++;
        break;
      case ',':
        tape[tapePtr] = input[inputPtr];
        inputPtr++;
        break;
      case '[':
        if (tape[tapePtr] == 0)
        {
          int matchless = -1;
          while (code[codePtr] != ']' || matchless != 0)
          {
            if (code[codePtr] == '[')
            {
              matchless++;
            }
            if (code[codePtr] == ']')
            {
              matchless--;
            }
            codePtr++;
          }
        }
        break;
      case ']':
        if (tape[tapePtr] != 0)
        {
          int matchless = -1;
          while (code[codePtr] != '[' || matchless != 0)
          {
            if (code[codePtr] == ']')
            {
              matchless++;
            }
            if (code[codePtr] == '[')
            {
              matchless--;
            }
            codePtr--;
          }
        }
      break;
    }
    codePtr++;  
  }
  output[outputPtr] = '\0';
}