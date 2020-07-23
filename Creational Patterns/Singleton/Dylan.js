// Dylan has no ancestors or descendants
class Dylan {
    constructor(name = "") {
        // the constructor checks to see if the instance exists
        // we then return the pre-existing/old instance
        if(!!Dylan.instance) return Dylan.instance;

        // we bind the current instance to the class 
        Dylan.instance = this;

        this.name = name;

        // this is for good practice
        return this;
    }

    daBestRapper() {
        for (let i = 0; i <= 5; i++) {
            console.log(`${this.name}`)
        };
    }
        
}

class DylanJR extends Dylan {
    whatsMyName() {
        return this.name.toUpperCase()
    }
}

const dylanJr = new DylanJR();
console.log("daBestRapper" in dylanJr);
console.log("whatsMyName" in dylanJr)

