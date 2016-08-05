"use strict";

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

(function () {

    var person = {
        name: { first: "Dan", last: "Crews" },
        roles: ["admin"],
        isActive: true
    };

    function printPerson(person) {
        var roles = person.roles;
        var firstName = person.name.first;
        var lastName = person.name.last;

        console.log(roles);
        console.log(roles.length);

        console.log([firstName, lastName]);
    };

    // deconstructing an object
    function printPerson2(person) {
        var roles = person.roles;
        var _person$name = person.name;
        var first = _person$name.first;
        var last = _person$name.last;


        console.log(roles);
        console.log(roles.length);
        console.log(first);
        console.log(last);
    }

    // passing a deconstructor into a function
    function printPerson3(_ref) {
        var roles = _ref.roles;
        var _ref$name = _ref.name;
        var first = _ref$name.first;
        var last = _ref$name.last;

        console.log(roles);
    }

    var point = { x: 1, y: 24 };

    function translate(_ref2, amount) {
        var x = _ref2.x;
        var y = _ref2.y;

        return { x: x + amount, y: y + amount };
    }

    var _translate = translate(point, 10);

    var x = _translate.x;
    var y = _translate.y;

    //defaults

    function getTrack() {
        return { title: "Track 1", lengthInSeconds: 30 };
    }

    var _getTrack = getTrack();

    var title = _getTrack.title;
    var lengthInSeconds = _getTrack.lengthInSeconds;
    var _getTrack$description = _getTrack.description;
    var description = _getTrack$description === undefined ? "No desc found" : _getTrack$description;


    printPerson(person);
    printPerson2(person);
    printPerson3(person);

    console.log(translate(point, 20));

    //arrays

    var array = [1, 2, 3, 4, 5, 6, 7];

    var firstNum = array[0];
    var secondNum = array[1];
    var thirdNum = array[2];
    var x1 = array[0];
    var y1 = array[1];
    var z1 = array[3];
    var head1 = array[0];
    var head2 = array[1];
    var rest = array.slice(2);


    function sum(array) {
        if (!array.length) return 0;

        var _array = _toArray(array);

        var head = _array[0];

        var tail = _array.slice(1);

        return head + sum(tail);
    }

    console.log(sum(array));

    var left = 10;
    var right = 20;

    // default parameters
    var _ref3 = [right, left];
    left = _ref3[0];
    right = _ref3[1];
    function withDefaults(person) {
        var output = arguments.length <= 1 || arguments[1] === undefined ? "name" : arguments[1];
        var options = arguments.length <= 2 || arguments[2] === undefined ? { verbose: true } : arguments[2];

        console.log([person, output, options]);
    }

    withDefaults(person);
    withDefaults(person, "isActive", { debug: true });
})();