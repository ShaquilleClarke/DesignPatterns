class Aries {
    constructor(name) {
        this.name = name;
        this.type = "impatient";
    }
}

class Scorpio {
    constructor(name) {
        this.name = name;
        this.type = "sneaky";
    }
}

class Horoscope {
    create = (name, type) => {
        switch(type) {
            case 1:
                return new Aries(name);
                break;
            case 8:
                return new Scorpio(name);
                break; 
        }
    }
}

const say = function() {
    console.log(`Whats gud! It's ya boy ${this.name} and i am not ${this.type}!`);
}

const horoscope = new Horoscope();
const zodiacs = [];

zodiacs.push(horoscope.create("Meek", 1))
zodiacs.push(horoscope.create("Hov", 8))

zodiacs.forEach(z => {
    say.call(z);
})
