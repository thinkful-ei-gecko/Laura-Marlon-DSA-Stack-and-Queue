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
      let temp = this.tail;
      this.tail = newNode;
      newNode.prev = temp;
      temp.next = newNode;
    }
  }
  dequeue(){
    if(!this.head) {
      return undefined;
    }
    let temp = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }
    else{
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null; //check this line
    }
    return this.value;
  }

}