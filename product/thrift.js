//get o\prodct row
//loop produvt data 
// innerhtml  

function currency(num){
    const currency = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' });
    return currency.format(num)
}

let cont ='';
items.forEach(item=>{
    cont += `<div class="col-sm col-md-6 col-lg-4 ftco-an">
    <div class="product" >
        <a href='product-single.html?id=${item.id}' class="img-prod"><img class="img-fluid col-lg-12" src='product/product_images/${item.image1}' alt="Colorlib Template">
        <span class="status" style="margin-left:13px; margin-bottom:15px; color:white; background-color:blue; 
        font-weight:500;text-transform:capitalize;">${item.status}</span>
        </a>
        <div class="text py-3 px-3" >
            <h3><a href="#"></a></h3>
            <div class="d-flex">
                <div class="pricing">
                    <p class="price">Market price ${currency(item.market_price)}<span></span></p>
                    <p class="price">Selling price ${currency(item.selling_price)}<span></span></p>
                    
                </div>
                <div class="rating">
                
                    
                </div>
            </div>
            <hr>
            <h3 style="text-transform:capitalize; font-weight:600;text-align:center">${item.descripition} </h3>
            <p class="price" style="font-weight:600;text-align:center">Size: ${item.size}<span></span></p>
            <div style = "background-color:#eceef3;"> 
            <hr>
             
            <a href="https://wa.me/2348023641729?text=Hi,%20my%20name%20is%20____%20.I'm%20interested%20in%20your%20'${item.descripition}',%20Size:%20${item.size}%20for%20sale%20which%20cost%20${currency(item.selling_price)}">
            <i class="fa fa-whatsapp" style="font-size: 30px; margin-left: 10%; color: rgb(19, 255, 38)"></i></a>
            <a href="https://twitter.com/EverythingThri2?s=08"><i class="fa fa-twitter" style="font-size: 30px; margin-left: 13%; color:rgb(0, 195, 255)"></i></a>
            <a href="https://www.instagram.com/invites/contact/?i=k6tf33hg2dsz&utm_content=lapjnt9"><i class="fa fa-instagram" style="font-size: 30px; margin-left: 13%; color: rgb(255, 45, 133);"></i></a>
            <a href="https://www.facebook.com/thriftandnice/"><i class="fa fa-facebook-square" style="font-size: 30px; margin-left: 20%; color: rgb(0, 80, 253);"></i></a>
            <hr>
            </div>
            <p class="bottom-area d-flex">
                <button class="btn " style="margin-left: 15%; width: 70%;">
                <a href="checkout.html?id=${item.id}" class=" py-3 px-5" style="color: black; font-weight: 600; width: 70%;">BUY</a></button>

            </p>
        </div>
    </div>
</div>`;
    
    
})

document.getElementById('list').innerHTML= cont;

