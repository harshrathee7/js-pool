//As many inputs as required so this means the number of parameters are not limited
function fun(...input)
{
    let sum=0;
    for(let i of input)
    {
        sum+=i;
    }
    return sum;
}
console.log(fun(1,2));
console.log(fun(1,2,4));
console.log(fun(1,2,3,4));

//spread operator
let arr1=[1,2,3];
let arr2=[4,5,6];
arr = [...arr1, ...arr2];
console.log(arr);