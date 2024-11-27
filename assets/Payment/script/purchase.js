let chooseZalopay = document.querySelector("#zalopay");
let chooseCash = document.querySelector("#bycash");
let chooseCard = document.querySelector("#bycard");
let Bank = document.querySelector("#bank");
let stk = document.querySelector("#stk input");
let confirm = document.querySelector(".confirm");

window.onload = () =>{
chooseZalopay.checked = false;
chooseCash.checked = false;
chooseCard.checked = false;
}

stk.style.display = "none";
confirm.style.display = "none";
Bank.style.display = "none";

function showPurchase(){
if(chooseZalopay.checked == true){
Bank.style.display = "none";
stk.style.display = "block";
confirm.style.display = "block";
}

if(chooseCash.checked == true){
Bank.style.display = "none";
stk.style.display = "none";
confirm.style.display = "block";

}

if(chooseCard.checked == true){
Bank.style.display = "block";
stk.style.display = "block";
confirm.style.display = "block";

}


}

confirm.onclick = () =>{
stk.value = stk.value.replace(/\.$/, '');
if(stk.value == "" && stk.style.display == "block"){
    alert("Vui lòng nhập số tài khoản");
    stk.focus();
    return 0;
}
else{
let checkstk = parseInt(stk.value);

if(checkstk != stk.value    && stk.style.display == "block" ){
    alert("Vui lòng nhập số tài khoản là số");
    stk.focus();
    return 0;
}

if(Bank.style.display == "block" && stk.style.display == "block"){
let co = 0;
let a = document.querySelectorAll(".choose_bank");
a.forEach(function(radio){
    if(radio.checked == true) co = 1;
});
if (co == 0){
    alert("Vui lòng chọn ngân hàng");
    return 0;
}
}
}

alert("Đặt hàng thành công quay về trang chủ");
window.location.href = "index.html";
}

