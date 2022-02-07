let arr = [12, 45, 77, 89, 100, 500]
let target = 12;
let start = 0
let end = arr.length - 1
function find() {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (target < arr[mid]) {
            end = mid - 1;
        } else if (target > arr[mid]) {
            start = mid + 1
        } else return mid;
    }
    return "not found"
}

console.log(find());