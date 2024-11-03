
window.onload = ()=>{
var login_href = location.href.split("?");
var  login =  login_href[1].split("&");
if(login[0] == "email=hihi%40gmail.com" && login[1]=="password=hehe"){
    window.open("/admin.html","_blank");
}

}
