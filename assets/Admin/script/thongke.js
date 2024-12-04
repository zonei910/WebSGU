let theyearr = 2024;
let day = 1;
let month = 1;
let theyearrsecond = 2024 + 1;
let daysecond;
let monthsecond = 1;

function taohangthongke(Customer, product) {
  if (Customer.length > 0) {
    addprofitforcustomer(Customer);
    addprofitforproduct(product);
    const doanhthu = document.querySelector(".container3");
    doanhthu.innerHTML = `
              <div class="doanhthu">
              <div>ID</div>
                  <div>Tên sản phẩm</div>
                  <div>Số lượng đã bán</div>
                  <div>Tổng tiền</div>
              </div>`;
    product.forEach((giohang) => {
      const createrow = document.createElement("div");
      createrow.className = "doanhthu";
      createrow.innerHTML += `
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
                      ${formatVND(giohang.profit)} 
                  </div>
                  `;
      doanhthu.innerHTML += createrow.outerHTML;
    });
    const productwithhighestprofit = highest(product);
    const productwithlowestprofit = lowest(product);
    const Customerwithhighestprofit = cushighest(
      arrayCustomerwithtotalprofit(Customer)
    );
    const Customerwithlowestprofit = cuslowest(
      arrayCustomerwithtotalprofit(Customer)
    );
    const creatediv = document.createElement("div");
    creatediv.className = "";
    creatediv.innerHTML = `
                          <div class="thongkesanpham">
                  <div class="productwithhighestprofit">   
                      <div><div class="thheader">Lợi nhuận cao nhất</div>  </div>
                      <div>
                          <div class="productinner"> 
                              <div class="divimage"><image  class="imagethongke"src="${productwithhighestprofit.hinh}"></image></div>
                              <div><div>ID</div><div>${productwithhighestprofit.id}</div></div>
                              <div><div>Loại sản phẩm</div><div>${productwithhighestprofit.loai}</div></div>
                              <div><div>Tên sản phẩm</div><div>${productwithhighestprofit.ten}</div></div>
                              <div><div>Tổng lợi nhuận</div><div>${formatVND(productwithhighestprofit.profit)}</div></div>
                              <div><div>Số lượng đã bán</div><div>${productwithhighestprofit.soLuong}</div></div>
                          </div>
                      </div>
                  </div>
                  <div class="productwithlowestprofit">   
                      <div><div class="thheader">Lợi nhuận thấp nhất</div>  </div>
                      <div>
                          <div class="productinner"> 
                              <div class="divimage"><image  class="imagethongke"src="${productwithlowestprofit.hinh}"></image></div>
                              <div><div>ID</div><div>${productwithlowestprofit.id}</div></div>
                              <div><div>Loại sản phẩm</div><div>${productwithlowestprofit.loai}</div></div>
                              <div><div>Tên sản phẩm</div><div>${productwithlowestprofit.ten}</div></div>
                              <div><div>Tổng lợi nhuận</div><div>${formatVND(productwithlowestprofit.profit)}</div></div>
                              <div><div>Số lượng dã bán</div><div>${productwithlowestprofit.soLuong}</div></div>
                          </div>
                      </div>
                  </div>
              </div> 
              <div class="thongkecustom">
                  <p>Khách hàng</p>
                  <div class="head">
                      <div>Thứ hạng</div><div>Tên khách hàng</div><div>Số sản phẩm đã mua</div><div>Số tiền đã bỏ ra</div><div>Địa chỉ</div><div>Email</div>
                  </div>
                  <div class="cuswithlowestprofit"> 
                          <div >
                              <div class="head">Highest profit</div>
                              <div>${Customerwithhighestprofit.name}</div>
                              <div>${Customerwithhighestprofit.totalproduct}</div>
                              <div>${formatVND(Customerwithhighestprofit.totalprice)}</div>
                              <div>${Customerwithhighestprofit.address}</div>
                              <div>${Customerwithhighestprofit.email}</div>
                          </div>
                  </div>
                      <div class="cuswithhighestprofit">              
                              <div>
                                  <div class="head">Lowest profit</div>
                                  <div>${Customerwithlowestprofit.name}</div>
                                  <div>${Customerwithlowestprofit.totalproduct}</div>
                                  <div>${formatVND(Customerwithlowestprofit.totalprice)}</div>
                                  <div>${Customerwithlowestprofit.address}</div>
                                  <div>${Customerwithlowestprofit.email}</div>
                              </div>
                      </div>
              </div>
              `;
    document.querySelector(".thongke").innerHTML = ``;
    document.querySelector(".thongke").innerHTML += creatediv.innerHTML;
    let a = gettotal(arrayCustomerwithtotalprofit(Customer));

    document.getElementById("totalprofit").innerText = formatVND(a.totalprofit);
    document.getElementById("totalproduct").innerText = a.totalproduct;
    document.getElementById("totaluser").innerText = a.totaluser;
    document.getElementById("totalprice").innerText = formatVND(a.totalprice);
  } else {
    const doanhthu = document.querySelector(".container3");
    doanhthu.innerHTML = `
            <div class="doanhthu">
            <div>ID</div>
                <div>Tên sản phẩm</div>
                <div>Số lượng đã bán</div>
                <div>Tổng tiền</div>
            </div>`;
    const creatediv = document.createElement("div");
    creatediv.className = "";
    creatediv.innerHTML = `
                        <div class="thongkesanpham">
                <div class="productwithhighestprofit">   
                    <div><div class="header">highest profit</div>  </div>
                    <div>
                        <div class="productinner"> 
                            <div class="divimage"></image></div>
                            <div><div>ID</div><div>no infor</div></div>
                            <div><div>Loại sản phẩm</div><div>no infor</div></div>
                            <div><div>Tên sản phẩm</div><div>no infor</div></div>
                            <div><div>Tổng lợi nhuận</div><div>no infor</div></div>
                            <div><div>Số lượng</div><div>no infor</div></div>
                        </div>
                    </div>
                </div>
                <div class="productwithlowestprofit">   
                    <div><div class="header">Lowest profit</div>  </div>
                    <div>
                        <div class="productinner"> 
                            <div class="divimage"></div>
                            <div><div>id</div><div>no infor</div></div>
                            <div><div>catergory</div><div>no infor</div></div>
                            <div><div>name</div><div>no infor</div></div>
                            <div><div>total profit</div><div>no infor</div></div>
                            <div><div>amount</div><div>no infor</div></div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="thongkecustom">
                <p>Customer</p>
                <div class="head">
                    <div>Customer</div><div>id</div><div>Customer name</div><div>amount product</div><div>amount spent</div><div>teleaddress</div><div>email</div>
                </div>
                <div class="cuswithlowestprofit"> 
                        <div >
                            <div class="head">Highest profit</div>
                            <div>no infor</div>
                            <div>no infor</div>
                            <div>no infor</div>
                            <div>no infor</div>
                            <div>no infor</div>
                            <div>no infor</div>
                        </div>
                </div>
                    <div class="cuswithhighestprofit">              
                            <div>
                                <div class="head">Lowest profit</div>
                                <div>no infor</div>
                                <div>no infor</div>
                                <div>no infor</div>
                                <div>no infor</div>
                                <div>no infor</div>
                                <div>no infor</div>
                            </div>
                    </div>
            </div>
            `;
    document.querySelector(".thongke").innerHTML = ``;
    document.querySelector(".thongke").innerHTML += creatediv.innerHTML;
    let a = gettotal(arrayCustomerwithtotalprofit(Customer));

    document.getElementById("totalprofit").innerText = formatVND(a.totalprofit);
    document.getElementById("totalproduct").innerText = a.totalproduct;
    document.getElementById("totaluser").innerText = a.totaluser;
    document.getElementById("totalprice").innerText = formatVND(a.totalprice);
  }
}
function gettotal(Customer) {
  let sumprofit = 0;
  let sumproduct = 0;
  let sumprice = 0;
  Customer.forEach((Customer) => {
    sumprofit += Customer.totalprofit;
    sumproduct += Customer.totalproduct;
    sumprice += Customer.totalprice;
  });
  return {
    totalprofit: sumprofit,
    totalproduct: sumproduct,
    totalprice: sumprice,
    totaluser: Customer.length,
  };
}
function cushighest(Customer) {
  let max = -Infinity;
  let cus;
  Customer.forEach((Customer) => {
    if (Customer.totalprofit > max) {
      max = Customer.totalprofit;
      cus = Customer;
    }
  });
  return cus;
}

function cuslowest(Customer) {
  let min = Infinity;
  let cus;
  Customer.forEach((Customer) => {
    if (min > Customer.totalprofit) {
      min = Customer.totalprofit;
      cus = Customer;
    }
  });
  return cus;
}
function highest(product) {
  let max = -Infinity;
  let productwithmax;
  product.forEach((product) => {
    if (product.profit > max) {
      max = product.profit;
      productwithmax = product;
    }
  });
  return productwithmax;
}
function lowest(product) {
  let productwithmin;
  let min = Infinity;
  product.forEach((product) => {
    if (product.profit < min) {
      min = product.profit;
      productwithmin = product;
    }
  });
  return productwithmin;
}

function checktimeday(receiptime) {
  let arraycopy = JSON.parse(JSON.stringify(receiptime));
  receipt = arraycopy.split("/");

  if (receipt[2].replace(/^0+/, "") < theyearr) {
    return false;
  }
  if (receipt[2].replace(/^0+/, "") > theyearrsecond) {
    return false;
  }
  if (
    receipt[2].replace(/^0+/, "") < theyearrsecond &&
    receipt[2].replace(/^0+/, "") > theyearr
  ) {
    return true;
  }
  if (
    receipt[1].replace(/^0+/, "") < month &&
    receipt[2].replace(/^0+/, "") == theyearr
  ) {
    return false;
  }
  if (
    receipt[1].replace(/^0+/, "") > monthsecond &&
    receipt[2].replace(/^0+/, "") == theyearrsecond
  ) {
    return false;
  }
  if (
    receipt[0].replace(/^0+/, "") < day &&
    receipt[1].replace(/^0+/, "") == month &&
    receipt[2].replace(/^0+/, "") == theyearr
  ) {
    return false;
  }
  if (
    receipt[0].replace(/^0+/, "") > daysecond &&
    receipt[1].replace(/^0+/, "") == monthsecond &&
    receipt[2].replace(/^0+/, "") == theyearrsecond
  ) {
    return false;
  }
  return true;
}

//lấy mảng Customer mới với lịch sử mua hàng thỏa điều kiện
function arrayCustomer(Customer) {
  // console.log(Customer)
  return Customer.filter((Customer) => {
    const filteredlichsuMuaHangs = Customer.lichsuMuaHang.filter(
      (lichsuMuaHang) => {
        return checktimeday(lichsuMuaHang.ngaydat);
      }
    );
    if (filteredlichsuMuaHangs.length > 0) {
      return {
        ...Customer,
        lichsuMuaHang: filteredlichsuMuaHangs,
      };
    }
  }).filter((Customer) => Customer);
}
//khách hàng với tổng doanh thu,tổng product
function arrayCustomerwithtotalprofit(Customer) {
  if (Customer) {
    const array = JSON.parse(JSON.stringify(Customer));
    array.forEach((Customer) => {
      Customer.lichsuMuaHang.forEach((lichsuMuaHang) => {
        Customer.totalprice = 0;
        Customer.totalproduct = 0;
        Customer.totalprofit = 0;
        lichsuMuaHang.giohang.forEach((product) => {
          Customer.totalprofit += product.soLuong * product.profit;
          Customer.totalproduct += product.soLuong;
          Customer.totalprice += product.soLuong * parseInt(product.gia);
        });
      });
    });
    return array;
  }
}
function bang() {}

// lấy mảng product mới id phân biệt
//   function aggregateCartItems(Customers) {
//     const aggregatedItems = {};
//     Customers.forEach(Customer => {
//         Customer.lichsuMuaHang.forEach(order => {
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
function aggregateCartItems(Customers) {
  const aggregatedItems = {};
  Customers.forEach((Customer) => {
    Customer.lichsuMuaHang.forEach((order) => {
      order.giohang.forEach((item) => {
        if (aggregatedItems[item.id]) {
          aggregatedItems[item.id].soLuong += item.soLuong;
          aggregatedItems[item.id].profit += item.profit * item.soLuong;
          aggregatedItems[item.id].gia += item.gia * item.soLuong;
        } else {
          aggregatedItems[item.id] = {
            ...item,
            soLuong: item.soLuong,
            profit: item.profit * item.soLuong,
            gia: item.gia * item.soLuong,
          };
        }
      });
    });
  });
  return Object.values(aggregatedItems);
}



function inputdate() {
  let Customer = JSON.parse(localStorage.getItem("users"));
  const time = document.getElementById("timefirst").value;
  if (time) {
    day = parseInt(time.split("-")[2].replace(/^0+/, ""), 10);
    month = parseInt(time.split("-")[1].replace(/^0+/, ""), 10);
    theyearr = parseInt(time.split("-")[0].replace(/^0+/, ""), 10);
  }
  const timesec = document.getElementById("timesecond").value;
  if (timesec) {
    daysecond = parseInt(timesec.split("-")[2].replace(/^0+/, ""), 10);
    monthsecond = parseInt(timesec.split("-")[1].replace(/^0+/, ""), 10);
    theyearrsecond = parseInt(timesec.split("-")[0].replace(/^0+/, ""), 10);
  }
  if(timesec && document.getElementById("timefirst").value){
      if(theyearrsecond<theyearr){
          alert("Bạn nhập sai ngày");
          return;
      }
      if(theyearrsecond==theyearr && monthsecond<month){
          alert("Bạn nhập sai ngày");
          return;
      }
      if(theyearrsecond==theyearr && monthsecond==month && daysecond<day){
          alert("Bạn nhập sai ngày");
          return;
      }
  taohangthongke(arrayCustomer(Customer),aggregateCartItems(Customer));
  }
}
// getcurrenttheyearr();

function addprofitforcustomer(Customer) {
  Customer.forEach((Customer) => {
    Customer.lichsuMuaHang.forEach((lichsu) => {
      lichsu.giohang.forEach((product) => {
        product.profit = (product.gia * 10) / 100;
      });
    });
  });
}
function addprofitforproduct(Product) {
  Product.forEach((product) => {
    product.profit = (product.gia * 10) / 100;
  });
}
addprofitforcustomer(JSON.parse(localStorage.getItem("users")));
taohangthongke(
  arrayCustomer(JSON.parse(localStorage.getItem("users"))),
  aggregateCartItems(JSON.parse(localStorage.getItem("users")))
);
