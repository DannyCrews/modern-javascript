"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
    var _person;

    var mySymbol = Symbol("mySymbol)");
    var mySymbol2 = Symbol("mySymbol");

    var person = (_person = {}, _defineProperty(_person, mySymbol, "blegh"), _defineProperty(_person, "render", function render() {
        console.log(this[mySymbol]);
    }), _person);
    person.render();
    console.log(person);
})();