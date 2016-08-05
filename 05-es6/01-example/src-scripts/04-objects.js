(() => {

    function getPoint() {
        let x = 0;
        let y = 0;

        // compute x,y

        return {x, y}
    }

    const firstName = "dan"
    const person = {
        firstName,
        lastName: "Crews",

        sayHello() {
            console.log(`${this.firstName} ${this.lastName}`);
        },

        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    };

    const thing = {
        prop1: "WHOA",

        ["thing-" + "other"]: "blegh"
    };

})();