
//code from here

class Node {
    constructor(data) {
        this.data = data;
        this.link = null;
    }
  }
  
  class Stack {
    constructor() {
        this.top = null;
    }
  
    push(data) {
        const newNode = new Node(data);
        if (!this.top) {
            this.top = newNode;
        } else {
            newNode.link = this.top;
            this.top = newNode;
        }
    }
  
    pop() {
        if (!this.top) return null;
        const data = this.top.data;
        this.top = this.top.link;
        return data;
    }
  
    isEmpty() {
        return this.top === null;
    }
  }
  
  function infixToPostfix(expression) {
    const precedence = {
        '^': 3,
        '*': 2,
        '/': 2,
        '+': 1,
        '-': 1,
    };
  
    let result = '';
    const stack = new Stack();
  
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
  
        if (char.match(/[A-Za-z0-9]/)) {
            result += char;
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (!stack.isEmpty() && stack.top.data !== '(') {
                result += stack.pop();
            }
            stack.pop(); // Pop the '('
        } else {
            while (
                !stack.isEmpty() &&
                precedence[char] <= precedence[stack.top.data]
            ) {
                result += stack.pop();
            }
            stack.push(char);
        }
    }
  
    while (!stack.isEmpty()) {
        result += stack.pop();
    }
  
    return result;
  }
  
//   const readline = require('readline');
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
  
//   rl.question('Enter expression to convert to postfix: ', (expression) => {
//     const postfixExpression = infixToPostfix(infix);
//     console.log('The postfix expression is:', postfixExpression);
//     rl.close();
//   });


console.log(result);


  // code ends

function fun(){
    var infix=document.getElementById("exp").value;
    var result=infixToPostfix(infix);
    document.getElementById("answer").innerHTML=result;


}