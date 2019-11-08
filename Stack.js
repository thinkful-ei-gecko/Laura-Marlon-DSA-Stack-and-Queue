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

console.log(display(main()));