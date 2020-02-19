// let a = 2;
// let b = 4;
// let c = 7;  
    function maximal(a, b, c){
    let mult = a * b * c;
    let summ = a + b + c;

   
        if (mult > summ)
            return(mult + 3);
        else
            return(summ + 3);
    }
    console.log(maximal(a,b,c));