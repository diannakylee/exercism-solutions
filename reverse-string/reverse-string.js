export const reverseString = (string) => {
    let reverse = '';
    // loop through each letter in the string, and add the last letter of the string to the new variable reverse until i = 0.
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse
};
