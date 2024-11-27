
let filterarr = [];
function filter(){
    filterarr = [];
    let select = document.querySelector("#filter");
    if(select.value == "none"){
        showSanPham();
        return 0;
    }
  let Product = JSON.parse(localStorage.getItem("products"));

if(select.value == "ring" || select.value == "watch" || select.value == "bracelet" || select.value == "neckalce"){
    for(let i = 0 ;i < Product.length;i++)
        if(Product[i].category == select.value)
            filterarr.push(Product[i]);
}else{
    if(select.value == "500.000"){
        for(let i = 0 ;i < Product.length;i++)
            if(Product[i].price < 500000) 
                filterarr.push(Product[i]);
    }

    if(select.value == "500.000 - 1.000.000"){
        for(let i = 0 ;i < Product.length;i++)
            if(Product[i].price >= 500000 && Product[i].price<=1000000) 
                filterarr.push(Product[i]);
    }

    if(select.value == "2.000.000 - 5.000.000"){
        for(let i = 0 ;i < Product.length;i++)
            if(Product[i].price >= 2000000 && Product[i].price<=5000000) 
                filterarr.push(Product[i]);
    }

    if(select.value == "5.000.000"){
        for(let i = 0 ;i < Product.length;i++)
            if(Product[i].price > 5000000) 
                filterarr.push(Product[i]);
    }


}

    let sotranghientai = 1;
    let sosanphammoitrang = 3;
    let tongsotrang = Math.ceil(filterarr.length / sosanphammoitrang);
    let vitrihientai = (sotranghientai - 1) * sosanphammoitrang;

    let butt = ``;
    for(let i = 1 ; i<=tongsotrang;i++)
        butt += `
        <div class="item" onclick="nuttrang_filter(this)" name="${i}">${i}</div>
    `;


    let temp = ``;
    let n = 0;
    for(let i = 0 ; i < filterarr.length ; i++ ){
        n++;
        temp += `
         <div class="item">
                                    <img src="${filterarr[i].images[0]}">
                                    <div class="content">
                                        <p>Tên: ${filterarr[i].name}</p>
                                        <p>Loại: ${filterarr[i].category}</p>
                                        <p>Giá: ${filterarr[i].price} VNĐ</p>
                                    </div>
                                    <div class="button">
                                        <select name="size">
                                            <option value="none" selected>Select Size</option>
                                            <option value="xxl">XXL</option>
                                            <option value="xl">XL</option>
                                            <option value="large">Large</option>
                                            <option value="medium">Medium</option>
                                            <option value="small">Small</option>
                                        </select>
                                        <div class="add">
                                        <input type="number" value="1" min="1" name = "${filterarr[i].id}" id ="soluong">
                                        <div name="${filterarr[i].id}" onclick="themsp(this)" >Thêm vào giỏ</div>
                                        </div>
                                    </div>
            </div>
        
        `;
        if(n == sosanphammoitrang)  break;
    
    }

    let showsanpham = document.querySelector("#Display .display");
    showsanpham.innerHTML = temp;
    let shownut = document.querySelector("#Display .foot .button");
    if(tongsotrang != 1) 
     shownut.innerHTML = butt;
    else shownut.innerHTML = "";

}









function find(){
    filterarr = [];
let Product = JSON.parse(localStorage.getItem("products"));
let a = document.querySelectorAll("#Display .head .find .choose");
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


   let find = document.querySelector("#find");
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
        <div class="item" onclick="nuttrang_filter(this)" name="${i}">${i}</div>
    `;


    let temp = ``;
    let n = 0;
    for(let i = 0 ; i < filterarr.length ; i++ ){
        n++;
        temp += `
         <div class="item">
                                    <img src="${filterarr[i].images[0]}">
                                    <div class="content">
                                        <p>Tên: ${filterarr[i].name}</p>
                                        <p>Loại: ${filterarr[i].category}</p>
                                        <p>Giá: ${filterarr[i].price} VNĐ</p>
                                    </div>
                                    <div class="button">
                                        <select name="size">
                                            <option value="none" selected>Select Size</option>
                                            <option value="xxl">XXL</option>
                                            <option value="xl">XL</option>
                                            <option value="large">Large</option>
                                            <option value="medium">Medium</option>
                                            <option value="small">Small</option>
                                        </select>
                                        <div class="add">
                                        <input type="number" value="1" min="1"  name="${filterarr[i].id}" id="soluong">
                                        <div name="${filterarr[i].id}" onclick="themsp(this)">Thêm vào giỏ</div>
                                        </div>
                                    </div>
            </div>
        
        `;
        if(n == sosanphammoitrang)  break;
    
    }

    let showsanpham = document.querySelector("#Display .display");
    showsanpham.innerHTML = temp;
    let shownut = document.querySelector("#Display .foot .button");
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
    for(let i = vitrihientai     ; i < filterarr.length;i++){
        n++;
        a += `
        <div class="item">
                                    <img src="${filterarr[i].images[0]}">
                                    <div class="content">
                                        <p>Tên: ${filterarr[i].name}</p>
                                        <p>Loại: ${filterarr[i].category}</p>
                                        <p>Giá: ${filterarr[i].price} VNĐ</p>
                                    </div>
                                    <div class="button">
                                        <select name="size" class="select-size">
                                            <option value="none" selected>Select Size</option>
                                            <option value="xxl">XXL</option>
                                            <option value="xl">XL</option>
                                            <option value="large">Large</option>
                                            <option value="medium">Medium</option>
                                            <option value="small">Small</option>
                                        </select>
                                        <div class="add">
                                         <input type="number" value="1" min="1"  name="${filterarr[i].id}" id="soluong">
                                         <div name= "${filterarr[i].id}" onclick="themsp(this)">Thêm vào giỏ</div>
                                        </div>
                                    </div>
            </div>
        `
     
        if(n == sosanphammoitrang) break; 
    }
     let showsanpham = document.querySelector("#Display .display");
    showsanpham.innerHTML = a;

}

function showFind(){

    let timkiem = document.querySelector("#Display .find");

    if(timkiem.classList.contains("hide")){
            timkiem.classList.remove("hide")
            timkiem.classList.add("show");
            
    }

   else if(timkiem.classList.contains("show")){
        timkiem.classList.remove("show")
        timkiem.classList.add("hide");
       
    }
}


function themsp(a){
   let temp = document.querySelectorAll("#soluong");
   let soluong;
    for(let i = 0 ; i<temp.length;i++){
        if(a.getAttribute("name") == temp[i].getAttribute("name")){
            soluong = parseInt(temp[i].value);
        }
    }

    for(let i = 0 ; i<currentUser.giohang.length;i++){
        if(a.getAttribute("name") == currentUser.giohang[i].id){
            currentUser.giohang[i].soLuong = parseInt(currentUser.giohang[i].soLuong) + soluong;
            co = 1;
            break;
        }
    }

    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    showTomtatsp();
}