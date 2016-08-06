(() => {

    const _generator = Symbol("generator");

    class Enumerable{
        constructor(generator) {
            this[_generator] = generator;
        }

        where(predicate){
            const wrappedGenerator = this[_generator];
            return new Enumerable(function*(){
                for(let item of wrappedGenerator()) {
                    if (!predicate(item))
                        continue;

                    yield item;
                }
            });
        }

        select(projection) {
            const wrappedGenerator = this[_generator];
            return new Enumerable(function*() {
                for (let item of wrappedGenerator()) {
                    yield projection(item);
                }
            });
        }

        take(number) {
            const wrappedGenerator = this[_generator];
            return new Enumerable(function*() {
                let index =0;
                for (let item of wrappedGenerator()) {
                    if (index++ >= number)
                        break;

                    yield item;
                }
            });
        }


        *[Symbol.iterator](){
            for (let item of this[_generator]())
                yield item;
        }
    }

    class ObjectEnumerable extends Enumerable {
        constructor(obj) {
            super(() => { return obj; });
        }
    }

    // using this stuff

    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const enumerable = new ObjectEnumerable(array);

    for (let item of enumerable.where(item => item < 5).select(item => item * item)) {
        console.log(item); 
    }

    const fibEnumerable = new Enumerable(function*() {
        let last2 = 1,
            last1 = 1;

        while (true) {
            const current = last2;
            last2 = last1;
            last1 += current;
            yield current;
        }
    });

    for (let item of fibEnumerable.select(i => i * i).take(15)) {
        console.log(item);
    }

    const elements = new ObjectEnumerable(document.querySelectorAll("script"))
        .where(i => i.src.indexOf("vendor") != -1).select(i => i.src);

    for (let item of elements) {
        console.log(item);
    }

})();

item => item < 5