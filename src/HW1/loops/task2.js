let a = 7;
function simple(a) {
    let count = 0;
    for (let i = 0; i <= 100; i++) {
        if (a % i == 0) {
            console.log("not simple")
        }
    }
    if (count == 2)
        console.log("simple");
}
console.log(simple(a))