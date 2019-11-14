class _Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(data){
    const node = new _Node(data);
    if(this.first === null){
      this.first = node;
    }
    if(this.last){
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue(){
    if(this.first === null){
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }
}

function peek(queue) {
  return queue.first.value;
}

function isEmpty(queue) {
  if (queue.first === null) {
    console.log('The stack is empty');
    return;
  }
  console.log('The stack is not empty');
}

function display(queue){
  let currNode = queue.first;

  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}


function main(){
  let starTrekQ = new Queue;
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  display(starTrekQ);
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  display(starTrekQ);

}
//main();

function squareDance(danceQueue) {
  const spareMen = new Queue();
  const spareWomen = new Queue();
​  const pairs = new Queue();
​
  let personA, personB;
  while (personA = danceQueue.dequeue()) {
    if (personA.gender === 'male') {
      if (personB = spareWomen.dequeue()) {
          pairs.enqueue([personA, personB]);
      }
      else { spareMen.enqueue(personA); }
    }
​    else if (personA.gender === 'female') {
      if (personB = spareMen.dequeue()) {
          pairs.enqueue([personA, personB]);
      }
      else {
          spareWomen.enqueue(personA);
      }
    }
  }
  return pairs;
}
​
const danceQueue = new Queue();
danceQueue.enqueue({
  name: 'Gwendolyn Wilderman',
  gender: 'female'
});
danceQueue.enqueue({
  name: 'Wilbur Brakus',
  gender: 'male'
});
danceQueue.enqueue({
  name: 'Vallie Howell',
  gender: 'female'
});
danceQueue.enqueue({
  name: 'Nova Doyle',
  gender: 'female'
});
danceQueue.enqueue({
  name: 'Monica Turcotte',
  gender: 'female'
});
danceQueue.enqueue({
  name: 'Corine Smith',
  gender: 'female'
});
danceQueue.enqueue({
  name: 'Jamir Sporer',
  gender: 'male'
});
​
squareDance(danceQueue).display();