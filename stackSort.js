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

function displayStackContent(stack) {
  let currNode = stack.top;
  let resultsArray = [];
  while(currNode !== null){
    resultsArray.push(currNode.value);
    currNode = currNode.next;
  }
  return resultsArray;
}


function newSorter(arrayOfValues){
  let stackA = new Stack;
  let stackB = new Stack;
  let tempVar;

  for (let i=0; i<arrayOfValues.length; i++){
    stackA.push(arrayOfValues[i]);
  }
  console.log('Values to sort: ')
  console.log(displayStackContent(stackA));

  stackB.push(stackA.pop());
 
  while(stackA.top !== null){
    tempVar = stackA.pop();
    if(tempVar > stackB.top.value){
      stackB.push(tempVar);
    } else if (tempVar < stackB.top.value){
      while(stackB.top !== null && tempVar < stackB.top.value){
        stackA.push(stackB.pop());
      }
      stackB.push(tempVar);
    }
  }
  console.log('Sorted stack contains: ');
  console.log(displayStackContent(stackB));
  return; 
}

newSorter([1, 3, 5, 7, 9, 8, 6, 4, 2]);
newSorter([21, 19, 52, 73, 65, 44, 98, 36, 81]);