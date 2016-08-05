(() => {
    function func1() {
        var hey = 10;
        var hey = 20;

        if(true) {
            let ok = "sure";
        }

        if (true) {
            let ok = "yay";
        }
    }

    for (var i=0; i < 10; i++) {
            window.setTimeout(() => {
                console.log(i);
            }, 0);
        }

    for (var i = 0; i < 10; i++) {
        (j => {
            window.setTimeout(() => {
                console.log(j);
            }, 0);
        })(i);
    }

    for (let i = 0; i < 10; i++) {
        window.setTimeout(() => {
            console.log(i);
        }, 0);
        
    }

    console.log(notDefinedYet);
    var notDefinedYet = 10;

    // console.log(letDefined);
    // let letDefined = 10;

    const obj = {name: "whoa"};
    obj.name = "blagh";

})();