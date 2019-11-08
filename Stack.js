'use strict';

class _Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    if (this.top === null){
      this.top = new _Node(value, null);
      return;
    }
    this.top = new _Node(value, this.top); 
  }

  pop(){
    if (this.top === null){
      console.log('There are no items in the stack');
      return;
    }
    const node = this.top;
    this.top = this.top.next;
    return node.data;
  }


}
function peek(stack){
  console.log(stack.top.value);
}

function isEmpty(stack){
  if(stack.top === null){
    console.log('The stack is empty');
    return;
  }
  console.log('The stack is not empty');
}

function main() {
  let starTrek = new Stack;

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  starTrek.pop();
  starTrek.pop();
  
  return starTrek;
}

function display(stack) {
  let currNode = stack.top;

  while(currNode !== null){
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

//console.log(display(main()));


function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  let stringStacker = new Stack;
  for (let i=0; i<string.length; i++){
    stringStacker.push(string[i]);
  }

  let reversedString = '';
  let currNode = stringStacker.top;
  while(currNode !== null){
    reversedString += currNode.value;
    currNode = currNode.next;
  }
  if(string === reversedString){
    console.log("It IS a palindrome!! ");
    return;
  }
  else {
    console.log("Sorry, it is not a palindrome.");
  }
}

//is_palindrome('race car');


function bracketsMatcher(string){
  let bracketStack = new Stack;

  for(let i=string.length-1; i>=0; i--){
    if(string[i] === '(' || ')'){
      bracketStack.push('string[i]');
    }
  }
  let currNode = bracketStack.top;
  if(currNode.value === ')'){
    console.log('A closing parenthesis needs to be preceeded by an opener');
    return;
  }
  let open = 0;
  let closed = 0;

  while(currNode !== null){
    if(currNode.value === '('){
      open++;
    }
    else if(currNode.value === ')'){
      closed++;
    }
    if(closed > open){
      console.log('You are missing a "(" for closing parenthesis number:' + closed);
      return;
    }
    currNode = currNode.next;
  }

  if(open !== closed) {
    console.log('Opening parenthesis total: ' + open);
    console.log('Closing parentheses total: ' + closed);
    return;
  }

}
bracketsMatcher('((x+y)*(((m+n))');
//((x+y)*3)*(m+n)