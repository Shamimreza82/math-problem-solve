// 1. feet to inch



// function feetToInch (number) {
//     const feetToInchConvirt = number * 12; 
//     console.log (feetToInchConvirt); 
// }

// console.log (feetToInch()); 



// 2. centimeterToMeter

// function centimeterToMeter (number) {
//     const centimeterToMeterConvirt = number * 0.01; 
//     return centimeterToMeterConvirt; 
// }


// const centimetertomitter = 1; 
// console.log(centimeterToMeter(centimetertomitter))




// 3. bestFriend 

const friends = ["asif", "al Mamun Cool", "safaul", "abdur Rahim", "hasan" ]


function bestFriend (friendsName) {
    let bestFriend = friendsName[0];
    for (let i = 0; i < friendsName.length; i++){
        const element = friendsName[i]; 
        if (element.length > bestFriend.length){
            bestFriend = element; 
        }
    }
    return bestFriend; 
}



const friendNameAll = bestFriend (friends); 
console.log (friendNameAll); 