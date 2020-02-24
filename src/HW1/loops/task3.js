let a = 140;
function sqrt(a) {
    let i = 1;
    do {
        i++;
    } while (Math.sqrt(a) - i >= 1);
    if(a != NaN && a != undefined)
        return i;
    return "error";
}
console.log(sqrt(a))