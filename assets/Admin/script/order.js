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