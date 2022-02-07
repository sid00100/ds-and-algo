let myName = "siddhant";
console.log(searchLet("z"));;
function searchLet(searchthis) {
    for (let i = 0; i < myName.length; i++) {
        if (searchthis == myName.charAt(i)) {
            return i
        }
    }
    return -1
}