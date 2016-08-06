(() => {

    const elements = document.querySelectorAll("*");

    for (let index in elements) {
        const element = elements[index];
        console.log(element.tagName);
    }

    console.log(".....................");

    for (let element of elements) {
        console.log(element.tagName);
    }

    console.log(".....................");


    const array = [1, 2, 3,4, 5, 6];

    for (let item of array) {
        console.log(item);
    }


    console.log(".....................");

    const iterable = {
        [Symbol.iterator]() {
            let index = 0;

            return {
                next() {
                    index++;
                    return {
                        value: index * 5,
                        done: index > 5
                    };
                }
            };
        }
    };

    for (let item of iterable){
        console.log(item);
    }

    console.log(".....................");

    function* fib(max=10) {
        let last2 = 1,
            last1 = 1;

        for (let i = 0; i < max; i++) {
            const current = last2;
            last2 = last1;
            last1 += current;
            yield current;
        }
    }

    for (let item of fib()) {
        console.log(item);
    }


})(); 