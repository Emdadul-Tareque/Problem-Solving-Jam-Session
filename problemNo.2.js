/*
২)  মনে করো তুমি একটা ই-কমার্স ওয়েব সাইট বানাইছো। তোমার কাছে প্রডাক্টগুলো আছে  সেই প্রোডাক্টের ইনফরমেশনগুলো (যেমনঃ প্রোডাক্টের নাম,  প্রোডাক্টের আইডি এবং স্টকে কি পরিমাণে প্রোডাক্ট আছে ) ডাটাবেজে object আকারে সেভ করে রেখেছ।

এখন তোমার কাজ হচ্ছে তুমি একটা ফাংশন লিখবা যেই ফাংশনের কাজ হচ্ছে সে ইনপুট আকারে প্রোডাক্টের নাম দিবে এবং সে ঐ object থেকে যে প্রোডাক্টের নাম ইনপুট হিসেবে নিয়েছে তা বাদে বাকিগুলো Array আকারে রিটার্ন করবে। 

*/

var  products = [
  {
    productName: "Laptop",
    productId: 01,
    stock: 100,
  },
  {
    productName: "Microphone",
    productId: 02,
    stock: 10,
  },
  {
    productName: "Monitor",
    productId: 03,
    stock: 20,
  },
]


function product(productName) {
    const restProduct = []
    for(let i = 0; i < products.length; i++){
        const element = products[i];
        for(let value in element){
            if(value == "productName" && element[value] == productName){
                restProduct.push(element);
            }
        }

    }

    return restProduct;


}


console.log(product("Monitor"))




// const product = {
//     productName: "Laptop",
//     productId: 01,
//     stock: 100,
//   };

//   for(let property in product){
      

//     if(property == "productName" && product[property] != "Microphone"){
//         console.log(product[property]);
//     }
      
//   }
