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



// 6. find avarage Number. 


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



// 7. find find Even Or Odd number. 

// function evenOrOddNumber (number) {
//     if ( number % 2 == 0) {
//         return "This is even Number"
//      }
//      else {
//         return "This is Odd number"
//      }
// }; 


// console.log ( evenOrOddNumber(1)); 
//  const arr = [23, 56, 67, 78, 54, 78, 43]; 
// console.log(arr.indexOf(0)); 






// 8. find Leap Years. 

// function isleapYear (year) {
//     if ( year % 4 == 0) {
//         return "This is leap Year"
//     }
//     else {
//         return "This is not a leap Year"
//     }
// }


// console.log (isleapYear ("2032")); 





// 9. String Concat. 


// let name = "shamim Reza"
// let name2 = "reza"
// let name3 = "hasan" 

// const addString = name.concat( " ",  name2,  " ", name3); 
// // console.log ( addString); 








// 10. Find Dublicate Number / Name. 


// function findDiblicateName(name){
//     let name1 = []; 
//     for( let items of name){
//       if (name1.includes(items) === false){
//         name1.push(items); 
//       }
//     }
//     return name1;   
// }


// const name = [34, 34, 56, 465, 44, 44, 66, 77, 77]

// console.log (findDiblicateName(name))




// 11. Find tickiet with discount. 


// function ticketPrice (number) {
//     const first100Rate = 100; 
//     const second100Rate = 90; 
//     const restTticketRate = 70; 
//     if(number <= 100)
// }



// 12. Find Bad Data on an arr. 

// function findingBadData(arr) {
//     if (!Array.isArray(arr)) {
//         return "Please Enter Valid Number"
//     }
//     let goodData = 0;
//     let badData = 0;
//     for (let items of arr) {
//         if (items < 0) {
//             badData++;
//         }
//     }
//     return badData;
// }


// const arr = [2, -5, -7, -13];
// const numbers = findingBadData(arr);
// console.log(numbers); 





// 13. find inInteger number. 



// function inInteger (number) {
//     if (typeof number !== "number"){
//         return "Please input a number"
//     }
//     else if (number % 2 == 0){
//         return true; 
//     }
//     else {
//         return false; 
//     }
// }
   


// const numbers = inInteger (8); 
// console.log (numbers); 





// 14. find Valid javaScript File name. 



// function isjavaScriptFile (fileName){
//     if (typeof fileName !== "string"){
//         return "please Provide a valid file Name"
//     }
//     else if (fileName.toLowerCase(fileName).endsWith(".js")){
//             return true;
//     }
//     else {
//         return false; 
//     }
// }



// const validFileName = isjavaScriptFile ("first.js"); 
// console.log(validFileName); 






// 15. find is 7 large?. 


// function idLGSeven (number){
//     if ( typeof number !== "number") {
//         return "Please Provide a number"
//     }
//     else if ( number < 7){
//         return number - 7;
//     }
//     else {
//         return number * number; 
//     }
// }


// const laegenumber = 15; 
// console.log (idLGSeven ( laegenumber)); 





// 16. find gems in last. 


// function gemsTodiamond (num1, num2, num3){
//    if ( typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number"){
//     return "provide a valid number"
//    }else if ( num1 < 0 || num2 < 0 || num3 < 0){
//      return "Please Provide positive Number"
//    }
//     let friendFirst =  21; 
//     let friendsecond = 32; 
//     let friendthird =  43; 

//    const totalgems = (num1 * friendFirst) + (num2 * friendsecond) + (friendthird * num3); 
//    if ( totalgems > 2000){
//     let total =  totalgems - 2000; 
//     return total; 
//    }
//    else {
//      return totalgems;
//    }
   

// }


// const total = gemsTodiamond (20,200,50); 
// console.log(total);