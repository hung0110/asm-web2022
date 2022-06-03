const a = 10;
const b = 20;

function sum(a, b) {
    //check
    if (typeof a !== "number" || typeof b !== "number") return -1;
    const total = a + b;
    //return
    return total;
}
sum(a, b);
////////////
////////////
///////////
const products = [
    { id: 1, name: "Product A", img: "https://picsum.photos/400/400" },/*0*/
    { id: 2, name: "Product B", img: "https://picsum.photos/400/400" },/*1*/
    { id: 3, name: "Product c", img: "https://picsum.photos/400/400" },
];
function listProduct(products) {
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    for (let i = 0; i < products.length; i++) {
        //const product = products[i];
        result += `
                <div>
                    <img src="${products[i].img}" alt="" />
                    <h3><a href="">${products[i].name}</a></h3>
                </div>
        `;
    }
    return result;
}
function render(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = content;
    }
}
render("products", listProduct(products))