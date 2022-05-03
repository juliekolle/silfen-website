//const url = "https://jomediart.dk/wordpress/wp-json";
window.addEventListener("load", setup);
//const endpoint = "https://jomediart.dk/wordpress/wp-json/wp/v2/product_list";

function setup(){
    const template = document.querySelector("bag_templete")
    getProduct_list();
}
function getProduct_list(){
    fetch("https://jomediart.dk/wordpress/wp-json/wp/v2/product_list?_embed")
    .then(res => res.json())
    .then(setupProduct_list);
}

function setupProduct_list(bags){
    //console.log(bags)
    bags.forEach(showbag)  
}

function showbag(bag){
    const template = document.querySelector("template").content;
    const clone= template.cloneNode(true);
    console.log(bag);
    clone.querySelector("h3").textContent = bag.title.rendered;
    const imgurl = bag._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
    clone.querySelector("img").src = imgurl

  

   //console.log(price);
//const currency = price._embedded
//clone.querySelector(".price").textContent = price;
document.querySelector("main").appendChild(clone);


}

//*function showprice(price){
    //const template = document.querySelector("template").content;
    //const clone = template.cloneNode(true);
    //console.log(price);
   // clone.querySelector("p").textContent = price;

//}