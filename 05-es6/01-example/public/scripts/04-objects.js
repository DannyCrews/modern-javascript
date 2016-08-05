"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {

    function getPoint() {
        var x = 0;
        var y = 0;

        // compute x,y

        return { x: x, y: y };
    }

    var firstName = "dan";
    var person = {
        firstName: firstName,
        lastName: "Crews",

        sayHello: function sayHello() {
            console.log(this.firstName + " " + this.lastName);
        },


        get fullName() {
            return this.firstName + " " + this.lastName;
        }
    };

    var thing = _defineProperty({
        prop1: "WHOA"

    }, "thing-" + "other", "blegh");
})();