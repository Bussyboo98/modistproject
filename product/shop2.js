// // let single = items.find(item => item == window.location.href)

// let oneProduct = function () {
	let id = window.location.href.split('?')[1];
		id = id.split('=');
		id = id[1];

	let product = items.find(function(item, index){
		if(item.id == id) {
			return item;
		}
	}) 
	
	console.log(product, id);
	
function currency(num){
    const currency = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' });
    return currency.format(num)
}

let checkP = '';
if (product) {
	checkP += ` <h3 style="font-family: 'Charm', cursive;">EverythingThrift Teams</h3>
    <h6>Your payment, ${currency(product.selling_price)} for  ${product.descripition},Size:${product.size} been recieved. You will recieve an email shorthly. Shop with us again</h6>
    <a href=""><img src="product/product_images/${product.image1}" class="img-fluid col-lg-3" alt="Colorlib Template"></a>
    <br>
  <a href="index.html"><button class="btn btn-primary pl-5 pr-5 mt-3 text-white">OK</button></a>`         
}else{
	checkP = "<h2>No Product found</h2>";
}




document.getElementById('product').innerHTML= checkP;