class _Node {
  constructor(value, next, prev) {
    this.value = value,
    this.next = next,
    this.prev = prev;
  }
}

class DoublyLLQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(value){
    let newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } 
    else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  dequeue(){
    if(!this.head) { return; }

    let topNode = this.head;
    this.head = topNode.next;

    if(topNode === this.tail){
      this.head = null;
      this.tail = null;
    }
    return topNode.value;
  }
}