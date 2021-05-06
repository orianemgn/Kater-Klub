//Count the smiley faces!
//https://www.codewars.com/kata/583203e6eb35d7980400002a/solutions/javascript

function countSmileys(arr) {
    return arr.filter( face => /[:;][-~]?[)D]/.test(face) ).length;
}