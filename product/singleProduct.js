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
	
	console.log(product);
	

// }
// console.log(oneProduct());

// // console.log(window.location.href.split('?'));
// // let a = window.location.href.split('?')[1]
// // console.log(a);
// // let b = a.split('=')
// // console.log(b);
function currency(num){
    const currency = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' });
    return currency.format(num)
}

let singleP = '';
if (product) {
	singleP += `<div class="row">
    			<div class="col-lg-6 mb-5">
    				<a href="product/product_images/${product.image1}" class="image-popup"><img src="product/product_images/${product.image1}" class="img-fluid" alt="Colorlib Template"></a>
					
					</div>
    			<div class="col-lg-6 product-details pl-md-5">
    				<h3> ${product.descripition}</h3>
					<h3>Size : ${product.size}</h3>
    				<p class="price" style="color:black; font-size:30px; font-weight:900;">${currency(product.selling_price)}<span></span></p>
    				<p>${product.describe}</p>
    				<p>${product.describe2}</p>
						<div class="row mt-4">
							<div class="col-md-6">
								<div class="form-group d-flex">
		              <div class="select-wrap">
	                  <div class="icon"><span class="ion-ios-arrow-down"></span></div>
	                  <select name="" id="" class="form-control">
	                  	<option value="">Small</option>
	                    <option value="">Medium</option>
	                    <option value="">Large</option>
	                    <option value="">Extra Large</option>
	                  </select>
	                </div>
		            </div>
							</div>
							<div class="w-100"></div>
							<div class="input-group col-md-6 d-flex mb-3">
	             	<span class="input-group-btn mr-2">
	                	<button type="button" class="quantity-left-minus btn"  data-type="minus" data-field="">
	                   <i class="ion-ios-remove"></i>
	                	</button>
	            		</span>
	             	<input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="100">
	             	<span class="input-group-btn ml-2">
	                	<button type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
	                     <i class="ion-ios-add"></i>
	                 </button>
	             	</span>
	          	</div>
          	</div>
          	<p><a href="checkout.html" class="btn btn-outline-primary py-3 px-5" style="color: black; font-weight: 600; width: 70%;">BUY</a></p>
    	   </div>
	</div>`;
	

}else{
	singleP = "<h2>No Product found</h2>";
}




    document.getElementById('pair').innerHTML= singleP;