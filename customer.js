// let Customer = [];

// function refreshCustomers() {
//     const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
//     Customer = storedUsers;
// }

// refreshCustomers();
// console.log('Dữ liệu khách hàng hiện tại:', Customer);

let Customer = [
  {
    "phone": "123",
    "name": "Nguyễn Hiền",
    "email": "nguyenhien@gmail.com",
    "gender": "nu",
    "address": "123 Đường Lê Lợi, Quận 1, TP. HCM",
    "password": "123",
    "lichsuMuaHang": [
      
      
      
      
      
      {
        "id": 10,
        "stk": "12345",
        "bank": "AGB",
        "ngaydat": "27/11/2024",
        "ngayduyet": 0,
        "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
        "tongtien": 93100000,
        "status": 0,
        "tenKH": "Nguyễn Hiền",
        "phoneKH": "123",
        "emailKH": "nguyenhien@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/watch/5-1.jpg",
            "id": 5,
            "ten": "Đồng Hồ Mặt Sapphire",
            "gia": "93100000",
            "soLuong": 1,
            "loai": "watch"
          }
        ]
      },
      {
        "id": 11,
        "stk": "152415261",
        "bank": "VCB",
        "ngaydat": "28/11/2024",
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
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/watch/1-1.jpg",
            "id": 1,
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "gia": "47500000",
            "soLuong": 1,
            "loai": "watch"
          }
        ]
      },
      {
        "id": 12,
        "stk": "467486",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
        "tongtien": 441750000,
        "status": 0,
        "tenKH": "Nguyễn Hiền",
        "phoneKH": "123",
        "emailKH": "nguyenhien@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 1,
            "gia": 71250000
          },
          {
            "hinh": "assets/User/img/watch/3-1.jpg",
            "ten": "Đồng Hồ Bạch Kim",
            "id": 3,
            "loai": "watch",
            "soLuong": 2,
            "gia": 114000000
          },
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 3,
            "gia": 47500000
          }
        ]
      },
      {
        "id": 13,
        "stk": "1451345",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
        "tongtien": 1650000,
        "status": 0,
        "tenKH": "Nguyễn Hiền",
        "phoneKH": "123",
        "emailKH": "nguyenhien@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/necklace/13-1.jpg",
            "ten": "Dây Chuyền Bạc Trái Tim Nhỏ",
            "id": 13,
            "loai": "necklace",
            "soLuong": 1,
            "gia": 550000
          },
          {
            "hinh": "assets/User/img/necklace/15-1.jpg",
            "ten": "Dây Chuyền Bạc Dancing Stone",
            "id": 15,
            "loai": "necklace",
            "soLuong": 1,
            "gia": 450000
          },
          {
            "hinh": "assets/User/img/necklace/14-1.jpg",
            "ten": "Dây Chuyền Bạc Mặt Trăng",
            "id": 14,
            "loai": "necklace",
            "soLuong": 1,
            "gia": 650000
          }
        ]
      },
      {
        "id": 14,
        "stk": "678867",
        "bank": "VTB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
        "tongtien": 30000000,
        "status": 0,
        "tenKH": "Nguyễn Hiền",
        "phoneKH": "123",
        "emailKH": "nguyenhien@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 3,
            "gia": 10000000
          }
        ]
      },
      {
        "id": 15,
        "stk": "467868",
        "bank": "AGB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
        "tongtien": 9300000,
        "status": 0,
        "tenKH": "Nguyễn Hiền",
        "phoneKH": "123",
        "emailKH": "nguyenhien@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/bracelet/18-1.jpg",
            "ten": "Vòng Tay Vàng K10",
            "id": 18,
            "loai": "bracelet",
            "soLuong": 3,
            "gia": 2100000
          },
          {
            "hinh": "assets/User/img/bracelet/17-1.jpg",
            "ten": "Vòng Tay Trắng K10",
            "id": 17,
            "loai": "bracelet",
            "soLuong": 2,
            "gia": 1500000
          }
        ]
      },
      {
        "id": 16,
        "stk": "9876543",
        "bank": "VCB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
        "tongtien": 52900000,
        "status": 0,
        "tenKH": "Nguyễn Hiền",
        "phoneKH": "123",
        "emailKH": "nguyenhien@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 1,
            "gia": 47500000
          },
          {
            "hinh": "assets/User/img/earrings/21-1.jpg",
            "ten": "Bông Tai 2 Trái Tim Vàng Hồng",
            "id": 21,
            "loai": "earring",
            "soLuong": 1,
            "gia": 4000000
          },
          {
            "hinh": "assets/User/img/bracelet/20-1.jpg",
            "ten": "Vòng Tay Vàng K18",
            "id": 20,
            "loai": "bracelet",
            "soLuong": 1,
            "gia": 1400000
          }
        ]
      },
      {
        "id": 17,
        "stk": "3456786",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
        "tongtien": 1060450000,
        "status": 0,
        "tenKH": "Nguyễn Hiền",
        "phoneKH": "123",
        "emailKH": "nguyenhien@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/3-1.jpg",
            "ten": "Đồng Hồ Bạch Kim",
            "id": 3,
            "loai": "watch",
            "soLuong": 1,
            "gia": 114000000
          },
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 1,
            "gia": 71250000
          },
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 1,
            "gia": 47500000
          },
          {
            "hinh": "assets/User/img/ring/1-1.jpg",
            "ten": "Nhẫn Đính Hôn Kim Cương",
            "id": 6,
            "loai": "ring",
            "soLuong": 1,
            "gia": 142500000
          },
          {
            "hinh": "assets/User/img/watch/5-1.jpg",
            "ten": "Đồng Hồ Mặt Sapphire",
            "id": 5,
            "loai": "watch",
            "soLuong": 1,
            "gia": 93100000
          },
          {
            "hinh": "assets/User/img/watch/4-1.jpg",
            "ten": "Đồng Hồ Vàng Hồng Sang Trọng",
            "id": 4,
            "loai": "watch",
            "soLuong": 1,
            "gia": 80750000
          },
          {
            "hinh": "assets/User/img/ring/4-1.jpg",
            "ten": "Nhẫn Ngọc Lục Bảo và Kim Cương",
            "id": 9,
            "loai": "ring",
            "soLuong": 1,
            "gia": 104500000
          },
          {
            "hinh": "assets/User/img/ring/3-1.jpg",
            "ten": "Nhẫn Solitaire Ngọc Lục Bảo",
            "id": 8,
            "loai": "ring",
            "soLuong": 1,
            "gia": 90250000
          },
          {
            "hinh": "assets/User/img/ring/2-1.jpg",
            "ten": "Nhẫn Vàng và Ruby",
            "id": 7,
            "loai": "ring",
            "soLuong": 1,
            "gia": 80750000
          },
          {
            "hinh": "assets/User/img/necklace/12-1.jpg",
            "ten": "Dây Chuyền Bạc Mặt Tròn",
            "id": 12,
            "loai": "necklace",
            "soLuong": 1,
            "gia": 1200000
          },
          {
            "hinh": "assets/User/img/necklace/11-1.jpg",
            "ten": "Dây Chuyền Bạc Họa Tiết Móng Ngựa",
            "id": 11,
            "loai": "necklace",
            "soLuong": 1,
            "gia": 750000
          },
          {
            "hinh": "assets/User/img/ring/5-1.jpg",
            "ten": "Bộ Nhẫn Cưới Bạch Kim",
            "id": 10,
            "loai": "ring",
            "soLuong": 1,
            "gia": 161500000
          },
          {
            "hinh": "assets/User/img/necklace/15-1.jpg",
            "ten": "Dây Chuyền Bạc Dancing Stone",
            "id": 15,
            "loai": "necklace",
            "soLuong": 2,
            "gia": 450000
          },
          {
            "hinh": "assets/User/img/necklace/14-1.jpg",
            "ten": "Dây Chuyền Bạc Mặt Trăng",
            "id": 14,
            "loai": "necklace",
            "soLuong": 1,
            "gia": 650000
          },
          {
            "hinh": "assets/User/img/necklace/13-1.jpg",
            "ten": "Dây Chuyền Bạc Trái Tim Nhỏ",
            "id": 13,
            "loai": "necklace",
            "soLuong": 1,
            "gia": 550000
          },
          {
            "hinh": "assets/User/img/bracelet/18-1.jpg",
            "ten": "Vòng Tay Vàng K10",
            "id": 18,
            "loai": "bracelet",
            "soLuong": 3,
            "gia": 2100000
          },
          {
            "hinh": "assets/User/img/bracelet/17-1.jpg",
            "ten": "Vòng Tay Trắng K10",
            "id": 17,
            "loai": "bracelet",
            "soLuong": 2,
            "gia": 1500000
          },
          {
            "hinh": "assets/User/img/bracelet/16-1.jpg",
            "ten": "Vòng Tay Vàng K10",
            "id": 16,
            "loai": "bracelet",
            "soLuong": 2,
            "gia": 2000000
          },
          {
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 2,
            "gia": 10000000
          },
          {
            "hinh": "assets/User/img/earrings/23-1.jpg",
            "ten": "Bông Tai Bạc Đính Akoya",
            "id": 23,
            "loai": "earring",
            "soLuong": 2,
            "gia": 3500000
          },
          {
            "hinh": "assets/User/img/earrings/22-1.jpg",
            "ten": "Bông Tai Bạc Bông Hoa",
            "id": 22,
            "loai": "earring",
            "soLuong": 2,
            "gia": 3000000
          },
          {
            "hinh": "assets/User/img/earrings/25-1.jpg",
            "ten": "Bông Tai Bac Mặt Trăng Khuyết",
            "id": 25,
            "loai": "earring",
            "soLuong": 2,
            "gia": 12000000
          }
        ]
      },
      {
        "id": 18,
        "stk": "6787590",
        "bank": "AGB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
        "tongtien": 18900000,
        "status": 0,
        "tenKH": "Nguyễn Hiền",
        "phoneKH": "123",
        "emailKH": "nguyenhien@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/bracelet/18-1.jpg",
            "ten": "Vòng Tay Vàng K10",
            "id": 18,
            "loai": "bracelet",
            "soLuong": 4,
            "gia": 2100000
          },
          {
            "hinh": "assets/User/img/bracelet/17-1.jpg",
            "ten": "Vòng Tay Trắng K10",
            "id": 17,
            "loai": "bracelet",
            "soLuong": 7,
            "gia": 1500000
          }
        ]
      },
      {
        "id": 71,
        "stk": "5687980",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
        "tongtien": 17600000,
        "status": 0,
        "tenKH": "Nguyễn Hiền",
        "phoneKH": "123",
        "emailKH": "nguyenhien@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/bracelet/16-1.jpg",
            "ten": "Vòng Tay Vàng K10",
            "id": 16,
            "loai": "bracelet",
            "soLuong": 1,
            "gia": 2000000
          },
          {
            "hinh": "assets/User/img/bracelet/17-1.jpg",
            "ten": "Vòng Tay Trắng K10",
            "id": 17,
            "loai": "bracelet",
            "soLuong": 1,
            "gia": 1500000
          },
          {
            "hinh": "assets/User/img/bracelet/18-1.jpg",
            "ten": "Vòng Tay Vàng K10",
            "id": 18,
            "loai": "bracelet",
            "soLuong": 1,
            "gia": 2100000
          },
          {
            "hinh": "assets/User/img/earrings/25-1.jpg",
            "ten": "Bông Tai Bac Mặt Trăng Khuyết",
            "id": 25,
            "loai": "earring",
            "soLuong": 1,
            "gia": 12000000
          }
        ]
      },
      {
        "id": 72,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
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
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 1,
            "gia": 47500000
          }
        ]
      },
      {
        "id": 73,
        "stk": "4567543223456",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
        "tongtien": 522500000,
        "status": 0,
        "tenKH": "Nguyễn Hiền",
        "phoneKH": "123",
        "emailKH": "nguyenhien@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/ring/4-1.jpg",
            "id": 9,
            "ten": "Nhẫn Ngọc Lục Bảo và Kim Cương",
            "gia": "104500000",
            "soLuong": 5,
            "loai": "ring"
          }
        ]
      },
      {
        "id": 74,
        "stk": "5665898788",
        "bank": "AGB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
        "tongtien": 105800000,
        "status": 0,
        "tenKH": "Nguyễn Hiền",
        "phoneKH": "123",
        "emailKH": "nguyenhien@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/ring/4-1.jpg",
            "ten": "Nhẫn Ngọc Lục Bảo và Kim Cương",
            "id": 9,
            "loai": "ring",
            "soLuong": 1,
            "gia": 104500000
          },
          {
            "hinh": "assets/User/img/necklace/11-1.jpg",
            "ten": "Dây Chuyền Bạc Họa Tiết Móng Ngựa",
            "id": 11,
            "loai": "necklace",
            "soLuong": 1,
            "gia": 750000
          },
          {
            "hinh": "assets/User/img/necklace/13-1.jpg",
            "ten": "Dây Chuyền Bạc Trái Tim Nhỏ",
            "id": 13,
            "loai": "necklace",
            "soLuong": 1,
            "gia": 550000
          }
        ]
      },
      {
        "id": 75,
        "stk": "6767",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
        "tongtien": 13500000,
        "status": 0,
        "tenKH": "Nguyễn Hiền",
        "phoneKH": "123",
        "emailKH": "nguyenhien@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/bracelet/18-1.jpg",
            "ten": "Vòng Tay Vàng K10",
            "id": 18,
            "loai": "bracelet",
            "soLuong": 1,
            "gia": 2100000
          },
          {
            "hinh": "assets/User/img/bracelet/17-1.jpg",
            "ten": "Vòng Tay Trắng K10",
            "id": 17,
            "loai": "bracelet",
            "soLuong": 1,
            "gia": 1500000
          },
          {
            "hinh": "assets/User/img/bracelet/16-1.jpg",
            "ten": "Vòng Tay Vàng K10",
            "id": 16,
            "loai": "bracelet",
            "soLuong": 1,
            "gia": 2000000
          },
          {
            "hinh": "assets/User/img/bracelet/19-1.jpg",
            "ten": "Vòng Tay Vàng Trắng K10",
            "id": 19,
            "loai": "bracelet",
            "soLuong": 1,
            "gia": 2500000
          },
          {
            "hinh": "assets/User/img/bracelet/20-1.jpg",
            "ten": "Vòng Tay Vàng K18",
            "id": 20,
            "loai": "bracelet",
            "soLuong": 1,
            "gia": 1400000
          },
          {
            "hinh": "assets/User/img/earrings/21-1.jpg",
            "ten": "Bông Tai 2 Trái Tim Vàng Hồng",
            "id": 21,
            "loai": "earring",
            "soLuong": 1,
            "gia": 4000000
          }
        ]
      },
      {
        "id": 76,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
        "tongtien": 130750000,
        "status": 0,
        "tenKH": "Nguyễn Hiền",
        "phoneKH": "123",
        "emailKH": "nguyenhien@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/25-1.jpg",
            "ten": "Bông Tai Bac Mặt Trăng Khuyết",
            "id": 25,
            "loai": "earring",
            "soLuong": 1,
            "gia": 12000000
          },
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 1,
            "gia": 47500000
          },
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 1,
            "gia": 71250000
          }
        ]
      },
      {
        "id": 77,
        "stk": "57467",
        "bank": "VTB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
        "tongtien": 493200000,
        "status": 0,
        "tenKH": "Nguyễn Hiền",
        "phoneKH": "123",
        "emailKH": "nguyenhien@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/3-1.jpg",
            "ten": "Đồng Hồ Bạch Kim",
            "id": 3,
            "loai": "watch",
            "soLuong": 1,
            "gia": 114000000
          },
          {
            "hinh": "assets/User/img/ring/1-1.jpg",
            "ten": "Nhẫn Đính Hôn Kim Cương",
            "id": 6,
            "loai": "ring",
            "soLuong": 2,
            "gia": 142500000
          },
          {
            "hinh": "assets/User/img/watch/5-1.jpg",
            "ten": "Đồng Hồ Mặt Sapphire",
            "id": 5,
            "loai": "watch",
            "soLuong": 1,
            "gia": 93100000
          },
          {
            "hinh": "assets/User/img/necklace/13-1.jpg",
            "ten": "Dây Chuyền Bạc Trái Tim Nhỏ",
            "id": 13,
            "loai": "necklace",
            "soLuong": 2,
            "gia": 550000
          }
        ]
      }
    ],
    "status": 0
  },
  {
    "phone": "0934567890",
    "name": "Phạm Minh",
    "email": "phamminh@gmail.com",
    "gender": "nam",
    "address": "101 Đường Nguyễn Trãi, Quận 4, TP. HCM",
    "password": "minhpham123",
    "lichsuMuaHang": [
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
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/watch/2-1.jpg",
            "id": 2,
            "ten": "Đồng Hồ Đính Kim Cương",
            "gia": "71250000",
            "soLuong": 1,
            "loai": "watch"
          },
          {
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/ring/1-1.jpg",
            "id": 6,
            "ten": "Nhẫn Đính Hôn Kim Cương",
            "gia": "142500000",
            "soLuong": 3,
            "loai": "ring"
          },
          {
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/watch/5-1.jpg",
            "id": 5,
            "ten": "Đồng Hồ Mặt Sapphire",
            "gia": "93100000",
            "soLuong": 2,
            "loai": "watch"
          }
        ]
      },
      {
        "id": 19,
        "stk": "35647789",
        "bank": "AGB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "101 Đường Nguyễn Trãi, Quận 4, TP. HCM",
        "tongtien": 387250000,
        "status": 0,
        "tenKH": "Phạm Minh",
        "phoneKH": "0934567890",
        "emailKH": "phamminh@gmail.com",
        "genderKH": "nam",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 1,
            "gia": 47500000
          },
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 1,
            "gia": 71250000
          },
          {
            "hinh": "assets/User/img/watch/3-1.jpg",
            "ten": "Đồng Hồ Bạch Kim",
            "id": 3,
            "loai": "watch",
            "soLuong": 1,
            "gia": 114000000
          },
          {
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 9,
            "gia": 10000000
          },
          {
            "hinh": "assets/User/img/earrings/23-1.jpg",
            "ten": "Bông Tai Bạc Đính Akoya",
            "id": 23,
            "loai": "earring",
            "soLuong": 3,
            "gia": 3500000
          },
          {
            "hinh": "assets/User/img/earrings/22-1.jpg",
            "ten": "Bông Tai Bạc Bông Hoa",
            "id": 22,
            "loai": "earring",
            "soLuong": 6,
            "gia": 3000000
          },
          {
            "hinh": "assets/User/img/earrings/25-1.jpg",
            "ten": "Bông Tai Bac Mặt Trăng Khuyết",
            "id": 25,
            "loai": "earring",
            "soLuong": 3,
            "gia": 12000000
          }
        ]
      },
      {
        "id": 20,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "101 Đường Nguyễn Trãi, Quận 4, TP. HCM",
        "tongtien": 14700000,
        "status": 0,
        "tenKH": "Phạm Minh",
        "phoneKH": "0934567890",
        "emailKH": "phamminh@gmail.com",
        "genderKH": "nam",
        "giohang": [
          {
            "hinh": "assets/User/img/bracelet/18-1.jpg",
            "ten": "Vòng Tay Vàng K10",
            "id": 18,
            "loai": "bracelet",
            "soLuong": 7,
            "gia": 2100000
          }
        ]
      },
      {
        "id": 21,
        "stk": "436576",
        "bank": "VCB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "101 Đường Nguyễn Trãi, Quận 4, TP. HCM",
        "tongtien": 44500000,
        "status": 0,
        "tenKH": "Phạm Minh",
        "phoneKH": "0934567890",
        "emailKH": "phamminh@gmail.com",
        "genderKH": "nam",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 1,
            "gia": 10000000
          },
          {
            "hinh": "assets/User/img/earrings/23-1.jpg",
            "ten": "Bông Tai Bạc Đính Akoya",
            "id": 23,
            "loai": "earring",
            "soLuong": 3,
            "gia": 3500000
          },
          {
            "hinh": "assets/User/img/earrings/22-1.jpg",
            "ten": "Bông Tai Bạc Bông Hoa",
            "id": 22,
            "loai": "earring",
            "soLuong": 4,
            "gia": 3000000
          },
          {
            "hinh": "assets/User/img/earrings/25-1.jpg",
            "ten": "Bông Tai Bac Mặt Trăng Khuyết",
            "id": 25,
            "loai": "earring",
            "soLuong": 1,
            "gia": 12000000
          }
        ]
      },
      {
        "id": 22,
        "stk": "45678976",
        "bank": "AGB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "101 Đường Nguyễn Trãi, Quận 4, TP. HCM",
        "tongtien": 855000000,
        "status": 0,
        "tenKH": "Phạm Minh",
        "phoneKH": "0934567890",
        "emailKH": "phamminh@gmail.com",
        "genderKH": "nam",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 18,
            "gia": 47500000
          }
        ]
      },
      {
        "id": 23,
        "stk": "6748789",
        "bank": "VCB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "101 Đường Nguyễn Trãi, Quận 4, TP. HCM",
        "tongtien": 1584000000,
        "status": 0,
        "tenKH": "Phạm Minh",
        "phoneKH": "0934567890",
        "emailKH": "phamminh@gmail.com",
        "genderKH": "nam",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/25-1.jpg",
            "ten": "Bông Tai Bac Mặt Trăng Khuyết",
            "id": 25,
            "loai": "earring",
            "soLuong": 132,
            "gia": 12000000
          }
        ]
      },
      {
        "id": 24,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "101 Đường Nguyễn Trãi, Quận 4, TP. HCM",
        "tongtien": 185250000,
        "status": 0,
        "tenKH": "Phạm Minh",
        "phoneKH": "0934567890",
        "emailKH": "phamminh@gmail.com",
        "genderKH": "nam",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/3-1.jpg",
            "ten": "Đồng Hồ Bạch Kim",
            "id": 3,
            "loai": "watch",
            "soLuong": 1,
            "gia": 114000000
          },
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 1,
            "gia": 71250000
          }
        ]
      },
      {
        "id": 25,
        "stk": "54764657869",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "101 Đường Nguyễn Trãi, Quận 4, TP. HCM",
        "tongtien": 2250000,
        "status": 0,
        "tenKH": "Phạm Minh",
        "phoneKH": "0934567890",
        "emailKH": "phamminh@gmail.com",
        "genderKH": "nam",
        "giohang": [
          {
            "hinh": "assets/User/img/necklace/11-1.jpg",
            "ten": "Dây Chuyền Bạc Họa Tiết Móng Ngựa",
            "id": 11,
            "loai": "necklace",
            "soLuong": 3,
            "gia": 750000
          }
        ]
      }
    ],
    "status": 0
  },
  {
    "phone": "0976543210",
    "name": "Hoàng Mai",
    "email": "hoangmai@gmail.com",
    "gender": "nu",
    "address": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
    "password": "hoangmai123",
    "lichsuMuaHang": [
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
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/watch/1-1.jpg",
            "id": 1,
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "gia": "47500000",
            "soLuong": 1,
            "loai": "watch"
          },
          {
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/watch/3-1.jpg",
            "id": 3,
            "ten": "Đồng Hồ Bạch Kim",
            "gia": "114000000",
            "soLuong": 1,
            "loai": "watch"
          }
        ]
      },
      {
        "id": 26,
        "stk": "45678",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 244750000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 1,
            "gia": 47500000
          },
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 1,
            "gia": 71250000
          },
          {
            "hinh": "assets/User/img/watch/3-1.jpg",
            "ten": "Đồng Hồ Bạch Kim",
            "id": 3,
            "loai": "watch",
            "soLuong": 1,
            "gia": 114000000
          },
          {
            "hinh": "assets/User/img/earrings/25-1.jpg",
            "ten": "Bông Tai Bac Mặt Trăng Khuyết",
            "id": 25,
            "loai": "earring",
            "soLuong": 1,
            "gia": 12000000
          }
        ]
      },
      {
        "id": 27,
        "stk": "68678474",
        "bank": "VTB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 10000000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 1,
            "gia": 10000000
          }
        ]
      },
      {
        "id": 28,
        "stk": "654767",
        "bank": "AGB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 10000000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 1,
            "gia": 10000000
          }
        ]
      },
      {
        "id": 29,
        "stk": "677676",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 6300000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/bracelet/18-1.jpg",
            "ten": "Vòng Tay Vàng K10",
            "id": 18,
            "loai": "bracelet",
            "soLuong": 3,
            "gia": 2100000
          }
        ]
      },
      {
        "id": 30,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 47500000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 1,
            "gia": 47500000
          }
        ]
      },
      {
        "id": 31,
        "stk": "67676767",
        "bank": "VCB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 71250000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 1,
            "gia": 71250000
          }
        ]
      },
      {
        "id": 32,
        "stk": "6767676",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 114000000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/3-1.jpg",
            "ten": "Đồng Hồ Bạch Kim",
            "id": 3,
            "loai": "watch",
            "soLuong": 1,
            "gia": 114000000
          }
        ]
      },
      {
        "id": 33,
        "stk": "465657",
        "bank": "VCB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 114000000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/3-1.jpg",
            "ten": "Đồng Hồ Bạch Kim",
            "id": 3,
            "loai": "watch",
            "soLuong": 1,
            "gia": 114000000
          }
        ]
      },
      {
        "id": 34,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 192000000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/25-1.jpg",
            "ten": "Bông Tai Bac Mặt Trăng Khuyết",
            "id": 25,
            "loai": "earring",
            "soLuong": 16,
            "gia": 12000000
          }
        ]
      },
      {
        "id": 35,
        "stk": "6577986",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 450000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/necklace/15-1.jpg",
            "ten": "Dây Chuyền Bạc Dancing Stone",
            "id": 15,
            "loai": "necklace",
            "soLuong": 1,
            "gia": 450000
          }
        ]
      },
      {
        "id": 36,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 1500000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/necklace/11-1.jpg",
            "ten": "Dây Chuyền Bạc Họa Tiết Móng Ngựa",
            "id": 11,
            "loai": "necklace",
            "soLuong": 2,
            "gia": 750000
          }
        ]
      },
      {
        "id": 37,
        "stk": "464747",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 152500000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 2,
            "gia": 71250000
          },
          {
            "hinh": "assets/User/img/bracelet/16-1.jpg",
            "ten": "Vòng Tay Vàng K10",
            "id": 16,
            "loai": "bracelet",
            "soLuong": 5,
            "gia": 2000000
          }
        ]
      },
      {
        "id": 38,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 25200000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/bracelet/18-1.jpg",
            "ten": "Vòng Tay Vàng K10",
            "id": 18,
            "loai": "bracelet",
            "soLuong": 12,
            "gia": 2100000
          }
        ]
      },
      {
        "id": 39,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 71250000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 1,
            "gia": 71250000
          }
        ]
      },
      {
        "id": 40,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 190000000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 4,
            "gia": 47500000
          }
        ]
      },
      {
        "id": 41,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 2550000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/necklace/15-1.jpg",
            "ten": "Dây Chuyền Bạc Dancing Stone",
            "id": 15,
            "loai": "necklace",
            "soLuong": 2,
            "gia": 450000
          },
          {
            "hinh": "assets/User/img/necklace/13-1.jpg",
            "ten": "Dây Chuyền Bạc Trái Tim Nhỏ",
            "id": 13,
            "loai": "necklace",
            "soLuong": 3,
            "gia": 550000
          }
        ]
      },
      {
        "id": 42,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 580000000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 58,
            "gia": 10000000
          }
        ]
      },
      {
        "id": 43,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 19500000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 1,
            "gia": 10000000
          },
          {
            "hinh": "assets/User/img/earrings/23-1.jpg",
            "ten": "Bông Tai Bạc Đính Akoya",
            "id": 23,
            "loai": "earring",
            "soLuong": 1,
            "gia": 3500000
          },
          {
            "hinh": "assets/User/img/earrings/22-1.jpg",
            "ten": "Bông Tai Bạc Bông Hoa",
            "id": 22,
            "loai": "earring",
            "soLuong": 2,
            "gia": 3000000
          }
        ]
      },
      {
        "id": 44,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 47500000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 1,
            "gia": 47500000
          }
        ]
      },
      {
        "id": 45,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 190000000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 4,
            "gia": 47500000
          }
        ]
      },
      {
        "id": 46,
        "stk": "67676767",
        "bank": "AGB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 142500000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 3,
            "gia": 47500000
          }
        ]
      },
      {
        "id": 47,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        "tongtien": 142500000,
        "status": 0,
        "tenKH": "Hoàng Mai",
        "phoneKH": "0976543210",
        "emailKH": "hoangmai@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 3,
            "gia": 47500000
          }
        ]
      }
    ],
    "status": 0
  },
  {
    "phone": "0912345678",
    "name": "Trần Thảo",
    "email": "tranthao456@gmail.com",
    "gender": "nu",
    "address": "456 Đường CMT8, Quận 3, TP. HCM",
    "password": "password567",
    "lichsuMuaHang": [
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
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/watch/2-1.jpg",
            "id": 2,
            "ten": "Đồng Hồ Đính Kim Cương",
            "gia": "71250000",
            "soLuong": 9,
            "loai": "watch"
          },
          {
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/watch/3-1.jpg",
            "id": 3,
            "ten": "Đồng Hồ Bạch Kim",
            "gia": "114000000",
            "soLuong": 1,
            "loai": "watch"
          },
          {
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/watch/1-1.jpg",
            "id": 1,
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "gia": "47500000",
            "soLuong": 1,
            "loai": "watch"
          },
          {
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/ring/1-1.jpg",
            "id": 6,
            "ten": "Nhẫn Đính Hôn Kim Cương",
            "gia": "142500000",
            "soLuong": 1,
            "loai": "ring"
          }
        ]
      },
      {
        "id": 48,
        "stk": "7878787",
        "bank": "AGB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 282948000000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/ring/5-1.jpg",
            "ten": "Bộ Nhẫn Cưới Bạch Kim",
            "id": 10,
            "loai": "ring",
            "soLuong": 1752,
            "gia": 161500000
          }
        ]
      },
      {
        "id": 49,
        "stk": "457654",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 10000000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 1,
            "gia": 10000000
          }
        ]
      },
      {
        "id": 50,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 26000000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/21-1.jpg",
            "ten": "Bông Tai 2 Trái Tim Vàng Hồng",
            "id": 21,
            "loai": "earring",
            "soLuong": 4,
            "gia": 4000000
          },
          {
            "hinh": "assets/User/img/bracelet/19-1.jpg",
            "ten": "Vòng Tay Vàng Trắng K10",
            "id": 19,
            "loai": "bracelet",
            "soLuong": 4,
            "gia": 2500000
          }
        ]
      },
      {
        "id": 51,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 8000000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/21-1.jpg",
            "ten": "Bông Tai 2 Trái Tim Vàng Hồng",
            "id": 21,
            "loai": "earring",
            "soLuong": 2,
            "gia": 4000000
          }
        ]
      },
      {
        "id": 52,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 8000000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/21-1.jpg",
            "ten": "Bông Tai 2 Trái Tim Vàng Hồng",
            "id": 21,
            "loai": "earring",
            "soLuong": 2,
            "gia": 4000000
          }
        ]
      },
      {
        "id": 53,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 71250000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 1,
            "gia": 71250000
          }
        ]
      },
      {
        "id": 54,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 47500000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 1,
            "gia": 47500000
          }
        ]
      },
      {
        "id": 55,
        "stk": "78787878",
        "bank": "AGB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 10000000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 1,
            "gia": 10000000
          }
        ]
      },
      {
        "id": 56,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 4000000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/21-1.jpg",
            "ten": "Bông Tai 2 Trái Tim Vàng Hồng",
            "id": 21,
            "loai": "earring",
            "soLuong": 1,
            "gia": 4000000
          }
        ]
      },
      {
        "id": 57,
        "stk": "78787878",
        "bank": "AGB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 8400000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/bracelet/18-1.jpg",
            "ten": "Vòng Tay Vàng K10",
            "id": 18,
            "loai": "bracelet",
            "soLuong": 4,
            "gia": 2100000
          }
        ]
      },
      {
        "id": 58,
        "stk": "7878787",
        "bank": "VTB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 1500000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/bracelet/17-1.jpg",
            "ten": "Vòng Tay Trắng K10",
            "id": 17,
            "loai": "bracelet",
            "soLuong": 1,
            "gia": 1500000
          }
        ]
      },
      {
        "id": 59,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 47500000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 1,
            "gia": 47500000
          }
        ]
      },
      {
        "id": 60,
        "stk": "788787",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 71250000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 1,
            "gia": 71250000
          }
        ]
      },
      {
        "id": 61,
        "stk": "787878878",
        "bank": "AGB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 10000000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 1,
            "gia": 10000000
          }
        ]
      },
      {
        "id": 62,
        "stk": "5632454",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 71250000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 1,
            "gia": 71250000
          }
        ]
      },
      {
        "id": 63,
        "stk": "78787878",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 142500000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 2,
            "gia": 71250000
          }
        ]
      },
      {
        "id": 64,
        "stk": "78877878",
        "bank": "AGB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 10000000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 1,
            "gia": 10000000
          }
        ]
      },
      {
        "id": 65,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 1300000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/necklace/14-1.jpg",
            "ten": "Dây Chuyền Bạc Mặt Trăng",
            "id": 14,
            "loai": "necklace",
            "soLuong": 2,
            "gia": 650000
          }
        ]
      },
      {
        "id": 66,
        "stk": "78787878",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 551000000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/ring/4-1.jpg",
            "ten": "Nhẫn Ngọc Lục Bảo và Kim Cương",
            "id": 9,
            "loai": "ring",
            "soLuong": 2,
            "gia": 104500000
          },
          {
            "hinh": "assets/User/img/ring/3-1.jpg",
            "ten": "Nhẫn Solitaire Ngọc Lục Bảo",
            "id": 8,
            "loai": "ring",
            "soLuong": 2,
            "gia": 90250000
          },
          {
            "hinh": "assets/User/img/ring/2-1.jpg",
            "ten": "Nhẫn Vàng và Ruby",
            "id": 7,
            "loai": "ring",
            "soLuong": 2,
            "gia": 80750000
          }
        ]
      },
      {
        "id": 67,
        "stk": "787878",
        "bank": "VCB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 50350000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/necklace/12-1.jpg",
            "id": 12,
            "ten": "Dây Chuyền Bạc Mặt Tròn",
            "gia": "1200000",
            "soLuong": 2,
            "loai": "necklace"
          },
          {
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/necklace/15-1.jpg",
            "id": 15,
            "ten": "Dây Chuyền Bạc Dancing Stone",
            "gia": "450000",
            "soLuong": 1,
            "loai": "necklace"
          },
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 1,
            "gia": 47500000
          }
        ]
      },
      {
        "id": 68,
        "stk": "7878787",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 60000000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 6,
            "gia": 10000000
          }
        ]
      },
      {
        "id": 69,
        "stk": "7878778",
        "bank": "VCB",
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 300200000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/watch/5-1.jpg",
            "id": 5,
            "ten": "Đồng Hồ Mặt Sapphire",
            "gia": "93100000",
            "soLuong": 2,
            "loai": "watch"
          },
          {
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/watch/3-1.jpg",
            "id": 3,
            "ten": "Đồng Hồ Bạch Kim",
            "gia": "114000000",
            "soLuong": 1,
            "loai": "watch"
          }
        ]
      },
      {
        "id": 70,
        "stk": "787878",
        "bank": -1,
        "ngaydat": "28/11/2024",
        "ngayduyet": 0,
        "diachiKH": "456 Đường CMT8, Quận 3, TP. HCM",
        "tongtien": 1400000,
        "status": 0,
        "tenKH": "Trần Thảo",
        "phoneKH": "0912345678",
        "emailKH": "tranthao456@gmail.com",
        "genderKH": "nu",
        "giohang": [
          {
            "hinh": "assets/User/img/bracelet/20-1.jpg",
            "ten": "Vòng Tay Vàng K18",
            "id": 20,
            "loai": "bracelet",
            "soLuong": 1,
            "gia": 1400000
          }
        ]
      }
    ],
    "status": 0
  },
  {
    "phone": "0901234567",
    "name": "Lê Hoàng",
    "email": "lehoang789@gmail.com",
    "gender": "nam",
    "address": "789 Đường Võ Thị Sáu, Quận 5, TP. HCM",
    "password": "lehoang123",
    "lichsuMuaHang": [
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
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/watch/2-1.jpg",
            "id": 2,
            "ten": "Đồng Hồ Đính Kim Cương",
            "gia": "71250000",
            "soLuong": 2,
            "loai": "watch"
          },
          {
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/ring/5-1.jpg",
            "id": 10,
            "ten": "Bộ Nhẫn Cưới Bạch Kim",
            "gia": "161500000",
            "soLuong": 5,
            "loai": "ring"
          },
          {
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/ring/4-1.jpg",
            "id": 9,
            "ten": "Nhẫn Ngọc Lục Bảo và Kim Cương",
            "gia": "104500000",
            "soLuong": 1,
            "loai": "ring"
          }
        ]
      }
    ],
    "status": 0
  }
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

    

