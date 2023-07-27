/*
Problem: Detect Anagrams

An anagram is a word formed by rearranging the letters of another word, using all the original letters exactly once. For example, "listen" and "silent" are anagrams.

Write a function that takes in two strings and determines whether they are anagrams of each other.

Input: Two strings str1 and str2, each containing only lowercase English letters. The lengths of str1 and str2 will be the same.

Output: Return true if str1 and str2 are anagrams of each other, otherwise return false.

Examples:

areAnagrams("listen", "silent") should return true.
areAnagrams("hello", "world") should return false.

*/

function areAnagrams(word1, word2) {

    if(word1.length !== word2.length){
        return false;
    }

    const hashTable = {};
    
    for (let i = 0; i < word1.length; i++) {
        hashTable[word1[i]] = word1[i];
    }

    for (let i = 0; i < word2.length; i++) {
        if(!hashTable[word2[i]]) {
            return false;
        }
    }

    return true;
}

// console.log(areAnagrams("listen", "silent"));

function findFirstRepeatedChar(str) {
    const hashTable = {};

    for (let i = 0; i < str.length; i++) {
        if (hashTable[str[i]]) {
            return str[i];
        } else {
            hashTable[str[i]] = i;
        }
    }

    return null;
}

console.log(findFirstRepeatedChar([3,5,8,8,5]));