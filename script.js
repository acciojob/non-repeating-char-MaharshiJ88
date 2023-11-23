function firstNonRepeatedChar(str) {
 // Write your code here
	if (!str || typeof str !== 'string') {
        return null;
    }

    const charCount = {};

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // No non-repeated character found
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
