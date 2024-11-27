function filter_order(){
	let select = document.querySelector("#Display .order .loc");
	if(select.value == "time"){
		let time = document.querySelector("#Display .order .time");
		time.classList.remove("hide");
		let timebtn = document.querySelector("#Display .order .filterbtn");
		timebtn.classList.remove("hide");
		console.log("Hello");
	}
	else{
		let time = document.querySelector("#Display .order .time");
		time.classList.add("hide");
		let timebtn = document.querySelector("#Display .order .filterbtn");
		timebtn.classList.add("hide");
	}
}

function showDonHang(){
	let donhang = JSON.parse(localStorage.getItem("donhang"));
	if(donhang.length == 0){
		alert("Chưa có đơn hàng nào");
	}else{
		let sosanphammoitrang = 3;
		let sotranghientai = 1;
		let tongsotrang = Math.ceil(donhang.length/sosanphammoitrang);
		let vitrihientai = (sotranghientai - 1) * sosanphammoitrang;
		let btn = '';
		for(let i = 1 ; i<=tongsotrang ; i ++){
			btn += `
				<div class="item" onclick="nuttrang_order(${i})">${i}</div>	

			`
		}







		let showbtn = document.querySelector("#Display .order .foot .pagination");
		showbtn.innerHTML = btn;






	}
}

showDonHang();