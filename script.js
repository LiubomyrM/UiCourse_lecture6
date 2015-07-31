"use strict";
/*var obj = {
    a: 1,
    b: 2,
    add: function () {
        return this.a + this.b;
    }
};

function l(){
    var count = 0;
    return function(){
        return count++;
    }
}
var a=l();
console.log(l());
console.log(l());
console.log(l());

function g(){
    var count = 0;
    count ++;
    return count;
}
console.log(g());
console.log(g());
console.log(g());

var a = [];
for (var i = 0; i < 3; i++) {
   a.push(function() {
      console.log(i);
   });
}
for (var j=0; j < a.length; j++) {
   a[j]();
}


make this work*/
/*var a = [];

function pushIt(i) {
    return function () { console.log(i); };
}


for (var i = 0; i < 3; i++) {
   a.push(pushIt(i));
}
for (var j=0; j < a.length; j++) {
   a[j]();
}
*/
/*
var a = [];
for (var i = 0; i < 3; i++) {
   (function(i) {
        a.push(function() {
            console.log(i);
        });
   })(i)
}

for (var j=0; j < a.length; j++) {
   a[j]();
}*/