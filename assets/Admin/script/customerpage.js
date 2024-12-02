let currentpage = 1;
const container4Node = document.getElementById("container4");
// date=null,month=null,year=null,datesecond=null,monthsecond=null,yearsecond=null;

function checktimedate(receiptime) {
  let arraycopy = JSON.parse(JSON.stringify(receiptime));
  receipt = arraycopy.split("/");
  if (receipt[2].replace(/^0+/, "") < year) {
    return false;
  }
  if (receipt[2].replace(/^0+/, "") > yearsecond) {
    return false;
  }
  if (
    receipt[2].replace(/^0+/, "") < yearsecond &&
    receipt[2].replace(/^0+/, "") > year
  ) {
    return true;
  }
  if (
    receipt[1].replace(/^0+/, "") < month &&
    receipt[2].replace(/^0+/, "") == year
  ) {
    return false;
  }
  if (
    receipt[1].replace(/^0+/, "") > monthsecond &&
    receipt[2].replace(/^0+/, "") == yearsecond
  ) {
    return false;
  }
  if (
    receipt[0].replace(/^0+/, "") < date &&
    receipt[1].replace(/^0+/, "") == month &&
    receipt[2].replace(/^0+/, "") == year
  ) {
    return false;
  }
  if (
    receipt[0].replace(/^0+/, "") > datesecond &&
    receipt[1].replace(/^0+/, "") == monthsecond &&
    receipt[2].replace(/^0+/, "") == yearsecond
  ) {
    return false;
  }
  return true;
}
function closedproduct() {
  document.getElementById("printorder").style.display = "none";
}
function closededitclient() {
  document.getElementById("sectioneditclient").style.display = "none";
}
function editclient() {
  let Customer = JSON.parse(localStorage.getItem("users"));
  document.getElementById("sectioneditclient").style.display = "flex";
  document.getElementById("editkh").addEventListener("click", function (event) {
    if (event.target.id == "editkh") {
      let hoten = document.getElementById("editnameofkh").value.trim();
      let phone = document.getElementById("editphoneofkh").value.trim();
      let email = document.getElementById("editemailofkh").value.trim();
      if (!hoten) {
        alert("Vui lòng nhập tên");
        document.getElementById("editnameofkh").focus();
        return;
      }
      if (!phone) {
        alert("Vui lòng nhập số điện thoại");
        document.getElementById("editphoneofkh").focus();
        return;
      }
      if (!email) {
        alert("Vui lòng nhập email");
        document.getElementById("editemailofkh").focus();
        return;
      }
      Customer.name = hoten;
      Customer.phone = phone;
      Customer.email = email;
      // Customer.push(
      //     {
      //         ten:hoten,
      //         phone:phone,
      //         email:email
      //     }
      // );
      document.getElementById("sectioneditclient").style = "none";
    }
  });
}
function printinfororder(id) {
  let Customer = JSON.parse(localStorage.getItem("users"));
  document.getElementById("printorder").style.display = "flex";
  const section = document.querySelector("#printorder >div");
  for (let i = 0; i < Customer.length; i++) {
    if (Customer[i].phone == id) {
      for (let j = 0; j < Customer[i].lichsuMuaHang.length; j++) {
        const product = Customer[i].lichsuMuaHang[j];
        for (let k = 0; k < product.giohang.length; k++) {
          const creatediv = document.createElement("div");
          creatediv.innerHTML = `
                    <div>${product.giohang[k].id}</div>
                    <div>${product.giohang[k].ten}</div>
                    <div>${product.giohang[k].loai}</div>
                    <div>${product.ngaydat}</div>
                    `;
          section.innerHTML += creatediv.outerHTML;
        }
      }
    }
  }
}
function printinfor(page) {
  let Customer = JSON.parse(localStorage.getItem("users"));

  const start = page * 7;
  const end = start + 7;
  const newCustomer = Customer.slice(start, end);
  container4Node.innerHTML = "";
  container4Node.innerHTML = `<div class="clientouter" id="clientouter">
        <div>Tên khách hàng</div>
        <div>Số điện thoại</div>
        <div>Email</div>
    </div>`;
  newCustomer.forEach((Customer) => {
    const clientouterr = `<div class="clientouter" id="clientouter-${Customer.phone}">
            <div>${Customer.name}</div>
            <div>${Customer.phone}</div>
            <div>${Customer.email}</div>
            <div><i class="fa-solid fa-key" id="khoa-${Customer.phone}" onclick="hienkhoa(${Customer.phone})"></i> <i class="fa-regular fa-pen-to-square edit"  onclick="editclient(${Customer.phone})"></i> <i id="show" class="fa-solid fa-angle-down angle" onclick="printinfororder(${Customer.phone})"></i></div>
        </div>`;
    container4Node.innerHTML += clientouterr;
    const a = "khoa-" + Customer.phone;
    if (Customer.status == 1) {
      document.getElementById(a).style.color = "#bcbcbc";
    }
    if (Customer.status == 0) {
      document.getElementById(a).style.color = "#62c7ff";
    }
  });
}

function closedkhoa() {
  document.getElementById("khoaclient").style.display = "none";
}
function khoanguoidung(id) {
  let Customer = JSON.parse(localStorage.getItem("users"));

  for (let i = 0; i < Customer.length; i++) {
    if (Customer[i].phone == id) {
      console.log("helo");
      Customer[i].status = 1;
      const a = "khoa-" + id;
      document.getElementById(a).style.color = "#bcbcbc";
    }
  }
}
function search() {
  let Customer = JSON.parse(localStorage.getItem("users"));

  let valuesearchinput = document.getElementById("search").value.toUpperCase();
  if (valuesearchinput == "") {
    printinfor(0);
    return 0;
  }

  let namesearch = Customer.filter((Customer) => {
    return Customer.name.toUpperCase().includes(valuesearchinput);
  });

  let emailsearch = Customer.filter((Customer) => {
    return Customer.email.toUpperCase().includes(valuesearchinput);
  });

  let phonesearch = Customer.filter((Customer) => {
    return Customer.phone.includes(valuesearchinput);
  });

  let newarray = [];
  let uniqueRanks = new Set();

  namesearch.forEach((Customer) => {
    uniqueRanks.add(Customer.phone);
    newarray.push(Customer);
  });

  emailsearch.forEach((Customer) => {
    if (!uniqueRanks.has(Customer.phone)) {
      uniqueRanks.add(Customer.phone);
      newarray.push(Customer);
    }
  });

  phonesearch.forEach((Customer) => {
    if (!uniqueRanks.has(Customer.rank)) {
      uniqueRanks.add(Customer.rank);
      newarray.push(Customer);
    }
  });
  printsearcharray(newarray);
}
function printsearcharray(newarray) {
  container4Node.innerHTML = "";
  container4Node.innerHTML = `            
    <div class="clientouter" id="clientouter">
        <div>Tên khách hàng</div>
        <div>Số điện thoại</div>
        <div>Email</div>
    </div>`;
  newarray.forEach((Customer) => {
    const clientouterr = `<div class="clientouter" id="clientouter-${Customer.phone}">
            <div>${Customer.name}</div>
            <div>${Customer.phone}</div>
            <div>${Customer.email}</div>
            <div><i class="fa-solid fa-key" id="khoa-${Customer.phone}" onclick="hienkhoa(${Customer.phone})"></i> <i class="fa-regular fa-pen-to-square edit"  onclick="editclient(${Customer.phone})"></i> <i id="show" class="fa-solid fa-angle-down angle" onclick="printinfororder(${Customer.phone})"></i></div>
        </div>`;
    container4Node.innerHTML += clientouterr;
    const a = "khoa-" + Customer.phone;
    if (Customer.status == 1) {
      document.getElementById(a).style.color = "#bcbcbc";
    }
    if (Customer.status == 0) {
      document.getElementById(a).style.color = "#62c7ff";
    }
  });
}
// function hienkhoa(id){
//     console.log(id);
//     document.getElementById("khoaclient").style.display="flex";
//     let hienkh=document.querySelector(".printkh");
//     for(let i=0;i<Customer.length;i++){
//         if(Customer[i].id==id){
//             if(Customer[i].status==0){
//                 console.log("hiiiiiiiiiiiiiii");
//                 document.getElementById("contentkhoa").innerHTML`
//                 <div>Người dùng sẽ bị khóa cho đến khi admin mở lại</div>
//                     <label for="inputkhoand">Hãy nhập lí do khóa người dùng : </label>
//                     <input type="text" id="inputkhoand"> <input type="submit" id="submitkhoa"><br>
//                 `;
//             }
//             if(Customer[i].status==1){
//                 document.getElementById("contentkhoa").innerHTML=`
//                 <div>Người dùng sẽ bị khóa cho đến khi admin mở lại Bạn có muốn khóa người dùng ?  <input type="button" onclick="khoanguoidung(id)"></div>
//                 `;
//             }
//         }
//     }
//     for(let i=0;i<Customer.length;i++){
//         if(Customer[i].id==id){
//             let creatediv=document.createElement("div");
//             creatediv.innerHTML=`<div>${Customer[i].id}</div>
//             <div>${Customer[i].name}</div>
//             <div>${Customer[i].phone}</div>
//             <div>${Customer[i].email}</div>
//             `
//             hienkh.innerHTML+=creatediv.outerHTML;
//             for(let j=0;j<Customer[i].lichsuMuaHang.length;j++){
//                 const product=Customer[i].lichsuMuaHang[j];
//                 for(let k=0;k<product.giohang.length;k++){
//                     const creatediv=document.createElement("div");
//                     creatediv.innerHTML=`<div>${product.giohang[k].id}</div>
//                     <div>${product.giohang[k].ten}</div>
//                     <div>${product.giohang[k].loai}</div>
//                     <div>${product.ngaydat}</div>
//                     `
//                     document.querySelector(".printorderkh").innerHTML+=creatediv.outerHTML;
//                 }
//             }
//         }
//     }
//     if(document.getElementById("submitkhoa")){
//         let submit=document.getElementById("submitkhoa");
//         submit.addEventListener("click",function(event){
//             const reason=document.getElementById("inputkhoand").value.trim();
//             if(!reason){
//                 alert("Bạn chưa nhập lí do khóa người dùng");
//                 return;
//             }
//             Customer.status=1;
//             Customer.reasonkhoa=reason.value;
//         })
//     }
// }
function hienkhoa(id) {
  let Customer = JSON.parse(localStorage.getItem("users"));
  document.getElementById("khoaclient").style.display = "flex";
  let hienkh = document.querySelector(".printkh");
  console.log(Customer);
  console.log(Customer[0].phone, id);
  document.getElementById("contentkhoa").innerHTML = "";

  for (let i = 0; i < Customer.length; i++) {
    if (Customer[i].phone == id) {
      if (Customer[i].status == 0) {
        const creatediv = document.createElement("div");
        creatediv.innerHTML = `
                    <div>Người dùng sẽ bị khóa cho đến khi admin mở lại</div>
                    <label for="inputkhoand">Hãy nhập lý do khóa người dùng: </label> 
                    <input type="text" id="inputkhoand" placeholder="Enter"> 
                    <input type="submit" id="submitkhoa" onclick="submitkhoa(${Customer[i].phone})"><br>
                `;
        document.getElementById("contentkhoa").appendChild(creatediv);
      } else if (Customer[i].status == 1) {
        document.getElementById("contentkhoa").innerHTML = `
                    <div>Người dùng sẽ bị khóa cho đến khi admin mở lại. Bạn có muốn khóa người dùng?  
                    <input type="button" onclick="khoanguoidung(${id})"></div>
                `;
      }

      let creatediv = document.createElement("div");
      creatediv.innerHTML = `
                <div>${Customer[i].name}</div>
                <div>${Customer[i].phone}</div>
                <div>${Customer[i].address}</div>
                <div>${Customer[i].email}</div>
            `;
      hienkh.appendChild(creatediv);

      // Hiển thị lịch sử mua hàng
      for (let j = 0; j < Customer[i].lichsuMuaHang.length; j++) {
        const product = Customer[i].lichsuMuaHang[j];
        for (let k = 0; k < product.giohang.length; k++) {
          const orderDiv = document.createElement("div");
          orderDiv.innerHTML = `
                        <div>${product.giohang[k].id}</div>
                        <div>${product.giohang[k].ten}</div>
                        <div>${product.giohang[k].loai}</div>
                        <div>${product.ngaydat}</div>
                    `;
          document.querySelector(".printorderkh").appendChild(orderDiv); // Sử dụng appendChild
        }
      }
      return;
    }
  }

  // Thêm sự kiện cho nút submit
  // const submit = document.getElementById("submitkhoa");

  //     submit.addEventListener("click", function(event) {
  //         const reason = document.getElementById("inputkhoand").value.trim();
  //         if (!reason) {
  //             alert("Bạn chưa nhập lý do khóa người dùng");
  //             return;
  //         }
  //         // Cập nhật thông tin khóa
  //         for (let i = 0; i < Customer.length; i++) {
  //             if (Customer[i].phone == id) {
  //                 console.log("heheh");
  //                 Customer[i].status = 1; // Cập nhật trạng thái
  //                 Customer[i].reasonkhoa = reason; // Cập nhật lý do khóa
  //                 break; // Thoát khỏi vòng lặp khi đã cập nhật
  //             }
  //         }
  //         alert("đã khóa người dùng");
  //     });
}

function submitkhoa(id) {
  let Customer = JSON.parse(localStorage.getItem("users"));
  const reason = document.getElementById("inputkhoand").value.trim();
  if (!reason) {
    alert("Bạn chưa nhập lý do khóa người dùng");
    return;
  }
  for (let i = 0; i < Customer.length; i++) {
    if (Customer[i].phone == id) {
      Customer[i].status = 1;
      Customer[i].reasonkhoa = reason;
      break;
    }
  }
  alert("đã khóa người dùng");
}

function nutphantrang() {
  let Customer = JSON.parse(localStorage.getItem("users"));

  const slnutphantrang = Math.ceil(Customer.length / 7);
  const nutphantrangouterNode = document.getElementById("phantrangouter");
  for (let i = 0; i < slnutphantrang; i++) {
    const nutphantrangNode = document.createElement("span");
    nutphantrangNode.innerText = i;
    nutphantrangNode.className = "nutphantrang";
    nutphantrangNode.onclick = function () {
      currentpage = i;
      printinfor(currentpage);
      customnutphantrang(currentpage);
    };
    nutphantrangouterNode.appendChild(nutphantrangNode);
  }
}
function customnutphantrang(page) {
  const nutphantrangNode = document.querySelectorAll(".nutphantrang");
  nutphantrangNode.forEach((nut) => {
    nut.classList.remove("active");
  });
  nutphantrangNode[page].classList.add("active");
}
printinfor(0);
nutphantrang();
