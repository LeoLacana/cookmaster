
// // function nth_prime(n) {
// //     // Write your code here

// //     const validationPrime = (num) => {
// //         for (var index = 2; index < num; index++) {
// //             if (num % index === 0) {
// //                 return false;
// //             }
// //         }
// //         return true;
// //     }

// //     var primeNumbers = [2];
// //     for (var i = 3; primeNumbers.length < n; i+=1) {
// //        if (validationPrime(i)) primeNumbers.push(i);
// //     }
// //     return primeNumbers[primeNumbers.length - 1];

// // }

// // console.log(nth_prime(6));

// function largest_prime_factor(number) {
//     // Write your code here
//     const validationPrime = (num) => {
//         for (var index = 2; index < num; index++) {
//             if (num % index === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
    
//     var primeNumbers = [];
//     for (var i = number - 1; i >= 3; i -= 1) {
//         if (validationPrime(i)) {
//             if (number % i === 0) return i;
//         }
//     }
// }

// console.log(largest_prime_factor(13195));


// function caixa(values) {
//     // Write your code here
//     var valueCorret = values;
//     for (var i = 0; i < valueCorret.length; i += 1) {
//        if (valueCorret[i] === 0) {
//            if (valueCorret[i-1] != undefined) {
//                 valueCorret.splice(i-1, 2)
//                 i-= 2;
//            }
//        } 
//     }

//     var sumValues = 0;

//     valueCorret.forEach((value) => sumValues += value);

//     return valueCorret;
// }

// console.log(caixa([1, 3, 5, 4, 0, 0, 7, 0, 0, 6]));


// function smallest_multiple(roof) {
//     // Write your code here
//     var statusWhile = false;
//     var smallestDivisible = 0;
    
//     while (!statusWhile) {
//         var n = 1;
//         for( var i = 1; i <= roof; i+=1) {
//             if (n%i !== 0) i = roof + 1;
//             if (i === roof) {
//                 smallestDivisible = n;
//                 break;
//             } 
//         }
//         n +=1;
//     }
//     return smallestDivisible;
// }

// console.log(smallest_multiple(10));

function sum_square_difference(n) {
    // Write your code here
    squareOfSums = 0;
    sumOfSquares = 0;
    for (var i = 1; i <= n; i += 1) {
        squareOfSums += i;
    }
    squareOfSums = squareOfSums * squareOfSums;
    
    for (var index = 1; index <= n; index += 1) {
        var square = index * index;
        sumOfSquares += square;
    }

    return sumOfSquares;
}

console.log(sum_square_difference(10));
