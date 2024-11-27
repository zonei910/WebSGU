
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let display = document.querySelector("#Display");
let form = document.querySelector("#Form");
let purchase = document.querySelector("#Purchase");

display.style.display = "none";
purchase.style.display = "none";


function showSanPham(){
    form.style.display = "none"; 
    display.style.display = "block";
    purchase.style.display = "none";
    let Product = JSON.parse(localStorage.getItem("products"));
    let sosanphammoitrang = 3;
    let tongsotrang = Math.ceil(Product.length/sosanphammoitrang);
    let sotranghientai = 1;
    let vitrihientai = (sotranghientai -1)  * sosanphammoitrang;


    let butt = ``;
    for(let i = 1 ; i<=tongsotrang;i++)
        butt += `
        <div class="item" onclick="nuttrang(this)" name="${i}">${i}</div>
    `;


    let n = 0;
    let a = ``;
    for(let i = vitrihientai     ; i < Product.length;i++){
        if(n == sosanphammoitrang) break; 

        a += `
        <div class="item">
                                    <img src="${Product[i].images[0]}">
                                    <div class="content">
                                        <p>Tên: ${Product[i].name}</p>
                                        <p>Loại: ${Product[i].category}</p>
                                        <p>Giá: ${Product[i].price} VNĐ</p>
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
                                        <input type="number" value="1" min="1">
                                        <div name = "${Product[i].id}">Thêm vào giỏ</div>
                                        </div>
                                    </div>
            </div>
        `
        n++;
    }


    let showsanpham = document.querySelector("#Display .display");
    showsanpham.innerHTML = a;
    if(tongsotrang == 1) return 0;
    let shownut = document.querySelector("#Display .foot .button");
    if(tongsotrang != 1) 
     shownut.innerHTML = butt;
    else shownut.innerHTML = "";
}



function showThanhToan(){
    form.style.display  = "block";
    display.style.display = "none";
    purchase.style.display = "none";
}



function showMethodPurchase(){
    form.style.display = "none";
    display.style.display = "none";
    purchase.style.display = "block";
}


function nuttrang(trang){
    let Product = JSON.parse(localStorage.getItem("products"));
    let sosanphammoitrang = 3;
    let tongsotrang = Math.ceil(Product.length/sosanphammoitrang);
    let vitrihientai = (trang.getAttribute("name")-1)  * sosanphammoitrang;

let n =0 ;
let a = ``;
    for(let i = vitrihientai     ; i <Product.length;i++){
        if(n == sosanphammoitrang) break; 

        a += `
        <div class="item">
                                    <img src="${Product[i].images[0]}">
                                    <div class="content">
                                        <p>Tên: ${Product[i].name}</p>
                                        <p>Loại: ${Product[i].category}</p>
                                        <p>Giá: ${Product[i].price} VNĐ</p>
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
                                        <input type="number" value="1" min="1">
                                        <div>Thêm vào giỏ</div>
                                        </div>
                                    </div>
            </div>
        `
        n++;
    }
    let showsanpham = document.querySelector("#Display .display");
    showsanpham.innerHTML = a;

}




    let ten = document.querySelector("#name");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#tele");
    let address = document.querySelector("#address");
    let gender = document.querySelector("#sex");


    ten.value = currentUser.name;
    email.value = currentUser.email;
    phone.value = currentUser.phone;
    address.value = currentUser.address;
    gender.value = currentUser.gender;

    function showTomtatsp(){
        let product = currentUser.giohang;
        let a = '';
        for(let i = 0 ; i < product.length ; i++){
            a += `
            <div class="cartinner">
                <div class="cart">
                    <div>${product[i][]}</div>
                </div>
                <div>

                </div>
            
            
            </div>
            
            
            `
        }
    }
  







