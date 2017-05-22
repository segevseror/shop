



var cart = cart || {};

cart.init = function(){

    var shop = this.getStorage();


    if(shop == null){
        shop = {};
        shop.items = new Array();
        localStorage.setItem('shop', JSON.stringify(shop)); 


        cart.howitem();
    }
};

// add    item in cart 
cart.add = function(button ,id , Stname, price , qul){
console.log("sssss");


    if(cart.check(id) == true){
        alert("this item in cart");
    }else{

        var item = {
            but: button,
            id: id,
            name: Stname,
            price: price,
            qul: qul,
        };


        var shop = this.getStorage();
        shop.items.push(item);
        localStorage.setItem('shop' , JSON.stringify(shop));
    }
   
 window.location.reload();
};



//function check if item is exists
cart.check = function(id){

    var shop = this.getStorage();
   
    for(var x=0 ; x<shop.items.length ; x++){

        if(shop.items[x].id == id){
            return true;
        }
    }
};

//function side how much have item in shop
cart.howitem = function(){

    var howmach = 0;
    var shop = this.getStorage();
    
    if(shop.items.length >= 0){
        for(var x= 0 ; x<shop.items.length;x++){
            howmach += shop.items[x].qul;
        }

        return howmach;

    }
}
cart.clear = function(){


    var shop = cart.getStorage();


    shop.items = new Array();
    console.log(shop.item);
    window.location.reload();
    localStorage.setItem('shop', JSON.stringify(shop)); 





}


cart.getStorage = function(){
    var shop = localStorage.getItem('shop');
    return JSON.parse(shop);
};


cart.removeItem = function(id){

    console.log("removeitem");
    console.log(id);
    this.id =id;
    var shop = cart.getStorage();
    var arryshop = new Array();


    for(var x=0 ; x< shop.items.length ; x++){
        if(this.id != shop.items[x].id){
            arryshop.push(shop.items[x]);

        }
    }
    shop.items = new Array();
    shop.items = arryshop;
    localStorage.setItem('shop', JSON.stringify(shop)); 
    window.location.reload();
};


cart.sum = function(){


    var shop = cart.getStorage();

    var fullsum =0;
    for(var x = 0 ; x<shop.items.length ; x++){

        fullsum += shop.items[x].qul *= shop.items[x].price;

    }
    return fullsum;
}


var bole = false;
var allsum = 0;
cart.coupon = function(){
    
    var pass = Number(document.getElementById("coupon").value);
    
    var shop = cart.getStorage();
 
    
    switch(pass){

        case 123 :
            var price = cart.sum();
            var couponsum= 0.1 * price;
             allsum = price -couponsum;
            console.log(allsum);
            
            bole = true;
            
            
            totall();
            return allsum;
            break;

    }
    
    bole = false;
     totall();
    
};





function chekk(){
    
    
    console.log(bole);
    
    
}

cart.init();
