(() => {

class Person {
    get name() { return this._name; }
    set name(name) {
        console.log(`Setting name to ${name}`);
        this._name = name;
    }

    constructor(name) {
        this._name = name;
    }

    render() {
        console.log(`HI, I am a person named ${this._name}`);
    }

    static loadPeople() {
        return [
            new Person("person1"),
            new Person("person2")
        ];
    }
}

class Admin extends Person {
    constructor() {
        super("I'M AN ADMIN");
    }

    doAnAdminThing() {
        console.log("Doing an admin thing");
    }

    render() {
        console.log("RENDERING AN ADMIN");
        super.render();
    }
}

const [p1, p2] = Person.loadPeople();
p1.render();
p2.render();

const admin1 = new Admin("admin1");
admin1.doAnAdminThing();
admin1.render();

})();