
// Khai báo các đối tượng cần thiết
var Menu_viewpage = document.querySelector("#Menu .viewpage");
var Menu_merchandise = document.querySelector("#Menu .merchandise");
var Menu_revenue = document.querySelector("#Menu .revenue");
var Menu_userlist = document.querySelector("#Menu .userlist");
var Menu_adminlist = document.querySelector("#Menu .adminlist");
var Menu_order = document.querySelector("#Menu .order");
var Display_viewpage = document.querySelector("#Display .viewpage");
var Display_merchandise = document.querySelector("#Display .merchandise");
var Display_revenue = document.querySelector("#Display .revenue");
var Display_userlist = document.querySelector("#Display .userlist");
var Display_order = document.querySelector("#Display .order");


Display_viewpage.style.display = "none";
Display_merchandise.style.display = "none";
Display_revenue.style.display = "none";
Display_userlist.style.display = "none";
Display_order.style.display = "none";




// Bật tắt bật tắt
Menu_viewpage.onclick = ()=>{
    Display_viewpage.style.display = "block";
    Display_merchandise.style.display = "none";
    Display_revenue.style.display = "none";
    Display_userlist.style.display = "none";
    Display_order.style.display = "none";
}

Menu_merchandise.onclick = ()=>{
    Display_viewpage.style.display = "none";
    Display_merchandise.style.display = "block";
    Display_revenue.style.display = "none";
    Display_userlist.style.display = "none";
    Display_order.style.display = "none";
    // showSanPham();
    


}

Menu_revenue.onclick = ()=>{
    Display_viewpage.style.display = "none";
    Display_merchandise.style.display = "none";
    Display_revenue.style.display = "block";
    Display_userlist.style.display = "none";
    Display_order.style.display = "none";
}

Menu_userlist.onclick = ()=>{
    Display_viewpage.style.display = "none";
    Display_merchandise.style.display = "none";
    Display_revenue.style.display = "none";
    Display_userlist.style.display = "block";
    Display_order.style.display = "none";
}

Menu_order.onclick = ()=>{
    Display_viewpage.style.display = "none";
    Display_merchandise.style.display = "none";
    Display_revenue.style.display = "none";
    Display_userlist.style.display = "none";
    Display_order.style.display = "block";
}