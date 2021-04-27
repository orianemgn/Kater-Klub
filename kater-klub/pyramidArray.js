//Pyramid Array
//https://www.codewars.com/kata/515f51d438015969f7000013/javascript


function pyramid(n) {
    let pyramid = []
    for (let i = 0; i < n; i++) {
        let row = new Array(i +1).fill(1)
        pyramid.push(row)
    }
    return pyramid
}