
class Btree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value){
        if(value <= this.value){
            if(!this.left)
                this.left = new Btree(value);
            else
                this.left.insert(value);

        } else {
            if(!this.right)
                this.right = new Btree(value);
            else    
                this.right.insert(value);
        }
    }

    search(value){
        if(value == this.value)
            return true;

        if(value < this.value){
            if(!this.left)
                return  false;
            else 
                return this.left.search(value);
        }else{
            if(!this.right)
                return false;
            else
                return this.right.search(value);
        }
    }

    depthFirstTraverse(order, callback) {
        order === "pre" && callback(this.value);
        this.left && this.left.depthFirstTraverse(order, callback);
        order === "in" && callback(this.value);
        this.right && this.right.depthFirstTraverse(order, callback);
        order === "post" && callback(this.value);
    }


}

var tree = new Btree(5);

// left node because values are lesser than root
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);

// right node because values are greater than root
tree.insert(6);
tree.insert(7);
tree.insert(8);
tree.insert(9);
console.log(tree);

console.log("search value found: ", tree.search(8));

const cb = x =>{ return console.log(x);}
console.log("pre depth first", tree.depthFirstTraverse('post',cb));