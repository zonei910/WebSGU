let Customer = [
  { 
      id: 1,
       tenKH: "Mikasa Chan",
       phoneKH: "0901 234 567", 
       email: "mikasachan@gmail.com", 
       img:"./thenganhangimage/mikasachan.jfif",
       lichsuMuaHang:[
          {
              "id": 1,
              "stk": "12345",
              "bank": "AGB",
              ngaydat: "13/08/2024", 
              "ngayduyet": 0,
              "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "mikasachan",
              "phoneKH": "0901 234 567",
              "emailKH": "mikasachan@gmail.com",
              "genderKH": "nu",
              giohang: [
                  {  
                    "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/watch/1-1.jpg",
                    "id": 1,
                    "ten": "Đồng Hồ Vàng Sang Trọng",
                    "gia": "47500000",
                    profit:4000000,
                    "soLuong": 1,
                    "loai": "watch"
                  },
                  {   
                    "hinh": "assets/User/img/watch/2-1.jpg",
                    "ten": "Đồng Hồ Đính Kim Cương",
                    "id": 2,
                    "loai": "watch",
                    "soLuong": 1,
                    "gia": 71250000,
                    profit:7000000
                  }
                ],
          },
          {
              "id": 2,
              "stk": "12345",
              "bank": "VCB",
              "ngaydat": "28/11/2024",
              // "ngayduyet": 0,
              "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "mikasachan",
              "phoneKH": "0901 234 567",
              "emailKH": "mikasachan@gmail.com",
              "genderKH": "nu",
              giohang:[
                  {  
                    "hinh": "assets/User/img/watch/2-1.jpg",
                    "ten": "Đồng Hồ Đính Kim Cương",
                    "id": 2,
                    "loai": "watch",
                    "soLuong": 1,
                    "gia": 71250000,
                    profit:7000000
                  },
                  {  
                    "hinh": "http://127.0.0.1:5500/Bonus/WebSGU/assets/User/img/watch/1-1.jpg",
                    "id": 1,
                    "ten": "Đồng Hồ Vàng Sang Trọng",
                    "gia": "47500000",
                    profit:4000000,
                    "soLuong": 1,
                    "loai": "watch"
                  },
              ]
          }
       ]
  },
  { id: 2, 
      tenKH: "Uzumaki Naruto", 
      img:"./thenganhangimage/naruto.jfif",
      phoneKH: "0912 345 678", 
      email: "naruto@gmail.com", 
      status: "not received the order",
      lichsuMuaHang: [
      
      {  
          "id": 36,
          "stk": "12345",
          "bank": "AGB",
          "ngaydat": "28/11/2024",
          "ngayduyet": 0,
          "diachiKH": "456 Đường Nguyễn Văn Cừ, Quận 5, TP. HCM, Việt Nam",
          "tongtien": 93100000,
          "status": 0,
          "tenKH": "Nguyễn Hiền",
          "phoneKH": "0912 345 678",
          "emailKH": "nguyenhien@gmail.com",
          "genderKH": "nam",
          giohang:[
              {
                "hinh": "assets/User/img/ring/1-1.jpg",
                "ten": "Nhẫn Đính Hôn Kim Cương",
                "id": 6,
                "loai": "ring",
                "soLuong": 2,
                "gia": 142500000,
                profit:10000000
              }
          ]
      },
      {  
          "id": 11,
          "stk": "12345",
          "bank": "VCB",
          "ngaydat": "28/11/2024",
          "ngayduyet": 0,
          "diachiKH": "789 Đường Trần Hưng Đạo, Quận 1, TP. HCM, Việt Nam",
          "tongtien": 93100000,
          "status": 0,
          "tenKH": "Nguyễn Hiền",
          "phoneKH": "0912 345 678",
          "emailKH": "nguyenhien@gmail.com",
          "genderKH": "nam",
          giohang:[
              {
                "hinh": "assets/User/img/bracelet/18-1.jpg",
                "ten": "Vòng Tay Vàng K10",
                "id": 18,
                "loai": "bracelet",
                "soLuong": 3,
                "gia": 2100000,profit:200000
              }
          ]
      }
    ],
  },
  { id: 3, tenKH: "Sasuke Uchiha", img:"./thenganhangimage/sasuke.jfif", phoneKH: "0978 901 234", email: "Sasuke@gmail.com", status: "not received the order",
      lichsuMuaHang:[
          {
              "id": 12,
              "stk": "12345",
              "bank": "VCB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "321 Đường Lê Duẩn, Quận 3, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0978 901 234",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nam",
              giohang: [
                  {  
                    "hinh": "assets/User/img/bracelet/18-1.jpg",
                    "ten": "Vòng Tay Vàng K10",
                    "id": 18,
                    "loai": "bracelet",
                    "soLuong": 3,
                    "gia": 2100000,
                    profit:200000
                  }
                ]
          }
      ],
  },
  { id: 4, tenKH: "Sakura Haruno", img:"./thenganhangimage/sakura.jfif", phoneKH: "0923 456 789", email: "Sakura@gmail.com", status: "not received the order",
      lichsuMuaHang:[

          {
              "id": 15,
              "stk": "12345",
              "bank": "AGB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "654 Đường Nguyễn Thị Minh Khai, Quận 3, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0923 456 789",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nu",
              giohang: [
                  {  
                    "hinh": "assets/User/img/bracelet/18-1.jpg",
                    "ten": "Vòng Tay Vàng K10",
                    "id": 18,
                    "loai": "bracelet",
                    "soLuong": 3,
                    "gia": 2100000,profit:200000
                   }
                ],
          }
      ]
  },
  { id: 5, tenKH: "Hinata Hyuga", img:"./thenganhangimage/hinata.jfif", phoneKH: "0934 567 890", email: "Hinata@gmail.com", status: "not received the order",
      lichsuMuaHang:[
          {
              "id": 13,
              "stk": "12345",
              "bank": "AGB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "135 Đường Đinh Tiên Hoàng, Quận 1, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0934 567 890",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nu",
              giohang: [
                  {  
                    "hinh": "assets/User/img/watch/1-1.jpg",
                    "ten": "Đồng Hồ Vàng Sang Trọng",
                    "id": 1,
                    "loai": "watch",
                    "soLuong": 1,
                    "gia": 47500000,profit:4000000
                  }
                ],
          }
      ]
  },
  { id: 6, tenKH: "Itachi Uchiha", img:"./thenganhangimage/itachi.jfif", phoneKH: "0934 567 890", email: "Itachi@gmail.com", status: "not received the order",
      lichsuMuaHang:[
          {
              "id": 14,
              "stk": "12345",
              "bank": "AGB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "246 Đường Nguyễn Huệ, Quận 1, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0934 567 890",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nam",
              giohang: [
                  {  
                    "hinh": "assets/User/img/watch/1-1.jpg",
                    "ten": "Đồng Hồ Vàng Sang Trọng",
                    "id": 1,
                    "loai": "watch",
                    "soLuong": 1,
                    "gia": 47500000,profit:4000000
                   }
                ],
          }
      ]
  },
  { id: 7, tenKH: "Sasori", img:"./thenganhangimage/sasori.jfif", phoneKH: "0956 789 012", email: "Sasori@gmail.com", status: "not received the order",
      lichsuMuaHang:[
          {
              "id": 16,
              "stk": "12345",
              "bank": "VCB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "369 Đường Nguyễn Thái Học, Quận 1, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0956 789 012",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nam",
              giohang: [
                  {  
                    "hinh": "assets/User/img/earrings/21-1.jpg",
                    "ten": "Bông Tai 2 Trái Tim Vàng Hồng",
                    "id": 21,
                    "loai": "earring",
                    "soLuong": 1,
                    "gia": 4000000,profit:400000
                }
                ],
          }
      ]
    },
    { id: 8, tenKH: "Kakashi Hatake", img:"./thenganhangimage/kakashi.jfif", phoneKH: "0967 890 123", email: "Kakashi@gmail.com", status: "not received the order",
      lichsuMuaHang:[
          {
              "id": 17,
              "stk": "12345",
              "bank": "AGB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "147 Đường Lê Văn Sỹ, Quận 3, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0967 890 123",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nam",
              giohang: [
                  {  
                    "hinh": "assets/User/img/bracelet/20-1.jpg",
                    "ten": "Vòng Tay Vàng K18",
                    "id": 20,
                    "loai": "bracelet",
                    "soLuong": 1,
                    "gia": 1400000,profit:300000
                   }
                ],
          }
      ]
    },
    { id: 9, tenKH: "Eren Yeager", img:"./thenganhangimage/eren.jfif", phoneKH: "0901 234 567", email: "Eren@gmail.com", status: "None",
      lichsuMuaHang:[
          {
              "id": 18,
              "stk": "12345",
              "bank": "AGB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "258 Đường Võ Văn Tần, Quận 3, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0901 234 567",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nam",
              giohang: [
                  {  
                    "hinh": "assets/User/img/bracelet/20-1.jpg",
                    "ten": "Vòng Tay Vàng K18",
                    "id": 20,
                    "loai": "bracelet",
                    "soLuong": 1,
                    "gia": 1400000,profit:140000
                   },
                   {  
                    "hinh": "assets/User/img/watch/2-1.jpg",
                    "ten": "Đồng Hồ Đính Kim Cương",
                    "id": 2,
                    "loai": "watch",
                    "soLuong": 1,
                    "gia": 71250000,profit:7000000
                }
                ],
          }
      ]
    },
    { id: 10, tenKH: "Mikasa Ackerman", img:"./thenganhangimage/mikasa.jfif", phoneKH: "0903 456 789", email: "Ackerman@gmail.com", status: "None",
      lichsuMuaHang:[
          {
              "id": 19,
              "stk": "12345",
              "bank": "AGB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "369 Đường 3/2, Quận 10, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0903 456 789",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nu",
              giohang: [
                  {  
                    "hinh": "assets/User/img/watch/2-1.jpg",
                    "ten": "Đồng Hồ Đính Kim Cương",
                    "id": 2,
                    "loai": "watch",
                    "soLuong": 1,
                    "gia": 71250000,profit:7000000
                   }
                ],
          }
      ]
    },
    { id: 11, tenKH: "Armin Arlert", img:"./thenganhangimage/armin.jfif", phoneKH: "0914 567 890", email: "Armin@gmail.com", status: "None",
      lichsuMuaHang:[
          {
              "id": 20,
              "stk": "12345",
              "bank": "AGB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "852 Đường Trường Chinh, Quận Tân Bình, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0914 567 890",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nam",
              giohang: [
                  {  
                    "hinh": "assets/User/img/ring/1-1.jpg",
                    "ten": "Nhẫn Đính Hôn Kim Cương",
                    "id": 6,
                    "loai": "ring",
                    "soLuong": 1,
                    "gia": 142500000,profit:14000000
                   }
                ],
          }
      ]
    },
    { id: 12, tenKH: "Levi Ackerman", img:"./thenganhangimage/levi.jfif", phoneKH: "0925 678 901", email: "Levi@gmail.com", status: "None",
      lichsuMuaHang:[
          {
              "id": 21,
              "stk": "12345",
              "bank": "AGB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "963 Đường Nguyễn Trãi, Quận 5, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0925 678 901",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nam",
              giohang: [
                  {  
                    "hinh": "assets/User/img/watch/5-1.jpg",
                    "ten": "Đồng Hồ Mặt Sapphire",
                    "id": 5,
                    "loai": "watch",
                    "soLuong": 1,
                    "gia": 93100000,profit:9000000
                   },
                   {  
                    "hinh": "assets/User/img/watch/4-1.jpg",
                    "ten": "Đồng Hồ Vàng Hồng Sang Trọng",
                    "id": 4,
                    "loai": "watch",
                    "soLuong": 1,
                    "gia": 80750000,profit:8000000
                   }
                ],
          }
      ]
    },
    { id: 13, tenKH: "Historia Reiss", img:"./thenganhangimage/historia.jfif", phoneKH: "0936 789 012", email: "Historia@gmail.com", status: "None",
      lichsuMuaHang:[
          {
              "id": 22,
              "stk": "12345",
              "bank": "AGB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "741 Đường Cách Mạng Tháng Tám, Quận 10, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0936 789 012",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nu",
              giohang: [
                  {  
                    "hinh": "assets/User/img/ring/4-1.jpg",
                    "ten": "Nhẫn Ngọc Lục Bảo và Kim Cương",
                    "id": 9,
                    "loai": "ring",
                    "soLuong": 1,
                    "gia": 104500000
                    ,profit:10000000
                   }
                ],
          }
      ]
    },
    { id: 14, tenKH: "Erwin Smith", img:"./thenganhangimage/erwin.jfif", phoneKH: "0947 890 123", email: "Erwin@gmail.com", status: "None",
      lichsuMuaHang:[
          {
              "id": 23,
              "stk": "12345",
              "bank": "AGB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "159 Đường Lê Lai, Quận 1, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0947 890 123",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nam",
              giohang: [
                  {  
                    "hinh": "assets/User/img/ring/4-1.jpg",
                    "ten": "Nhẫn Ngọc Lục Bảo và Kim Cương",
                    "id": 9,
                    "loai": "ring",
                    "soLuong": 1,
                    "gia": 104500000,profit:10000000
                   },
                   {  
                    "hinh": "assets/User/img/necklace/12-1.jpg",
                    "ten": "Dây Chuyền Bạc Mặt Tròn",
                    "id": 12,
                    "loai": "necklace",
                    "soLuong": 1,
                    "gia": 1200000,profit:100000
                  
                   }
                ],
          }
      ]
    },
    { id: 15, tenKH: "Jean Kirstein", img:"./thenganhangimage/jean.jfif", phoneKH: "0958 901 234", email: "Jean@gmail.com", status: "None",
      lichsuMuaHang:[
          {
              "id": 24,
              "stk": "12345",
              "bank": "AGB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "753 Đường Nguyễn Đình Chiểu, Quận 3, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0958 901 234",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nam",
              giohang: [
                  {  
                    "hinh": "assets/User/img/necklace/12-1.jpg",
                    "ten": "Dây Chuyền Bạc Mặt Tròn",
                    "id": 12,
                    "loai": "necklace",
                    "soLuong": 1,
                    "gia": 1200000,profit:100000
                   },
                   {  
                    "hinh": "assets/User/img/necklace/11-1.jpg",
                    "ten": "Dây Chuyền Bạc Họa Tiết Móng Ngựa",
                    "id": 11,
                    "loai": "necklace",
                    "soLuong": 1,
                    "gia": 750000,profit:70000
                   },
                ],
          }
      ]
    },
    { id: 16, tenKH: "Sasha Blouse", img:"./thenganhangimage/sasha.jfif", phoneKH: "0969 012 345", email: "Sasha@gmail.com", status: "None",
      lichsuMuaHang:[
          {
              "id": 25,
              "stk": "12345",
              "bank": "AGB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "159 Đường Hùng Vương, Quận 5, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0969 012 345",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nu",
              giohang: [
                  {  
                    "hinh": "assets/User/img/ring/5-1.jpg",
                    "ten": "Bộ Nhẫn Cưới Bạch Kim",
                    "id": 10,
                    "loai": "ring",
                    "soLuong": 1,
                    "gia": 161500000,profit:16000000
                },
                ],
          }
      ]
    },
    { id: 17, tenKH: "Connie Springer", img:"./thenganhangimage/conie.jfif", phoneKH: "0970 123 456", email: "Connie@gmail.com", status: "None",
      lichsuMuaHang:[
          {
              "id": 26,
              "stk": "12345",
              "bank": "AGB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "258 Đường Lê Thánh Tôn, Quận 1, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0970 123 456",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nam",
              giohang: [
                  {  
                    "hinh": "assets/User/img/necklace/15-1.jpg",
                    "ten": "Dây Chuyền Bạc Dancing Stone",
                    "id": 15,
                    "loai": "necklace",
                    "soLuong": 2,
                    "gia": 450000,profit:60000
                   },
                   {  
                    "hinh": "assets/User/img/necklace/14-1.jpg",
                    "ten": "Dây Chuyền Bạc Mặt Trăng",
                    "id": 14,
                    "loai": "necklace",
                    "soLuong": 1,
                    "gia": 650000,profit:60000
                   }
                ],
          }
      ]
    },
    { id: 18, tenKH: "Hange Zoë", img:"./thenganhangimage/hange.jfif", phoneKH: "0981 234 567", email: "Hange@gmail.com", status: "None",
      lichsuMuaHang:[
          {
              "id": 27,
              "stk": "12345",
              "bank": "AGB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "369 Đường Bùi Viện, Quận 1, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0981 234 567",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nu",
              giohang: [
                  {   
                        "hinh": "assets/User/img/necklace/13-1.jpg",
                        "ten": "Dây Chuyền Bạc Trái Tim Nhỏ",
                        "id": 13,
                        "loai": "necklace",
                        "soLuong": 1,
                        "gia": 550000,profit:50000
                   },
                   {
                    "hinh": "assets/User/img/bracelet/18-1.jpg",
                    "ten": "Vòng Tay Vàng K10",
                    "id": 18,
                    "loai": "bracelet",
                    "soLuong": 3,
                    "gia": 2100000,profit:200000
                   }
                ],
          }
      ]
    },
    { id: 19, tenKH: "Reiner Braun", img:"./thenganhangimage/reiner.jfif", phoneKH: "0992 345 678", email: "Reiner@gmail.com", status: "None",
      lichsuMuaHang:[
          {
              "id": 28,
              "stk": "12345",
              "bank": "AGB",
              "ngaydat": "28/11/2024",
              "ngayduyet": 0,
              "diachiKH": "456 Đường Lê Thị Riêng, Quận 1, TP. HCM, Việt Nam",
              "tongtien": 93100000,
              "status": 0,
              "tenKH": "Nguyễn Hiền",
              "phoneKH": "0992 345 678",
              "emailKH": "nguyenhien@gmail.com",
              "genderKH": "nam",
              giohang: [
                  {  
                    "hinh": "assets/User/img/bracelet/18-1.jpg",
                    "ten": "Vòng Tay Vàng K10",
                    "id": 18,
                    "loai": "bracelet",
                    "soLuong": 3,
                    "gia": 2100000,profit:200000
                   }
                ],
          }
      ]
    },
//     { id: 20, tenKH: "Annie Leonhart", img:"./thenganhangimage/annie.jfif", phoneKH: "0904 456 789", email: "Annie@gmail.com", status: "None",
//       lichsuMuaHang:[
//           {
//               "id": 29,
//               "stk": "12345",
//               "bank": "AGB",
//               "ngaydat": "28/11/2024",
//               "ngayduyet": 0,
//               "diachiKH": "789 Đường Nguyễn Bình, Quận 7, TP. HCM, Việt Nam",
//               "tongtien": 93100000,
//               "status": 0,
//               "tenKH": "Nguyễn Hiền",
//               "phoneKH": "0904 456 789",
//               "emailKH": "nguyenhien@gmail.com",
//               "genderKH": "nu",
//               giohang: [
//                   {  
//                     id: 6,
//                     tenKH: "Vòng cổ(Hàng tặng)",
//                     loai: "necklace",
//                     gia: 97.3,
//                     profit: 20.7,
//                     description: `
//                     <p>Metal: 14K Gold</p>
//                     <p>Metal Color: Rose/Yellow/White</p>
//                     <p>Round Emerald 0.99</p>
//                     <p>Oval Emerald 1.02</p>
//                 `,
//                 images: [
//                     "assets/User/img/necklace/1.png",
//                     "assets/User/img/necklace/2.png",
//                     "assets/User/img/necklace/3.png",
//                     "assets/User/img/necklace/4.png"
//                 ],
//                     ngaydat: "28-08-2024", 
//                     completiontime: "10-09-2024",
//                     soLuong:4
//                    }
//                 ],
//           }
//       ]
//     },
//     { id: 21, tenKH: "Zeke Yeager", img:"./thenganhangimage/zeke.jfif", phoneKH: "0915 567 890", email: "Zeke@gmail.com", status: "None",
//       lichsuMuaHang:[
//           {
//               "id": 30,
//               "stk": "12345",
//               "bank": "AGB",
//               "ngaydat": "28/11/2024",
//               "ngayduyet": 0,
//               "diachiKH": "852 Đường Trần Não, Quận 2, TP. HCM, Việt Nam",
//               "tongtien": 93100000,
//               "status": 0,
//               "tenKH": "Nguyễn Hiền",
//               "phoneKH": "0915 567 890",
//               "emailKH": "nguyenhien@gmail.com",
//               "genderKH": "nam",
//               giohang: [
//                   {
//                     id: 8,
//                     tenKH: "Vòng cổ(Hàng tặng)",
//                     loai: "necklace",
//                     gia: 371.67,
//                     profit: 34.8,
//                     description: `
//                     <p>Metal: 14K Gold</p>
//                     <p>Metal Color: Rose/Yellow/White</p>
//                     <p>Round Emerald 0.99</p>
//                     <p>Oval Emerald 1.02</p>
//                 `,
//                 images: [
//                     "assets/User/img/necklace/1.png",
//                     "assets/User/img/necklace/2.png",
//                     "assets/User/img/necklace/3.png",
//                     "assets/User/img/necklace/4.png"
//                 ],
//                     ngaydat: "27-06-2024", 
//                     completiontime: "05-07-2024",
//                     soLuong:1
//                   }
//                 ],
//           }
//       ]
//     },
//     { id: 22, tenKH: "Gabi Braun", img:"./thenganhangimage/gabi.jfif", phoneKH: "0926 678 901", email: "Gabi@gmail.com", status: "None",
//       lichsuMuaHang:[
//           {
//               "id": 31,
//               "stk": "12345",
//               "bank": "AGB",
//               "ngaydat": "28/11/2024",
//               "ngayduyet": 0,
//               "diachiKH": "963 Đường Phú Nhuận, Quận Phú Nhuận, TP. HCM, Việt Nam",
//               "tongtien": 93100000,
//               "status": 0,
//               "tenKH": "Nguyễn Hiền",
//               "phoneKH": "0926 678 901",
//               "emailKH": "nguyenhien@gmail.com",
//               "genderKH": "nam",
//               giohang: [
//                   {  
//                     id: 5,
//                     tenKH: "White Sapphire Band Ring",
//                     loai: "ring",
//                     gia: 76.8,
//                     profit: 20.9,
//                 images: [
//                     "assets/User/img/ring/1.png",
//                     "assets/User/img/ring/2.png",
//                     "assets/User/img/ring/3.png",
//                     "assets/User/img/ring/4.png"
//                 ],
//                     ngaydat: "12-06-2024", 
//                     completiontime: "20-06-2024",
//                     soLuong:6
//                    }
//                 ],
//           }
//       ]
//     },
//     { id: 23, tenKH: "Falco Grice", img:"./thenganhangimage/falco.jfif", phoneKH: "0937 789 012", email: "Falco@gmail.com", status: "None",
//       lichsuMuaHang:[
//           {
//               "id": 32,
//               "stk": "12345",
//               "bank": "AGB",
//               "ngaydat": "28/11/2024",
//               "ngayduyet": 0,
//               "diachiKH": "147 Đường Đinh Bộ Lĩnh, Quận Bình Thạnh, TP. HCM, Việt Nam",
//               "tongtien": 93100000,
//               "status": 0,
//               "tenKH": "Nguyễn Hiền",
//               "phoneKH": "0937 789 012",
//               "emailKH": "nguyenhien@gmail.com",
//               "genderKH": "nam",
//               giohang: [
//                   {  
//                     id: 4,
//                     tenKH: "White Gold Diamond Palm Tree Necklace",
//                     loai: "necklace",
//                     gia: 46,
//                     profit: 15.9,
//                     description: `
//                     <p>Metal: 14K Gold</p>
//                     <p>Metal Color: White</p>
//                     <p>Stones: Round Diamond 9.19</p>
//                     <p>Length: 7" Width:1/2"</p>
//                 `,
//                 images: [
//                     "assets/User/img/necklace/1.png",
//                     "assets/User/img/necklace/2.png",
//                     "assets/User/img/necklace/3.png",
//                     "assets/User/img/necklace/4.png"
//                 ],
//                     ngaydat: "09-10-2024", 
//                     completiontime: "15-10-2024",
//                     soLuong:8
//                    },
//                    {
//                     id: 3,
//                     "hinh": "assets/User/img/watch/3-1.jpg",
//                     "gia": 114000000,
//                     ten: "Vòng tay(Hàng tặng)",
//                     loai: "bracelet",
//                     gia: 22,
//                     profit: 12.9,
//                     ngaydat: "10-07-2024", 
//                     completiontime: "19-07-2024",
//                     soLuong:6
//                    }
//                 ],
//           }
//       ]
//     },
//     { id: 24, tenKH: "Porco Galliard", img:"./thenganhangimage/porco.jfif", phoneKH: "0948 890 123", email: "Porco@gmail.com", status: "None",
//       lichsuMuaHang:[
//           {
//               "id": 33,
//               "stk": "12345",
//               "bank": "AGB",
//               "ngaydat": "28/11/2024",
//               "ngayduyet": 0,
//               "diachiKH": "258 Đường Lê Văn Quới, Quận Bình Tân, TP. HCM, Việt Nam",
//               "tongtien": 93100000,
//               "status": 0,
//               "tenKH": "Nguyễn Hiền",
//               "phoneKH": "0948 890 123",
//               "emailKH": "nguyenhien@gmail.com",
//               "genderKH": "nam",
//               giohang: [
//                   {  
//                     id: 1,
//                     tenKH: "Yellow Gold Multi Sapphire & Diamond Ring",
//                     loai: "ring",
//                     "gia": 47500000,
//                     "hinh": "assets/User/img/watch/1-1.jpg",
//                     profit: 2.4,
//                     ngaydat: "20-09-2024", 
//                     completiontime: "29-09-2024",
//                     soLuong:6
//                    },
//                    {
//                     id: 9,
//                     tenKH: "Đồng hồ(Hàng tặng)",
//                     loai: "watch",
//                     gia: 429.888,
//                     profit: 40.9,
//                     description: `
//                     <p>Metal: 14K Gold</p>
//                     <p>Metal Color: White</p>
//                     <p>Emerald Cut Blue Sapphire 1.52</p>
//                     <p>Natural Diffused Ceylon Sapphire</p>
//                 `,
//                 images: [
//                     "assets/User/img/bracelet/1.png",
//                     "assets/User/img/bracelet/2.png",
//                     "assets/User/img/bracelet/3.png",
//                     "assets/User/img/bracelet/4.png"
//                 ],
//                     ngaydat: "01-08-2024", 
//                     completiontime: "10-08-2024",
//                     soLuong:1
//                    }
//                 ],
//           }
//       ]
//     },
//     { id: 25, tenKH: "Pieck Finger", img:"./thenganhangimage/pieck.jfif", phoneKH: "0959 901 234", email: "Pieck@gmail.com", status: "None",
//       lichsuMuaHang:[
//           {
//               "id": 34,
//               "stk": "12345",
//               "bank": "AGB",
//               "ngaydat": "28/11/2024",
//               "ngayduyet": 0,
//               "diachiKH": "369 Đường Kinh Dương Vương, Quận Bình Tân, TP. HCM, Việt Nam",
//               "tongtien": 93100000,
//               "status": 0,
//               "tenKH": "Nguyễn Hiền",
//               "phoneKH": "0959 901 234",
//               "emailKH": "nguyenhien@gmail.com",
//               "genderKH": "nam",
//               giohang: [
//                   {  
//                     id: 7,
//                     tenKH: "Diamond Ring",
//                     loai: "ring",
//                     gia: 167.46,
//                     profit: 40.9,
//                     description: `
//                     <p>Metal: 14K Gold</p>
//                     <p>Metal Color: Rose/Yellow/White</p>
//                     <p>Round Ruby 0.99</p>
//                     <p>Oval Emerald 1.02</p>
//                 `,
//                 images: [
//                     "assets/User/img/ring/1.png",
//                     "assets/User/img/ring/2.png",
//                     "assets/User/img/ring/3.png",
//                     "assets/User/img/ring/4.png"
//                 ],
//                     ngaydat: "06-09-2024", 
//                     completiontime: "17-09-2024",
//                     soLuong:3
//                    }
//                 ],
//           }
//       ]
//     },
//     { id: 26, tenKH: "Ymir Fritz", img:"./thenganhangimage/ymir.jfif", phoneKH: "0960 012 345", email: "Ymir@gmail.com", status: "None",
//       lichsuMuaHang:[
//           {
//               "id": 35,
//               "stk": "12345",
//               "bank": "AGB",
//               "ngaydat": "28/11/2024",
//               "ngayduyet": 0,
//               "diachiKH": "741 Đường Lê Trọng Tấn, Quận Tân Phú, TP. HCM, Việt Nam",
//               "tongtien": 93100000,
//               "status": 0,
//               "tenKH": "Nguyễn Hiền",
//               "phoneKH": "0960 012 345",
//               "emailKH": "nguyenhien@gmail.com",
//               "genderKH": "nam",
//               giohang: [
//                   {  
//                     id: 5,
//                     tenKH: "White Sapphire Band Ring",
//                     loai: "ring",
//                     gia: 76.8,
//                     profit: 20.9,
//                     description: `
//                     <p>Metal: 14K Gold</p>
//                     <p>Metal Color: Rose/Yellow/White</p>
//                     <p>Round Ruby 0.99</p>
//                     <p>Oval Emerald 1.02</p>
//                 `,
//                 images: [
//                     "assets/User/img/ring/1.png",
//                     "assets/User/img/ring/2.png",
//                     "assets/User/img/ring/3.png",
//                     "assets/User/img/ring/4.png"
//                 ],
//                     ngaydat: "21-09-2024", 
//                     completiontime: "29-09-2024",
//                     soLuong:5
//                    }
//                 ],
//           }
//       ]
//     },
//     { id: 27, tenKH: "Bertholdt Hoover", img:"./thenganhangimage/berthold.jfif", phoneKH: "0971 123 456", email: "Bertholdt@gmail.com", status: "None",
//       lichsuMuaHang:[
//           {
//               "id": 36,
//               "stk": "12345",
//               "bank": "AGB",
//               "ngaydat": "28/11/2024",
//               "ngayduyet": 0,
//               "diachiKH": "123 Đường Trần Phú, Quận 5, TP. HCM, Việt Nam",
//               "tongtien": 93100000,
//               "status": 0,
//               "tenKH": "Nguyễn Hiền",
//               "phoneKH": "0971 123 456",
//               "emailKH": "nguyenhien@gmail.com",
//               "genderKH": "nam",
//               giohang: [
//                   {  
//                     id: 4,
//                     tenKH: "White Gold Diamond Palm Tree Necklace",
//                     loai: "necklace",
//                     gia: 46,
//                     profit: 15.9,
//                     description: `
//                     <p>Metal: 14K Gold</p>
//                     <p>Metal Color: White</p>
//                     <p>Stones: Round Diamond 9.19</p>
//                     <p>Length: 7" Width:1/2"</p>
//                 `,
//                 images: [
//                     "assets/User/img/necklace/1.png",
//                     "assets/User/img/necklace/2.png",
//                     "assets/User/img/necklace/3.png",
//                     "assets/User/img/necklace/4.png"
//                 ],
//                     ngaydat: "30-09-2024", 
//                     completiontime: "04-10-2024",
//                     soLuong:13
//                   }
//                 ],
//           }
//       ]
//     },
//     { id: 28, tenKH: "chikara", img:"./thenganhangimage/chikara.jfif", phoneKH: "0982 234 567", email: "chikara@gmail.com", status: "None",
//       lichsuMuaHang:[
//           {
//               "id": 10,
//               "stk": "12345",
//               "bank": "AGB",
//               "ngaydat": "28/11/2024",
//               "ngayduyet": 0,
//               "diachiKH": "123 Đường Trần Phú, Quận 5, TP. HCM, Việt Nam",
//               "tongtien": 93100000,
//               "status": 0,
//               "tenKH": "Nguyễn Hiền",
//               "phoneKH": "0982 234 567",
//               "emailKH": "nguyenhien@gmail.com",
//               "genderKH": "nam",
//               giohang: [
//                   {  
//                     id: 5,
//                     tenKH: "White Sapphire Band Ring",
//                     loai: "ring",
//                     gia: 76.8,
//                     profit: 20.9,
//                     description: `
//                     <p>Metal: 14K Gold</p>
//                     <p>Metal Color: Rose/Yellow/White</p>
//                     <p>Round Ruby 0.99</p>
//                     <p>Oval Emerald 1.02</p>
//                 `,
//                 images: [
//                     "assets/User/img/ring/1.png",
//                     "assets/User/img/ring/2.png",
//                     "assets/User/img/ring/3.png",
//                     "assets/User/img/ring/4.png"
//                 ],
//                     ngaydat: "14-03-2024", 
//                     completiontime: "20-04-2024",
//                     soLuong:1
//                   },
//                   {
//                     id: 5,
//                     tenKH: "White Sapphire Band Ring",
//                     loai: "ring",
//                     gia: 76.8,
//                     profit: 20.9,
//                     description: `
//                     <p>Metal: 14K Gold</p>
//                     <p>Metal Color: Rose/Yellow/White</p>
//                     <p>Round Ruby 0.99</p>
//                     <p>Oval Emerald 1.02</p>
//                 `,
//                 images: [
//                     "assets/User/img/ring/1.png",
//                     "assets/User/img/ring/2.png",
//                     "assets/User/img/ring/3.png",
//                     "assets/User/img/ring/4.png"
//                 ],
//                     ngaydat: "22-02-2025", 
//                     completiontime: "04-03-2025",
//                     soLuong:1
//                   }
//                 ],
//           }
//       ]
//     },
//     { id: 29, tenKH: "Light Yagami", img:"./thenganhangimage/light.jfif", phoneKH: "0993 345 678", email: "Light@gmail.com", status: "None",
//       lichsuMuaHang:[
//           {
//               "id": 37,
//               "stk": "12345",
//               "bank": "AGB",
//               "ngaydat": "28/11/2024",
//               "ngayduyet": 0,
//               "diachiKH": "123 Đường Lê Lợi, Quận 1, TP. HCM",
//               "tongtien": 93100000,
//               "status": 0,
//               "tenKH": "Nguyễn Hiền",
//               "phoneKH": "0993 345 678",
//               "emailKH": "nguyenhien@gmail.com",
//               "genderKH": "nam",
//               giohang: [
//                   {  
//                     id: 3,
//                     "gia": 114000000,
//                     "hinh": "assets/User/img/watch/3-1.jpg",
//                     ten: "Vòng tay(Hàng tặng)",
//                     loai: "bracelet",
//                     profit: 12.9,
//                     description: `
//                     <p>Metal: 14K Gold</p>
//                     <p>Metal Color: White</p>
//                     <p>Emerald Cut Blue Sapphire 1.52</p>
//                     <p>Natural Diffused Ceylon Sapphire</p>
//                 `,
//                 images: [
//                     "assets/User/img/bracelet/1.png",
//                     "assets/User/img/bracelet/2.png",
//                     "assets/User/img/bracelet/3.png",
//                     "assets/User/img/bracelet/4.png"
//                 ],
//                     ngaydat: "08-12-2024", 
//                     completiontime: "19-12-2024",
//                     soLuong:2
//                    },
//                    {
//                     id: 2,
//                     tenKH: "Đồng hồ(Hàng tặng)",
//                     loai: "watch",
//                     gia: 34,
//                     profit: 10.5,
//                     description: `
//                     <p>Metal: 14K Gold</p>
//                     <p>Metal Color: Yellow/Rose/Green</p>
//                     <p>Stones: Round Yellow Sapphire 0.23</p>
//                     <p>Round Diamond 0.09</p>
//                 `,
//                 images: [
//                     "assets/User/img/watch/1.png",
//                     "assets/User/img/watch/2.png",
//                     "assets/User/img/watch/3.png",
//                     "assets/User/img/watch/4.png"
//                 ],
//                     ngaydat: "24-12-2024", 
//                     completiontime: "30-12-2024",
//                     soLuong:1
//                    }
//                 ],
//           }
//       ]
//   }
];
// let save=JSON.parse(localStorage.getItem('save')) || [];
localStorage.setItem('save',JSON.stringify(Customer));

// console.log(save[2].name);



let month=0;
let year=2024;

let totalpricecanam=0;
let totalprofitcanam=0;
let totallichsuMuaHangcanam=0;
let totalusercanam=0;

// let newarray=[]

function taohangthongke(newarray,countuser){

    const totalpricediv=document.getElementById("totalprice");
    const totallichsuMuaHangdiv=document.getElementById("totalproduct");
    const totalprofitdiv=document.getElementById("totalprofit");
    const totaluserdiv=document.getElementById("totaluser");

    const doanhthu=document.querySelector(".container3");
    doanhthu.innerHTML=`
    <div class="doanhthu">
        <div>name</div>
        <div>sales volumn</div>
        <div>sales</div>
    </div>`;
    // console.log(newarray);
    for(let i=0;i<newarray.length;i++){
      // console.log(newarray)
      for(let j=0;j<newarray[i].giohang.length;j++){
        const createrow=document.createElement("div");
        createrow.className="doanhthu";
        createrow.innerHTML+=
        `<div>
            ${newarray[i].giohang[j].ten}
        </div>
        <div>
            ${newarray[i].giohang[j].soLuong}
        </div>
        <div>
            ${newarray[i].giohang[j].profit} $
        </div>
        `
        doanhthu.innerHTML+=createrow.outerHTML;
      }
    }
    let arraycopy=[]
    let thelowestprofit=Infinity;
    let thehighestprofit=-Infinity;
    let thelichsuMuaHangwithhighestprofit=null;
    let thelichsuMuaHangwithlowestprofit=null;
    for(let i=0;i<newarray.length;i++){
      for(let j=0;j<newarray[i].giohang.length;j++){
        // console.log(newarray[i].giohang);
        if(newarray[i].totalprofit>thehighestprofit){
          arraycopy=JSON.parse(JSON.stringify(newarray[i]));
          thehighestprofit=arraycopy.totalprofit;
          arraycopy=JSON.parse(JSON.stringify(newarray[i]));
          thelichsuMuaHangwithhighestprofit=arraycopy.totallichsuMuaHang;
      }
      if(newarray[i].totalprofit<thelowestprofit){
          arraycopy=JSON.parse(JSON.stringify(newarray[i]));
          thelowestprofit=arraycopy.totalprofit;
          arraycopy=JSON.parse(JSON.stringify(newarray[i]));
          thelichsuMuaHangwithlowestprofit=arraycopy.totallichsuMuaHang;
      }
      }
    }
    if(thelichsuMuaHangwithhighestprofit && thelichsuMuaHangwithlowestprofit){
        let lichsuMuaHangDiv=document.querySelector(".thongkesanpham");
        lichsuMuaHangDiv.style.display="block";
        lichsuMuaHangDiv.innerHTML=
                `<div class="producthighestprofit">  
                <div class="header">the product with the highest profit</div>                 
                    <div>
                        <div>id</div>
                        <div>catergory</div>
                        <div>product name</div>
                        <div>image</div>
                        <div>total profit</div>
                        <div>amount</div>
                    </div>
                    <div>
                        <div>${thelichsuMuaHangwithlowestprofit.id}</div>
                        <div>${thelichsuMuaHangwithlowestprofit.loai}</div>
                        <div>${thelichsuMuaHangwithlowestprofit.ten}</div>
                        <div ><image class="imagethongke"src="${thelichsuMuaHangwithlowestprofit.hinh}"></div>
                        <div>${thelichsuMuaHangwithlowestprofit.profit}</div>
                        <div>${thelichsuMuaHangwithlowestprofit.soLuong}</div>
                    </div>
                </div>
                <div class="productwithlowestprofit">  
                <div class="header">the product with the lowest profit</div>                
                    <div>
                        <div>id</div>
                        <div>catergory</div>
                        <div>product name</div>
                        <div>image</div>
                        <div>total profit</div>
                        <div>amount</div>
                    </div>
                    <div>
                        <div>${thelichsuMuaHangwithhighestprofit.id}</div>
                        <div>${thelichsuMuaHangwithhighestprofit.loai}</div>
                        <div>${thelichsuMuaHangwithhighestprofit.ten}</div>
                        <div ><image class="imagethongke" src="${thelichsuMuaHangwithhighestprofit.hinh}"></div>
                        <div>${thelichsuMuaHangwithhighestprofit.profit}</div>
                        <div>${thelichsuMuaHangwithhighestprofit.soLuong}</div>
                    </div>
                </div>`
    }
    else{
        let lichsuMuaHangDiv=document.querySelector(".thongkesanpham");
        lichsuMuaHangDiv.style.display="block";
        lichsuMuaHangDiv.innerHTML=
                `<div class="productwithhighestprofit">   
                <div class="header">the product with the highest profit</div>             
                    <div>
                        <div>id</div>
                        <div>catergory</div>
                        <div>product name</div>
                        <div>image</div>
                        <div>total profit</div>
                        <div>amount</div>
                    </div>
                    <div>
                        <div>${null}</div>
                        <div>${null}</div>
                        <div>${null}</div>
                        <div>${null}</div>
                        <div>${null}</div>
                        <div>${null}</div>
                    </div>
                </div>
                <div class="productwithlowestprofit">   
                <div class="header">the product with the lowest profit</div>             
                    <div>
                        <div>id</div>
                        <div>catergory</div>
                        <div>product name</div>
                        <div>image</div>
                        <div>total profit</div>
                        <div>amount</div>
                    </div>
                    <div>
                        <div>${null}</div>
                        <div>${null}</div>
                        <div>${null}</div>
                        <div>${null}</div>
                        <div>${null}</div>
                        <div>${null}</div>
                    </div>
                </div>`
    }
    let customerarray=arraycustomer();
    // console.log(customerarray);
    let highestprofit=-Infinity;
    let lowestprofit=Infinity;
    let customerwithhighestprofit=null;
    let customerwithlowestprofit=null;

    for(let i=0;i<customerarray.length;i++){
        let sum=0;
        for(let j=0;j<customerarray[i].lichsuMuaHang.length;j++){
            for(let k=0;k<customerarray[i].lichsuMuaHang[j].giohang.length;k++)
            sum+=customerarray[i].lichsuMuaHang[j].giohang[k].profit*customerarray[i].lichsuMuaHang[j].giohang[k].soLuong;
        }
        if(highestprofit<sum ){
            highestprofit=sum;
            customerwithhighestprofit=customerarray[i];
            // console.log(customerwithhighestprofit);
        }
        if(lowestprofit>sum){
            lowestprofit=sum;
            customerwithlowestprofit=customerarray[i];
            // console.log(customerwithlowestprofit);
        }
    }
    // console.log(customerwithhighestprofit);
    // console.log(customerwithlowestprofit);
    if(customerwithhighestprofit && customerwithlowestprofit){
        let customerDiv=document.querySelector(".thongkecustom");
        customerDiv.style.display="block";
        customerDiv.innerHTML=`  
                <div class="cuswithlowestprofit">  
                <div class="header">the customer with the lowest profit</div>            
                    <div>
                        <div>id</div>
                        <div>client name</div>
                        <div>image</div>
                        <div>amount spent</div>
                        <div>telephone</div>
                        <div>email</div>
                    </div>
                    <div >
                        <div>${customerwithlowestprofit.id}</div>
                        <div>${customerwithlowestprofit.tenKH}</div>
                        <div ><image class="imagethongke" src="${customerwithlowestprofit.img}"></div>
                        <div>${lowestprofit}</div>
                        <div>${customerwithlowestprofit.phoneKH}</div>
                        <div>${customerwithlowestprofit.email}</div>
                    </div>
                </div>
                <div class="cuswithhighestprofit">  
                <div class="header">the customer with the highest profit</div>             
                    <div>
                        <div>id</div>
                        <div>client name</div>
                        <div>image</div>
                        <div>amount spent</div>
                        <div>telephone</div>
                        <div>email</div>
                    </div>
                    <div>
                        <div>${customerwithhighestprofit.id}</div>
                        <div>${customerwithhighestprofit.tenKH}</div>
                        <div ><image class="imagethongke"src="${customerwithhighestprofit.img}"></div>
                        <div>${highestprofit}</div>
                        <div>${customerwithhighestprofit.phoneKH}</div>
                        <div>${customerwithhighestprofit.email}</div>
                    </div>
                </div>`
    }
    else{
        let customerDiv=document.querySelector(".thongkecustom");
        customerDiv.style.display="block";
        customerDiv.innerHTML=`  
                <div class="cuswithlowestprofit"> 
                <div class="header">the customer with the lowest profit</div>             
                    <div>
                        <div>id</div>
                        <div>client name</div>
                        <div>image</div>
                        <div>amount spent</div>
                        <div>telephone</div>
                        <div>email</div>
                    </div>
                    <div >
                        <div>${null}</div>
                        <div>${null}</div>
                        <div>${null}</div>
                        <div>${null}</div>
                        <div>${null}</div>
                        <div>${null}</div>
                    </div>
                </div>
                <div class="cuswithhighestprofit">   
                <div class="header">the customer with the highest profit</div>

                    <div>
                        <div>id</div>
                        <div>client name</div>
                        <div>image</div>
                        <div>amount spent</div>
                        <div>telephone</div>
                        <div>email</div>
                    </div>
                    <div>
                        <div>${null}</div>
                        <div>${null}</div>
                        <div>${null}</div>
                        <div>${null}</div>
                        <div>${null}</div>
                        <div>${null}</div>
                    </div>
                </div>`
    }

totalpricediv.innerText=newarray.totalprice+"$";
totallichsuMuaHangdiv.innerText=newarray.totallichsuMuaHang;
totalprofitdiv.innerText=newarray.totalprofit+"$";
totaluserdiv.innerText=countuser;
}
function arraycustomer(){
        return Customer.map(customer => {
        const filteredlichsuMuaHangs = customer.lichsuMuaHang.filter(lichsuMuaHang => 
            checktimedate(lichsuMuaHang.ngaydat)
        );
        if (filteredlichsuMuaHangs.length > 0) {
            return { 
                ...customer, // Sao chép thông tin khách hàng
                lichsuMuaHang: filteredlichsuMuaHangs // Gán sản phẩm đã lọc
            };
        }
    }).filter(customer => customer); // Loại bỏ khách hàng không có sản phẩm thỏa mãn
    
}
let arraycanam=[];
let countusercanam=0;

function aggregateCartItems(customers) {
  const aggregatedItems = {};

  // Duyệt qua từng khách hàng
  customers.forEach(customer => {
      customer.lichsuMuaHang.forEach(order => {
          order.giohang.forEach(item => {
              if (aggregatedItems[item.id]) {
                  aggregatedItems[item.id].soLuong += item.soLuong;
                  aggregatedItems[item.id].profit=item.profit*item.soLuong
                  aggregatedItems[item.id].profit=item.gia*item.soLuong
              } else {
                  // Nếu chưa tồn tại, tạo mới phần tử trong aggregatedItems
                  aggregatedItems[item.id] = { ...item };
              }
          });
      });
  });

  // Chuyển đổi đối tượng aggregatedItems thành mảng
  return Object.values(aggregatedItems);
}

function canam(){
    let totalproduct=0;
    let totalprofit=0;
    let totalprice=0;
    let array=[];
    console
    countusercanam=0;
    let arraycopy=JSON.parse(JSON.stringify(Customer));
    array=aggregateCartItems(arraycopy);
    console.log(array);
    array.forEach(product=>{
      totalproduct+=product.soLuong;
      totalprice+=product.gia*product.soLuong;
      totalprofit+=product.profit*product.soLuong;
    })
    array.totalprice=totalprice;
    array.totallichsuMuaHang=totalproduct;
    array.totalprofit=totalprofit;
    console.log(array);
    if(array){
        taobangthongke(array);
    }
}
function taobangthongke(arraycanam){
    if(thang(12,arraycanam)){
        const thang12=thang(12,arraycanam);
        if(thang12){
            document.getElementById("t12").style.height=`${thang12.phantramprofit*100}%`; 
            document.getElementById("tt12").style.height=`${thang12.phantramlichsuMuaHang*100}%`;   
        }
        const thang11=thang(11,arraycanam);
        if(thang11){
            document.getElementById("t11").style.height=`${thang11.phantramprofit*100}%`; 
            document.getElementById("tt11").style.height=`${thang11.phantramlichsuMuaHang*100}%`;    
        }
        const thang10=thang(10,arraycanam);
        if(thang10){
            document.getElementById("t10").style.height=`${thang10.phantramprofit*100}%`;   
            document.getElementById("tt10").style.height=`${thang10.phantramlichsuMuaHang*100}%`;  
        }
        const thang9=thang(9,arraycanam);
        if(thang9){
            document.getElementById("t9").style.height=`${thang9.phantramprofit*100}%`;   
            document.getElementById("tt9").style.height=`${thang9.phantramlichsuMuaHang*100}%`;  
        }
        const thang8=thang(8,arraycanam);
        if(thang8){
            document.getElementById("t8").style.height=`${thang8.phantramprofit*100}%`;   
            document.getElementById("tt8").style.height=`${thang8.phantramlichsuMuaHang*100}%`;  
        }
        const thang7=thang(7,arraycanam);
        if(thang7){
            document.getElementById("t7").style.height=`${thang7.phantramprofit*100}%`;  
            document.getElementById("tt7").style.height=`${thang7.phantramlichsuMuaHang*100}%`;   
        }
        const thang6=thang(6,arraycanam);
        if(thang6){
            document.getElementById("t6").style.height=`${thang6.phantramprofit*100}%`;   
            document.getElementById("tt6").style.height=`${thang6.phantramlichsuMuaHang*100}%`;  
        }
        const thang5=thang(5,arraycanam);
        if(thang5){
            document.getElementById("t5").style.height=`${thang5.phantramprofit*100}%`;   
            document.getElementById("tt5").style.height=`${thang5.phantramlichsuMuaHang*100}%`;  
        }
        const thang4=thang(4,arraycanam);
        if(thang4){
            document.getElementById("t4").style.height=`${thang4.phantramprofit*100}%`;   
            document.getElementById("tt4").style.height=`${thang4.phantramlichsuMuaHang*100}%`;  
        }
        const thang3=thang(3,arraycanam);
        if(thang3){
            document.getElementById("t3").style.height=`${thang3.phantramprofit*100}%`;   
            document.getElementById("tt3").style.height=`${thang3.phantramlichsuMuaHang*100}%`;  
        }
        const thang2=thang(2,arraycanam);
        if(thang2){
            document.getElementById("t2").style.height=`${thang2.phantramprofit*100}%`;   
            document.getElementById("tt2").style.height=`${thang2.phantramlichsuMuaHang*100}%`;  
        }
        const thang1=thang(1,arraycanam);
        if(thang1){
            document.getElementById("t1").style.height=`${thang1.phantramprofit*100}%`;   
            document.getElementById("tt1").style.height=`${thang1.phantramlichsuMuaHang*100}%`;  
        }
        
    
    }
    else{
        console.log("loi");
    }
}
function thang(thang,arraycanam){
    let array=[];
    let arraycopy=JSON.parse(JSON.stringify(Customer));
    for(let i=0;i<arraycopy.length;i++){
        arraycopy=JSON.parse(JSON.stringify(Customer));
        for(let j=0;j<arraycopy[i].lichsuMuaHang.length;j++){
            let receipt;
            arraycopy=JSON.parse(JSON.stringify(Customer));
            if(arraycopy[i].lichsuMuaHang[j].ngaydat){
                receipt=arraycopy[i].lichsuMuaHang[j].ngaydat.split("/");
                if((year==receipt[2]) && receipt[1]==thang){
                    array.push(arraycopy[i].lichsuMuaHang[j]);

                }
            }

        }
    }
    if(arraycanam){
        return taothongke(thang,array,arraycanam);
    }

}
function taothongke(thang,array,arraycanam){
  console.log(arraycanam);
    let totalprice1=0;
    let totalprofit1=0;
    let totallichsuMuaHang1=0;
    let array1=[];
    // console.log(array);
    for(let i=0;i<array.length;i++){
      for(let k=0;k<array[i].giohang.length;k++){
        let check=0;
        let amount=array[i].giohang[k].soLuong;
        let price=(array[i].giohang[k].gia)*(array[i].giohang[k].soLuong);
        let profit=(array[i].giohang[k].profit)*(array[i].giohang[k].soLuong);

        for(let j=i-1;j>=0;j--){
          for(let h=0;h<array[j].giohang.length;h++){
            if(array[i].giohang[k].id == array[j].giohang[h].id){
              check=1;
          }
          }
        }
        if(check==0){
          for(let j=i+1;j<array.length;j++){
            for(let h=0;h<array[j].giohang.length;h++){
              if(array[i].giohang[k].id==array[j].giohang[h].id){
                amount+=array[j].giohang[h].soLuong;
                price+=(array[j].giohang[h].gia)*(array[j].giohang[h].soLuong);
                profit+=(array[j].giohang[h].profit)*(array[j].giohang[h].soLuong);
            }
            }
          }
          let arraycopy=JSON.parse(JSON.stringify(array));
          array1.push(arraycopy[i].giohang[k]);
          array1[array1.length-1].soLuong=amount;
          array1[array1.length-1].gia=price;
          array1[array1.length-1].profit=profit;

          totalprofit1+=profit;
          totallichsuMuaHang1+=amount;
          totalprice1+=price;
        }
      }

    }
    array1.totalprofit=totalprofit1;
    array1.totallichsuMuaHang=totallichsuMuaHang1;
    console.log(array1);
    console.log("thánggggggggggggggggggggggggggggggggggggggggggg");
    console.log(thang);
    console.log(array1);
    console.log(arraycanam.totalprofit);
    console.log(arraycanam.totallichsuMuaHang);
    console.log(array1.totallichsuMuaHang);
    console.log(array1.totalprofit);
    let a=
        {
            phantramprofit:`${totalprofit1/(arraycanam.totalprofit)}`,
            phantramlichsuMuaHang:`${totallichsuMuaHang1/(arraycanam.totallichsuMuaHang)}`
        };
        console.log(a);
    return a;

}
function monthyear(){

    let countuser=0;
    let array=[];
    let arraycopy=JSON.parse(JSON.stringify(Customer));

    for(let i=0;i<arraycopy.length;i++){
        let sum=0;
        let a=0;
        arraycopy=JSON.parse(JSON.stringify(Customer));
        let receipt;
        for(let j=0;j<arraycopy[i].lichsuMuaHang.length;j++){
            if(arraycopy[i].lichsuMuaHang[j].ngaydat){
                arraycopy=JSON.parse(JSON.stringify(Customer));
                receipt=checktimedate(arraycopy[i].lichsuMuaHang[j].ngaydat);
                if(receipt){
                    arraycopy=JSON.parse(JSON.stringify(Customer));
                    array.push(arraycopy[i].lichsuMuaHang[j]);
                    if(a==0){
                        countuser++;
                    }
                    a=1;
                }
                // console.log(receipt);
            }
        }
    }

            // console.log(customerDiv);

    // console.log(array);
    takenewarray(array,countuser);
}
function checktimedate(receiptime){
    let arraycopy=JSON.parse(JSON.stringify(receiptime));
    receipt=arraycopy.split("/");
    // console.log(receipt[0].replace(/^0+/, '')+"  " +receipt[1].replace(/^0+/, '')+" "+receipt[2].replace(/^0+/, ''));

    if(receipt[2].replace(/^0+/, '')<year){//nhỏ hơn năm đầu
        // console.log("nhỏ hơn năm đầu");
         return false;
    } 
    if(receipt[2].replace(/^0+/, '')>yearsecond){ //lớn hơn năm thứ 2
        // console.log("lớn hơn năm thứ 2");
        return false;
    }
    if(receipt[2].replace(/^0+/, '')<yearsecond && receipt[2].replace(/^0+/, '')>year){//trong khoảng năm đầu và năm thứ 2
        // console.log("trong khoảng năm đầu và năm thứ 2");
        return true;
    }
    if(receipt[1].replace(/^0+/, '')<month && receipt[2].replace(/^0+/, '')==year){// bằng năm đầu ,nhỏ hơn tháng
        // console.log("bằng năm đầu ,nhỏ hơn tháng");
        return false;
    }
    if(receipt[1].replace(/^0+/, '')>monthsecond && receipt[2].replace(/^0+/, '')==yearsecond){//bằng năm 2 lớn hơn tháng
        // console.log("bằng năm 2 lớn hơn tháng");
        return false;
    }
    if(receipt[0].replace(/^0+/, '')<date && receipt[1].replace(/^0+/, '')==month && receipt[2].replace(/^0+/, '')==year){//bằng năm tháng đầu ,nhỏ hơn ngày
        // console.log("bằng năm tháng đầu ,nhỏ hơn ngày");
        return false;
    }
    if(receipt[0].replace(/^0+/, '')>datesecond && receipt[1].replace(/^0+/, '')==monthsecond &&receipt[2].replace(/^0+/, '')==yearsecond){ //bằng năm tháng thứ 2 ,lơn hơn ngày
        // console.log("bằng năm tháng thứ 2 ,lơn hơn ngày");
        return false;
    }
    // console.log("trường hợp còn lại");

    return true; //trường hợp còn lại
}
function takenewarray(array,countuser){
    let newarray=[];
    let totallichsuMuaHang=0;
    let totalprofit=0;
    let totalprice=0;
    for(let i=0;i<array.length;i++){
        for(let h=0;h<array[i].giohang.length;h++){
          let check=0;
          let amount=array[i].giohang[h].soLuong;
          let price=array[i].giohang[h].gia*array[i].giohang[h].soLuong;
          let profit=array[i].giohang[h].profit*array[i].giohang[h].soLuong;
          for(let j=i-1;j>=0;j--){
            for(let k=0;k<array[j].giohang.length;k++)
              if(array[i].giohang[h].id == array[j].giohang[k].id){
                  check=1;
              }
          }
          for(let j=i+1;j<array.length;j++){
            for(let k=0;k<array[j].giohang.length;k++){
              if(array[i].giohang[h].id == array[j].giohang[k].id && check==0){
                amount+=array[j].giohang[k].soLuong;
                price+=(array[j].giohang[k].gia)*(array[j].giohang[k].soLuong);
                profit+=(array[j].giohang[k].profit)*(array[j].giohang[k].soLuong);
            }
            }
        }
          if(check==0){
              // console.log("hihi");
              let arraycopy=JSON.parse(JSON.stringify(array));
              newarray.push(arraycopy[i]);
              // console.log(newarray.length);
              newarray[newarray.length-1].giohang[newarray[newarray.length-1].giohang.length-1].soLuong=amount;
              newarray[newarray.length-1].giohang[newarray[newarray.length-1].giohang.length-1].gia=price;
              newarray[newarray.length-1].giohang[newarray[newarray.length-1].giohang.length-1].profit=profit;
  
              totallichsuMuaHang+=amount;
              totalprice+=price;
              totalprofit+=profit;
          } 
        }
        // newarray[newarray.length-1]=
    }
    newarray.totalprice=totalprice;
    newarray.totallichsuMuaHang=totallichsuMuaHang;
    newarray.totalprofit=totalprofit;
    console.log(newarray);
    taohangthongke(newarray,countuser);
}
////////////////////////////////////////////gettimefirst/////////////////////////////////////////////////////////
let date=1;
let datesecond;
let yearsecond;
let monthsecond;
function gettimefirst(){
    const time=document.getElementById("timefirst").value;
    if(time){
        // console.log(time);
        date=parseInt(time.split("-")[2].replace(/^0+/, ''),10);
        month=parseInt(time.split("-")[1].replace(/^0+/, ''),10);
        year=parseInt(time.split("-")[0].replace(/^0+/, ''),10);
    }
}
function gettimesecond(){
    const time=document.getElementById("timesecond").value;
    // console.log(time);
    if(time){
        datesecond=parseInt(time.split("-")[2].replace(/^0+/, ''),10);
        monthsecond=parseInt(time.split("-")[1].replace(/^0+/, ''),10);
        yearsecond=parseInt(time.split("-")[0].replace(/^0+/, ''),10);
    }
    // console.log("date second "+datesecond);
    // console.log("month second "+monthsecond);
    // console.log("year second "+yearsecond);
    if(document.getElementById("timefirst").value && time){
        monthyear();
    }
}
canam();
monthyear();
// taohangthongke(arraycanam,countusercanam);