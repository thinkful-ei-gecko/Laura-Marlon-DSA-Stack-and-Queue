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
    return node.value;
  }
}

function peek(stack){
  console.log(stack.top.value);
  return stack.top.value;
}

function displayStack(stack) {
  let currNode = stack.top;

  while(currNode !== null){
    console.log(currNode.value);
    currNode = currNode.next;
  }
}


function stackSorter(arrayOfValues){

  let stackA = new Stack;
  for (let i=0; i<arrayOfValues.length; i++){
    stackA.push(arrayOfValues[i]);
  }
  displayStack(stackA);
  console.log(stackA.top.value);

  let stackB = new Stack;
  stackB.push(stackA.pop());

  let tempVar = stackA.pop();
  console.log(tempVar);

  while(stackA !== null){
    if(stackA.top.value < tempVar && stackA.top.value > stackB.top.value){
      stackB.push(stackA.pop());
      console.log('line 62');
      console.log(stackB.top.value);
    } 
    else if (stackA.top < tempVar && stackA.top < stackB.top){
      stackB.push(tempVar);
      tempVar = stackA.pop;
      while(stackB.top > tempVar) {
        stackA.push(stackB.pop());
        console.log('line 70')
        console.log(stackB.top.value);

      }
      stackB.push(tempVar);
      tempVar = stackA.top;
    }
    else if(stackA.top > tempVar){
      stackB.push(tempVar);
      tempVar = stackA.top;
    }  
  }
  stackB.push(tempVar);
  displayStack(stackB);
}

stackSorter([6, 10, 7, 2, 3, 5]);
stackSorter([10, 2, 5, 7, 3, 6]);
stackSorter([2, 7, 6, 10, 5, 3]);
stackSorter([7, 3, 2, 6, 5, 10]);

