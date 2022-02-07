let arrayName = [21, 77, 89, 2, 3, -1, -3]
console.log(arrayMin());
function arrayMin() {
    let min = arrayName[0];
    for (let i = 0; i < arrayName.length; i++) {
        if (arrayName[i] < min) {
            min = arrayName[i]
        }
    }

    return min;
}