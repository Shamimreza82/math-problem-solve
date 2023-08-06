// 1. feet to inch

// function feetToInch (number) {
//     const feetToInchConvert = number * 12; 
//     return feetToInchConvert; 
// }

// const feet = 1;
// const convertResult = feetToInch (feet); 
// console.log (convertResult);  


// 2. Centimeter To Meter

// function centimeterToMeter(number) {
//     const centimeterToMeter = number * 0.01;
//     return centimeterToMeter;
// }


// const centimeter = 1;
// const convertResult = centimeterToMeter(centimeter);
// console.log(convertResult);




// 3. Best Friend

// function bestFriend(friendsName) {
//     let bestFriend = friendsName[0];
//     for (let i = 0; i < friendsName.length; i++) {
//         const element = friendsName[i];
//         if (element.length > bestFriend.length) {
//             bestFriend = element;
//         }
//     }
//     return bestFriend;
// }

// const friends = ["asif", "al Mamun Cool", "safaul", "abdur Rahim", "hasan"]
// const friendName = bestFriend(friends);
// console.log(friendName);




// 4. Only Positive

// function onlyPositive(number) {
//     let positiveNumber = []; 
//     for (let i = 0; i < number.length; i++) {
//         const element = number[i];
//         if (element < 0) {
//             break;
//         }
//         console.log(element);
//     }
// }

// const numbers = [45, 87, 96, 11, 63, -56, 71, 28];
// const positiveNumbers = onlyPositive(numbers);





// 5. Paper Requirements

// function paperRequirements(num1, num2, num3) {
//     const book1 = 100;
//     const book2 = 200;
//     const book3 = 300;

//     const book1PaperRequire = num1 * book1;
//     const book2PaperRequire = num2 * book2;
//     const book3PaperRequire = num3 * book3;

//     const totalpageRequire = book1PaperRequire + book2PaperRequire + book3PaperRequire;
//     return totalpageRequire;
// }


// const paperCount = paperRequirements(1, 1, 1);
// console.log(paperCount); 






// let math = 75.25; 
// let biology = 65; 
// let chemisty = 80; 
// let physics = 35.45; 
// let bangla = 99.50; 


// let totalMarks = math + biology + chemisty + physics + bangla; 

// let avaraheMarks = totalMarks / 5; 
// let markavarage = avaraheMarks.toFixed(2);
// let flotmarks = parseFloat(markavarage)
// console.log (flotmarks); 




// function evenOrOddNumber (number) {
//     if ( number % 2 == 0) {
//         return "This is even Number"
//      }
//      else {
//         return "This is Odd number"
//      }
// }; 


// console.log ( evenOrOddNumber(1)); 




function isleapYear (year) {
    if ( year % 4 == 0) {
        return "This is leap Year"
    }
    else {
        return "This is not a leap Year"
    }
}


console.log (isleapYear ("2032")); 