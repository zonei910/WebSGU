var Merchandise_addbtn = document.querySelector("#Display .merchandise .button1");
var Merchandise_additem = document.querySelector("#Display .merchandise .add");
Merchandise_additem.style.display = "none";


Merchandise_addbtn.addEventListener("click" ,()=>{
    Merchandise_additem.style.display = "block";
    var offbtn = document.querySelector("#Display .merchandise .add-form .head i");
    var addbtn = document.querySelector("#Display .merchandise .add-form .btn-add");
    var resetbtn = document.querySelector("#Display .merchandise .add-form .btn-reset");
    var upload = document.querySelector("#Display .merchandise .add-form .upload input");
    var name = document.querySelector("#Display .merchandise .add-form .name input");
    var price = document.querySelector("#Display .merchandise .add-form .price input");
    var quantify = document.querySelector("#Display .merchandise .add-form .quanity input");
    var description =  document.querySelector("#Display .merchandise .add-form .description textarea");
    var category = document.querySelector("#Display .merchandise .add-form .category select");

    offbtn.onclick = ()=>{
        Merchandise_additem.style.display = "none";
        upload.value = "";
        name.value = "";
        price.value = "";
        quantify.value = "";
        description.value = "";
        category.value = "none";
    }
    
    resetbtn.onclick = ()=>{
        upload.value = "";
        name.value = "";
        price.value = "";
        quantify.value = "";
        description.value = "";
        category.value = "none";
    }

    addbtn.onclick = ()=>{
        if(upload.value == ""){
            alert("Vui lòng thêm ảnh");
            upload.focus();
        }
        if(name.value == ""){
            alert("Vui lòng thêm tên");
            name.focus();
        }
        if(price.value == ""){
            alert("Vui lòng thêm giá tiền");
            price.focus();
    }else{
        var checkprice = parseInt(price.value);
        if(checkprice != price.value){
            alert("Vui lòng nhập giá tiền là số VD: 150.000 thì nhập 150000");
            price.focus();
        }
    }
        if(category.value == "none"){
            alert("Vui lòng chọn loại hàng");
            category.focus();
        }

        if(quantify.value == ""){
            alert("Vui lòng thêm số lượng hiện có");
            quantify.focus();
        }


        /*Tìm kiếm trong đám mảng sản phẩm rồi ném ra */


}
});



function showSanPham(){
    let sosanphammoitrang = 3;
    let tongsotrang = Math.ceil(Product.length/sosanphammoitrang);
    let sotranghientai = 1;
    let vitrihientai = (sotranghientai -1)  * sosanphammoitrang;


    let butt = ``;
    for(let i = 1 ; i<=tongsotrang;i++)
        butt += `
        <div class="page-button" onclick="nuttrang(this)" name="${i}">${i}</div>
    `;


    let n = 0;
    let a = ``;
    for(let i = vitrihientai     ; i < Product.length;i++){
        n++;
     

        a += `
        <div class="table">
                    <img src="${Product[i].images[0]}" width="20%">
                    <div class="product-info">
                        <div>ID: ${Product[i].id}</div>
                        <div>Tên: ${Product[i].name}</div>
                        <div>Loại: ${Product[i].category}</div>
                        <div>Price: ${Product[i].price}</div>
                        <div>Quantity: 10</div>
                        <div>${Product[i].description}</div>
                    </div>
                    <div class="button-group">
                        <button class="edit-buttons1" name="edit-${Product[i].id}"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button class="edit-buttons2" name="delete-${Product[i].id}"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>

        `
        if(n == sosanphammoitrang) break; 
    }


    let showsanpham = document.querySelector("#Display .merchandise #main-content");
    showsanpham.innerHTML = a;
    if(tongsotrang == 1) return 0;
    let shownut = document.querySelector("#Display .merchandise .pagination-buttons");
    if(tongsotrang != 1) 
     shownut.innerHTML = butt;
    else shownut.innerHTML = "";

}


function nuttrang(trang){
    let sosanphammoitrang = 3;
    let tongsotrang = Math.ceil(Product.length/sosanphammoitrang);
    let vitrihientai = (trang.getAttribute("name")-1)  * sosanphammoitrang;


let n =0 ;
let a = ``;
    for(let i = vitrihientai     ; i <Product.length;i++){
        a += `
          <div class="table">
                    <img src="${Product[i].images[0]}" width="20%">
                    <div class="product-info">
                        <div>ID: ${Product[i].id}</div>
                        <div>Tên: ${Product[i].name}</div>
                        <div>Loại: ${Product[i].category}</div>
                        <div>Price: ${Product[i].price}</div>
                        <div>Quantity: 10</div>
                        <div>${Product[i].description}</div>
                    </div>
                    <div class="button-group">
                        <button class="edit-buttons1" name="edit-${Product[i].id}"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button class="edit-buttons2" name="delete-${Product[i].id}"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>

        
        `
        n++;
        if(n == sosanphammoitrang) break; 
    }
    let showsanpham = document.querySelector("#Display .merchandise #main-content");
    showsanpham.innerHTML = a;

}


function showFind(){
    let a = document.querySelector("#Display .merchandise .find .inner");
    if(a.classList.contains("hide")){
        console.log("Hello")
        a.classList.remove("hide");
        a.classList.add("show");
    }else{
        a.classList.remove("show");
        a.classList.add("hide");
    }

}



let filterarr = [];

function find(){
    filterarr = [];
 
let a = document.querySelectorAll("#Display .merchandise .find .choose");

for(let i=0;i<4 ; i++){
    if(a[i].checked == true){
        for(let j = 0 ; j < Product.length ; j++){
            if(Product[j].category == a[i].value){
                filterarr.push(Product[j]);
            }
        }
    }
    }

for(let i = 4 ; i < 8 ; i++){
    if(a[i].checked == true){
        for(let j = 0 ; j < Product.length ; j++){
            let co = 0;

            if(i == 4){
                if(Product[j].price < 500000 ){
                    for(let k = 0 ; k < filterarr.length ; k++){
                        if(Product[j].id == filterarr[k].id ) co = 1;
                    }
                if(co == 0) filterarr.push(Product[j]);
                }
            }
        
            if(i == 5){
                if(Product[j].price  >= 500000 && Product[j].price<=1000000 ){
                    for(let k = 0 ; k < filterarr.length ; k++){
                        if(Product[j].id == filterarr[k].id ) co = 1;
                    }
                if(co == 0) filterarr.push(Product[j]);
                }
            }

            if(i == 6){
                if(Product[j].price  >= 2000000 && Product[j].price<=5000000 ){
                    for(let k = 0 ; k < filterarr.length ; k++){
                        if(Product[j].id == filterarr[k].id ) co = 1;
                    }
                if(co == 0) filterarr.push(Product[j]);
                }
            }

            if(i == 7){
                if(Product[j].price  > 5000000 ){
                    for(let k = 0 ; k < filterarr.length ; k++){
                        if(Product[j].id == filterarr[k].id ) co = 1;
                    }
                if(co == 0) filterarr.push(Product[j]);
                }
            }

        }
    }
}    


   let find = document.querySelector("#Display .merchandise .find_input");
    let result = find.value.trim().toUpperCase();
    
    if(result != ""){
    for(let i = 0 ; i < Product.length ; i++){
        let co = 0;
        let name = Product[i].name.toUpperCase();

        if(name.includes(result)){
            for(let j = 0 ; j <filterarr.length;j++){
                if(Product[i].id == filterarr[j].id) co = 1;
            }
            if(co == 0) filterarr.push(Product[i]);
        }
          
    }
    }
    console.log(filterarr);

    if(filterarr.length == 0){
        alert("Không tìm thấy sản phẩm cần tìm");
       
        find.focus();
        find.onfocus = ()=> {
            find.select();
        }
        return showSanPham();
    }


    let sotranghientai = 1;
    let sosanphammoitrang = 3;
    let tongsotrang = Math.ceil(filterarr.length / sosanphammoitrang);
    let vitrihientai = (sotranghientai - 1) * sosanphammoitrang;

    let butt = ``;
    for(let i = 1 ; i<=tongsotrang;i++)
        butt += `
         <div class="page-button" onclick="nuttrang_filter(this)" name="${i}">${i}</div>
    `;


    let temp = ``;
    let n = 0;
    for(let i = 0 ; i < filterarr.length ; i++ ){
        n++;
        temp += `
           <div class="table">
                    <img src="${Product[i].images[0]}" width="20%">
                    <div class="product-info">
                        <div>ID: ${Product[i].id}</div>
                        <div>Tên: ${Product[i].name}</div>
                        <div>Loại: ${Product[i].category}</div>
                        <div>Price: ${Product[i].price}</div>
                        <div>Quantity: 10</div>
                        <div>${Product[i].description}</div>
                    </div>
                    <div class="button-group">
                        <button class="edit-buttons1" name="edit-${Product[i].id}"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button class="edit-buttons2" name="delete-${Product[i].id}"><i class="fa-solid fa-trash"></i></button>
                    </div>
            </div>

            `;
        if(n == sosanphammoitrang)  break;
    }


    let showsanpham = document.querySelector("#Display .merchandise #main-content");
    showsanpham.innerHTML = temp;


    if(tongsotrang == 1) return 0;
    let shownut = document.querySelector("#Display .merchandise .pagination-buttons");
    if(tongsotrang != 1) 
     shownut.innerHTML = butt;
    else shownut.innerHTML = "";

  

}



function nuttrang_filter(trang){
    let sosanphammoitrang = 3;
    let tongsotrang = Math.ceil(filterarr.length/sosanphammoitrang);
    let vitrihientai = (trang.getAttribute("name")-1)  * sosanphammoitrang;


let n = 0 ;
let a = ``;
    for(let i = vitrihientai  ; i < filterarr.length;i++){
        n++;
        a += `
          <div class="table">
                    <img src="${Product[i].images[0]}" width="20%">
                    <div class="product-info">
                        <div>ID: ${Product[i].id}</div>
                        <div>Tên: ${Product[i].name}</div>
                        <div>Loại: ${Product[i].category}</div>
                        <div>Price: ${Product[i].price}</div>
                        <div>Quantity: 10</div>
                        <div>${Product[i].description}</div>
                    </div>
                    <div class="button-group">
                        <button class="edit-buttons1" name="edit-${Product[i].id}"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button class="edit-buttons2" name="delete-${Product[i].id}"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        `
     
        if(n == sosanphammoitrang) break; 
    }
    let showsanpham = document.querySelector("#Display .merchandise #main-content");
    showsanpham.innerHTML = a;
}