function test1 (fnumber , snumber) {
    var z = fnumber + snumber;
    console.log("first Number is "+ fnumber + " Second Number is "+ snumber + " Sum is " + z); 
    return z;
}

let out = test1(34, 56);
console.log(out);

test1(45, 78);
test1(65, 34);
test1(23, 89);