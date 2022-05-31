//1
const a = "10";
const b = 20;

//3
function sum(a, b) {
    //kiểm tra
    if (typeof a !== "number" || typeof b !== "number") return -1;
    //xử lí
    const result = a + b;
    // kết quả
    return result;
}

//2
console.log(sum(a, b))