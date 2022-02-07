let multiDimArr = [
    [1, 4, 6],
    [9, -100, -8]
]

console.log(searchMin());
function searchMin() {
    min = multiDimArr[0][0];
    for (let row = 0; row < multiDimArr.length; row++) {
        for (let column = 0; column < multiDimArr[row].length; column++) {
            if (multiDimArr[row][column] < min) {
                min = multiDimArr[row][column];
            }
        }
    }
    return min
}