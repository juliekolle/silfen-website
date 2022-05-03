console.log("hello fellow coder");

// const browserUrl = window.location.search;
// const urlParams = new URLSearchParams(browserUrl);
// const id = urlParams.get("id");

// this is what should be there as hardcoded
const id = 53;

console.log("id from url", id);
//https://jomediart.dk/wordpress/wp-json/wp/v2/product_list/51?_embed
const url = `https://jomediart.dk/wordpress/wp-json/wp/v2/product_list/${id}?_embed`;
// const url = "https://jomediart.dk/wordpress/wp-json/wp/v2/categories?id=53";
console.log(url);
fetch(url)
.then((response) => {
    if (!response.ok){
        throw Error(response.statusText);
    }
    return response.json();
})
.then((data) =>{
    //We have the data
    //console.log(data);
    handleData(data);
})
/* .catch((e) => {
    //Whoops something went wrong
    console.error("An error occured", e.message);
} );*/

function handleData(data){
   // console.log(data)
    showBag(data);
    // data.forEach(showBike);
}

function showBag(bag) {
    console.log(bag);
    //grab the template
    //const template = document.querySelector("#productPurchaseTemplate").content;

    //clone it
    // const copy = template.cloneNode(true);

    // change content
    document.querySelector("#big-product-image").src = bag.photo.guid;
    document.querySelector("h1").textContent = bag.product_name;
    // document.querySelector(".product-description").textContent = bag.;
    document.querySelector(".price-productpage").textContent = bag.price;


    // //grab parent
    // const parent = document.querySelector("#product-page");

    // //append
    // parent.appendChild(copy);
}