
const url = "https://jomediart.dk/wordpress/wp-json";

fetch (url)
 .then(function(res){
     return res.json();
 })

 .then(function(data){
 handleProductList(data);

 })

 function handleProductList(data){

data.forEach(showProduct);
 }