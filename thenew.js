let currentpage=1;
const container4Node=document.getElementById("container4");

////////////////////////////////////////edit khách hàng/////////////////////////////////////////////////////////////////

///////////////////////////////////////////thêm//////////////////////////////////////////////////////////////
function theadd(){
  const clientname=document.getElementById("clientname").value.trim();
  const clienttel=document.getElementById("clienttel").value.trim();
  const clientemail=document.getElementById("clientemail").value.trim();
  // const clientstatus=document.getElementById("clientstatus").value.trim();
  if(!clientname ){
    alert("Please enter complete information . ");
    document.getElementById("clientname").focus();
    return;
  }
  if(!clienttel  ){
    alert("Please enter complete information . ");
    document.getElementById("clienttel").focus();
    return;
  }
  if( !clientemail ){
    alert("Please enter complete information . ");
    document.getElementById("clientemail").focus();
    return;
  }
  // if(!clientstatus ){
  //   alert("Please enter complete information . ");
  //   document.getElementById("clientstatus").focus();
  //   return;
  // }
  const addclient=document.getElementById("addclient");
  addclient.style.display="none";
  customers.push({
    id:parseInt(customers.length)+1,
    name: clientname,
    email: clientemail,
    phone: clienttel,
    product: [] // Thay đổi thành mảng rỗng, nếu bạn muốn lưu trữ sản phẩm
    });
    console.log(customers);
    printinfor(currentpage);

}



container4Node.addEventListener("click",function(event){
  // alert("bạn đang nhấn add");
  event.preventDefault();
  if(event.target.classList.contains("add")){
      const b=document.createElement("form");
      const a=event.target.parentElement.parentElement.nextElementSibling;
      if(a.classList.contains("clientouter")){
          b.id="addclient";
          b.innerHTML=`
                  <div></div>
                  <input type="text" placeholder="Enter client name : " id="clientname"/>
                  <input type="file" id="receivefile"/>
                  <input type="tel" placeholder="Enter client Tel : " id="clienttel"/>
                  <input type="email" placeholder="Enter client email : " id="clientemail"/>
                  <input type="submit"  id="add" onclick="theadd()" />
              `
          container4Node.insertBefore(b,a);
          // console.log(b);
          // console.log(a);
          document.getElementById("addclient").addEventListener("mouseleave",function(event){
            console.log(event);
            const clientname=document.getElementById("clientname");
            const clienttel=document.getElementById("clienttel");
            const clientemail=document.getElementById("clientemail");
            // const clientstatus=document.getElementById("clientstatus");
            if(!clientname.value){
              clientname.style.border="red 2px solid";
              const alert=document.createElement("div");
              alert.className="alertdiv";
              
              alert.innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>`
              if(! document.getElementById("alertdiv1")){
                alert.id="alertdiv1";
                document.getElementById("addclient").innerHTML+=alert.outerHTML;
              }
            }
            if(!clienttel.value){
              clienttel.style.border="red 2px solid";
              const alert=document.createElement("div");
              alert.className="alertdiv";
              
              alert.innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>`
              if(! document.getElementById("alertdiv2")){
                alert.id="alertdiv2";
                document.getElementById("addclient").innerHTML+=alert.outerHTML;
              }
            }
            if(!clientemail.value){
              clientemail.style.border="red 2px solid";
              const alert=document.createElement("div");
              alert.className="alertdiv";
              
              alert.innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>`
              if(! document.getElementById("alertdiv3")){
                alert.id="alertdiv3";
                document.getElementById("addclient").innerHTML+=alert.outerHTML;
              }
            }
            // if(!clientstatus.value){
            //   clientstatus.style.border="red 2px solid";
            //   const alert=document.createElement("div");
            //   alert.className="alertdiv";
              
            //   alert.innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>`
            //   if(! document.getElementById("alertdiv4")){
            //     alert.id="alertdiv4";
            //     document.getElementById("addclient").innerHTML+=alert.outerHTML;
            //   }

            // }
          })
          console.log(addclient);
      }
      else{
          a.remove();
      }
  }

})
//////////////////////////////////////////xóa/////////////////////////////////////////////////////////
container4Node.addEventListener('click',function(event){
    if(event.target.classList.contains("delete")){
        const asking=document.getElementById("askbeforedeleting");
        asking.style.display="flex";
        const clientouterNode=event.target.closest(".clientouter");
        const id=clientouterNode.querySelector(".rank").innerText;
        // console.log(rank);
        document.getElementById("yes").onclick = function() {
            asking.style.display = "none";
            removeclient(parseInt(id)); // Gọi hàm xóa client
        };
        document.getElementById("no").onclick=function(){
            asking.style.display="none";
        }
    }
});
function removeclient(id) {
    // for(let i=0;i<customers.length;i++){
    //     if(customers[i-1].id==id){
    //         customers.splice(i,1);
    //         printinfor(currentpage);
    //         console.log(customers);
    //     }
    // }
            if(customers[id-1].id==id){
            customers.splice(id,1);
            printinfor(currentpage);
            console.log(customers);
            }
} 

function toggleProductDetails(rank) {
    const productDetailsNode = document.getElementById(`product-details-${rank}`);
    const angleNode = document.querySelector(`#product-details-${rank} + .order i`);

    if (productDetailsNode && angleNode) {
        if (productDetailsNode.style.display === 'none') {
            productDetailsNode.style.display = 'block';
            angleNode.classList.remove('fa-angle-down');
            angleNode.classList.add('fa-angle-up');
        } else {
            productDetailsNode.style.display = 'none';
            angleNode.classList.remove('fa-angle-up');
            angleNode.classList.add('fa-angle-down');
        }
    } else {
        console.error(`Element with ID 'product-details-${rank}' or angle icon not found.`);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function search() {
    let valuesearchinput = document.getElementById("search").value.toUpperCase(); // Chuyển đổi giá trị tìm kiếm thành chữ hoa

    let namesearch = customers.filter(customer => {
        return customer.name.toUpperCase().includes(valuesearchinput);
    });

    let emailsearch = customers.filter(customer => {
        return customer.email.toUpperCase().includes(valuesearchinput);
    });

    let phonesearch = customers.filter(customer => {
        return customer.phone.includes(valuesearchinput);
    });

    console.log(namesearch);
    console.log(emailsearch);
    console.log(phonesearch);

    let newarray = [];

    // Sử dụng Set để loại bỏ trùng lặp
    let uniqueRanks = new Set();

    namesearch.forEach(customer => {
        uniqueRanks.add(customer.rank);
        newarray.push(customer);
    });

    emailsearch.forEach(customer => {
        if (!uniqueRanks.has(customer.rank)) {
            uniqueRanks.add(customer.rank);
            newarray.push(customer);
        }
    });

    phonesearch.forEach(customer => {
        if (!uniqueRanks.has(customer.rank)) {
            uniqueRanks.add(customer.rank);
            newarray.push(customer);
        }
    });
    printsearcharray(newarray)
}
function printsearcharray(newarray){
    container4Node.innerHTML="";
    container4Node.innerHTML=`            
    <div class="clientouter" id="clientouter">
        <div>Rank</div>
        <div>Client name</div>
        <div>Telephone</div>
        <div>Email</div>
        <div>Status</div>
        <div><i class="fa-solid fa-plus add"></i></div>
    </div>`;
    newarray.forEach(customer=>{
        const clientouterr= `<div class="clientouter" id="clientouter-${customer.id}">
            <div class="rank" id="rank${customer.id}">${customer.id}</div>
            <div>${customer.name}</div>
            <div>${customer.image}</div>
            <div>${customer.phone}</div>
            <div>${customer.email}</div>
            <div><i class="fa-regular fa-trash-can delete"></i> <i class="fa-regular fa-pen-to-square edit" id=edit${customer.id} onclick="onclickeditclient(${customer.id})"></i> <i id="show" class="fa-solid fa-angle-down angle" onclick="printinfororderfirst(${customer.id})"></i></div>
        </div>`;
        container4Node.innerHTML+=clientouterr;
    })
}
 date=null,month=null,year=null,datesecond=null,monthsecond=null,yearsecond=null;
function gettimefirst(id){
    let a="choosedatefirst-"+id;
    const time=document.getElementById(a).value;
    if(time){
        console.log(time);
        date=parseInt(time.split("-")[2].replace(/^0+/, ''),10);
        month=parseInt(time.split("-")[1].replace(/^0+/, ''),10);
        year=parseInt(time.split("-")[0].replace(/^0+/, ''),10);
    }
}
// function thecheck
function gettimesecond(id){
    let a="choosedatesecond-"+id;
    const time=document.getElementById(a).value;
    // console.log(time);
    if(time){
        datesecond=parseInt(time.split("-")[2].replace(/^0+/, ''),10);
        monthsecond=parseInt(time.split("-")[1].replace(/^0+/, ''),10);
        yearsecond=parseInt(time.split("-")[0].replace(/^0+/, ''),10);
    }
    console.log("date second "+datesecond);
    console.log("month second "+monthsecond);
    console.log("year second "+yearsecond);
    if(document.getElementById(a).value ){
        console.log("fixxxxxxxxxxxx");
        printinfororder(id);
    }
}
function checktimedate(receiptime){
    let arraycopy=JSON.parse(JSON.stringify(receiptime));
    receipt=arraycopy.split("-");
    console.log(receipt[0].replace(/^0+/, '')+"  " +receipt[1].replace(/^0+/, '')+" "+receipt[2].replace(/^0+/, ''));

    if(receipt[2].replace(/^0+/, '')<year){//nhỏ hơn năm đầu
        console.log("nhỏ hơn năm đầu");
         return false;
    } 
    if(receipt[2].replace(/^0+/, '')>yearsecond){ //lớn hơn năm thứ 2
        console.log("lớn hơn năm thứ 2");
        return false;
    }
    if(receipt[2].replace(/^0+/, '')<yearsecond && receipt[2].replace(/^0+/, '')>year){//trong khoảng năm đầu và năm thứ 2
        console.log("trong khoảng năm đầu và năm thứ 2");
        return true;
    }
    if(receipt[1].replace(/^0+/, '')<month && receipt[2].replace(/^0+/, '')==year){// bằng năm đầu ,nhỏ hơn tháng
        console.log("bằng năm đầu ,nhỏ hơn tháng");
        return false;
    }
    if(receipt[1].replace(/^0+/, '')>monthsecond && receipt[2].replace(/^0+/, '')==yearsecond){//bằng năm 2 lớn hơn tháng
        console.log("bằng năm 2 lớn hơn tháng");
        return false;
    }
    if(receipt[0].replace(/^0+/, '')<date && receipt[1].replace(/^0+/, '')==month && receipt[2].replace(/^0+/, '')==year){//bằng năm tháng đầu ,nhỏ hơn ngày
        console.log("bằng năm tháng đầu ,nhỏ hơn ngày");
        return false;
    }
    if(receipt[0].replace(/^0+/, '')>datesecond && receipt[1].replace(/^0+/, '')==monthsecond &&receipt[2].replace(/^0+/, '')==yearsecond){ //bằng năm tháng thứ 2 ,lơn hơn ngày
        console.log("bằng năm tháng thứ 2 ,lơn hơn ngày");
        return false;
    }
    console.log("trường hợp còn lại");

    return true; //trường hợp còn lại
}
function arraycustomer(){
    return customers.map(customer => {
    const filteredProducts = customer.product.filter(product => 
        checktimedate(product.receipttime)
    );
    if (filteredProducts.length > 0) {
        return { 
            ...customer, // Sao chép thông tin khách hàng
            product: filteredProducts // Gán sản phẩm đã lọc
        };
    }
}).filter(customer => customer); // Loại bỏ khách hàng không có sản phẩm thỏa mãn

}
function printinfororderfirst(id){
    let a="orderofcustomindex"+id;
    if(document.getElementById(a)){
        document.getElementById(a).remove();
        return ;
    }
    else {
        let a="orderofcustomindex"+id;
        console.log(a);
        console.log(document.getElementById(a));
        const infororderNode = document.createElement("div");
        infororderNode.classList.add("orderouter");
        infororderNode.id=a;
        infororderNode.innerHTML = `  
            <div lass="infororder">
                <div class="order">Id</div>
                <div class="order">Image</div>
                <div class="order">Catergory</div>
                <div class="order">Name</div>
                <div class="order">Order receipt time</div>
                <div>Completion time</div>
                <div class="order"><div class="divchoosetime"><input type="date" class="choosetime" id="choosedatefirst-${id}" onclick="gettimefirst(${id})"><input type="date" class="choosetime" id="choosedatesecond-${id}" onclick="gettimesecond(${id})"></div></div>
            </div>`;
            let b = "rank" + id;
            // console.log(a);
            // console.log(orderouter);
            const orderouter = document.getElementById(b);
            container4Node.insertBefore(infororderNode,orderouter.parentElement.nextElementSibling);
            console.log(container4Node);
    printinfororder(id);

    // console.log();
    }
}
function printinfororder(id) {
    let a="orderofcustomindex"+id;
    let infororderNode=document.getElementById(a);
    
        console.log(date+"hiiiiiiiiiiiiiiiiiii");
        let newarray=JSON.parse(JSON.stringify(customers));
        if(date && month && year && datesecond &&monthsecond &&yearsecond){
            console.log(date);
            newarray=arraycustomer(date,month,year,datesecond,monthsecond,yearsecond);
            console.log(newarray);
        }

        
        if (newarray) {
            infororderNode.innerHTML = `  
            <div lass="infororder">
                <div class="order">Id</div>
                <div class="order">Image</div>
                <div class="order">Catergory</div>
                <div class="order">Name</div>
                <div class="order">Order receipt time</div>
                <div>Completion time</div>
                <div class="order"><div class="divchoosetime"><input type="date" class="choosetime" id="choosedatefirst-${id}" onclick="gettimefirst(${id})"><input type="date" class="choosetime" id="choosedatesecond-${id}" onclick="gettimesecond(${id})"></div></div>
            </div>`;
            for(let i=0;i<newarray.length;i++){
                if(newarray[i].id==id){
                    const products = newarray[i].product;
                    for(let i=0;i<products.length;i++){
                      const innerorder = `
                      <div class="infororder" >
                      <div>${products[i].id}</div>
                          <div>${products[i].image}</div>
                          <div>${products[i].category}</div>
                          <div>${products[i].name}</div>
                          <div>${products[i].receipttime}</div>
                          <div>${products[i].completiontime}</div>
                          <div  class="editstatus"onclick="editstatus(${id},${i})" id="status-${id}-${i}">
                            <div>${products[i].status} <i class="fa-solid fa-angle-down"></i>
                            </div>
                          </div>
                      </div>
                  `;
                  console.log(customers);
                  console.log(newarray);
                  infororderNode.innerHTML += innerorder;
                    }
                }
            }
        }

    // if (newarray[parseInt(id)-1]) {
    //     const products = customers[parseInt(id)-1].product;
    //     for(let i=0;i<products.length;i++){
    //         // console.log(products[i].completiontime);
    //       const innerorder = `
    //       <div class="infororder" >
    //       <div>${products[i].id}</div>
    //           <div>${products[i].image}</div>
    //           <div>${products[i].category}</div>
    //           <div>${products[i].name}</div>
    //           <div>${products[i].receipttime}</div>
    //           <div>${products[i].completiontime}</div>
    //           <div  class="editstatus"onclick="editstatus(${id},${i})" id="status-${id}-${i}">
    //             <div>${products[i].status} <i class="fa-solid fa-angle-down"></i>
    //             </div>
    //           </div>
    //       </div>
    //   `;
    //   console.log(innerorder);
    //   infororderNode.innerHTML += innerorder;
    //     }
    //     const a = "rank" + id;
    //     // console.log(a);
    //     // console.log(orderouter);
    //     const orderouter = document.getElementById(a);
    //     container4Node.insertBefore(infororderNode,orderouter.parentElement.nextElementSibling);
    // }

}
//////////////////////////////////////edit status//////////////////////////////////////////////////////////////////////////
function editstatus(rank,i){
    let a="status-"+rank+"-"+i;

    document.getElementById(a).outerHTML=`<div id="status-${rank}-${i}" class="editstatus">
    <div id="statusdelivering-${rank}-${i}" onclick="editstatusdelivering(${rank},${i})" >delivering
    </div>
    <div id="statusdelivered-${rank}-${i}" onclick="editstatusdelivered(${rank},${i})">delivered
    </div>
    </div>`
}
function editstatusdelivering(rank,i){
    console.log("kkk");
    let a="status-"+rank+"-"+i;
    customers[rank].product[i].status="delivering";
    document.getElementById(a).outerHTML=`
    <div  class="editstatus"onclick="editstatus(${rank},${i})" id="status-${rank}-${i}">
                    <div>${customers[rank].product[i].status} <i class="fa-solid fa-angle-down"></i>
                </div>`;
}
function editstatusdelivered(rank,i){
    let a="status-"+rank+"-"+i;
    customers[rank].product[i].status="delivered";
    document.getElementById(a).outerHTML=`<div  class="editstatus"onclick="editstatus(${rank},${i})" id="status-${rank}-${i}">
                    <div>${customers[rank].product[i].status} <i class="fa-solid fa-angle-down"></i>
                </div>`;
}

////////////////////////////////////////edit client////////////////////////////////////////////////////////////////
function onclickeditclient(id){
    if(document.getElementById("editclient")){
        document.getElementById("editclient").remove();
        return;
      }
    const c=document.createElement("div");
    c.id="editclient";
    c.innerHTML=`
        <div></div>
        <input type="text" placeholder="Enter client name : " id="editclientname">
        <input type="file">
        <input type="tel" placeholder="Enter client Tel : " id="editclienttel">
        <input type="email" placeholder="Enter client email : " id="editclientemail">
        <input type="button" value="Edit"  id="edit" onclick="edittheclient(${id})" >
    `

    let a="clientouter-"+id;
    console.log(a);
    let b=document.getElementById(a);
    console.log(b);
    container4Node.insertBefore(c,b.nextElementSibling);
    const themouseleave=document.getElementById("editclient");
    themouseleave.addEventListener("mouseleave",function(event){
        const clientname=document.getElementById("editclientname");
        const clienttel=document.getElementById("editclienttel");
        const clientemail=document.getElementById("editclientemail");
        const clientstatus=document.getElementById("editclientstatus");
        if(!clientname.value){
          clientname.style.border="red 2px solid";
          const alert=document.createElement("div");
          alert.className="alertdivedit";
          
          alert.innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>`
          if(! document.getElementById("alertdivedit1")){
            alert.id="alertdivedit1";
            document.getElementById("editclient").innerHTML+=alert.outerHTML;
          }
        }
        if(!clienttel.value){
          clienttel.style.border="red 2px solid";
          const alert=document.createElement("div");
          alert.className="alertdivedit";
          
          alert.innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>`
          if(! document.getElementById("alertdivedit2")){
            alert.id="alertdivedit2"
            document.getElementById("editclient").innerHTML+=alert.outerHTML;
          }
        }
        if(!clientemail.value){
          clientemail.style.border="red 2px solid";
          const alert=document.createElement("div");
          alert.className="alertdivedit";

          alert.innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>`
          if(! document.getElementById("alertdivedit3")){
            alert.id="alertdivedit3";
            document.getElementById("editclient").innerHTML+=alert.outerHTML;
          }
        }
        // if(!clientstatus.value){
        //   clientstatus.style.border="red 2px solid";
        //   const alert=document.createElement("div");
        //   alert.className="alertdivedit";
          
        //   alert.innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>`
        //   if(! document.getElementById("alertdivedit4")){
        //     alert.id="alertdivedit4";
        //     document.getElementById("editclient").innerHTML+=alert.outerHTML;
        //   }

        // }
      })


}
function edittheclient(id){
            const clientname = document.getElementById("editclientname").value.trim();
            const clienttel = document.getElementById("editclienttel").value.trim();
            const clientemail = document.getElementById("editclientemail").value.trim();
            const clientstatus = document.getElementById("editclientstatus").value.trim();
        
            // Kiểm tra các trường nhập liệu
            if (!clientname) {
              alert("Please enter complete information.");
              document.getElementById("editclientname").focus();
              return;
            }
            if (!clienttel) {
              alert("Please enter complete information.");
              document.getElementById("editclienttel").focus();
              return;
            }
            if (!clientemail) {
              alert("Please enter complete information.");
              document.getElementById("editclientemail").focus();
              return;
            }
            if (!clientstatus) {
              alert("Please enter complete information.");
              document.getElementById("editclientstatus").focus();
              return;
            }
            console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
          //   let d=
          //   const e = d.substring(4, d.length); // Sử dụng textContent để lấy nội dung văn bản
            customers[parseInt(id)-1] = {
              name: clientname,
              email: clientemail,
              phone: clienttel,
              status: clientstatus,
              product: [],
              id:id
            };
            console.log(id);
            document.getElementById("editclient").remove();
            printinfor(currentpage);

}
//////////////////////////////////////phân trang/////////////////////////////////////////////////////////////////
function printinfor(page){
        const start=(page)*7;
        const end=start+7;
        const newcustomers=customers.slice(start,end);
        container4Node.innerHTML="";
        container4Node.innerHTML=`            <div class="clientouter" id="clientouter">
            <div>Id</div>
            <div>Client name</div>
            <div>Image</div>
            <div>Telephone</div>
            <div>Email</div>
            <div><i class="fa-solid fa-plus add"></i></div>
        </div>`;
        newcustomers.forEach(customer=>{
            const clientouterr= `<div class="clientouter" id="clientouter-${customer.id}">
                <div class="rank" id="rank${customer.id}">${customer.id}</div>
                <div>${customer.name}</div>
                <div><img src="${customer.img}" class="imageofcustomer"></div>
                <div>${customer.phone}</div>
                <div>${customer.email}</div>
                <div><i class="fa-regular fa-trash-can delete"></i> <i class="fa-regular fa-pen-to-square edit" id=edit${customer.id} onclick="onclickeditclient(${customer.id})"></i> <i id="show" class="fa-solid fa-angle-down angle" onclick="printinfororderfirst(${customer.id})"></i></div>
            </div>`;
            container4Node.innerHTML+=clientouterr;
        })
    }
    function nutphantrang(){
        const slnutphantrang =Math.ceil(customers.length/7);
        const nutphantrangouterNode=document.getElementById("phantrangouter");
        for(let i=0;i<slnutphantrang;i++){
            const nutphantrangNode=document.createElement("span");
            nutphantrangNode.innerText=i;

            nutphantrangNode.className="nutphantrang";
            nutphantrangNode.onclick=function(){
                currentpage=i;
                printinfor(currentpage);
                customnutphantrang(currentpage);
            }
            nutphantrangouterNode.appendChild(nutphantrangNode);
        }
    }
    function customnutphantrang(page){
        const nutphantrangNode=document.querySelectorAll(".nutphantrang");
        nutphantrangNode.forEach(nut=>{
            nut.classList.remove("active");
        });
        nutphantrangNode[page].classList.add("active");
    }
    printinfor(0);
    nutphantrang();
