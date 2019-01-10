class Sheep {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    clone() {
        return new Sheep(this.name, this.weight);
    }
}

const ss = new Sheep('bb',25);

console.log(ss);


 
 
 
 
 