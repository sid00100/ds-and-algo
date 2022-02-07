let checkArr = [12, 66, 459, 1, 5639, 1254789, 11]
let output = 0;
let ans = 0;


// console.log(checkThis());
console.log(metSec());

// method-1; automatically checked thedigits in a number by using .toString().lenght methods
function checkThis() {
    for (let i = 0; i < checkArr.length; i++) {
        if (checkArr[i].toString().length == 2) {
            output++
        }
    }
    return output
}

// method-2; here we will find out the exact digits in a number
//  this method doesn't work because / operator doesn't round up to the left btw could have searched on google if there is any method using which its possible to round off but leave.
// function metSec() {

//     for (let i = 0; i < checkArr.length; i++) {
//         let checkDig = checkArr[i]
//         let length = 0;
//         while (checkDig > 0) {

//             checkDig = checkDig / 10;
//             length++
//         }
//         if (length == 2) {
//             ans++
//             console.log(ans);
//         }
//     }
//     return ans;
// }