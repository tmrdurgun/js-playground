class Event {
    constructor() {
        this.handlers = new Map();
        this.count = 0;
    }
    
    subscribe(handler) {
        this.handlers.set(++this.count, handler);

        return this.count;
    }

    unSubscribe(idx) {
        this.handlers.delete(idx);
    }

    // 1 who fired the event
    // additional data (event args)
    fire(sender, args) {
        this.handlers.forEach((v, k) => {
            v(sender, args);
        })
    }
}

class fallsIllArgs {
    constructor(address) {
        this.address = address;
    }
}

class Person {
    constructor(address) {
        this.address = address;
        this.fallsIll = new Event();
    }

    catchCold() {
        this.fallsIll.fire(this, new fallsIllArgs(this.address));
    }
}

const person = new Person('Pioenstraat 26, Leiden');
const sub = person.fallsIll.subscribe((sender, args) => {
    console.log(`A doctor has been called to address: ${args.address}`);
});

person.catchCold();
person.catchCold();

person.fallsIll.unSubscribe(sub);

person.catchCold();
person.catchCold();