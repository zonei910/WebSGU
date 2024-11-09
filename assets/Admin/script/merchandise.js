var Merchandise_addbtn = document.querySelector("#Display .merchandise .button1");
var Merchandise_additem = document.querySelector("#Display .merchandise .add");
Merchandise_additem.style.display = "none";



Merchandise_addbtn.addEventListener("click" ,()=>{
    var co = 0;
    Merchandise_additem.style.display = "block";
    var offbtn = document.querySelector("#Display .merchandise .add-form .head i");
    var savebtn = document.querySelector("#Display .merchandise .add-form .btn-save div");
    var upload = document.querySelector("#Display .merchandise .add-form .upload input");
    var name = document.querySelector("#Display .merchandise .add-form .name input");
    var price = document.querySelector("#Display .merchandise .add-form .quanity input");
    var category = document.querySelector("#Display .merchandise .add-form .category select");
    offbtn.onclick = ()=>{
        co = 1;
        Merchandise_additem.style.display = "none";
    }




    if(co == 1) return;

       



});
