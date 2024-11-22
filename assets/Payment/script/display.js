
let filterarr = [];
function filter(){
    filterarr = [];
    let select = document.querySelector("#filter");
    if(select.value == "none"){
        showSanPham();
        return 0;
    }
   
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
                                        <input type="number" value="1" min="1">
                                        <div>Thêm vào giỏ</div>
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
    for(let i = vitrihientai     ; i <= filterarr.length;i++){
        if(n == sosanphammoitrang) break; 

        a += `
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


function find(){
    filterarr = [];
    let find = document.querySelector("#find");
    let result = find.value.trim().toUpperCase();
    
    for(let i = 0 ; i < Product.length ; i++){
        let name = Product[i].name.toUpperCase();
        if(name.includes(result))
            filterarr.push(Product[i]);
    }

    console.log(filterarr);
    if(filterarr.length == 0){
        alert("Không tìm thấy sản phẩm cần tìm");
        find.focus();
        find.onfocus = ()=> {
            find.select();
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
                                        <input type="number" value="1" min="1">
                                        <div>Thêm vào giỏ</div>
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

