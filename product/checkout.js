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
	checkP += `Product: ${product.descripition}<br>
             Size: ${product.size}
             <p class="price" style="color:black; font-size:30px; font-weight:600;">${currency(product.selling_price)}<span></span></p>
             <a href="product/product_images/${product.image1}" class="image-popup"><img src="product/product_images/${product.image1}" class="img-fluid" alt="Colorlib Template"></a>`;
             
}else{
	checkP = "<h2>No Product found</h2>";
}




document.getElementById('product').innerHTML= checkP;