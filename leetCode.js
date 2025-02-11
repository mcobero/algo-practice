//leetCode.js
//5/15/2021

//Given a valid (IPv4) IP address, return a defanged version of that IP address.
//A defanged IP address replaces every period "." with "[.]".

//GIVEN BY LEETCODE
//@param {string} address
//@return {string}
//var defangIPaddr = function(address) {
    
//};

//SUCCESSFUL SUBMISSION:
//.spit() - this divides the stringn based on the passed in character (will default to an array that splits at each character and add in commas). 
//.join() - this will put it back together as a string "" with whatever you want to replace certain characters with. 

var defangIPaddr = function(address) {
	return address.split('.').join('[.]')};
	var result = defangIPaddr("1.1.1.1");

    console.log(result)


//5/22/2021
// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string s, split it in the maximum amount of balanced strings.
// Return the maximum amount of split balanced strings.

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

var balancedStringSplit = function(s) {
    this.answer = 0;
    count = 0;
    for(var i = 0; i <s.length; i++){
        if (s[i] == "L"){
            count ++;
        } else {
            count --;
        }
        if (count === 0){
            this.answer ++;
        }
    }
    return this.answer;       
};

//Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
//EX:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

var shuffle = function(nums, n) {
    this.result = [];
    for(var i = 0; i < n; i++){
        this.result.push(nums[i]);
        this.result.push(nums[i+n]);
    }
    return this.result;
};


// 5/29/2021
//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

var runningSum = function(nums) {
    var sum = 0;
    newArr = [];
    for(var i = 0; i < nums.length; i++){
        sum = sum + nums[i];
        newArr.push(sum);
    }
    return newArr;
};

//console.log(runningSum([1,2,3,4]));


//Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the -ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.
//@param {number[]} candies
//@param {number} extraCandies
//@return {boolean[]} <--- On leetCode you must pay attention to what it is asking for as far as data type!!

var kidsWithCandies = function(candies, extraCandies){
    let  newArr = [];
    let thomas = 0;
    for(var i = 0; i < candies.length; i++){   //Others used Math.max(...candies) library to find the largest value within the declared array
        if(candies[i] > thomas){
            thomas = candies[i];
        }
    }
    
    for(var i = 0; i < candies.length; i++){
        console.log(candies[i] + extraCandies);
        if(candies[i] + extraCandies >= thomas){
            newArr.push(true);   //we had put "" string values here which threw the leetCode result checker!
        } else {
            newArr.push(false);  //we had put "" string values here which threw the leetCode result checker!
        }
    }
    return newArr;
};

//console.log(kidsWithCandies([2,3,5,1,3], 3));

// 06.05.21
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

var maxSubArray = function(nums) {
    var max_sum = nums[0];
    var sum = 0;
    for (var i=0; i<nums.length; i++) {
        sum += nums[i];
        max_sum = Math.max(sum, max_sum)
        if (sum < 0) {
            sum = 0;
        }
    }
    return max_sum;
};

//console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

// 06.06.21
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
//@param {string} s
//@param {number} numRows
//@return {string}

var convert = function (s, numRows) {
    var row_pos = 0;
    var row_adj = 1;
    var newArr = [];

    for (var i = 0; i<s.length; i++) {
        rowdata = newArr[row_pos];
        if (rowdata == undefined) {rowdata = [];}
        rowdata.push(s[i]);
        newArr[row_pos] = rowdata;

        row_pos += row_adj;
        if (row_pos == 0) {row_adj=1;}
        if (row_pos == numRows-1) {row_adj=-1;}

    }

    return newArr.join("").replace(/,/g, '');
}

console.log(convert("PAYPALISHIRING", 3))


//06.13.21
//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".
var longestCommonPrefix = function(strs) {
    if (strs.length == 1) {return strs[0]}
    match = ''
    for (i=0; i<strs[0].length; i++){
        pfx = strs[0].substring(0, i+1)
        count_match = 0;
        for (j=0; j<strs.length; j++){
            if ( pfx == strs[j] || strs[j].startsWith(pfx)){
                count_match ++;
            }
        }
        if (count_match == strs.length){
            match = pfx
        }
    }
    return match
};

console.log(longestCommonPrefix(["flower","flow","flight"]))


//06.13.21
//Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
//Notice that you may not slant the container.

var maxArea = function(height) {
    var max = 0;
    var front = 0;
    var back = height.length - 1;

    while (back - front > 0) {
        max = Math.max(max, (Math.min(height[front], height[back]) * (back-front)))
        if (height[front] > height[back]) {
            back--;
        } else {
            front++;
        }
    }
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))

// 06.20.21
//You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

var numJewelsInStones = function(jewels, stones) {
    var count = 0
    for (var i = 0; i < stones.length; i++) {
        if (jewels.search(stones[i])>=0){
            count++;
        }
    }
    return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"))

// 06.20.21
//You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
//A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

var maximumWealth = function(accounts) {
    var wealth = []
    for (var i = 0; i < accounts.length; i++){
        let sum = accounts[i].reduce((a,b) => {return a + b;}, 0);
        wealth.push(sum);
    }
    return Math.max(...wealth);
};

console.log(maximumWealth([[1,2,3], [3,2,1]]))