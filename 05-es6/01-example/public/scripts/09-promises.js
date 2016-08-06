"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

(function () {

    // function loadUsersCb(callback) {
    //     $.ajax("/users.json", {
    //         dataType: "json",
    //         success(data){
    //             callback(null, data);
    //         },
    //         error(error) {
    //             callback(error, null);
    //         }
    //     });
    // }

    // loadUsersCb((err, data) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }

    //     console.log(data);
    // });

    // With promises
    function loadUsers() {
        return new Promise(function (done, fail) {
            $.ajax("/users.json", {
                dataType: "json",
                success: function success(data) {
                    done(data);
                },
                error: function error(_error) {
                    fail(_error);
                }
            });
        });
    }

    // loadUsers().then(
    //         data => {
    //             console.log("WE GOT DATA!");
    //             console.log(data);
    //         },
    //         error => {
    //             console.log("WE GOT AN ERROR");
    //             console.log(error);
    //         });

    function succeedAt(milliseconds) {
        return new Promise(function (done, fail) {
            window.setTimeout(done, milliseconds);
        });
    }

    function failAt(milliseconds) {
        return new Promise(function (done, fail) {
            window.setTimeout(fail, milliseconds);'';
        });
    }

    // succeedAt(1000).then(() => {
    //     loadUsers().then(data => {
    //         console.log(data);
    //     });
    // });

    // succeedAt(2000)
    //     .then(() => loadUsers())
    //     .then(data => console.log(data));


    function loadTracks() {
        return new Promise(function (done, fail) {
            $.ajax("/tracks.json", {
                dataType: "json",
                success: function success(data) {
                    done(data);
                },
                error: function error(_error2) {
                    fail(_error2);
                }
            });
        });
    }

    console.log(".................");

    Promise.all([loadUsers(), loadTracks()]).then(function (data) {
        var _data = _slicedToArray(data, 2);

        var users = _data[0];
        var tracks = _data[1];

        console.log(users);
        console.log(tracks);
    });

    Promise.race([loadTracks(), failAt(3000)]).then(function () {
        return console.log("SUCCEED");
    }, function () {
        return console.log("FAIL");
    });

    failAt(1000).catch(function () {
        return console.log("CATCH");
    });
})();