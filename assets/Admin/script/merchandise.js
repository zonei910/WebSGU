var Merchandise_addbtn = document.querySelector("#Display .merchandise .button1");
var Merchandise_additem = document.querySelector("#Display .merchandise .add");
Merchandise_additem.style.display = "none";



Merchandise_addbtn.addEventListener("click" ,()=>{
    Merchandise_additem.style.display = "block";
    var offbtn = document.querySelector("#Display .merchandise .add-form .head i");
    var savebtn = document.querySelector("#Display .merchandise .add-form .btn-save div");
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
        quantify = "";
        description = "";
        category.value = "necklace";
    }
    
    




});
