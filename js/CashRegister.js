function CashRegister(){
 
    console.log("Create the cash register");
	
	//Item
	function Item(code, name, price){
		this.code = code;
		this.name = name;
		this.price = price;
	}
	
	// Use to store all our items for sale
	var inventory = new Array();
	
	
	//Example of adding an item
	inventory.push( new Item("B01","BEER","6.99"));
	
	
	// Provide a subtotal and I will return the taxes
	function AddTax(subtotal){
		return total;
	}
	
	// list total of items
	var products = new Array();
	function AddItem(code,name,price){
		products.push(new Item(code, name, price));
	}
	
	// This is to scan the items
	function priceItem(code){
		return price;
	}
	
	// This is to substract the items
	function SubstractItem(code, name, price){
		delete products[Item(code, name, price)];
	}
	
	// Providing the printed bill
	function printBill(){
     var subtotal=0;
     for (i=0; i<=products.length; i++){
         var bill = products[i].code + " " + products[i].price;
             bill += '<br/>';
             
         subtotal + products[i].price;
              }
             
        return bill;
        return subtotal;
        addTax(subtotal);
        billNumber();
           
    }
	
	//This is a discount Button for the items
    function selectDiscount(discount){
        return price;
    }
	
	//Adding the taxes
    function addTax(subtotal){
        return total;
    }
	
	
	
	
}