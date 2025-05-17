 nums = [1, 2, 1]
 ans = nums
console.log(ans.concat(nums))

//or

function concate(nums){
    var ans = nums
    console.log(ans.concat(nums))
}
nums = [1,3,2,1]
concate(nums)

num = [1,2,3]
result = [...num, ...num]
console.log(result);
