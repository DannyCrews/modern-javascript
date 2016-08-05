"use strict";

(function () {
    function func1() {
        var hey = 10;
        var hey = 20;

        if (true) {
            var ok = "sure";
        }

        if (true) {
            var _ok = "yay";
        }
    }

    for (var i = 0; i < 10; i++) {
        window.setTimeout(function () {
            console.log(i);
        }, 0);
    }

    for (var i = 0; i < 10; i++) {
        (function (j) {
            window.setTimeout(function () {
                console.log(j);
            }, 0);
        })(i);
    }

    var _loop = function _loop(_i) {
        window.setTimeout(function () {
            console.log(_i);
        }, 0);
    };

    for (var _i = 0; _i < 10; _i++) {
        _loop(_i);
    }

    console.log(notDefinedYet);
    var notDefinedYet = 10;

    // console.log(letDefined);
    // let letDefined = 10;

    var obj = { name: "whoa" };
    obj.name = "blagh";
})();