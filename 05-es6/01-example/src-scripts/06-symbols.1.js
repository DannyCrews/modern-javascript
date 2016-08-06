(() => {

    const mySymbol = Symbol("mySymbol)");
    const mySymbol2 = Symbol("mySymbol");

    const person = {
        [mySymbol]: "blegh",

        render() {
            console.log(this[mySymbol]);
        }
    };
    person.render();
    console.log(person);


})();