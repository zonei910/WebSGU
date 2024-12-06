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
    "name": "Võ Văn Toàn",
    "email": "vovantoan@gmail.com",
    "gender": "male",
    "address": "178 Nguyễn Chí Thanh phường 5 quận 11 HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận 11",
    "lichsuMuaHang": [
      {
        "id": 1,
        "stk": -1,
        "bank": -1,
        "ngaydat": "01/01/2024 ",
        "ngayduyet": 0,
        "diachiKH": "178 Nguyễn Chí Thanh phường 5 quận 11 HCM",
        "quanKH": "Quận 11",
        "tongtien": 285000000,
        "status": 0,
        "tenKH": "Võ Văn Toàn",
        "phoneKH": "123",
        "emailKH": "vovantoan@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 4,
            "gia": 71250000
          }
        ]
      },
      {
        "id": 2,
        "stk": "35635635",
        "bank": -1,
        "ngaydat": "10/01/2024 ",
        "ngayduyet": 0,
        "diachiKH": "178 Nguyễn Chí Thanh phường 5 quận 11 HCM",
        "quanKH": "Quận 11",
        "tongtien": 12000000,
        "status": 0,
        "tenKH": "Võ Văn Toàn",
        "phoneKH": "123",
        "emailKH": "vovantoan@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/25-1.jpg",
            "ten": "Bông Tai Bac Mặt Trăng Khuyết",
            "id": 25,
            "loai": "earring",
            "soLuong": 1,
            "gia": 12000000
          }
        ]
      }
    ]
  },
  {
    "phone": "0123456778",
    "name": "Bách Lý Ngự Vũ",
    "email": "nguvu@gmail.com",
    "gender": "female",
    "address": "23 Trung Châu Hồ Tây Hà Nội",
    "password": "123",
    "status": 0,
    "quan": "Quận 1",
    "lichsuMuaHang": [
      {
        "id": 3,
        "stk": "34344343",
        "bank": "ABBANK",
        "ngaydat": "15/01/2024",
        "ngayduyet": 0,
        "diachiKH": "23 Trung Châu Hồ Tây Hà Nội",
        "quanKH": "Quận 1",
        "tongtien": 351500000,
        "status": 0,
        "tenKH": "Bách Lý Ngự Vũ",
        "phoneKH": "0123456778",
        "emailKH": "nguvu@gmail.com",
        "genderKH": "female",
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
            "hinh": "assets/User/img/ring/4-1.jpg",
            "ten": "Nhẫn Ngọc Lục Bảo và Kim Cương",
            "id": 9,
            "loai": "ring",
            "soLuong": 2,
            "gia": 104500000
          }
        ]
      },
      {
        "id": 4,
        "stk": -1,
        "bank": -1,
        "ngaydat": "18/01/2024 ",
        "ngayduyet": 0,
        "diachiKH": "23 Trung Châu Hồ Tây Hà Nội",
        "quanKH": "Quận 1",
        "tongtien": 762500000,
        "status": 0,
        "tenKH": "Bách Lý Ngự Vũ",
        "phoneKH": "0123456778",
        "emailKH": "nguvu@gmail.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/ring/1-1.jpg",
            "ten": "Nhẫn Đính Hôn Kim Cương",
            "id": 6,
            "loai": "ring",
            "soLuong": 5,
            "gia": 142500000
          },
          {
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 5,
            "gia": 10000000
          }
        ]
      }
    ]
  },
  {
    "phone": "0263547384",
    "name": "Hồ Khuynh Thành",
    "email": "khuynhthanh@gmail.com",
    "gender": "female",
    "address": "23 phường Tân qQuy quận 7 HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận 1",
    "lichsuMuaHang": [
      {
        "id": 5,
        "stk": -1,
        "bank": -1,
        "ngaydat": "20/01/2024 ",
        "ngayduyet": 0,
        "diachiKH": "23 phường Tân qQuy quận 7 HCM",
        "quanKH": "Quận 1",
        "tongtien": 4650000,
        "status": 0,
        "tenKH": "Hồ Khuynh Thành",
        "phoneKH": "0263547384",
        "emailKH": "khuynhthanh@gmail.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/necklace/11-1.jpg",
            "ten": "Dây Chuyền Bạc Họa Tiết Móng Ngựa",
            "id": 11,
            "loai": "necklace",
            "soLuong": 3,
            "gia": 750000
          },
          {
            "hinh": "assets/User/img/necklace/12-1.jpg",
            "ten": "Dây Chuyền Bạc Mặt Tròn",
            "id": 12,
            "loai": "necklace",
            "soLuong": 2,
            "gia": 1200000
          }
        ]
      },
      {
        "id": 6,
        "stk": "3564736",
        "bank": -1,
        "ngaydat": "22/01/2024 ",
        "ngayduyet": 0,
        "diachiKH": "23 phường Tân qQuy quận 7 HCM",
        "quanKH": "Quận 1",
        "tongtien": 95000000,
        "status": 0,
        "tenKH": "Hồ Khuynh Thành",
        "phoneKH": "0263547384",
        "emailKH": "khuynhthanh@gmail.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 2,
            "gia": 47500000
          }
        ]
      },
      {
        "id": 7,
        "stk": "362748",
        "bank": "ABBANK",
        "ngaydat": "25/01/2024",
        "ngayduyet": 0,
        "diachiKH": "23 phường Tân qQuy quận 7 HCM",
        "quanKH": "Quận 1",
        "tongtien": 13950000,
        "status": 0,
        "tenKH": "Hồ Khuynh Thành",
        "phoneKH": "0263547384",
        "emailKH": "khuynhthanh@gmail.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/21-1.jpg",
            "ten": "Bông Tai 2 Trái Tim Vàng Hồng",
            "id": 21,
            "loai": "earring",
            "soLuong": 3,
            "gia": 4000000
          },
          {
            "hinh": "assets/User/img/necklace/14-1.jpg",
            "ten": "Dây Chuyền Bạc Mặt Trăng",
            "id": 14,
            "loai": "necklace",
            "soLuong": 3,
            "gia": 650000
          }
        ]
      },
      {
        "id": 8,
        "stk": "56556656",
        "bank": "Agribank",
        "ngaydat": "28/01/2024",
        "ngayduyet": 0,
        "diachiKH": "23 phường Tân qQuy quận 7 HCM",
        "quanKH": "Quận 1",
        "tongtien": 2850000,
        "status": 0,
        "tenKH": "Hồ Khuynh Thành",
        "phoneKH": "0263547384",
        "emailKH": "khuynhthanh@gmail.com",
        "genderKH": "female",
        "giohang": [
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
            "soLuong": 2,
            "gia": 650000
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
      },
      {
        "id": 9,
        "stk": -1,
        "bank": -1,
        "ngaydat": "02/02/2024 ",
        "ngayduyet": 0,
        "diachiKH": "23 phường Tân qQuy quận 7 HCM",
        "quanKH": "Quận 1",
        "tongtien": 584250000,
        "status": 0,
        "tenKH": "Hồ Khuynh Thành",
        "phoneKH": "0263547384",
        "emailKH": "khuynhthanh@gmail.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/ring/4-1.jpg",
            "ten": "Nhẫn Ngọc Lục Bảo và Kim Cương",
            "id": 9,
            "loai": "ring",
            "soLuong": 3,
            "gia": 104500000
          },
          {
            "hinh": "assets/User/img/ring/3-1.jpg",
            "ten": "Nhẫn Solitaire Ngọc Lục Bảo",
            "id": 8,
            "loai": "ring",
            "soLuong": 3,
            "gia": 90250000
          }
        ]
      },
      {
        "id": 10,
        "stk": "4637578448",
        "bank": "Sacombank",
        "ngaydat": "05/01/2024",
        "ngayduyet": 0,
        "diachiKH": "23 phường Tân qQuy quận 7 HCM",
        "quanKH": "Quận 1",
        "tongtien": 34200000,
        "status": 0,
        "tenKH": "Hồ Khuynh Thành",
        "phoneKH": "0263547384",
        "emailKH": "khuynhthanh@gmail.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/bracelet/18-1.jpg",
            "ten": "Vòng Tay Vàng K10",
            "id": 18,
            "loai": "bracelet",
            "soLuong": 2,
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
          }
        ]
      }
    ]
  },
  {
    "phone": "0738486323",
    "name": "Tà Vô Nguyệt",
    "email": "masachtong@gmail.com",
    "gender": "male",
    "address": "23 phường 3 quận 4 HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận 1",
    "lichsuMuaHang": [
      {
        "id": 10,
        "stk": -1,
        "bank": -1,
        "ngaydat": "08/02/2024 ",
        "ngayduyet": 0,
        "diachiKH": "23 phường 3 quận 4 HCM",
        "quanKH": "Quận 1",
        "tongtien": 884500000,
        "status": 0,
        "tenKH": "Tà Vô Nguyệt",
        "phoneKH": "0738486323",
        "emailKH": "masachtong@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/ring/1-1.jpg",
            "ten": "Nhẫn Đính Hôn Kim Cương",
            "id": 6,
            "loai": "ring",
            "soLuong": 6,
            "gia": 142500000
          },
          {
            "hinh": "assets/User/img/earrings/23-1.jpg",
            "ten": "Bông Tai Bạc Đính Akoya",
            "id": 23,
            "loai": "earring",
            "soLuong": 5,
            "gia": 3500000
          },
          {
            "hinh": "assets/User/img/bracelet/16-1.jpg",
            "ten": "Vòng Tay Vàng K10",
            "id": 16,
            "loai": "bracelet",
            "soLuong": 6,
            "gia": 2000000
          }
        ]
      },
      {
        "id": 11,
        "stk": "5656556",
        "bank": "Agribank",
        "ngaydat": "13/02/2024",
        "ngayduyet": 0,
        "diachiKH": "23 phường 3 quận 4 HCM",
        "quanKH": "Quận 1",
        "tongtien": 35100000,
        "status": 0,
        "tenKH": "Tà Vô Nguyệt",
        "phoneKH": "0738486323",
        "emailKH": "masachtong@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/necklace/15-1.jpg",
            "ten": "Dây Chuyền Bạc Dancing Stone",
            "id": 15,
            "loai": "necklace",
            "soLuong": 78,
            "gia": 450000
          }
        ]
      },
      {
        "id": 12,
        "stk": "56566565",
        "bank": "LienVietPostBank",
        "ngaydat": "19/02/2024",
        "ngayduyet": 0,
        "diachiKH": "23 phường 3 quận 4 HCM",
        "quanKH": "Quận 1",
        "tongtien": 71250000,
        "status": 0,
        "tenKH": "Tà Vô Nguyệt",
        "phoneKH": "0738486323",
        "emailKH": "masachtong@gmail.com",
        "genderKH": "male",
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
        "id": 13,
        "stk": "46374573",
        "bank": -1,
        "ngaydat": "22/02/2024 ",
        "ngayduyet": 0,
        "diachiKH": "23 phường 3 quận 4 HCM",
        "quanKH": "Quận 1",
        "tongtien": 261750000,
        "status": 0,
        "tenKH": "Tà Vô Nguyệt",
        "phoneKH": "0738486323",
        "emailKH": "masachtong@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 3,
            "gia": 71250000
          },
          {
            "hinh": "assets/User/img/earrings/25-1.jpg",
            "ten": "Bông Tai Bac Mặt Trăng Khuyết",
            "id": 25,
            "loai": "earring",
            "soLuong": 4,
            "gia": 12000000
          }
        ]
      },
      {
        "id": 14,
        "stk": "32644444",
        "bank": "BAOVIET Bank",
        "ngaydat": "26/02/2024",
        "ngayduyet": 0,
        "diachiKH": "23 phường 3 quận 4 HCM",
        "quanKH": "Quận 1",
        "tongtien": 486000000,
        "status": 0,
        "tenKH": "Tà Vô Nguyệt",
        "phoneKH": "0738486323",
        "emailKH": "masachtong@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/necklace/11-1.jpg",
            "ten": "Dây Chuyền Bạc Họa Tiết Móng Ngựa",
            "id": 11,
            "loai": "necklace",
            "soLuong": 2,
            "gia": 750000
          },
          {
            "hinh": "assets/User/img/ring/5-1.jpg",
            "ten": "Bộ Nhẫn Cưới Bạch Kim",
            "id": 10,
            "loai": "ring",
            "soLuong": 3,
            "gia": 161500000
          }
        ]
      },
      {
        "id": 15,
        "stk": -1,
        "bank": -1,
        "ngaydat": "29/02/2024 ",
        "ngayduyet": 0,
        "diachiKH": "23 phường 3 quận 4 HCM",
        "quanKH": "Quận 1",
        "tongtien": 8000000,
        "status": 0,
        "tenKH": "Tà Vô Nguyệt",
        "phoneKH": "0738486323",
        "emailKH": "masachtong@gmail.com",
        "genderKH": "male",
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
        "id": 16,
        "stk": -1,
        "bank": -1,
        "ngaydat": "01/03/2024 ",
        "ngayduyet": 0,
        "diachiKH": "23 phường 3 quận 4 HCM",
        "quanKH": "Quận 1",
        "tongtien": 20000000,
        "status": 0,
        "tenKH": "Tà Vô Nguyệt",
        "phoneKH": "0738486323",
        "emailKH": "masachtong@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 2,
            "gia": 10000000
          }
        ]
      },
      {
        "id": 17,
        "stk": "34343434",
        "bank": "HDBank",
        "ngaydat": "04/03/2024",
        "ngayduyet": 0,
        "diachiKH": "23 phường 3 quận 4 HCM",
        "quanKH": "Quận 1",
        "tongtien": 403750000,
        "status": 0,
        "tenKH": "Tà Vô Nguyệt",
        "phoneKH": "0738486323",
        "emailKH": "masachtong@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/ring/2-1.jpg",
            "ten": "Nhẫn Vàng và Ruby",
            "id": 7,
            "loai": "ring",
            "soLuong": 5,
            "gia": 80750000
          }
        ]
      },
      {
        "id": 18,
        "stk": -1,
        "bank": -1,
        "ngaydat": "09/03/2024 ",
        "ngayduyet": 0,
        "diachiKH": "23 phường 3 quận 4 HCM",
        "quanKH": "Quận 1",
        "tongtien": 372400000,
        "status": 0,
        "tenKH": "Tà Vô Nguyệt",
        "phoneKH": "0738486323",
        "emailKH": "masachtong@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/5-1.jpg",
            "ten": "Đồng Hồ Mặt Sapphire",
            "id": 5,
            "loai": "watch",
            "soLuong": 4,
            "gia": 93100000
          }
        ]
      }
    ]
  },
  {
    "phone": "0732547282",
    "name": "Viên Hưng Cương",
    "email": "vienlao@gmail.com",
    "gender": "male",
    "address": "236 Lê Văn Lương phường Tân Hưng quận 7 HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận 7",
    "lichsuMuaHang": [
      {
        "id": 19,
        "stk": -1,
        "bank": -1,
        "ngaydat": "10/03/2024 ",
        "ngayduyet": 0,
        "diachiKH": "236 Lê Văn Lương phường Tân Hưng quận 7 HCM",
        "quanKH": "Quận 7",
        "tongtien": 142500000,
        "status": 0,
        "tenKH": "Viên Hưng Cương",
        "phoneKH": "0732547282",
        "emailKH": "vienlao@gmail.com",
        "genderKH": "male",
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
        "id": 20,
        "stk": "325455",
        "bank": "ABBANK",
        "ngaydat": "11/03/2024",
        "ngayduyet": 0,
        "diachiKH": "236 Lê Văn Lương phường Tân Hưng quận 7 HCM",
        "quanKH": "Quận 7",
        "tongtien": 422750000,
        "status": 0,
        "tenKH": "Viên Hưng Cương",
        "phoneKH": "0732547282",
        "emailKH": "vienlao@gmail.com",
        "genderKH": "male",
        "giohang": [
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
            "soLuong": 3,
            "gia": 80750000
          }
        ]
      },
      {
        "id": 21,
        "stk": "45346345",
        "bank": "CIMB",
        "ngaydat": "14/03/2024",
        "ngayduyet": 0,
        "diachiKH": "236 Lê Văn Lương phường Tân Hưng quận 7 HCM",
        "quanKH": "Quận 7",
        "tongtien": 2600000,
        "status": 0,
        "tenKH": "Viên Hưng Cương",
        "phoneKH": "0732547282",
        "emailKH": "vienlao@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/necklace/14-1.jpg",
            "ten": "Dây Chuyền Bạc Mặt Trăng",
            "id": 14,
            "loai": "necklace",
            "soLuong": 4,
            "gia": 650000
          }
        ]
      },
      {
        "id": 22,
        "stk": -1,
        "bank": -1,
        "ngaydat": "16/03/2024 ",
        "ngayduyet": 0,
        "diachiKH": "236 Lê Văn Lương phường Tân Hưng quận 7 HCM",
        "quanKH": "Quận 7",
        "tongtien": 4500000,
        "status": 0,
        "tenKH": "Viên Hưng Cương",
        "phoneKH": "0732547282",
        "emailKH": "vienlao@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/bracelet/17-1.jpg",
            "ten": "Vòng Tay Trắng K10",
            "id": 17,
            "loai": "bracelet",
            "soLuong": 3,
            "gia": 1500000
          }
        ]
      },
      {
        "id": 23,
        "stk": -1,
        "bank": -1,
        "ngaydat": "20/03/2024 ",
        "ngayduyet": 0,
        "diachiKH": "236 Lê Văn Lương phường Tân Hưng quận 7 HCM",
        "quanKH": "Quận 7",
        "tongtien": 9000000,
        "status": 0,
        "tenKH": "Viên Hưng Cương",
        "phoneKH": "0732547282",
        "emailKH": "vienlao@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/22-1.jpg",
            "ten": "Bông Tai Bạc Bông Hoa",
            "id": 22,
            "loai": "earring",
            "soLuong": 3,
            "gia": 3000000
          }
        ]
      },
      {
        "id": 24,
        "stk": -1,
        "bank": -1,
        "ngaydat": "21/03/2024 ",
        "ngayduyet": 0,
        "diachiKH": "236 Lê Văn Lương phường Tân Hưng quận 7 HCM",
        "quanKH": "Quận 7",
        "tongtien": 142500000,
        "status": 0,
        "tenKH": "Viên Hưng Cương",
        "phoneKH": "0732547282",
        "emailKH": "vienlao@gmail.com",
        "genderKH": "male",
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
        "id": 25,
        "stk": -1,
        "bank": -1,
        "ngaydat": "25/03/2024 ",
        "ngayduyet": 0,
        "diachiKH": "236 Lê Văn Lương phường Tân Hưng quận 7 HCM",
        "quanKH": "Quận 7",
        "tongtien": 72450000,
        "status": 0,
        "tenKH": "Viên Hưng Cương",
        "phoneKH": "0732547282",
        "emailKH": "vienlao@gmail.com",
        "genderKH": "male",
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
            "hinh": "assets/User/img/necklace/12-1.jpg",
            "ten": "Dây Chuyền Bạc Mặt Tròn",
            "id": 12,
            "loai": "necklace",
            "soLuong": 1,
            "gia": 1200000
          }
        ]
      },
      {
        "id": 26,
        "stk": -1,
        "bank": -1,
        "ngaydat": "26/03/2024 ",
        "ngayduyet": 0,
        "diachiKH": "236 Lê Văn Lương phường Tân Hưng quận 7 HCM",
        "quanKH": "Quận 7",
        "tongtien": 163000000,
        "status": 0,
        "tenKH": "Viên Hưng Cương",
        "phoneKH": "0732547282",
        "emailKH": "vienlao@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/necklace/11-1.jpg",
            "ten": "Dây Chuyền Bạc Họa Tiết Móng Ngựa",
            "id": 11,
            "loai": "necklace",
            "soLuong": 2,
            "gia": 750000
          },
          {
            "hinh": "assets/User/img/ring/5-1.jpg",
            "ten": "Bộ Nhẫn Cưới Bạch Kim",
            "id": 10,
            "loai": "ring",
            "soLuong": 1,
            "gia": 161500000
          }
        ]
      }
    ]
  },
  {
    "phone": "03738234238",
    "name": "Lạc Vân Thường",
    "email": "thuong@gmail.com",
    "gender": "female",
    "address": "562 Bùi Văn Ba phường Tân Thuận Đông quận 7 HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận 7",
    "lichsuMuaHang": [
      {
        "id": 27,
        "stk": -1,
        "bank": -1,
        "ngaydat": "30/03/2024 ",
        "ngayduyet": 0,
        "diachiKH": "562 Bùi Văn Ba phường Tân Thuận Đông quận 7 HCM",
        "quanKH": "Quận 7",
        "tongtien": 325800000,
        "status": 0,
        "tenKH": "Lạc Vân Thường",
        "phoneKH": "03738234238",
        "emailKH": "thuong@gmail.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/ring/5-1.jpg",
            "ten": "Bộ Nhẫn Cưới Bạch Kim",
            "id": 10,
            "loai": "ring",
            "soLuong": 2,
            "gia": 161500000
          },
          {
            "hinh": "assets/User/img/bracelet/20-1.jpg",
            "ten": "Vòng Tay Vàng K18",
            "id": 20,
            "loai": "bracelet",
            "soLuong": 2,
            "gia": 1400000
          }
        ]
      },
      {
        "id": 28,
        "stk": "326475723",
        "bank": "ABBANK",
        "ngaydat": "01/04/2024",
        "ngayduyet": 0,
        "diachiKH": "562 Bùi Văn Ba phường Tân Thuận Đông quận 7 HCM",
        "quanKH": "Quận 7",
        "tongtien": 114000000,
        "status": 0,
        "tenKH": "Lạc Vân Thường",
        "phoneKH": "03738234238",
        "emailKH": "thuong@gmail.com",
        "genderKH": "female",
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
        "id": 29,
        "stk": -1,
        "bank": -1,
        "ngaydat": "03/04/2024 ",
        "ngayduyet": 0,
        "diachiKH": "562 Bùi Văn Ba phường Tân Thuận Đông quận 7 HCM",
        "quanKH": "Quận 7",
        "tongtien": 90250000,
        "status": 0,
        "tenKH": "Lạc Vân Thường",
        "phoneKH": "03738234238",
        "emailKH": "thuong@gmail.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/ring/3-1.jpg",
            "ten": "Nhẫn Solitaire Ngọc Lục Bảo",
            "id": 8,
            "loai": "ring",
            "soLuong": 1,
            "gia": 90250000
          }
        ]
      },
      {
        "id": 30,
        "stk": "327427834",
        "bank": -1,
        "ngaydat": "05/04/2024 ",
        "ngayduyet": 0,
        "diachiKH": "562 Bùi Văn Ba phường Tân Thuận Đông quận 7 HCM",
        "quanKH": "Quận 7",
        "tongtien": 190000000,
        "status": 0,
        "tenKH": "Lạc Vân Thường",
        "phoneKH": "03738234238",
        "emailKH": "thuong@gmail.com",
        "genderKH": "female",
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
        "id": 31,
        "stk": "32468723",
        "bank": "ABBANK",
        "ngaydat": "06/04/2024",
        "ngayduyet": 0,
        "diachiKH": "562 Bùi Văn Ba phường Tân Thuận Đông quận 7 HCM",
        "quanKH": "Quận 7",
        "tongtien": 285000000,
        "status": 0,
        "tenKH": "Lạc Vân Thường",
        "phoneKH": "03738234238",
        "emailKH": "thuong@gmail.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 4,
            "gia": 71250000
          }
        ]
      }
    ]
  },
  {
    "phone": "0737643223",
    "name": "Vân Sương",
    "email": "vande@gmail.com",
    "gender": "female",
    "address": "37 Tôn Đức Thắng quận 1 HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận 1",
    "lichsuMuaHang": [
      {
        "id": 32,
        "stk": "3742364",
        "bank": "Co-opBank",
        "ngaydat": "08/04/2024",
        "ngayduyet": 0,
        "diachiKH": "37 Tôn Đức Thắng quận 1 HCM",
        "quanKH": "Quận 1",
        "tongtien": 6300000,
        "status": 0,
        "tenKH": "Vân Sương",
        "phoneKH": "0737643223",
        "emailKH": "vande@gmail.com",
        "genderKH": "female",
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
        "id": 33,
        "stk": -1,
        "bank": -1,
        "ngaydat": "08/04/2024 ",
        "ngayduyet": 0,
        "diachiKH": "37 Tôn Đức Thắng quận 1 HCM",
        "quanKH": "Quận 1",
        "tongtien": 142500000,
        "status": 0,
        "tenKH": "Vân Sương",
        "phoneKH": "0737643223",
        "emailKH": "vande@gmail.com",
        "genderKH": "female",
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
        "id": 34,
        "stk": -1,
        "bank": -1,
        "ngaydat": "10/04/2024 ",
        "ngayduyet": 0,
        "diachiKH": "37 Tôn Đức Thắng quận 1 HCM",
        "quanKH": "Quận 1",
        "tongtien": 134000000,
        "status": 0,
        "tenKH": "Vân Sương",
        "phoneKH": "0737643223",
        "emailKH": "vande@gmail.com",
        "genderKH": "female",
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
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 2,
            "gia": 10000000
          }
        ]
      },
      {
        "id": 35,
        "stk": "3627823",
        "bank": "ABBANK",
        "ngaydat": "11/04/2024",
        "ngayduyet": 0,
        "diachiKH": "37 Tôn Đức Thắng quận 1 HCM",
        "quanKH": "Quận 1",
        "tongtien": 4500000,
        "status": 0,
        "tenKH": "Vân Sương",
        "phoneKH": "0737643223",
        "emailKH": "vande@gmail.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/bracelet/17-1.jpg",
            "ten": "Vòng Tay Trắng K10",
            "id": 17,
            "loai": "bracelet",
            "soLuong": 3,
            "gia": 1500000
          }
        ]
      }
    ]
  },
  {
    "phone": "0324732422",
    "name": "Vũ Văn Thông",
    "email": "bunhin@gmail.com",
    "gender": "male",
    "address": "537 Đinh Tiên Hoàng quận 2 HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận 2",
    "lichsuMuaHang": [
      {
        "id": 36,
        "stk": -1,
        "bank": -1,
        "ngaydat": "13/04/2024 ",
        "ngayduyet": 0,
        "diachiKH": "537 Đinh Tiên Hoàng quận 2 HCM",
        "quanKH": "Quận 2",
        "tongtien": 142500000,
        "status": 0,
        "tenKH": "Vũ Văn Thông",
        "phoneKH": "0324732422",
        "emailKH": "bunhin@gmail.com",
        "genderKH": "male",
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
        "id": 37,
        "stk": "27364273",
        "bank": -1,
        "ngaydat": "15/04/2024 ",
        "ngayduyet": 0,
        "diachiKH": "537 Đinh Tiên Hoàng quận 2 HCM",
        "quanKH": "Quận 2",
        "tongtien": 114000000,
        "status": 0,
        "tenKH": "Vũ Văn Thông",
        "phoneKH": "0324732422",
        "emailKH": "bunhin@gmail.com",
        "genderKH": "male",
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
        "id": 38,
        "stk": "346523423",
        "bank": "ABBANK",
        "ngaydat": "17/04/2024",
        "ngayduyet": 0,
        "diachiKH": "537 Đinh Tiên Hoàng quận 2 HCM",
        "quanKH": "Quận 2",
        "tongtien": 2500000,
        "status": 0,
        "tenKH": "Vũ Văn Thông",
        "phoneKH": "0324732422",
        "emailKH": "bunhin@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/bracelet/19-1.jpg",
            "ten": "Vòng Tay Vàng Trắng K10",
            "id": 19,
            "loai": "bracelet",
            "soLuong": 1,
            "gia": 2500000
          }
        ]
      }
    ]
  },
  {
    "phone": "034572384",
    "name": "Lạc Vân Hải",
    "email": "lac@gmail.com",
    "gender": "male",
    "address": "263 Nguyễn Trãi quận 5 HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận 5",
    "lichsuMuaHang": [
      {
        "id": 39,
        "stk": -1,
        "bank": -1,
        "ngaydat": "19/04/2024 ",
        "ngayduyet": 0,
        "diachiKH": "263 Nguyễn Trãi quận 5 HCM",
        "quanKH": "Quận 5",
        "tongtien": 285000000,
        "status": 0,
        "tenKH": "Lạc Vân Hải",
        "phoneKH": "034572384",
        "emailKH": "lac@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 4,
            "gia": 71250000
          }
        ]
      },
      {
        "id": 40,
        "stk": "36248234",
        "bank": -1,
        "ngaydat": "19/04/2024 ",
        "ngayduyet": 0,
        "diachiKH": "263 Nguyễn Trãi quận 5 HCM",
        "quanKH": "Quận 5",
        "tongtien": 342000000,
        "status": 0,
        "tenKH": "Lạc Vân Hải",
        "phoneKH": "034572384",
        "emailKH": "lac@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/3-1.jpg",
            "ten": "Đồng Hồ Bạch Kim",
            "id": 3,
            "loai": "watch",
            "soLuong": 3,
            "gia": 114000000
          }
        ]
      },
      {
        "id": 41,
        "stk": "37462342",
        "bank": "IVB",
        "ngaydat": "21/04/2024",
        "ngayduyet": 0,
        "diachiKH": "263 Nguyễn Trãi quận 5 HCM",
        "quanKH": "Quận 5",
        "tongtien": 294500000,
        "status": 0,
        "tenKH": "Lạc Vân Hải",
        "phoneKH": "034572384",
        "emailKH": "lac@gmail.com",
        "genderKH": "male",
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
            "hinh": "assets/User/img/ring/3-1.jpg",
            "ten": "Nhẫn Solitaire Ngọc Lục Bảo",
            "id": 8,
            "loai": "ring",
            "soLuong": 2,
            "gia": 90250000
          }
        ]
      },
      {
        "id": 42,
        "stk": -1,
        "bank": -1,
        "ngaydat": "23/04/2024 ",
        "ngayduyet": 0,
        "diachiKH": "263 Nguyễn Trãi quận 5 HCM",
        "quanKH": "Quận 5",
        "tongtien": 342000000,
        "status": 0,
        "tenKH": "Lạc Vân Hải",
        "phoneKH": "034572384",
        "emailKH": "lac@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/3-1.jpg",
            "ten": "Đồng Hồ Bạch Kim",
            "id": 3,
            "loai": "watch",
            "soLuong": 3,
            "gia": 114000000
          }
        ]
      },
      {
        "id": 43,
        "stk": -1,
        "bank": -1,
        "ngaydat": "24/04/2024 ",
        "ngayduyet": 0,
        "diachiKH": "263 Nguyễn Trãi quận 5 HCM",
        "quanKH": "Quận 5",
        "tongtien": 342000000,
        "status": 0,
        "tenKH": "Lạc Vân Hải",
        "phoneKH": "034572384",
        "emailKH": "lac@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/3-1.jpg",
            "ten": "Đồng Hồ Bạch Kim",
            "id": 3,
            "loai": "watch",
            "soLuong": 3,
            "gia": 114000000
          }
        ]
      },
      {
        "id": 44,
        "stk": -1,
        "bank": -1,
        "ngaydat": "26/04/2024 ",
        "ngayduyet": 0,
        "diachiKH": "263 Nguyễn Trãi quận 5 HCM",
        "quanKH": "Quận 5",
        "tongtien": 1300000,
        "status": 0,
        "tenKH": "Lạc Vân Hải",
        "phoneKH": "034572384",
        "emailKH": "lac@gmail.com",
        "genderKH": "male",
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
      }
    ]
  },
  {
    "phone": "032467824",
    "name": "Gia Cát Trường Phong",
    "email": "thuatuong@gmail.com",
    "gender": "male",
    "address": "33 Lý Thường Kiệt quận 6 HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận 6",
    "lichsuMuaHang": [
      {
        "id": 45,
        "stk": -1,
        "bank": -1,
        "ngaydat": "27/04/2024 ",
        "ngayduyet": 0,
        "diachiKH": "33 Lý Thường Kiệt quận 6 HCM",
        "quanKH": "Quận 6",
        "tongtien": 72150000,
        "status": 0,
        "tenKH": "Gia Cát Trường Phong",
        "phoneKH": "032467824",
        "emailKH": "thuatuong@gmail.com",
        "genderKH": "male",
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
            "hinh": "assets/User/img/necklace/15-1.jpg",
            "ten": "Dây Chuyền Bạc Dancing Stone",
            "id": 15,
            "loai": "necklace",
            "soLuong": 2,
            "gia": 450000
          }
        ]
      },
      {
        "id": 46,
        "stk": -1,
        "bank": -1,
        "ngaydat": "01/05/2024 ",
        "ngayduyet": 0,
        "diachiKH": "33 Lý Thường Kiệt quận 6 HCM",
        "quanKH": "Quận 6",
        "tongtien": 313500000,
        "status": 0,
        "tenKH": "Gia Cát Trường Phong",
        "phoneKH": "032467824",
        "emailKH": "thuatuong@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/ring/4-1.jpg",
            "ten": "Nhẫn Ngọc Lục Bảo và Kim Cương",
            "id": 9,
            "loai": "ring",
            "soLuong": 3,
            "gia": 104500000
          }
        ]
      },
      {
        "id": 47,
        "stk": -1,
        "bank": -1,
        "ngaydat": "13/05/2024 ",
        "ngayduyet": 0,
        "diachiKH": "33 Lý Thường Kiệt quận 6 HCM",
        "quanKH": "Quận 6",
        "tongtien": 1500000,
        "status": 0,
        "tenKH": "Gia Cát Trường Phong",
        "phoneKH": "032467824",
        "emailKH": "thuatuong@gmail.com",
        "genderKH": "male",
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
      }
    ]
  },
  {
    "phone": "032462372",
    "name": "Lê Văn Nam",
    "email": "nam@gmail.com",
    "gender": "male",
    "address": "56 Nguyễn Tất Thành quận 1 HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận 1",
    "lichsuMuaHang": [
      {
        "id": 48,
        "stk": "673423",
        "bank": -1,
        "ngaydat": "15/05/2024 ",
        "ngayduyet": 0,
        "diachiKH": "56 Nguyễn Tất Thành quận 1 HCM",
        "quanKH": "Quận 1",
        "tongtien": 72150000,
        "status": 0,
        "tenKH": "Lê Văn Nam",
        "phoneKH": "032462372",
        "emailKH": "nam@gmail.com",
        "genderKH": "male",
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
            "hinh": "assets/User/img/necklace/15-1.jpg",
            "ten": "Dây Chuyền Bạc Dancing Stone",
            "id": 15,
            "loai": "necklace",
            "soLuong": 2,
            "gia": 450000
          }
        ]
      },
      {
        "id": 49,
        "stk": "43624823",
        "bank": "Agribank",
        "ngaydat": "20/05/2024",
        "ngayduyet": 0,
        "diachiKH": "56 Nguyễn Tất Thành quận 1 HCM",
        "quanKH": "Quận 1",
        "tongtien": 4500000,
        "status": 0,
        "tenKH": "Lê Văn Nam",
        "phoneKH": "032462372",
        "emailKH": "nam@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/bracelet/17-1.jpg",
            "ten": "Vòng Tay Trắng K10",
            "id": 17,
            "loai": "bracelet",
            "soLuong": 3,
            "gia": 1500000
          }
        ]
      }
    ]
  },
  {
    "phone": "0347828332",
    "name": "Nguyễn Bảo Trọng",
    "email": "trong@gmail.com",
    "gender": "male",
    "address": "264 quận 6 HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận 6",
    "lichsuMuaHang": [
      {
        "id": 50,
        "stk": -1,
        "bank": -1,
        "ngaydat": "01/06/2024 ",
        "ngayduyet": 0,
        "diachiKH": "264 quận 6 HCM",
        "quanKH": "Quận 6",
        "tongtien": 7200000,
        "status": 0,
        "tenKH": "Nguyễn Bảo Trọng",
        "phoneKH": "0347828332",
        "emailKH": "trong@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/necklace/11-1.jpg",
            "ten": "Dây Chuyền Bạc Họa Tiết Móng Ngựa",
            "id": 11,
            "loai": "necklace",
            "soLuong": 4,
            "gia": 750000
          },
          {
            "hinh": "assets/User/img/bracelet/20-1.jpg",
            "ten": "Vòng Tay Vàng K18",
            "id": 20,
            "loai": "bracelet",
            "soLuong": 3,
            "gia": 1400000
          }
        ]
      },
      {
        "id": 51,
        "stk": "3624234",
        "bank": "ACB",
        "ngaydat": "07/06/2024",
        "ngayduyet": 0,
        "diachiKH": "264 quận 6 HCM",
        "quanKH": "Quận 6",
        "tongtien": 40000000,
        "status": 0,
        "tenKH": "Nguyễn Bảo Trọng",
        "phoneKH": "0347828332",
        "emailKH": "trong@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/earrings/24-1.jpg",
            "ten": "Bông Tai Bạc Hoa Cánh Bướm",
            "id": 24,
            "loai": "earring",
            "soLuong": 4,
            "gia": 10000000
          }
        ]
      }
    ]
  },
  {
    "phone": "032642734",
    "name": "Nguyễn Thị DIễm Mu",
    "email": "diemu@gmail.com",
    "gender": "female",
    "address": "245 Bình Thạnh HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận Bình Thạnh",
    "lichsuMuaHang": [
      {
        "id": 52,
        "stk": -1,
        "bank": -1,
        "ngaydat": "12/06/2024 ",
        "ngayduyet": 0,
        "diachiKH": "245 Bình Thạnh HCM",
        "quanKH": "Quận Bình Thạnh",
        "tongtien": 230600000,
        "status": 0,
        "tenKH": "Nguyễn Thị DIễm Mu",
        "phoneKH": "032642734",
        "emailKH": "diemu@gmail.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/3-1.jpg",
            "ten": "Đồng Hồ Bạch Kim",
            "id": 3,
            "loai": "watch",
            "soLuong": 2,
            "gia": 114000000
          },
          {
            "hinh": "assets/User/img/necklace/14-1.jpg",
            "ten": "Dây Chuyền Bạc Mặt Trăng",
            "id": 14,
            "loai": "necklace",
            "soLuong": 4,
            "gia": 650000
          }
        ]
      },
      {
        "id": 53,
        "stk": "328425235",
        "bank": -1,
        "ngaydat": "18/06/2024 ",
        "ngayduyet": 0,
        "diachiKH": "245 Bình Thạnh HCM",
        "quanKH": "Quận Bình Thạnh",
        "tongtien": 95000000,
        "status": 0,
        "tenKH": "Nguyễn Thị DIễm Mu",
        "phoneKH": "032642734",
        "emailKH": "diemu@gmail.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 2,
            "gia": 47500000
          }
        ]
      }
    ]
  },
  {
    "phone": "0324723567",
    "name": "Nguyễn Gia Hân",
    "email": "giahan@gmail.com",
    "gender": "female",
    "address": "23 Trung Châu Hồ Tây Hà Nội",
    "password": "123",
    "status": 0,
    "quan": "Quận Gò Vấp",
    "lichsuMuaHang": [
      {
        "id": 54,
        "stk": -1,
        "bank": -1,
        "ngaydat": "01/07/2024 ",
        "ngayduyet": 0,
        "diachiKH": "23 Trung Châu Hồ Tây Hà Nội",
        "quanKH": "Quận Gò Vấp",
        "tongtien": 114000000,
        "status": 0,
        "tenKH": "Nguyễn Gia Hân",
        "phoneKH": "0324723567",
        "emailKH": "giahan@gmail.com",
        "genderKH": "female",
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
      }
    ]
  },
  {
    "phone": "0247368437",
    "name": "Lý Lại La",
    "email": "laila@gmail.com",
    "gender": "male",
    "address": "23 phường Tân qQuy quận 7 HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận Gò Vấp",
    "lichsuMuaHang": [
      {
        "id": 55,
        "stk": -1,
        "bank": -1,
        "ngaydat": "14/07/2024 ",
        "ngayduyet": 0,
        "diachiKH": "23 phường Tân qQuy quận 7 HCM",
        "quanKH": "Quận Gò Vấp",
        "tongtien": 142500000,
        "status": 0,
        "tenKH": "Lý Lại La",
        "phoneKH": "0247368437",
        "emailKH": "laila@gmail.com",
        "genderKH": "male",
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
      }
    ]
  },
  {
    "phone": "0326478342",
    "name": "Nguyễn Quốc Anh",
    "email": "quocanh@gmail.com",
    "gender": "male",
    "address": "23 phường 3 quận 4 HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận Phú Nhuận",
    "lichsuMuaHang": [
      {
        "id": 56,
        "stk": -1,
        "bank": -1,
        "ngaydat": "20/07/2024 ",
        "ngayduyet": 0,
        "diachiKH": "23 phường 3 quận 4 HCM",
        "quanKH": "Quận Phú Nhuận",
        "tongtien": 213750000,
        "status": 0,
        "tenKH": "Nguyễn Quốc Anh",
        "phoneKH": "0326478342",
        "emailKH": "quocanh@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/watch/2-1.jpg",
            "id": 2,
            "ten": "Đồng Hồ Đính Kim Cương",
            "gia": "71250000",
            "soLuong": 3,
            "loai": "watch"
          }
        ]
      },
      {
        "id": 57,
        "stk": -1,
        "bank": -1,
        "ngaydat": "05/08/2024 ",
        "ngayduyet": 0,
        "diachiKH": "23 phường 3 quận 4 HCM",
        "quanKH": "Quận Phú Nhuận",
        "tongtien": 95000000,
        "status": 0,
        "tenKH": "Nguyễn Quốc Anh",
        "phoneKH": "0326478342",
        "emailKH": "quocanh@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 2,
            "gia": 47500000
          }
        ]
      }
    ]
  },
  {
    "phone": "0364738242",
    "name": "Nguyễn Thanh Bình",
    "email": "thnah@gmial.com",
    "gender": "female",
    "address": "156/13B",
    "password": "123",
    "status": 0,
    "quan": "Quận 12",
    "lichsuMuaHang": [
      {
        "id": 57,
        "stk": -1,
        "bank": -1,
        "ngaydat": "15/08/2024 ",
        "ngayduyet": 0,
        "diachiKH": "156/13B",
        "quanKH": "Quận 12",
        "tongtien": 8000000,
        "status": 0,
        "tenKH": "Nguyễn Thanh Bình",
        "phoneKH": "0364738242",
        "emailKH": "thnah@gmial.com",
        "genderKH": "female",
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
        "id": 59,
        "stk": "653472347",
        "bank": "ACB",
        "ngaydat": "25/08/2024",
        "ngayduyet": 0,
        "diachiKH": "156/13B",
        "quanKH": "Quận 12",
        "tongtien": 30000000,
        "status": 0,
        "tenKH": "Nguyễn Thanh Bình",
        "phoneKH": "0364738242",
        "emailKH": "thnah@gmial.com",
        "genderKH": "female",
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
        "id": 60,
        "stk": "7835232",
        "bank": "PG BANK",
        "ngaydat": "04/09/2024",
        "ngayduyet": 0,
        "diachiKH": "156/13B",
        "quanKH": "Quận 12",
        "tongtien": 228000000,
        "status": 0,
        "tenKH": "Nguyễn Thanh Bình",
        "phoneKH": "0364738242",
        "emailKH": "thnah@gmial.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/3-1.jpg",
            "ten": "Đồng Hồ Bạch Kim",
            "id": 3,
            "loai": "watch",
            "soLuong": 2,
            "gia": 114000000
          }
        ]
      }
    ]
  },
  {
    "phone": "0324247832",
    "name": "Lâm Thía Yến Nhy",
    "email": "lamthiayenhi@gmail.com",
    "gender": "female",
    "address": "hahha quận 4 HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận 4",
    "lichsuMuaHang": [
      {
        "id": 61,
        "stk": "67342374",
        "bank": -1,
        "ngaydat": "10/09/2024 ",
        "ngayduyet": 0,
        "diachiKH": "hahha quận 4 HCM",
        "quanKH": "Quận 4",
        "tongtien": 207741000000,
        "status": 0,
        "tenKH": "Lâm Thía Yến Nhy",
        "phoneKH": "0324247832",
        "emailKH": "lamthiayenhi@gmail.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 300,
            "gia": 47500000
          },
          {
            "hinh": "assets/User/img/ring/5-1.jpg",
            "ten": "Bộ Nhẫn Cưới Bạch Kim",
            "id": 10,
            "loai": "ring",
            "soLuong": 651,
            "gia": 161500000
          },
          {
            "hinh": "assets/User/img/necklace/11-1.jpg",
            "ten": "Dây Chuyền Bạc Họa Tiết Móng Ngựa",
            "id": 11,
            "loai": "necklace",
            "soLuong": 392,
            "gia": 750000
          },
          {
            "hinh": "assets/User/img/necklace/12-1.jpg",
            "ten": "Dây Chuyền Bạc Mặt Tròn",
            "id": 12,
            "loai": "necklace",
            "soLuong": 400,
            "gia": 1200000
          },
          {
            "hinh": "assets/User/img/ring/2-1.jpg",
            "ten": "Nhẫn Vàng và Ruby",
            "id": 7,
            "loai": "ring",
            "soLuong": 220,
            "gia": 80750000
          },
          {
            "hinh": "assets/User/img/ring/4-1.jpg",
            "ten": "Nhẫn Ngọc Lục Bảo và Kim Cương",
            "id": 9,
            "loai": "ring",
            "soLuong": 180,
            "gia": 104500000
          },
          {
            "hinh": "assets/User/img/watch/5-1.jpg",
            "ten": "Đồng Hồ Mặt Sapphire",
            "id": 5,
            "loai": "watch",
            "soLuong": 205,
            "gia": 93100000
          },
          {
            "hinh": "assets/User/img/ring/1-1.jpg",
            "ten": "Nhẫn Đính Hôn Kim Cương",
            "id": 6,
            "loai": "ring",
            "soLuong": 224,
            "gia": 142500000
          }
        ]
      },
      {
        "id": 62,
        "stk": -1,
        "bank": -1,
        "ngaydat": "17/09/2024 ",
        "ngayduyet": 0,
        "diachiKH": "hahha quận 4 HCM",
        "quanKH": "Quận 4",
        "tongtien": 52648050000,
        "status": 0,
        "tenKH": "Lâm Thía Yến Nhy",
        "phoneKH": "0324247832",
        "emailKH": "lamthiayenhi@gmail.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/2-1.jpg",
            "ten": "Đồng Hồ Đính Kim Cương",
            "id": 2,
            "loai": "watch",
            "soLuong": 441,
            "gia": 71250000
          },
          {
            "hinh": "assets/User/img/watch/5-1.jpg",
            "ten": "Đồng Hồ Mặt Sapphire",
            "id": 5,
            "loai": "watch",
            "soLuong": 228,
            "gia": 93100000
          }
        ]
      },
      {
        "id": 63,
        "stk": "67324234628",
        "bank": "ACB",
        "ngaydat": "21/09/2024",
        "ngayduyet": 0,
        "diachiKH": "hahha quận 4 HCM",
        "quanKH": "Quận 4",
        "tongtien": 86450000,
        "status": 0,
        "tenKH": "Lâm Thía Yến Nhy",
        "phoneKH": "0324247832",
        "emailKH": "lamthiayenhi@gmail.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/necklace/14-1.jpg",
            "ten": "Dây Chuyền Bạc Mặt Trăng",
            "id": 14,
            "loai": "necklace",
            "soLuong": 133,
            "gia": 650000
          }
        ]
      }
    ]
  },
  {
    "phone": "02374238423",
    "name": "Trần Ngọc",
    "email": "ngoc@gmail.com",
    "gender": "male",
    "address": "23 phường Tân qQuy quận 7 HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận Phú Nhuận",
    "lichsuMuaHang": [
      {
        "id": 64,
        "stk": -1,
        "bank": -1,
        "ngaydat": "30/09/2024 ",
        "ngayduyet": 0,
        "diachiKH": "23 phường Tân qQuy quận 7 HCM",
        "quanKH": "Quận Phú Nhuận",
        "tongtien": 95000000,
        "status": 0,
        "tenKH": "Trần Ngọc",
        "phoneKH": "02374238423",
        "emailKH": "ngoc@gmail.com",
        "genderKH": "male",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 2,
            "gia": 47500000
          }
        ]
      }
    ]
  },
  {
    "phone": "0643723482",
    "name": "Hồ Thanh Ngân",
    "email": "ngan@gmail.com",
    "gender": "female",
    "address": "23 phường 3 quận 4 HCM",
    "password": "123",
    "status": 0,
    "quan": "Quận 4",
    "lichsuMuaHang": [
      {
        "id": 65,
        "stk": "6383834",
        "bank": "ABBANK",
        "ngaydat": "05/11/2024",
        "ngayduyet": 0,
        "diachiKH": "23 phường 3 quận 4 HCM",
        "quanKH": "Quận 4",
        "tongtien": 3800000000,
        "status": 0,
        "tenKH": "Hồ Thanh Ngân",
        "phoneKH": "0643723482",
        "emailKH": "ngan@gmail.com",
        "genderKH": "female",
        "giohang": [
          {
            "hinh": "assets/User/img/watch/1-1.jpg",
            "ten": "Đồng Hồ Vàng Sang Trọng",
            "id": 1,
            "loai": "watch",
            "soLuong": 80,
            "gia": 47500000
          }
        ]
      }
    ]
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

    