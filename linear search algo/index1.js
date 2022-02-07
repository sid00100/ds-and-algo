let searchArray = [24, 45, 12, 77, 459, 556, 20, 69, 44, "hi"];

// running the function

console.log(search(546));

// we have to find out if 45 exists in the array
function search(id) {
    for (let i = 0; i < searchArray.length; i++) {
        if (searchArray[i] == id) {
            return i
        }
    }
    return -1
}