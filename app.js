// What does the following code return?

new Set([1,1,2,2,3,4]);

// A: Will return a set {1, 2, 3, 4}.

// What does the following code return?

[...new Set("referee")].join("");

// Will return "ref".

// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// m will have two keys for [1, 2, 3] one with a value of true and one false because
// the arrays do not share the same reference.
// m = { [1, 2, 3] => true, [1, 2, 3] => false }

// Write a function called hasDuplicate which accepts an array and returns true 
// or false if that array contains a duplicate


const hasDuplicate = (arr) => ([...new Set(arr)].length !== arr.length);

// Write a function called vowelCount which accepts a string and returns a map 
// where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (str) => {
    str.toLowerCase();
    vowel = ['a', 'e', 'i', 'o', 'u'];
    vowelMap = new Map();
    for (let letter of str) {
        if (vowel.includes(letter)) {
            if (vowelMap.has(letter)) {
                vowelMap.set(letter, vowelMap.get(letter) + 1);
            } else {
                vowelMap.set(letter, 1);
            }
        }
    }
    return vowelMap
}