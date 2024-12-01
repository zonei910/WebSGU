
 Customers = JSON.parse(localStorage.getItem("users"));
        function taohangthongke(Customers,product){
          console.log(product);
            console.log(Customers);
            const doanhthu=document.querySelector(".container3");
            doanhthu.innerHTML=`
            <div class="doanhthu">
            <div>id</div>
                <div>name</div>
                <div>sales volumn</div>
                <div>sales</div>
            </div>`;
            product.forEach(giohang => {
                const createrow=document.createElement("div");
                createrow.className="doanhthu";
                createrow.innerHTML+=
                `
                <div>
                    ${giohang.id}
                </div>
                <div>
                    ${giohang.ten}
                </div>
                <div>
                    ${giohang.soLuong}
                </div>
                <div>
                    ${giohang.profit} $
                </div>
                `
                doanhthu.innerHTML+=createrow.outerHTML;
            });
            const productwithhighestprofit=highest(product);
            const productwithlowestprofit=lowest(product);
            const Customerswithhighestprofit=cushighest(arrayCustomerswithtotalprofit(Customers));
            const Customerswithlowestprofit=cuslowest(arrayCustomerswithtotalprofit(Customers));
            const creatediv=document.createElement("div");
            creatediv.className=""
            creatediv.innerHTML=`
                        <div class="thongkesanpham">
                <div class="productwithhighestprofit">   
                    <div><div class="header">highest profit</div>  </div>
                    <div>
                        <div class="productinner"> 
                            <div class="divimage"><image  class="imagethongke"src="${productwithhighestprofit.hinh}"></image></div>
                            <div><div>id</div><div>${productwithhighestprofit.id}</div></div>
                            <div><div>catergory</div><div>${productwithhighestprofit.loai}</div></div>
                            <div><div>name</div><div>${productwithhighestprofit.ten}</div></div>
                            <div><div>total profit</div><div>${productwithhighestprofit.profit}</div></div>
                            <div><div>amount</div><div>${productwithhighestprofit.soLuong}</div></div>
                        </div>
                    </div>
                </div>
                <div class="productwithlowestprofit">   
                    <div><div class="header">Lowest profit</div>  </div>
                    <div>
                        <div class="productinner"> 
                            <div class="divimage"><image  class="imagethongke"src="${productwithlowestprofit.hinh}"></image></div>
                            <div><div>id</div><div>${productwithlowestprofit.id}</div></div>
                            <div><div>catergory</div><div>${productwithlowestprofit.loai}</div></div>
                            <div><div>name</div><div>${productwithlowestprofit.ten}</div></div>
                            <div><div>total profit</div><div>${productwithlowestprofit.profit}</div></div>
                            <div><div>amount</div><div>${productwithlowestprofit.soLuong}</div></div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="thongkecustom">
                <p>Customers</p>
                <div class="head">
                    <div>Customers</div><div>id</div><div>client name</div><div>amount product</div><div>amount spent</div><div>teleaddress</div><div>email</div>
                </div>
                <div class="cuswithlowestprofit"> 
                        <div >
                            <div class="head">Highest profit</div>
                            <div>${Customerswithhighestprofit.id}</div>
                            <div>${Customerswithhighestprofit.name}</div>
                            <div>${Customerswithhighestprofit.totalproduct}</div>
                            <div>${Customerswithhighestprofit.totalprice}</div>
                            <div>${Customerswithhighestprofit.address}</div>
                            <div>${Customerswithhighestprofit.email}</div>
                        </div>
                </div>
                    <div class="cuswithhighestprofit">              
                            <div>
                                <div class="head">Lowest profit</div>
                                <div>${Customerswithlowestprofit.id}</div>
                                <div>${Customerswithlowestprofit.name}</div>
                                <div>${Customerswithlowestprofit.totalproduct}</div>
                                <div>${Customerswithlowestprofit.totalprice}</div>
                                <div>${Customerswithlowestprofit.address}</div>
                                <div>${Customerswithlowestprofit.email}</div>
                            </div>
                    </div>
            </div>
            `;
            document.querySelector(".thongke").innerHTML=``;
            document.querySelector(".thongke").innerHTML+=creatediv.innerHTML;
            let a=gettotal(arrayCustomerswithtotalprofit(Customers));

            document.getElementById("totalprofit").innerText=a.totalprofit;
            document.getElementById("totalproduct").innerText=a.totalproduct;
            document.getElementById("totaluser").innerText=a.totaluser;
            document.getElementById("totalprice").innerText=a.totalprice;
        }
function gettotal(Customers){
    let sumprofit=0;
    let sumproduct=0;
    let sumprice=0;
    Customers.forEach(Customers=>{
    sumprofit+=Customers.totalprofit;
    sumproduct+=Customers.totalproduct;
    sumprice+=Customers.totalprice;
    })
    return {
    totalprofit:sumprofit,
    totalproduct:sumproduct,
    totalprice:sumprice,
    totaluser:Customers.length

    }
}
function cushighest(Customers){
    let max=-Infinity;
    let cus;
    Customers.forEach(Customers=>{
        if(Customers.totalprofit>max){
            max=Customers.totalprofit;
            cus=Customers;
        }
    })
    return cus;
}  

function cuslowest(Customers){
    let min=Infinity;
    let cus;
    Customers.forEach(Customers=>{
        if(min>Customers.totalprofit){
            min=Customers.totalprofit;
            cus=Customers;
        }
    })
    return cus;
}    
    function highest(product){
        let max=-Infinity;
        let productwithmax;
        product.forEach(product=>{
            if(product.profit>max){
                max=product.profit;
                productwithmax=product
            }
        })
        return productwithmax;
    }
    function lowest(product){
        let productwithmin;
        let min=Infinity;
        product.forEach(product=>{
            if(product.profit<min){
                min=product.profit;
                productwithmin=product;
            }
        })
        return productwithmin;
    }

  function checktimeday(receiptime){
    let arraycopy=JSON.parse(JSON.stringify(receiptime));
    receipt=arraycopy.split("/");

    if(receipt[2].replace(/^0+/, '')<year){
         return false;
    } 
    if(receipt[2].replace(/^0+/, '')>yearsecond){
        return false;
    }
    if(receipt[2].replace(/^0+/, '')<yearsecond && receipt[2].replace(/^0+/, '')>year){
        return true;
    }
    if(receipt[1].replace(/^0+/, '')<month && receipt[2].replace(/^0+/, '')==year){
        return false;
    }
    if(receipt[1].replace(/^0+/, '')>monthsecond && receipt[2].replace(/^0+/, '')==yearsecond){
        return false;
    }
    if(receipt[0].replace(/^0+/, '')<day && receipt[1].replace(/^0+/, '')==month && receipt[2].replace(/^0+/, '')==year){
        return false;
    }
    if(receipt[0].replace(/^0+/, '')>daysecond && receipt[1].replace(/^0+/, '')==monthsecond &&receipt[2].replace(/^0+/, '')==yearsecond){
        return false;
    }
    return true; 
}
let day=1;
let daysecond=10;
let yearsecond=2024;
let year=2024
let monthsecond=11;
let month=8
//lấy mảng Customers mới với lịch sử mua hàng thỏa điều kiện 
function arrayCustomers(Customers){
  console.log(Customers)
    return Customers.map(Customers => {
        const filteredlichsuMuaHangs = Customers.lichsuMuaHang.filter(lichsuMuaHang => {
            return checktimeday(lichsuMuaHang.ngaydat);
        }
        );
        if (filteredlichsuMuaHangs.length > 0) {
            return { 
                ...Customers, 
                lichsuMuaHang: filteredlichsuMuaHangs
            };
        }
    }).filter(Customers => Customers); 
}
//khách hàng với tổng doanh thu,tổng product
function arrayCustomerswithtotalprofit(Customers){
    const array = JSON.parse(JSON.stringify(Customers));
    array.forEach(Customers=>{
        Customers.lichsuMuaHang.forEach(lichsuMuaHang=>{
            Customers.totalprice=0;
            Customers.totalproduct=0;
            Customers.totalprofit=0;
            lichsuMuaHang.giohang.forEach(product=>{
              console.log(product.profit);
                Customers.totalprofit+=product.soLuong*product.profit;
                Customers.totalproduct+=product.soLuong;
                Customers.totalprice+=product.soLuong*parseInt(product.gia);
            })
        })
    })
    return array;
}
function bang(){

}

// lấy mảng product mới id phân biệt
//   function aggregateCartItems(Customerss) {
//     const aggregatedItems = {};
//     Customerss.forEach(Customers => {
//         Customers.lichsuMuaHang.forEach(order => {
//             let uni=new Set();
//             let i=0;
//             order.giohang.forEach(item => {
//                 uni.add(item.id);
//                 if (uni.has(item.id)) {
//                     aggregatedItems[i].soLuong += item.soLuong;
//                     aggregatedItems[i].profit=item.profit*item.soLuong
//                     aggregatedItems[i].gia=item.gia*item.soLuong
//                 } else {
//                     aggregatedItems[i] = { ...item };
//                     aggregatedItems[i].profit=item.profit*item.soLuong;
//                     aggregatedItems[i].gia=item.gia*item.soLuong;
//                     aggregatedItems[i].soLuong+=product.soLuong
//                     i++;
//                 }
//             });
//         });
//     });
//     return Object.values(aggregatedItems);
//   }
function aggregateCartItems(Customerss) {
    const aggregatedItems = {};
    Customerss.forEach(Customers => {
        Customers.lichsuMuaHang.forEach(order => {
            order.giohang.forEach(item => {
                if (aggregatedItems[item.id]) {
                    aggregatedItems[item.id].soLuong += item.soLuong;
                    aggregatedItems[item.id].profit += item.profit * item.soLuong; 
                    aggregatedItems[item.id].gia += item.gia * item.soLuong;
                } else {
                    aggregatedItems[item.id] = { 
                        ...item, 
                        soLuong: item.soLuong, 
                        profit: item.profit * item.soLuong, 
                        gia: item.gia * item.soLuong 
                    };
                }
            });
        });
    });
    return Object.values(aggregatedItems);
}
function gettimefirst(){
    const time=document.getElementById("timefirst").value;
    if(time){
        day=parseInt(time.split("-")[2].replace(/^0+/, ''),10);
        month=parseInt(time.split("-")[1].replace(/^0+/, ''),10);
        year=parseInt(time.split("-")[0].replace(/^0+/, ''),10);
    }
}
function gettimesecond(){
    const time=document.getElementById("timesecond").value;
    if(time){
        daysecond=parseInt(time.split("-")[2].replace(/^0+/, ''),10);
        monthsecond=parseInt(time.split("-")[1].replace(/^0+/, ''),10);
        yearsecond=parseInt(time.split("-")[0].replace(/^0+/, ''),10);
    }
    if(time && document.getElementById("timefirst").value){
        if(yearsecond<year){
            alert("Bạn nhập sai năm");
        }
        if(yearsecond==year && monthsecond<month){
            alert("Bạn nhập sai tháng")
        }
        if(yearsecond==year && monthsecond==month && daysecond<day){
            alert("Bạn nhập sai ngày");
        }
    console.log(aggregateCartItems(Customers));
    taohangthongke(arrayCustomers(Customers),aggregateCartItems(Customers));

    }
}
// function getcurrentyear(){
//     const currentday=new Date();
//     year=currentday.getFullYear();
//     day=1;
//     month=1;
//     yearsecond=year+1;
//     daysecond=1;
//     monthsecond=1;
// }
// getcurrentyear();
    year=2024;
    day=1;
    month=1;
    yearsecond=year+1;
    daysecond=1;
    monthsecond=1;
  console.log(Customers);
  console.log(arrayCustomerswithtotalprofit(Customers));
//thêm thuộc tính profit
function addprofit(){
  Customers.forEach(Customers=>{
    Customers.lichsuMuaHang.forEach(lichsu=>{
      lichsu.giohang.forEach(product=>{
        product.profit=(product.gia*10)/100 ;
      })
    })
  })
}
addprofit();
taohangthongke(arrayCustomerswithtotalprofit(Customers),aggregateCartItems(Customers));