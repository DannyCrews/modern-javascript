"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
    var _marked = [fib].map(regeneratorRuntime.mark);

    var elements = document.querySelectorAll("*");

    for (var index in elements) {
        var element = elements[index];
        console.log(element.tagName);
    }

    console.log(".....................");

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _element = _step.value;

            console.log(_element.tagName);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    console.log(".....................");

    var array = [1, 2, 3, 4, 5, 6];

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = array[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            console.log(item);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    console.log(".....................");

    var iterable = _defineProperty({}, Symbol.iterator, function () {
        var index = 0;

        return {
            next: function next() {
                index++;
                return {
                    value: index * 5,
                    done: index > 5
                };
            }
        };
    });

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = iterable[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _item = _step3.value;

            console.log(_item);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    console.log(".....................");

    function fib() {
        var max = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];
        var last2, last1, i, current;
        return regeneratorRuntime.wrap(function fib$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        last2 = 1, last1 = 1;
                        i = 0;

                    case 2:
                        if (!(i < max)) {
                            _context.next = 11;
                            break;
                        }

                        current = last2;

                        last2 = last1;
                        last1 += current;
                        _context.next = 8;
                        return current;

                    case 8:
                        i++;
                        _context.next = 2;
                        break;

                    case 11:
                    case "end":
                        return _context.stop();
                }
            }
        }, _marked[0], this);
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = fib()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _item2 = _step4.value;

            console.log(_item2);
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }
})();