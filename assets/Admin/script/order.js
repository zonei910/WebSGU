

function showDonHang(){
	let donhang = JSON.parse(localStorage.getItem("donhang"));
	if(donhang == null){
		alert("Chưa có đơn hàng nào");
	}else{
		let sosanphammoitrang = 5;
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
			}else if(donhang[i].status == 3){
				trangthai = `Đã hủy vì ${donhang[i].lydo}`;
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
	let sosanphammoitrang = 5;
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
	if(select.value == "time"){
		let time = document.querySelector("#Display .order .time");
		time.classList.remove("hide");
		let timebtn = document.querySelector("#Display .order .filterbtn");
		timebtn.classList.remove("hide");
		return 0;
	}
	else{
		let time = document.querySelector("#Display .order .time");
		time.classList.add("hide");
		let timebtn = document.querySelector("#Display .order .filterbtn");
		timebtn.classList.add("hide");
	}

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
		let sosanphammoitrang = 5;
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
	
	}
}


function nuttrangfilter_order(a){
	let sosanphammoitrang = 5;
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

	let sosanphammoitrang = 5;
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

}


function tatdonhang(){
	let a = document.querySelector("#Display .order .all");
	a.style.display = "none";
}


function xulydonhang(a){
	let thongtindon = document.querySelector("#Display .order .all");
	thongtindon.style.display = "block";
	let madon = a.getAttribute("name");
	
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
		nganhang = `Nganhang: ` + `${donhientai.bank}`; 
		stk = donhientai.stk;   
	}

	left.innerHTML = `
		 <div class="left">
                                <p>Mã đơn: <span class="madon">${donhientai.id}</span></p>
                                <p>Trạng thái: <span>${trangthai}</span></p>
                                <p>Tổng tiền: <span>${donhientai.tongtien} đ</span></p>

                                <p>Ngày đặt hàng: <span>${donhientai.ngaydat}</span></p>
                                <p style="width:500px">Hình thức thanh toán: <span width="100%">${nganhang}</span></p>
                                <p>Số tài khoản (nếu có): <span>${stk}</span></p>
        </div>
	`;
	
	right.innerHTML = `
			  <div class="right">
                                <p>Tên: <span>${donhientai.tenKH}</span></p>
                                <p>Số điện thoại: <span>${donhientai.phoneKH}</span></p>
                                <p>Email: <span>${donhientai.emailKH}</span></p>
                                <p style="width: max-content">Địa chỉ: <span>${donhientai.diachiKH}</span></p>
                                <p>Giới tính: <span>${donhientai.genderKH == 'nu'?'Nữ':'Nam'}</span></p>
                            </div>
	
	`;
	
	let watch = [];
	let watchsum = 0;
	for(let i = 0 ; i< donhientai.giohang.length ; i ++){
		if(donhientai.giohang[i].loai == "watch"){
			watch.push(donhientai.giohang[i]);
			watchsum += (donhientai.giohang[i].gia * donhientai.giohang[i].soLuong);
		}
	}
if(watch.length!=0){
	let temp = ``;
	for(let i = 0 ; i<watch.length ; i++){
		temp += `
				<tr>
                                        <td><img src="${watch[i].hinh}" alt=""></td>
                                        <td>${watch[i].id}</td>
                                        <td>${watch[i].ten}</td>
                                        <td>${watch[i].soLuong}</td>
                                        <td>${watch[i].gia}</td>
                                        <td>${watch[i].gia * watch[i].soLuong}</td>
                                    </tr>
		 `;
	}

	let showWatch = document.querySelector("#sp-giohang-watch");
	showWatch.innerHTML = temp; 
	let showWatchSum = document.querySelector("#Display .order .all .watch_sum");
	showWatchSum.innerHTML = watchsum;
}



	let ring = [];
	let ringsum = 0;

for(let i = 0 ; i< donhientai.giohang.length ; i ++){
		if(donhientai.giohang[i].loai == "ring"){
			ring.push(donhientai.giohang[i]);
			ringsum += (donhientai.giohang[i].gia * donhientai.giohang[i].soLuong);
		}
	}
if(ring.length != 0){
	 temp = ``;
	for(let i = 0 ; i<ring.length ; i++){
		temp += `
				<tr>
                                        <td><img src="${ring[i].hinh}" alt=""></td>
                                        <td>${ring[i].id}</td>
                                        <td>${ring[i].ten}</td>
                                        <td>${ring[i].soLuong}</td>
                                        <td>${ring[i].gia}</td>
                                        <td>${ring[i].gia * ring[i].soLuong}</td>
                                    </tr>
		 `;
	}

	let showRing = document.querySelector("#sp-giohang-ring");
	showRing.innerHTML = temp; 
	let showRingSum = document.querySelector("#Display .order .all .ring_sum");
	showRingSum.innerHTML = ringsum;
}


	let necklace = [];
	let necklacesum = 0;

for(let i = 0 ; i< donhientai.giohang.length ; i ++){
		if(donhientai.giohang[i].loai == "necklace"){
			necklace.push(donhientai.giohang[i]);
			necklacesum += (donhientai.giohang[i].gia * donhientai.giohang[i].soLuong);
		}
	}
if(necklace.length !=0){
	 temp = ``;
	for(let i = 0 ; i<necklace.length ; i++){
		temp += `
				<tr>
                                        <td><img src="${necklace[i].hinh}" alt=""></td>
                                        <td>${necklace[i].id}</td>
                                        <td>${necklace[i].ten}</td>
                                        <td>${necklace[i].soLuong}</td>
                                        <td>${necklace[i].gia}</td>
                                        <td>${necklace[i].gia * necklace[i].soLuong}</td>
                                    </tr>
		 `;
	}

	let showNecklace = document.querySelector("#sp-giohang-necklace");
	showNecklace.innerHTML = temp; 
	let showNecklaceSum = document.querySelector("#Display .order .all .necklace_sum");
	showNecklaceSum.innerHTML = necklacesum;

}


	let bracelet = [];
	let braceletsum = 0;

for(let i = 0 ; i< donhientai.giohang.length ; i ++){
		if(donhientai.giohang[i].loai == "bracelet"){
			bracelet.push(donhientai.giohang[i]);
			braceletsum += (donhientai.giohang[i].gia * donhientai.giohang[i].soLuong);
		}
	}
if(bracelet.length !=0){
	 temp = ``;
	for(let i = 0 ; i<necklace.length ; i++){
		temp += `
				<tr>
                                        <td><img src="${bracelet[i].hinh}" alt=""></td>
                                        <td>${bracelet[i].id}</td>
                                        <td>${bracelet[i].ten}</td>
                                        <td>${bracelet[i].soLuong}</td>
                                        <td>${bracelet[i].gia}</td>
                                        <td>${bracelet[i].gia * bracelet[i].soLuong}</td>
                                    </tr>
		 `;
	}

	let showBracelet = document.querySelector("#sp-giohang-bracelet");
	showBracelet.innerHTML = temp; 
	let showBraceletSum = document.querySelector("#Display .order .all .bracelet_sum");
	showBraceletSum.innerHTML = braceletsum;

}



	let earring = [];
	let earringsum = 0;
	
	for(let i = 0 ; i< donhientai.giohang.length ; i ++){
		if(donhientai.giohang[i].loai == "earring"){
		earring.push(donhientai.giohang[i]);
		earringsum += (donhientai.giohang[i].gia * donhientai.giohang[i].soLuong);
		}
	}
if(earring.length !=0){
	 temp = ``;
	for(let i = 0 ; i<earring.length ; i++){
		temp += `
				<tr>
                                        <td><img src="${earring[i].hinh}" alt=""></td>
                                        <td>${earring[i].id}</td>
                                        <td>${earring[i].ten}</td>
                                        <td>${earring[i].soLuong}</td>
                                        <td>${earring[i].gia}</td>
                                        <td>${earring[i].gia * earring[i].soLuong}</td>
                                    </tr>
		 `;
	}

	let showEarring = document.querySelector("#sp-giohang-earring");
	showEarring.innerHTML = temp; 
	let showEarringSum = document.querySelector("#Display .order .all .earring_sum");
	showEarringSum.innerHTML = earringsum;

}




}


function duyet(){
	let donhang = JSON.parse(localStorage.getItem("donhang"));
	let madon = document.querySelector("#Display .order .all .form-donhang .khachhang .left .madon");
	let luudon ={};
	for(let i = 0 ; i<donhang.length ; i++){
		if(parseInt(madon.textContent) == donhang[i].id){
			if(donhang[i].status == 1){
				alert("Đơn hàng đã được duyệt trước đó");
				return 0;
			}
			if(donhang[i].status == 2){
				alert("Đơn hàng đã được hủy trước đó");
				return 0;
			}
			if(donhang[i].status == 3){
				alert("Đơn hàng đã giao thành công trước đó");
				return 0;
			}

			let choice = confirm("Bạn có chắc muốn duyệt đơn hàng");
			if(choice == true){
			let today = new Date();
			donhang[i].status = 1;	
			donhang[i].ngayduyet = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}` ;
			luudon = donhang[i];
			alert("Đã duyệt thành công");
			tatdonhang();

		}
		}
	}

	let users = JSON.parse(localStorage.getItem("users"));
	for(let i = 0 ; i<users.length ; i++){
		for(let j = 0 ; j < users[i].lichsuMuaHang.length ; j++){
			if(parseInt(users[i].lichsuMuaHang[j].id) == parseInt(madon.textContent)){
					users[i].lichsuMuaHang[j] = luudon;
			}
		}
	}

	localStorage.setItem("users" , JSON.stringify(users));
	localStorage.setItem("donhang" , JSON.stringify(donhang));
	showDonHang();	
}


function huy(){
	let donhang = JSON.parse(localStorage.getItem("donhang"));
	let madon = document.querySelector("#Display .order .all .form-donhang .khachhang .left .madon");
	let luudon = {};
	for(let i = 0 ; i<donhang.length ; i++){
		if(parseInt(madon.textContent) == donhang[i].id){
			if(donhang[i].status == 1){
				alert("Đơn hàng đã được duyệt trước đó");
				return 0;
			}
			if(donhang[i].status == 2){
				alert("Đơn hàng đã được hủy trước đó");
				return 0;
			}
			if(donhang[i].status == 3){
				alert("Đơn hàng đã giao thành công trước đó");
				return 0;
			}

			let choice = confirm("Bạn có chắc muốn hủy đơn hàng");
			if(choice == true){
			let nhap = prompt("Nhập lý do hủy đơn hàng");
			let today = new Date();
			donhang[i].status = 3;	
			donhang[i].lydo = nhap;
			donhang[i].ngayduyet = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}` ;
			luudon = donhang[i];
			alert("Đã hủy thành công");
			tatdonhang();
		}
		}
	}

let users = JSON.parse(localStorage.getItem("users"));
	for(let i = 0 ; i<users.length ; i++){
		for(let j = 0 ; j < users[i].lichsuMuaHang.length ; j++){
			if(parseInt(users[i].lichsuMuaHang[j].id) == parseInt(madon.textContent)){
					users[i].lichsuMuaHang[j] = luudon;
			}
		}
	}

	localStorage.setItem("users" , JSON.stringify(users));
	localStorage.setItem("donhang" , JSON.stringify(donhang));
	showDonHang();
}


function giaothanhcong(){
	let donhang = JSON.parse(localStorage.getItem("donhang"));
	let madon = document.querySelector("#Display .order .all .form-donhang .khachhang .left .madon");
	let luudon ={};
	for(let i = 0 ; i<donhang.length ; i++){
		if(parseInt(madon.textContent) == donhang[i].id){
			if(donhang[i].status == 0){
				alert("Đơn hàng cần được duyệt trước khi đánh dấu giao thành công");
				return 0;
			}
			if(donhang[i].status == 1){
				let choice = confirm("Bạn có chắc muốn duyệt đơn hàng đã giao thành công");
			if(choice == true){
			let today = new Date();
			donhang[i].status = 2;	
			donhang[i].ngayduyet = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}` ;
			luudon = donhang[i];
			alert("Đã duyệt thành công");
			tatdonhang();

		}
}

			if(donhang[i].status == 3){
				alert("Đơn hàng đã được hủy trước đó");
				return 0;
			}
		

			
		}
	}

	let users = JSON.parse(localStorage.getItem("users"));
	for(let i = 0 ; i<users.length ; i++){
		for(let j = 0 ; j < users[i].lichsuMuaHang.length ; j++){
			if(parseInt(users[i].lichsuMuaHang[j].id) == parseInt(madon.textContent)){
					users[i].lichsuMuaHang[j] = luudon;
			}
		}
	}

	localStorage.setItem("users" , JSON.stringify(users));
	localStorage.setItem("donhang" , JSON.stringify(donhang));
	showDonHang();	
}



function findtime(){
	

	
}