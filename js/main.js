// get data form html inputs
var productNameInput = document.getElementById('ProductName');
var productPriceInput = document.getElementById('ProductPrice');
var productCategoryInput = document.getElementById('ProductCategory');
var productDesInput = document.getElementById('ProductDes');
var addBtn = document.getElementById('addBtn');
var editBtn = document.getElementById('editBtn');
var alertName= document.getElementById('alertName');
var alertPrice = document.getElementById('alertPrice');
var alertcategory = document.getElementById('alertcategory');
var searchTerm = document.getElementById('searchTerm');
var currentIndex;
var productContainer =[];
editBtn.style.display="none";



//validation data in localStorage 

 if (localStorage.getItem('ourProduct') !=null)
  {
   productContainer= JSON.parse(localStorage.getItem('ourProduct'))
 displayProduct();
 }
//add product to productContainer

function addProduct()
{
    //  if(validationProductNameInput() ==true )
  //  {
    var product ={
      name :productNameInput.value,
      price : productPriceInput.value,
      category :productCategoryInput.value,
      desc: productDesInput.value
      
    }
    
      productContainer.push(product)
      localStorage.setItem('ourProduct',JSON.stringify(productContainer));
      
     displayProduct();
     reset();
  
   }
 
   

addBtn.addEventListener('click', addProduct);



  // display data in html
function displayProduct() {
  var cartoona ='';
  for(var i=0 ; i<productContainer.length ; i++)
  {
    cartoona +=`
    <tr>
    <td>${i}</td>
    <td>${productContainer[i].name}</td>
    <td>${productContainer[i].price}</td>
    <td>${productContainer[i].category}</td>
    <td>${productContainer[i].desc}</td>
    <td>
       <button onclick='updateProduct(${i}) ' id='updateBtn' class="btn btn-info rounded-pill">update</button>
    </td>
    <td> 
       <button onclick='deleteProduct(${i})' class="btn btn-danger rounded-pill">Delete</button>
    </td>
 </tr>
    `
  }
 
   document.getElementById('tableBody').innerHTML = cartoona;
   localStorage.setItem('ourProduct',JSON.stringify(productContainer));
}


//reset data
function reset()
{
  productNameInput.value =" ";
  productPriceInput.value =" ";
  productCategoryInput.value =" ";
  productDesInput.value =" ";
}

//update product
function updateProduct(i)
{
   productNameInput.value =productContainer[i].name;
   productPriceInput.value = productContainer[i].price;
   productCategoryInput.value =productContainer[i].category;
   productDesInput.value = productContainer[i].desc;
   currentIndex = i;
   addBtn.style.display="none"
   editBtn.style.display="block"
}


 // edit product
 function editProduct(){

  productContainer[currentIndex].name =productNameInput.value ;
  productContainer[currentIndex].price=productPriceInput.value ;
  productContainer[currentIndex].category=productCategoryInput.value ;
  productContainer[currentIndex].desc= productDesInput.value;
  addBtn.style.display="none"
  editBtn.style.display="block"
  displayProduct()
   reset()
   addBtn.style.display="block"
  editBtn.style.display="none"
 }
editBtn.addEventListener('click' , editProduct )



//delete Product
function deleteProduct(i) {
  productContainer.splice(i,1);
  localStorage.setItem('ourProduct',JSON.stringify(productContainer));
   displayProduct()
}

//search product
function searchProduct( term)
{
  var cartoona ='';
  for(var i=0 ; i<productContainer.length ; i++)
  {
     if(productContainer[i].name.toLowerCase().includes(term.toLowerCase()) ==true)
     {
      cartoona +=`
      <tr>
      <td>${i + 1}</td>
      <td>${productContainer[i].name}</td>
      <td>${productContainer[i].price}</td>
      <td>${productContainer[i].category}</td>
      <td>${productContainer[i].desc}</td>
      <td>
         <button onclick='updateProduct(${i}) ' id='updateBtn' class="btn btn-info rounded-pill">update</button>
      </td>
      <td> 
         <button onclick='deleteProduct(${i})' class="btn btn-danger rounded-pill">Delete</button>
      </td>
      </tr>
    `
      
     }
    

  }
  document.getElementById('tableBody').innerHTML = cartoona;
}
searchTerm.addEventListener('keyup',function()
{
  searchProduct(this.value)
})




 
//validation productName
//  function validationProductNameInput(){
//   var regex =/^[A-Z][a-z]{3,5}[0-9]{0,3}$/
//   if(regex.test(productNameInput.value))
//   {
//     alertName.classList.replace('d-block','d-none')
//     return true;
//   }
//   else
//   {
//     alertName.classList.replace('d-none','d-block')
//     return false;
//   }
// }


//validation price Input
// function validationProductPriceInput() {
//    var regex =/^(([1-9][0-9]{3})|10000)$/

//    if(regex.test(productPriceInput.value) ==true)
//    {
    
//     alertPrice.classList.replace('d-block','d-none')
//      return true;
//    }
//    else
//    {
//     alertPrice.classList.replace('d-none','d-block')
//      return false;
//    }
//  }

//  //validation product category
//  function validationProductCategoryInput() {
//   var regex =/((mobile|tv)|labtop)$/

//   if(regex.test(productCategoryInput.value) ==true)
//   {
   
//     alertcategory.classList.replace('d-block','d-none')
//     return true;
//   }
//   else
//   {
//     alertcategory.classList.replace('d-none','d-block')
//     return false;
//   }
// }