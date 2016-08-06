(() => {

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
        return new Promise((done, fail) => {
            $.ajax("/users.json", {
                dataType: "json",
                success(data) { done(data); },
                error(error) { fail(error); }
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

function succeedAt(milliseconds){
    return new Promise((done, fail) => {
        window.setTimeout(done, milliseconds);
    });
}

function failAt(milliseconds) {
    return new Promise((done, fail) => {
        window.setTimeout(fail, milliseconds);''
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
        return new Promise((done, fail) => {
            $.ajax("/tracks.json", {
                dataType: "json",
                success(data) { done(data); },
                error(error) { fail(error); }
            });
        });
    }

console.log(".................");

Promise.all([loadUsers(), loadTracks()])
    .then(data => {
        const [users, tracks] = data;
        console.log(users);
        console.log(tracks);
    });

Promise.race([loadTracks(), failAt(3000)])
    .then(
        () => console.log("SUCCEED"),
        () => console.log("FAIL")
    );

failAt(1000)
    .catch(() => console.log("CATCH"));

})();