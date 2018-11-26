
class  Node{
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToHead(value){
        var node = new Node(value,null);

        if(this.head){
           node.next = this.head;
        }else{
            this.tail = node;
        }
        this.head = node;
    }

    addToTail(value){
        var node = new Node(value,null);

        if(this.tail){
            this.tail.next = node;

        }else{ 
            this.head = node;
        }
        
        this.tail = node;
      }

    showList(){
        if(!this.head) 
            return null;

        var current = this.head;
        var listy = [];

        while(current){
          listy += "➔"+ current.value;
         
          current = current.next;
        }
        
        console.log(listy); // returning linked list 
      }     
      
      
   remove(value) {
      let current = this.head;

      //first node remove
      if (current.value === value) {
        this.head = current.next;
      } else {
        let previous = current;
        while (current.next) {
      
          // middle value remove
          if (current.value === value) {
            previous.next = current.next;
            break;
          }

          previous = current;
          current = current.next;
        }
        // last node remove
        if (current.value === value) {
          previous.next = null;
        }
      }

    }

}


  const list = new LinkedList();
  
  list.addToHead(1)
  list.addToHead(5) 
  list.remove(5);
  list.addToTail(123)
  list.addToTail(503)
  
  list.addToHead(100)
  list.showList();

















// class Node {
//     constructor(val) {
//       this.value = val;
//       this.next = null;
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null;
//     }
  
//     add(val) {
//       let node = new Node(val)
      
//       if (!this.head) {
//         this.head = node;
//       } 
//       else {
//         let current = this.head;
//         while (current.next) {
//           current = current.next;
//         }
//         current.next = node;
//       }
//     }
  
//     middleAdd(middleVal, newVal) {
//       let current = this.head;
//       let node = new Node(newVal)
//       while (current.next) {
//         if (current.value === middleVal) {
//           // make the new node equal to the current node's next object
//           node.next = current.next;
//           // make the current node's next object equal to the new node
//           current.next = node;
//           break;
//         }
//         current = current.next;
//       }
//     }
  
//     // prototype method to remove from the linked list
//     remove(val) {
//       let current = this.head;
//       // if what's being removed is the first node
//       if (current.value === val) {
//         this.head = current.next;
//       } else {
//         let previous = current;
//         while (current.next) {
//           // if what's being removed is in the middle of the list
//           if (current.value === val) {
//             previous.next = current.next;
//             break;
//           }
//           previous = current;
//           current = current.next;
//         }
//         // if what's being removed is the last node
//         if (current.value === val) {
//           previous.next = null;
//         }
//       }
//     }
    
//     showList() {
//       let list = ''
//       let current = this.head
//       while (current.next) {
//         list += current.next.next ? current.value + " ➔ " : current.value
//         current = current.next;
//       }
//       console.log(list)
//     }
//   }
  
//   let list = new LinkedList();

//   list.add(2);
//   list.add(3);
//   list.add(4);
//   list.add(6);
//   list.middleAdd(2, 16);
//   list.showList()
//   list.middleAdd(3, 7);
//   list.showList()
//   //console.log(JSON.stringify(list, null, 2))
  
  
  
  
  
  
  
  