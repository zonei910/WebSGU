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
	if(donhang == null){
		alert("Chưa có đơn hàng nào");
	}else{
		let sosanphammoitrang = 3;
		let sotranghientai = 1;
		let tongsotrang = Math.ceil(donhang.length/sosanphammoitrang);
		let vitrihientai = (sotranghientai - 1) * sosanphammoitrang;
		let btn = '';
		if(tongsotrang != 1){
		for(let i = 1 ; i<=tongsotrang ; i ++){
			btn += `
				<div class="item" onclick="nuttrang_order(${i})">${i}</div>	

			`
		}
	}
		let a ='';
		let n = 0;
		for(let i = vitrihientai ; i<donhang.length;i++){
			let trangthai;
			if(donhang[i].status == 0){
				trangthai = "Chưa xử lý";
			}else if(donhang[i].status == 1){
				trangthai = "Đã duyệt";
			}else if(donhang[i].status == 2){
				trangthai = "Đã giao hàng thành công";
			}
			n++;
			a += `
			<tr>
				  <td>${donhang[i].id}</td>
                            <td>${donhang[i].tenKH}</td>
                            <td>${donhang[i].tongtien}</td>
                            <td>${donhang[i].ngaydat}</td>
                            <td>${donhang[i].ngayduyet == 0?"Chưa duyệt": donhang[i].ngayduyet}</td>
                            <td>${trangthai}</td>
                            <td class="button">
                                <div name="${donhang[i].id}" onclick="xulydonhang(this)">Xem chi tiết đơn hang</div>
                            </td>
                    </tr>   
			
			`;
			if(n == sosanphammoitrang) break;
		}


		let showbtn = document.querySelector("#Display .order .foot .pagination");
		showbtn.innerHTML = btn;
		let showdon = document.querySelector("#Display .order .main table tbody");
		showdon.innerHTML = a;

	}
}

function nuttrang_order(a){
	let donhang = JSON.parse(localStorage.getItem("donhang"));
	let sosanphammoitrang = 3;
	let vitrihientai = (a - 1) * sosanphammoitrang;

	let n = 0;
	let b = ``;
	for(let i = vitrihientai ; i < donhang.length ; i ++){
		let trangthai;
			if(donhang[i].status == 0){
				trangthai = "Chưa xử lý";
			}else if(donhang[i].status == 1){
				trangthai = "Đã duyệt";
			}else if(donhang[i].status == 2){
				trangthai = "Đã giao hàng thành công";
			}
			n++;
			b += `
			<tr>
				  <td>${donhang[i].id}</td>
                            <td>${donhang[i].tenKH}</td>
                            <td>${donhang[i].tongtien}</td>
                            <td>${donhang[i].ngaydat}</td>
                            <td>${donhang[i].ngayduyet == 0?"Chưa duyệt": donhang[i].ngayduyet}</td>
                            <td>${trangthai}</td>
                            <td class="button">
                                <div name="${donhang[i].id}" onclick="xulydonhang(this)">Xem chi tiết đơn hàng</div>
                            </td>
                    </tr>   
			
			`;
			if(n == sosanphammoitrang) break;
	} 

	let showdon = document.querySelector("#Display .order .main table tbody");
		showdon.innerHTML = b;

}

let filterarr = [];

function filter_order(){
	filterarr = [];
	let donhang = JSON.parse(localStorage.getItem("donhang"));
	let select = document.querySelector("#Display .order .loc");
	if(donhang == null){
		alert("Chưa có đơn hàng nào");
	}else{
		if(select.value == "none"){
			showDonHang();
			return 0;
		}

		for(let i = 0 ; i < donhang.length ; i++){
			if(select.value == donhang[i].status){
				filterarr.push(donhang[i]);
			}
		}
		let sosanphammoitrang = 3;
		let sotranghientai = 1;
		let tongsotrang = Math.ceil(filterarr.length/sosanphammoitrang);
		let vitrihientai = (sotranghientai - 1) * sosanphammoitrang;
		let btn = '';
		if(tongsotrang != 1){
		for(let i = 1 ; i<=tongsotrang ; i ++){
			btn += `
				<div class="item" onclick="nuttrangfilter_order(${i})">${i}</div>	

			`
		}
	}	


	

		let a ='';
		let n = 0;
		for(let i = vitrihientai ; i<filterarr.length;i++){
			let trangthai;
			if(filterarr[i].status == 0){
				trangthai = "Chưa xử lý";
			}else if(filterarr[i].status == 1){
				trangthai = "Đã duyệt";
			}else if(filterarr[i].status == 2){
				trangthai = "Đã giao hàng thành công";
			}
			n++;
			a += `
			<tr>
				  <td>${filterarr[i].id}</td>
                            <td>${filterarr[i].tenKH}</td>
                            <td>${filterarr[i].tongtien}</td>
                            <td>${filterarr[i].ngaydat}</td>
                            <td>${filterarr[i].ngayduyet == 0?"Chưa duyệt": filterarr[i].ngayduyet}</td>
                            <td>${trangthai}</td>
                            <td class="button">
                                <div name="${filterarr[i].id}" onclick="xulydonhang(this)">Xem chi tiết đơn hàng</div>
                            </td>
                    </tr>   
			
			`;
			if(n == sosanphammoitrang) break;
		}


		let showbtn = document.querySelector("#Display .order .foot .pagination");
		showbtn.innerHTML = btn;
		let showdon = document.querySelector("#Display .order .main table tbody");
		showdon.innerHTML = a;
		console.log(filterarr);
	}
}


function nuttrangfilter_order(a){
	let sosanphammoitrang = 3;
	let vitrihientai = (a - 1) * sosanphammoitrang;

	let n = 0;
	let b = ``;
	for(let i = vitrihientai ; i < filterarr.length ; i ++){
		let trangthai;
			if(filterarr[i].status == 0){
				trangthai = "Chưa xử lý";
			}else if(filterarr[i].status == 1){
				trangthai = "Đã duyệt";
			}else if(filterarr[i].status == 2){
				trangthai = "Đã giao hàng thành công";
			}
			n++;
			b += `
			<tr>
				  <td>${filterarr[i].id}</td>
                            <td>${filterarr[i].tenKH}</td>
                            <td>${filterarr[i].tongtien}</td>
                            <td>${filterarr[i].ngaydat}</td>
                            <td>${filterarr[i].ngayduyet == 0?"Chưa duyệt": filterarr[i].ngayduyet}</td>
                            <td>${trangthai}</td>
                            <td class="button">
                                <div name="${filterarr[i].id}" onclick="xulydonhang(this)">Xem chi tiết đơn hàng</div>
                            </td>
                    </tr>   
			
			`;
			if(n == sosanphammoitrang) break;
}
let showdon = document.querySelector("#Display .order .main table tbody");
showdon.innerHTML = b;
}

let findarr = [];
function find_order(){
	findarr = [];
	let select = document.querySelector("#Display .order .loc");
	let find = document.querySelector("#Display .order .timkiem");
	if(select.value == "none"){
		let donhang = JSON.parse(localStorage.getItem("donhang"));
		if(donhang == null){
			alert("Không có đơn hàng nào");
			return 0;
		}
			donhang.forEach((item)=>{
				if(item.id == parseInt(find.value)){
					findarr.push(item);
				}
			});
		
			if(find.value == ""){
				showDonHang();
				return 0;
			}


	}else{
		console.log("hi");
		if(find.value == ""){
			filter_order();
			return 0;
		}

		filterarr.forEach((item)=>{
			if(item.id == parseInt(find.value)){
				findarr.push(item);
			}
		});

	
		
	}
	filterarr = findarr;

	let sosanphammoitrang = 3;
	let sotranghientai = 1;
	let tongsotrang = Math.ceil(filterarr.length/sosanphammoitrang);
	let vitrihientai = (sotranghientai - 1) * sosanphammoitrang;
	let btn = '';
	if(tongsotrang != 1){
	for(let i = 1 ; i<=tongsotrang ; i ++){
		btn += `
			<div class="item" onclick="nuttrangfilter_order(${i})">${i}</div>	

		`
	}
}	


	let a ='';
	let n = 0;
	for(let i = 0 ; i<filterarr.length;i++){
		let trangthai;
		if(filterarr[i].status == 0){
			trangthai = "Chưa xử lý";
		}else if(filterarr[i].status == 1){
			trangthai = "Đã duyệt";
		}else if(filterarr[i].status == 2){
			trangthai = "Đã giao hàng thành công";
		}
		n++;
		a += `
		<tr>
			  <td>${filterarr[i].id}</td>
						<td>${filterarr[i].tenKH}</td>
						<td>${filterarr[i].tongtien}</td>
						<td>${filterarr[i].ngaydat}</td>
						<td>${filterarr[i].ngayduyet == 0?"Chưa duyệt": filterarr[i].ngayduyet}</td>
						<td>${trangthai}</td>
						<td class="button">
							<div name="${filterarr[i].id}" onclick="xulydonhang(this)">Xem chi tiết đơn hàng</div>
						</td>
				</tr>   
		
		`;
		if(n == sosanphammoitrang) break;
	}


	let showbtn = document.querySelector("#Display .order .foot .pagination");
	showbtn.innerHTML = btn;
	let showdon = document.querySelector("#Display .order .main table tbody");
	showdon.innerHTML = a;
	console.log(filterarr);
}


function tatdonhang(){
	let a = document.querySelector("#Display .order .all");
	a.style.display = "none";
}


function xulydonhang(a){
	let thongtindon = document.querySelector("#Display .order .all");
	thongtindon.style.display = "block";
	let madon = a.getAttribute("name");
	console.log (madon);
	let donhang = JSON.parse(localStorage.getItem("donhang"));

	let donhientai;
	for(let i = 0 ; i<donhang.length;i++){
		if(parseInt(madon) == parseInt(donhang[i].id) ){
			donhientai = donhang[i];
		}
	}

	let left = document.querySelector("#Display .order .all .khachhang .left");
	let right = document.querySelector("#Display .order .all .khachhang .right");

	let trangthai;
	if(donhientai.status == 0) trangthai = "Chưa xử lý";
	if(donhientai.status == 1) trangthai = "Đã duyệt";
	if(donhientai.status == 2) trangthai = "Đã giao";
	if(donhientai.status == 3) trangthai = "Đã hủy";
	let nganhang , stk;

	if(donhientai.bank == -1 && donhientai.stk == -1){
		nganhang = "Trả bằng tiền mặt";
		stk = "Không có";
	}

	 if(parseInt(donhientai.bank) == -1 && parseInt(donhientai.stk) != -1){
		nganhang = "Zalopay";
		stk = parseInt(donhientai.stk);
	}
	 if(parseInt(donhientai.bank) != -1 && parseInt(donhientai.stk) != -1){
		nganhang = `Nganhang:${donhientai.bank}`; 
		stk = donhientai.stk;   
	}

	left.innerHTML = `
		 <div class="left">
                                <p>Mã đơn: <span>${donhientai.id}</span></p>
                                <p>Trạng thái: <span>${trangthai}</span></p>
                                <p>Tổng tiền: <span>${donhientai.tongtien} đ</span></p>
                                <p>Mã khuyến mãi: <span>Không có</span></p>
                                <p>Ngày đặt hàng: <span>${donhientai.ngaydat}</span></p>
                                <p>Hình thức thanh toán: <span> ${nganhang}</span></p>
                                <p>Số tài khoản (nếu có): <span>${stk}</span></p>
        </div>
	`;
	


}