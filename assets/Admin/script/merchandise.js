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
