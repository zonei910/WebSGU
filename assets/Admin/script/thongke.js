let year = 2024;
let day = 1;
let month = 1;
let yearsecond = 2024 + 1;
let daysecond;
let monthsecond = 1;
let donhang = [];
let Customerr = [
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
        "id": 18,
        "stk": -1,
        "bank": -1,
        "ngaydat": "02/03/2024 ",
        "ngayduyet": 0,
        "diachiKH": "178 Nguyễn Chí Thanh phường 5 quận 11 HCM",
        "quanKH": "Quận 11",
        "tongtien": 285000000,
        "status": 0,
        "tenKH": "Võ Văn Toàn",
        "phoneKH": "0918273645",
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
        "id": 19,
        "stk": "35635635",
        "bank": -1,
        "ngaydat": "05/06/2024 ",
        "ngayduyet": 0,
        "diachiKH": "178 Nguyễn Chí Thanh phường 5 quận 11 HCM",
        "quanKH": "Quận 11",
        "tongtien": 12000000,
        "status": 0,
        "tenKH": "Võ Văn Toàn",
        "phoneKH": "0918273645",
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
        "id": 20,
        "stk": "34344343",
        "bank": "ABBANK",
        "ngaydat": "09/10/2024",
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
        "id": 21,
        "stk": -1,
        "bank": -1,
        "ngaydat": "09/04/2024 ",
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
        "id": 22,
        "stk": -1,
        "bank": -1,
        "ngaydat": "25/04/2024 ",
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
        "id": 23,
        "stk": "3564736",
        "bank": -1,
        "ngaydat": "17/05/2024 ",
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
        "id": 24,
        "stk": "362748",
        "bank": "ABBANK",
        "ngaydat": "29/05/2024",
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
        "id": 25,
        "stk": "56556656",
        "bank": "Agribank",
        "ngaydat": "01/06/2024",
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
        "id": 26,
        "stk": -1,
        "bank": -1,
        "ngaydat": "18/06/2024 ",
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
        "id": 27,
        "stk": "4637578448",
        "bank": "Sacombank",
        "ngaydat": "24/12/2024",
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
        "id": 28,
        "stk": -1,
        "bank": -1,
        "ngaydat": "11/11/2024 ",
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
        "id": 29,
        "stk": "5656556",
        "bank": "Agribank",
        "ngaydat": "04/08/2024",
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
        "id": 30,
        "stk": "56566565",
        "bank": "LienVietPostBank",
        "ngaydat": "29/08/2024",
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
        "id": 31,
        "stk": "46374573",
        "bank": -1,
        "ngaydat": "02/09/2024 ",
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
        "id": 32,
        "stk": "32644444",
        "bank": "BAOVIET Bank",
        "ngaydat": "22/11/2024",
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
        "id": 33,
        "stk": -1,
        "bank": -1,
        "ngaydat": "24/11/2024 ",
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
        "id": 34,
        "stk": -1,
        "bank": -1,
        "ngaydat": "28/11/2024 ",
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
        "id": 35,
        "stk": "34343434",
        "bank": "HDBank",
        "ngaydat": "29/10/2024",
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
        "id": 36,
        "stk": -1,
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 37,
        "stk": -1,
        "bank": -1,
        "ngaydat": "19/10/2024 ",
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
        "id": 38,
        "stk": "325455",
        "bank": "ABBANK",
        "ngaydat": "11/10/2024",
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
        "id": 39,
        "stk": "45346345",
        "bank": "CIMB",
        "ngaydat": "09/10/2024",
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
        "id": 40,
        "stk": -1,
        "bank": -1,
        "ngaydat": "09/10/2024 ",
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
        "id": 41,
        "stk": -1,
        "bank": -1,
        "ngaydat": "17/12/2024 ",
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
        "id": 42,
        "stk": -1,
        "bank": -1,
        "ngaydat": "15/12/2024 ",
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
        "id": 43,
        "stk": -1,
        "bank": -1,
        "ngaydat": "13/12/2024 ",
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
        "id": 44,
        "stk": -1,
        "bank": -1,
        "ngaydat": "18/01/2024 ",
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
        "id": 45,
        "stk": -1,
        "bank": -1,
        "ngaydat": "13/02/2024 ",
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
        "id": 46,
        "stk": "326475723",
        "bank": "ABBANK",
        "ngaydat": "05/02/2024",
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
        "id": 47,
        "stk": -1,
        "bank": -1,
        "ngaydat": "10/02/2024 ",
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
        "id": 48,
        "stk": "327427834",
        "bank": -1,
        "ngaydat": "19/11/2024 ",
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
        "id": 49,
        "stk": "32468723",
        "bank": "ABBANK",
        "ngaydat": "19/01/2024",
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
        "id": 50,
        "stk": "3742364",
        "bank": "Co-opBank",
        "ngaydat": "03/03/2024",
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
        "id": 51,
        "stk": -1,
        "bank": -1,
        "ngaydat": "03/11/2023 ",
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
        "id": 52,
        "stk": -1,
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 53,
        "stk": "3627823",
        "bank": "ABBANK",
        "ngaydat": "24/03/2023",
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
        "id": 54,
        "stk": -1,
        "bank": -1,
        "ngaydat": "04/05/2023 ",
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
        "id": 55,
        "stk": "27364273",
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 56,
        "stk": "346523423",
        "bank": "ABBANK",
        "ngaydat": "29/11/2024",
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
        "id": 57,
        "stk": -1,
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 58,
        "stk": "36248234",
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 59,
        "stk": "37462342",
        "bank": "IVB",
        "ngaydat": "29/11/2024",
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
        "id": 60,
        "stk": -1,
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 61,
        "stk": -1,
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 62,
        "stk": -1,
        "bank": -1,
        "ngaydat": "12/06/2023 ",
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
        "id": 63,
        "stk": -1,
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 64,
        "stk": -1,
        "bank": -1,
        "ngaydat": "12/06/2024 ",
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
        "id": 65,
        "stk": -1,
        "bank": -1,
        "ngaydat": "12/06/2024 ",
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
        "id": 66,
        "stk": "673423",
        "bank": -1,
        "ngaydat": "12/06/2024 ",
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
        "id": 67,
        "stk": "43624823",
        "bank": "Agribank",
        "ngaydat": "01/06/2024",
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
        "id": 68,
        "stk": -1,
        "bank": -1,
        "ngaydat": "26/07/2024 ",
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
        "id": 69,
        "stk": "3624234",
        "bank": "ACB",
        "ngaydat": "29/11/2024",
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
        "id": 70,
        "stk": -1,
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 71,
        "stk": "328425235",
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 72,
        "stk": -1,
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 73,
        "stk": -1,
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 74,
        "stk": -1,
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 75,
        "stk": -1,
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 76,
        "stk": -1,
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 77,
        "stk": "653472347",
        "bank": "ACB",
        "ngaydat": "29/11/2024",
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
        "id": 78,
        "stk": "7835232",
        "bank": "PG BANK",
        "ngaydat": "29/11/2024",
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
        "id": 79,
        "stk": "67342374",
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 80,
        "stk": -1,
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 81,
        "stk": "67324234628",
        "bank": "ACB",
        "ngaydat": "29/11/2024",
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
        "id": 82,
        "stk": -1,
        "bank": -1,
        "ngaydat": "29/11/2024 ",
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
        "id": 83,
        "stk": "6383834",
        "bank": "ABBANK",
        "ngaydat": "29/11/2024",
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
    
    
    
localStorage.setItem("users", JSON.stringify(Customerr));  
// let donhang = [];
for(let i = 0 ; i <Customerr.length;i++){
    for(let j = 0 ; j < Customerr[i].lichsuMuaHang.length;j++){
        donhang.push(Customerr[i].lichsuMuaHang[j]);
}
}
localStorage.setItem("donhang", JSON.stringify(donhang));

function taohangthongke(Customer, product) {
  if (true) {
    addprofitforcustomer(Customer);
    addprofitforproduct(product);
    console.log(Customer);
    console.log(product);
    const doanhthu = document.querySelector(".container3");
    doanhthu.innerHTML = `
              <div class="doanhthu">
              <div>ID</div>
                  <div>Tên sản phẩm</div>
                  <div>Số lượng đã bán</div>
                  <div class="theehide">Tổng tiền</div>
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
                  <div class="theehide">
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
    let hi;
    if(productwithhighestprofit.loai == "watch"){
        hi = "Đồng hồ";
    }
    if(productwithhighestprofit.loai == "ring"){
        hi = "Nhẫn";
    }
    if(productwithhighestprofit.loai == "necklace"){
        hi = "Vòng cổ";
    }
    if(productwithhighestprofit.loai == "bracelet"){
        hi = "Vòng tay";
    }
    if(productwithhighestprofit.loai == "earring"){
        hi = "Khuyên tai";
    }

    let ho;
    if(productwithlowestprofit.loai == "watch"){
        ho = "Đồng hồ";
    }
    if(productwithlowestprofit.loai == "ring"){
        ho = "Nhẫn";
    }
    if(productwithlowestprofit.loai == "necklace"){
        ho = "Vòng cổ";
    }
    if(productwithlowestprofit.loai == "bracelet"){
        ho = "Vòng tay";
    }
    if(productwithlowestprofit.loai == "earring"){
        ho = "Khuyên tai";
    }


    creatediv.className = "";
    creatediv.innerHTML = `
                          <div class="thongkesanpham">
                  <div class="productwithhighestprofit">   
                      <div><div class="thheader">Lợi nhuận cao nhất</div>  </div>
                      <div>
                          <div class="productinner"> 
                              <div class="divimage thedisplay"><image  class="imagethongke"src="${productwithhighestprofit.hinh}"></image></div>
                              <div><div >ID</div><div>${productwithhighestprofit.id}</div></div>
                              <div><div >Loại sản phẩm</div><div>${hi}</div></div>
                              <div><div >Tên sản phẩm</div><div>${productwithhighestprofit.ten}</div></div>
                              <div ><div class="thehide">Tổng lợi nhuận</div><div class="thehide">${formatVND(productwithhighestprofit.profit)}</div></div>
                              <div ><div class="thehide">Số lượng đã bán</div><div class="thehide">${productwithhighestprofit.soLuong}</div></div>
                          </div>
                      </div>
                  </div>
                  <div class="productwithlowestprofit">   
                      <div><div class="thheader">Lợi nhuận thấp nhất</div>  </div>
                      <div>
                          <div class="productinner"> 
                              <div class="divimage thedisplay"><image  class="imagethongke"src="${productwithlowestprofit.hinh}"></image></div>
                              <div><div >ID</div><div >${productwithlowestprofit.id}</div></div>
                              <div><div >Loại sản phẩm</div><div >${ho}</div></div>
                              <div><div >Tên sản phẩm</div><div >${productwithlowestprofit.ten}</div></div>
                              <div ><div class="thehide">Tổng lợi nhuận</div><div class="thehide">${formatVND(productwithlowestprofit.profit)}</div></div>
                              <div ><div class="thehide">Số lượng dã bán</div><div class="thehide">${productwithlowestprofit.soLuong}</div></div>
                          </div>
                      </div>
                  </div>
              </div> 
              <div class="thongkecustom">
                  <p>Khách hàng</p>
                  <div class="head">
                      <div class="thedisplay">Thứ hạng</div><div class="thedisplay">Tên khách hàng</div><div class="thedisplay">Số sản phẩm đã mua</div><div class="thedisplay">Số tiền đã bỏ ra</div><div class="thehide">Địa chỉ</div><div class="thehide">Email</div>
                  </div>
                  <div class="cuswithlowestprofit"> 
                          <div >
                              <div class="head thedisplay">Lợi nhuận cao nhất</div>
                              <div class="thedisplay">${Customerwithhighestprofit.name}</div>
                              <div class="thedisplay">${Customerwithhighestprofit.totalproduct}</div>
                              <div class="thedisplay">${formatVND(Customerwithhighestprofit.totalprice)}</div>
                              <div class="thehide">${Customerwithhighestprofit.address}</div>
                              <div class="thehide">${Customerwithhighestprofit.email}</div>
                          </div>
                  </div>
                      <div class="cuswithhighestprofit">              
                              <div>
                                  <div class="head thedisplay">Lợi nhuận thấp nhất</div>
                                  <div class="thedisplay">${Customerwithlowestprofit.name}</div>
                                  <div class="thedisplay">${Customerwithlowestprofit.totalproduct}</div>
                                  <div class="thedisplay">${formatVND(Customerwithlowestprofit.totalprice)}</div>
                                  <div class="thehide">${Customerwithlowestprofit.address}</div>
                                  <div class="thehide">${Customerwithlowestprofit.email}</div>
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
  } else {/*
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

    document.getElementById("totalprofit").innerText = (a.totalprofit);
    document.getElementById("totalproduct").innerText = a.totalproduct;
    document.getElementById("totaluser").innerText = a.totaluser;
    document.getElementById("totalprice").innerText = (a.totalprice);
    */
  }
}
function gettotal(Customer) {
  let sumprofit = 0;
  let sumproduct = 0;
  let sumprice = 0;
  Customer.forEach((customer) => {
    sumprofit += customer.totalprofit;
    sumproduct += customer.totalproduct;
    sumprice += customer.totalprice;
  });
  return {
    totalprofit: sumprofit,
    totalproduct: sumproduct,
    totalprice: sumprice,
    totaluser: Customer.length,
  };
}

function cushighest(customers) {
  let max = -Infinity;
  let highestCustomer = null;
  if (customers && customers.length > 0) {
    customers.forEach((customer) => {
      if (customer.totalprofit > max) {
        max = customer.totalprofit;
        highestCustomer = customer;
      }
    });
  }
  return highestCustomer || {
    name: "no info",
    phone: "no info",
    email: "no info",
    address: "no info",
    totalprofit: 0,
    totalproduct: 0,
    totalprice:0
  }
}
function cuslowest(customers) {
  let min = Infinity;
  let lowestCustomer = null;
  if (customers && customers.length > 0) {
    customers.forEach((customer) => {
      if (customer.totalprofit <min) {
        min = customer.totalprofit;
        lowestCustomer = customer;
      }
    });
  }
  return lowestCustomer || {
    name: "no info",
    phone: "no info",
    email: "no info",
    address: "no info",
    totalprofit: 0,
    totalproduct: 0,
    totalprice:0
  };
}

// function cuslowest(Customer) {
//   let min = Infinity;
//   let cus;
//   if(Customer){
//     Customer.forEach((Customer) => {
//       if (min > Customer.totalprofit) {
//         min = Customer.totalprofit;
//         cus = Customer;
//       }
//     });
//     return cus;
//   }
//   return "no infor"
// }
function highest(product) {
  let max = -Infinity;
  let productwithmax;
  product.forEach((product) => {
    if (product.profit > max) {
      max = product.profit;
      productwithmax = product;
    }
  });
  
  return productwithmax || {
    ten:"no infor",
    loai:"no infor",
    id:"no infor",
    hinh:"./stock-image/bracelet/white.jpg",
    
    soLuong:0,
    profit:0,
    totalprice
  };
}
function lowest(product) {
  let productwithmin;
  let min = +Infinity;
  product.forEach((product) => {
    if (product.profit < min) {
      min = product.profit;
      productwithmin = product;
    }
  });
  return productwithmin || {
    ten:"no infor",
    loai:"no infor",
    id:"no infor",
    hinh:"./stock-image/bracelet/white.jpg",
    soLuong:0,
    profit:0,
  }
}

function checktimeday(receiptime) {
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
    receipt[0].replace(/^0+/, "") < day &&
    receipt[1].replace(/^0+/, "") == month &&
    receipt[2].replace(/^0+/, "") == year
  ) {
    return false;
  }
  if (
    receipt[0].replace(/^0+/, "") > daysecond &&
    receipt[1].replace(/^0+/, "") == monthsecond &&
    receipt[2].replace(/^0+/, "") == yearsecond
  ) {
    return false;
  }
  return true;
}

//lấy mảng Customer mới với lịch sử mua hàng thỏa điều kiện
// function arrayCustomer(Customer) {
//   return Customer.filter((Customer) => {
//     const filteredlichsuMuaHangs = Customer.lichsuMuaHang.filter(
//       (lichsuMuaHang) => {
//         return checktimeday(lichsuMuaHang.ngaydat);
//       }
//     );
//     if (filteredlichsuMuaHangs.length > 0) {
//       return {
//         ...Customer,
//         lichsuMuaHang: filteredlichsuMuaHangs,
//       };
//     }
//   }).filter((Customer) => Customer);
// }
function arrayCustomer(Customer) {
  return Customer.map((Customer) => {
    let filteredlichsuMuaHangs=Customer.lichsuMuaHang.filter(lichsu=>{
      return checktimedate(lichsu.ngaydat);
    })
    console.log(filteredlichsuMuaHangs);
    if (filteredlichsuMuaHangs.length > 0) {
      console.log(Customer);
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
    array.forEach((customer) => {
      customer.totalprice = 0;
      customer.totalproduct = 0;
      customer.totalprofit = 0;
      customer.lichsuMuaHang.forEach((lichsuMuaHang) => {
        lichsuMuaHang.giohang.forEach((product) => {
          customer.totalprofit += product.soLuong * product.profit;
          customer.totalproduct += product.soLuong;
          customer.totalprice += product.soLuong * parseInt(product.gia);
        });
      });
    });
    return array;
  }
}

  // function aggregateCartItems(Customers) {
  //   const aggregatedItems = {};
  //   Customers.forEach(Customer => {
  //       Customer.lichsuMuaHang.forEach(order => {
  //           let uni=new Set();
  //           let i=0;
  //           order.giohang.forEach(item => {
  //               uni.add(item.id);
  //               if (uni.has(item.id)) {
  //                   aggregatedItems[i].soLuong += item.soLuong;
  //                   aggregatedItems[i].profit=item.profit*item.soLuong
  //                   aggregatedItems[i].gia=item.gia*item.soLuong
  //               } else {
  //                   aggregatedItems[i] = { ...item };
  //                   aggregatedItems[i].profit=item.profit*item.soLuong;
  //                   aggregatedItems[i].gia=item.gia*item.soLuong;
  //                   aggregatedItems[i].soLuong+=product.soLuong
  //                   i++;
  //               }
  //           });
  //       });
  //   });
  //   return Object.values(aggregatedItems);
  // }
// function aggregateCartItems(Customers) {
//   console.log(Customers);
//   const aggregatedItems = {};
//   Customers.forEach((Customer) => {
//     Customer.lichsuMuaHang.forEach((order) => {
//       order.giohang.forEach((item) => {
//         if (aggregatedItems[item.id]) {
//           aggregatedItems[item.id].soLuong += item.soLuong;
//           aggregatedItems[item.id].profit += item.profit * item.soLuong;
//           aggregatedItems[item.id].gia += item.gia * item.soLuong;
//         } else {
//           aggregatedItems[item.id] = {
//             ...item,
//             soLuong: item.soLuong,
//             profit: item.profit * item.soLuong,
//             gia: item.gia * item.soLuong,
//           };
//         }
//       });
//     });
//   });
//   return Object.values(aggregatedItems);
// }
function aggregateCartItems(Customers){
  const aggregatedItems = [];
  let uni=new Set();
  let i=0;
  Customers.forEach(customer=>{
    if(customer.lichsuMuaHang){
      customer.lichsuMuaHang.forEach(lichsu=>{
        lichsu.giohang.forEach(product=>{
          if(uni.has(product.id)){
            let theproduct=aggregatedItems.find(pro => pro.id == product.id);
            theproduct.soLuong += product.soLuong;
            theproduct.profit += product.soLuong*product.profit;
            theproduct.gia += product.soLuong+product.gia;
          }
          else{
            uni.add(product.id);
            aggregatedItems[i] = {
              ...product,
              soLuong: product.soLuong,
              profit: product.profit * product.soLuong,
              gia: product.gia * product.soLuong,
            };
            i++;
          }
  
        })
      })
    }
  })
  return aggregatedItems;
}
// function aggregateCartItems(Customers) {
//   console.log(Customers);
//   const aggregatedItems = {};
//   let uni = new Set();
//   let i = 0;

//   // Sử dụng Promise để xử lý bất đồng bộ
//   const promises = Customers.map(customer => {
//     console.log(customer);
//     return new Promise((resolve) => {
//       customer.lichsuMuaHang(lichsu => {
//         lichsu.giohang(product => {
//           if (uni.has(product.id)) {
//             let theProduct = Object.values(aggregatedItems).find(pro => pro.id == product.id);
//             if (theProduct) {
//               theProduct.soLuong += product.soLuong;
//               theProduct.profit += product.soLuong * product.profit;
//               theProduct.gia += product.gia * product.soLuong;
//             }
//           } else {
//             uni.add(product.id);
//             aggregatedItems[i] = {
//               id: product.id, // Thêm thuộc tính id
//               soLuong: product.soLuong,
//               profit: product.profit * product.soLuong,
//               gia: product.gia * product.soLuong,
//             };
//             i++;
//           }
//           resolve(); // Kết thúc promise
//         });
//       });
//     });
//   });

//   // Chờ tất cả các promise hoàn thành
//   return Promise.all(promises).then(() => Object.values(aggregatedItems));
// }



function inputdate() {
  let Customer = JSON.parse(localStorage.getItem("users"));
  const time = document.getElementById("timefirst").value;
  if (time) {
    day = parseInt(time.split("-")[2].replace(/^0+/, ""), 10);
    month = parseInt(time.split("-")[1].replace(/^0+/, ""), 10);
    year = parseInt(time.split("-")[0].replace(/^0+/, ""), 10);
  }
  const timesec = document.getElementById("timesecond").value;
  if (timesec) {
    daysecond = parseInt(timesec.split("-")[2].replace(/^0+/, ""), 10);
    monthsecond = parseInt(timesec.split("-")[1].replace(/^0+/, ""), 10);
    yearsecond = parseInt(timesec.split("-")[0].replace(/^0+/, ""), 10);
  }
  if(timesec && document.getElementById("timefirst").value){
      if(yearsecond<year){
          alert("Bạn nhập sai ngày");
          return;
      }
      if(yearsecond==year && monthsecond<month){
          alert("Bạn nhập sai ngày");
          return;
      }
      if(yearsecond==year && monthsecond==month && daysecond<day){
          alert("Bạn nhập sai ngày");
          return;
      }
  taohangthongke(arrayCustomer(Customer),aggregateCartItems(arrayCustomer(Customer)));
  }
}
function addprofitforcustomer(Customer) {
  Customer.forEach((Customer) => {
    if(Customer.lichsuMuaHang){
      Customer.lichsuMuaHang.forEach((lichsu) => {
        if(lichsu.giohang){
          lichsu.giohang.forEach((product) => {
            product.profit = (product.gia * 10) / 100;
          });
        }
      });
    }
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
  aggregateCartItems((JSON.parse(localStorage.getItem("users"))))
);