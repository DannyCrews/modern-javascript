// function loopOver10(action) {
//   for (var i = 0; i < 10; i++) {
//     action(i);
//   }
// }

/*
loopOver10(function(number) {
  console.log(number);
});
*/


// loopOver10(number => console.log(number));

// loopOver10(number => {
//   console.log(number);
//   console.log(number * 10);
// });

// var noParamFunc = () => console.log("hi");
// noParamFunc();

// var multiParamFunc = (left, right) => left + right;
// console.log(multiParamFunc(10,20));
//
// About this
var obj = {
  name: "dan",

  showName() {
    console.log("My name is " + this.name);
    var that = this;

    setTimeout(function() {
      console.log("My name is still " + that.name);
    }, 1000);

    setTimeout(() => {
      console.log("My name is still " + this.name + " again");
    }, 1000);
  }
};

obj.showName();
