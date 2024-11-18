import {React, useContext, useState} from 'react'
import P1R from './P1R'
import P1L from './P1L'
import Panel from './Panel'
import { AnsKeyContext, Countcontext, Questioncontext, SetIsLockContext, SetIsSelectContext } from '../Context/Context1'


const P1LRC = (props) => {

  const setIsSelect = useContext(SetIsSelectContext)
  const setIsLock = useContext(SetIsLockContext)
  const AnsKey = useContext(AnsKeyContext)

  const Ques = [
    {
      Question: 'What is the correct syntax to define a function in C?',
      Options: ['function_name() {}', 'def function_name() {}', 'void function_name() {}', 'func function_name() {}'],
      CorrectAnswer: 'void function_name() {}'
    },
    {
      Question: 'What will be the output of the following code?',
      Options: ['1', '0', '4', 'Depends on the compiler'],
      CorrectAnswer: '4',
      Code: 'printf("%d", sizeof(\'A\'));'
    },
    {
      Question: 'How do you declare a function that takes a pointer to an integer as an argument?',
      Options: ['void func(int* ptr);', 'void func(int ptr*);', 'void func(int &ptr);', 'void func(*int ptr);'],
      CorrectAnswer: 'void func(int* ptr);'
    },
    {
      Question: 'Which of the following is a logical operator in C?',
      Options: ['&&', '||', '!', 'All of the above'],
      CorrectAnswer: 'All of the above'
    },
    {
      Question: 'Which of the following is NOT a valid storage class in C?',
      Options: ['auto', 'register', 'external', 'static'],
      CorrectAnswer: 'external'
    },
    {
      Question: 'What is the output of the following code?',
      Options: ['a', 'b', 'c', 'd'],
      CorrectAnswer: 'c',
      Code: 'int main() { char str[] = "abcdef"; printf("%c", *(str + 2)); return 0; }'
    },
    {
      Question: 'What will happen if you try to dereference a NULL pointer in C?',
      Options: ['It will give 0 as the result', 'It will cause a segmentation fault', 'It will return the address 0x0', 'The program will compile successfully but give no output'],
      CorrectAnswer: 'It will cause a segmentation fault'
    },
    {
      Question: 'What will be the output of this program if n = 5?',
      Options: ['5 4 3 2 1 1 2 3 4 5', '1 2 3 4 5 5 4 3 2 1', '5 4 3 2 1 5 4 3 2 1', '5 4 3 2 1 2 3 4 5'],
      CorrectAnswer: '5 4 3 2 1 2 3 4 5',
      Code: `
        void recur(int n) {
          if (n == 0) return;
          printf("%d ", n);
          recur(n-1);
          printf("%d ", n);
        }
  
        int main() {
          recur(5);
          return 0;
        }`
    },
    {
      Question: 'How many recursive calls will the following function make if n = 4?',
      Options: ['5', '7', '9', '15'],
      CorrectAnswer: '7',
      Code: `
        void func(int n) {
          if (n <= 0) return;
          func(n-1);
          func(n-2);
        }
      `
    },
    {
      Question: 'What will be the result of this operation in C?',
      Options: ['1', '2', '3', '5'],
      CorrectAnswer: '1',
      Code: `
        int x = 5, y = 4;
        printf("%d", x & y);
      `
    },
    {
      Question: 'What is the output of the following code?',
      Options: ['10', '20', '30', 'Undefined behavior'],
      CorrectAnswer: '10',
      Code: `
        #include <stdio.h>
        int main() {
          int arr[] = {10, 20, 30};
          int *p = arr;
          printf("%d", *(p++));
          return 0;
        }
      `
    },
    {
      Question: 'Which of the following statements is TRUE about the sizeof operator in C?',
      Options: ['sizeof(char) is always 2 bytes.', 'sizeof is a runtime operator.', 'sizeof is evaluated at compile-time.', 'sizeof(int*) is always 4 bytes on any system.'],
      CorrectAnswer: 'sizeof is evaluated at compile-time.'
    },
    {
      Question: 'Which of the following expressions in C will correctly check if a given pointer ptr is NULL?',
      Options: ['ptr == NULL', '*ptr == NULL', 'ptr == 0', 'Both A and C'],
      CorrectAnswer: 'Both A and C'
    },
    {
      Question: 'Which of the following functions will you use to allocate memory dynamically?',
      Options: ['malloc()', 'calloc()', 'realloc()', 'All of the above'],
      CorrectAnswer: 'All of the above'
    },
    {
      Question: 'What will be the output of this code?',
      Options: ['2', '3', '4', '5'],
      CorrectAnswer: '4',
      Code: `
        #include <stdio.h>
        int main() {
          int arr[] = {1, 2, 3, 4, 5};
          int *ptr = arr + 1;
          printf("%d", *(ptr + 2));
          return 0;
        }
      `
    },
    {
      Question: 'What will be the output of the following loop?',
      Options: ['5', '3', '2', 'Infinite loop'],
      CorrectAnswer: '2',
      Code: `
        #include <stdio.h>
        int main() {
          for (int i = 0; i < 5; i += 2)
            printf("%d ", i);
          return 0;
        }
      `
    },
    {
      Question: 'Which of the following operators has the highest precedence in C?',
      Options: ['* (dereference)', '+ (addition)', '&& (logical AND)', 'sizeof'],
      CorrectAnswer: 'sizeof'
    },
    {
      Question: 'What will be the output of the following code?',
      Options: ['Hello', 'World', 'Error', 'Undefined behavior'],
      CorrectAnswer: 'Hello',
      Code: `
        #include <stdio.h>
        int main() {
          int a = 5;
          if (a = 10) {
            printf("Hello");
          } else {
            printf("World");
          }
          return 0;
        }
      `
    },
    {
      Question: 'What will be the output of the following code?',
      Options: ['2', '3', '4', '5'],
      CorrectAnswer: '4',
      Code: `
        #include <stdio.h>
        int main() {
          int arr[5] = {2, 1, 5, 4, 3};
          int *ptr = arr;
          printf("%d", *(ptr + 3));
          return 0;
        }
      `
    },
    {
      Question: 'What will be the output of the following code?',
      Options: ['3 1 2', '3 1 1', '2 1 2', '2 1 1'],
      CorrectAnswer: '3 1 2',
      Code: `
        #include <stdio.h>
        int main() {
          int x = 2, y = 1;
          int z = (x > y) ? x++ : y++;
          printf("%d %d %d", x, y, z);
          return 0;
        }
      `
    }
  ];

  const [Count, setCount] = useState(1)
  function inc(){
    console.log("increase")
    if(Count<15){
      setCount(Count+1)
      // if(Count>AnsKey.length){
      //   setIsLock(false)
      // }
    }
    console.log(Count)
  }
  function dec(){
    console.log("decrease")
    if(Count>1){
      setCount(Count-1)
    }
    console.log(Count)
  }
  function clr(){
    // console.log("clear")
    // setIsSelect()
    // setIsLock(false)
  }
  

  return (
    <div  className='border-2 border-sky-950 rounded-xl bg-sky-950 w-4/5 h-4/5 flex justify-around items-center relative' >
      <Questioncontext.Provider value={Ques}>
          <Countcontext.Provider value={Count}>
                <P1L/>
                <P1R/>
          </Countcontext.Provider>
      </Questioncontext.Provider>
      <Panel fnctI={inc} fnctD={dec} fnctC={clr} />
    </div>
  )
}

export default P1LRC