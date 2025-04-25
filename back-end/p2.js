// var returnToBoundaryCount = function(nums) {


//     ant = 0 //2 //5 //0
//     count = 0 //1

//     for(item of nums){
//         if(item > 0 ){
//             ant = ant + item
//         }
//         else if(item < 0 ){
//             ant = ant + item
//         }
//         else{
//             return false
//         }
//     }
//     return ant <= -1? 0 : ant
    
// };



//or
nums = [2, 3, -5]
pos = 0
    count =0
    for(item of nums){
        if(item > 0 ){
            pos = pos + item
        }
        else if(item < 0 ){
            pos = pos + item
        }
        else{
            return false
        }
        if(pos ==0){
            count = count +1
        }
    }

    console.log(count) 