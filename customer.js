// let Customer = [];

// function refreshCustomers() {
//     const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
//     Customer = storedUsers;
// }

// refreshCustomers();
// console.log('Dữ liệu khách hàng hiện tại:', Customer);

let Customer = [

    {
            phone: "123",
            name: "Nguyễn Hiền",
            email: "nguyenhien@gmail.com",
            gender: "nu",
            address: "123 Đường Lê Lợi, Quận 1, TP. HCM",
            password: "123",
            lichsuMuaHang: [
                {
                  "id": 1,
                  "ngaydat": "27/11/2024",
                  "ngayduyet": 0,
                  "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
                  "tongtien": 237500000,
                  "status": 0,
                  "tenKH": "Nguyễn Hiền",
                  "phoneKH": "123",
                  "emailKH": "nguyenhien@gmail.com",
                  "genderKH": "nu",
                  "giohang": [
                    {
                      "hinh": "assets/User/img/watch/1-1.jpg",
                      "id": 1,
                      "ten": "Đồng Hồ Vàng Sang Trọng",
                      "gia": "47500000",
                      "soLuong": 2,
                      "loai": "watch"
                    },
                    {
                      "hinh": "assets/User/img/watch/2-1.jpg",
                      "id": 2,
                      "ten": "Đồng Hồ Đính Kim Cương",
                      "gia": "71250000",
                      "soLuong": 2,
                      "loai": "watch"
                    }
                  ]
                },
    
                {
                  "id": 1,
                  "ngaydat": "27/11/2024",
                  "ngayduyet": 0,
                  "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
                  "tongtien": 173850000,
                  "status": 0,
                  "tenKH": "Nguyễn Hiền",
                  "phoneKH": "123",
                  "emailKH": "nguyenhien@gmail.com",
                  "genderKH": "nu",
                  "giohang": [
                    {
                      "hinh": "assets/User/img/watch/4-1.jpg",
                      "id": 4,
                      "ten": "Đồng Hồ Vàng Hồng Sang Trọng",
                      "gia": "80750000",
                      "soLuong": 1,
                      "loai": "watch"
                    },
                    {
                      "hinh": "assets/User/img/watch/5-1.jpg",
                      "id": 5,
                      "ten": "Đồng Hồ Mặt Sapphire",
                      "gia": "93100000",
                      "soLuong": 1,
                      "loai": "watch"
                    }
                  ]
                },
                {
                  "id": 2,
                  "ngaydat": "27/11/2024",
                  "ngayduyet": 0,
                  "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
                  "tongtien": 256500000,
                  "status": 0,
                  "tenKH": "Nguyễn Hiền",
                  "phoneKH": "123",
                  "emailKH": "nguyenhien@gmail.com",
                  "genderKH": "nu",
                  "giohang": [
                    {
                      "hinh": "assets/User/img/watch/2-1.jpg",
                      "id": 2,
                      "ten": "Đồng Hồ Đính Kim Cương",
                      "gia": "71250000",
                      "soLuong": 2,
                      "loai": "watch"
                    },
                    {
                      "hinh": "assets/User/img/watch/3-1.jpg",
                      "id": 3,
                      "ten": "Đồng Hồ Bạch Kim",
                      "gia": "114000000",
                      "soLuong": 1,
                      "loai": "watch"
                    }
                  ]
                },
                {
                  "id": 4,
                  "ngaydat": "27/11/2024",
                  "ngayduyet": 0,
                  "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
                  "tongtien": 47500000,
                  "status": 0,
                  "tenKH": "Nguyễn Hiền",
                  "phoneKH": "123",
                  "emailKH": "nguyenhien@gmail.com",
                  "genderKH": "nu",
                  "giohang": [
                    {
                      "hinh": "assets/User/img/watch/1-1.jpg",
                      "id": 1,
                      "ten": "Đồng Hồ Vàng Sang Trọng",
                      "gia": "47500000",
                      "soLuong": 1,
                      "loai": "watch"
                    }
                  ]
                }
              ],
            status: 0,
        },
    
        {
            phone: "0934567890",
            name: "Phạm Minh",
            email: "phamminh@gmail.com",
            gender: "nam",
            address: "101 Đường Nguyễn Trãi, Quận 4, TP. HCM",
            password: "minhpham123",
            lichsuMuaHang: [
                {
                  "id": 5,
                  "ngaydat": "27/11/2024",
                  "ngayduyet": 0,
                  "diachiKH": "101 Đường Nguyễn Trãi, Quận 4, TP. HCM",
                  "tongtien": 684950000,
                  "status": 0,
                  "tenKH": "Phạm Minh",
                  "phoneKH": "0934567890",
                  "emailKH": "phamminh@gmail.com",
                  "genderKH": "nam",
                  "giohang": [
                    {
                      "hinh": "assets/User/img/watch/2-1.jpg",
                      "id": 2,
                      "ten": "Đồng Hồ Đính Kim Cương",
                      "gia": "71250000",
                      "soLuong": 1,
                      "loai": "watch"
                    },
                    {
                      "hinh": "assets/User/img/ring/1-1.jpg",
                      "id": 6,
                      "ten": "Nhẫn Đính Hôn Kim Cương",
                      "gia": "142500000",
                      "soLuong": 3,
                      "loai": "ring"
                    },
                    {
                      "hinh": "assets/User/img/watch/5-1.jpg",
                      "id": 5,
                      "ten": "Đồng Hồ Mặt Sapphire",
                      "gia": "93100000",
                      "soLuong": 2,
                      "loai": "watch"
                    }
                  ]
                }
              ],
            status: 0,
        },
    
        {
            phone: "0976543210",
            name: "Hoàng Mai",
            email: "hoangmai@gmail.com",
            gender: "nu",
            address: "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
            password: "hoangmai123",
            lichsuMuaHang: [
                {
                  "id": 6,
                  "ngaydat": "27/11/2024",
                  "ngayduyet": 0,
                  "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
                  "tongtien": 161500000,
                  "status": 0,
                  "tenKH": "Hoàng Mai",
                  "phoneKH": "0976543210",
                  "emailKH": "hoangmai@gmail.com",
                  "genderKH": "nu",
                  "giohang": [
                    {
                      "hinh": "assets/User/img/watch/1-1.jpg",
                      "id": 1,
                      "ten": "Đồng Hồ Vàng Sang Trọng",
                      "gia": "47500000",
                      "soLuong": 1,
                      "loai": "watch"
                    },
                    {
                      "hinh": "assets/User/img/watch/3-1.jpg",
                      "id": 3,
                      "ten": "Đồng Hồ Bạch Kim",
                      "gia": "114000000",
                      "soLuong": 1,
                      "loai": "watch"
                    }
                  ]
                }
              ],
            status: 0,
        },
    
        {
            phone: "0912345678",
            name: "Trần Thảo",
            email: "tranthao456@gmail.com",
            gender: "nu",
            address: "456 Đường CMT8, Quận 3, TP. HCM",
            password: "password567",
            lichsuMuaHang: [
                {
                  "id": 7,
                  "ngaydat": "27/11/2024",
                  "ngayduyet": 0,
                  "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
                  "tongtien": 945250000,
                  "status": 0,
                  "tenKH": "Trần Thảo",
                  "phoneKH": "0912345678",
                  "emailKH": "tranthao456@gmail.com",
                  "genderKH": "nu",
                  "giohang": [
                    {
                      "hinh": "assets/User/img/watch/2-1.jpg",
                      "id": 2,
                      "ten": "Đồng Hồ Đính Kim Cương",
                      "gia": "71250000",
                      "soLuong": 9,
                      "loai": "watch"
                    },
                    {
                      "hinh": "assets/User/img/watch/3-1.jpg",
                      "id": 3,
                      "ten": "Đồng Hồ Bạch Kim",
                      "gia": "114000000",
                      "soLuong": 1,
                      "loai": "watch"
                    },
                    {
                      "hinh": "assets/User/img/watch/1-1.jpg",
                      "id": 1,
                      "ten": "Đồng Hồ Vàng Sang Trọng",
                      "gia": "47500000",
                      "soLuong": 1,
                      "loai": "watch"
                    },
                    {
                      "hinh": "assets/User/img/ring/1-1.jpg",
                      "id": 6,
                      "ten": "Nhẫn Đính Hôn Kim Cương",
                      "gia": "142500000",
                      "soLuong": 1,
                      "loai": "ring"
                    }
                  ]
                }
              ],
            status: 0,
        },
    
        { 
            phone: "0901234567",
            name: "Lê Hoàng",
            email: "lehoang789@gmail.com",
            gender: "nam",
            address: "789 Đường Võ Thị Sáu, Quận 5, TP. HCM",
            password: "lehoang123",
            lichsuMuaHang: [
                {
                  "id": 8,
                  "ngaydat": "27/11/2024",
                  "ngayduyet": 0,
                  "diachiKH": "789 Đường Võ Thị Sáu, Quận 5, TP. HCM",
                  "tongtien": 1054500000,
                  "status": 0,
                  "tenKH": "Lê Hoàng",
                  "phoneKH": "0901234567",
                  "emailKH": "lehoang789@gmail.com",
                  "genderKH": "nam",
                  "giohang": [
                    {
                      "hinh": "assets/User/img/watch/2-1.jpg",
                      "id": 2,
                      "ten": "Đồng Hồ Đính Kim Cương",
                      "gia": "71250000",
                      "soLuong": 2,
                      "loai": "watch"
                    },
                    {
                      "hinh": "assets/User/img/ring/5-1.jpg",
                      "id": 10,
                      "ten": "Bộ Nhẫn Cưới Bạch Kim",
                      "gia": "161500000",
                      "soLuong": 5,
                      "loai": "ring"
                    },
                    {
                      "hinh": "assets/User/img/ring/4-1.jpg",
                      "id": 9,
                      "ten": "Nhẫn Ngọc Lục Bảo và Kim Cương",
                      "gia": "104500000",
                      "soLuong": 1,
                      "loai": "ring"
                    }
                  ]
                }
              ],
            status: 0,
        },
    
    ];
    
    
    
    
    if( JSON.parse(localStorage.getItem("users")) === null ) {
    localStorage.setItem("users", JSON.stringify(Customer));
    }
    
    if(JSON.parse(localStorage.getItem("donhang")) === null){
        let donhang = [];
        for(let i = 0 ; i <Customer.length;i++){
            for(let j = 0 ; j < Customer[i].lichsuMuaHang.length;j++){
                donhang.push(Customer[i].lichsuMuaHang[j]);
        }
        }
        localStorage.setItem("donhang", JSON.stringify(donhang));
    }

    

