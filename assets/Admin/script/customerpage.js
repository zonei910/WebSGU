let currentpage=1;
const container4Node=document.getElementById("container4");
customer = [
    { 
        id: 1,
         name: "Mikasa Chan",
         phone: "0901 234 567", 
         email: "mikasachan@gmail.com", 
         status:0,
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
                "name": "mikasachan",
                "phone": "0901 234 567",
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
                "name": "mikasachan",
                "phone": "0901 234 567",
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
        status:1,
        name: "Uzumaki Naruto", 
        phone: "0912 345 678", 
        email: "naruto@gmail.com", 
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
            "name": "Nguyễn Hiền",
            "phone": "0912 345 678",
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
            "name": "Nguyễn Hiền",
            "phone": "0912 345 678",
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
    { id: 3,status:1, name: "Sasuke Uchiha", phone: "0978 901 234", email: "Sasuke@gmail.com",
        status:0,
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
                "name": "Nguyễn Hiền",
                "phone": "0978 901 234",
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
    { id: 4, name: "Sakura Haruno", phone: "0923 456 789", email: "Sakura@gmail.com", 
        status:0,
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
                "name": "Nguyễn Hiền",
                "phone": "0923 456 789",
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
    { id: 5, name: "Hinata Hyuga", phone: "0934 567 890", email: "Hinata@gmail.com",
        status:0,
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
                "name": "Nguyễn Hiền",
                "phone": "0934 567 890",
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
    { id: 6, name: "Itachi Uchiha", phone: "0934 567 890", email: "Itachi@gmail.com",
        status:0,
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
                "name": "Nguyễn Hiền",
                "phone": "0934 567 890",
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
    { id: 7, name: "Sasori", phone: "0956 789 012", email: "Sasori@gmail.com",
        status:0,
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
                "name": "Nguyễn Hiền",
                "phone": "0956 789 012",
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
      { id: 8, name: "Kakashi Hatake", phone: "0967 890 123", email: "Kakashi@gmail.com",
        status:1,
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
                "name": "Nguyễn Hiền",
                "phone": "0967 890 123",
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
      { id: 9, name: "Eren Yeager", phone: "0901 234 567", email: "Eren@gmail.com",
        status:0,
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
                "name": "Nguyễn Hiền",
                "phone": "0901 234 567",
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
      { id: 10, name: "Mikasa Ackerman", phone: "0903 456 789", email: "Ackerman@gmail.com",
        status:0,
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
                "name": "Nguyễn Hiền",
                "phone": "0903 456 789",
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
      { id: 11, name: "Armin Arlert", phone: "0914 567 890", email: "Armin@gmail.com", 
        status:0,
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
                "name": "Nguyễn Hiền",
                "phone": "0914 567 890",
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
      { id: 12, name: "Levi Ackerman", phone: "0925 678 901", email: "Levi@gmail.com",
        status:0,
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
                "name": "Nguyễn Hiền",
                "phone": "0925 678 901",
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
      { id: 13, name: "Historia Reiss", phone: "0936 789 012", email: "Historia@gmail.com",
        status:0,
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
                "name": "Nguyễn Hiền",
                "phone": "0936 789 012",
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
      { id: 14, name: "Erwin Smith", phone: "0947 890 123", email: "Erwin@gmail.com"
        , status: 0,
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
                "name": "Nguyễn Hiền",
                "phone": "0947 890 123",
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
      { id: 15, name: "Jean Kirstein", phone: "0958 901 234", email: "Jean@gmail.com"
        , status: 0,
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
                "name": "Nguyễn Hiền",
                "phone": "0958 901 234",
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
      { id: 16, name: "Sasha Blouse", phone: "0969 012 345", email: "Sasha@gmail.com"
        , status: 0,
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
                "name": "Nguyễn Hiền",
                "phone": "0969 012 345",
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
      { id: 17, name: "Connie Springer", phone: "0970 123 456", email: "Connie@gmail.com", 
        status: 0,
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
                "name": "Nguyễn Hiền",
                "phone": "0970 123 456",
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
      { id: 18, name: "Hange Zoë", phone: "0981 234 567", email: "Hange@gmail.com"
        , status: 0,
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
                "name": "Nguyễn Hiền",
                "phone": "0981 234 567",
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
      { id: 19, name: "Reiner Braun", phone: "0992 345 678", email: "Reiner@gmail.com"
        , status: 0,
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
                "name": "Nguyễn Hiền",
                "phone": "0992 345 678",
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
        ]}];

let  Date=null,Month=null,Year=null,Datesecond=null,Monthsecond=null,Yearsecond=null;
localStorage.setItem('newsave', JSON.stringify(customer));
customer = JSON.parse(localStorage.getItem('newsave'));
function timefirst(){
    const time=document.getElementById("taketimefirst").value;
    if(time){
        Date=parseInt(time.split("-")[2].replace(/^0+/, ''),10);
        Month=parseInt(time.split("-")[1].replace(/^0+/, ''),10);
        Year=parseInt(time.split("-")[0].replace(/^0+/, ''),10);
    }
}
function timesecond(id){
    console.log(id);
    const time=document.getElementById("taketimesecond").value;
    if(time){
        Datesecond=parseInt(time.split("-")[2].replace(/^0+/, ''),10);
        Monthsecond=parseInt(time.split("-")[1].replace(/^0+/, ''),10);
        Yearsecond=parseInt(time.split("-")[0].replace(/^0+/, ''),10);
    }
    if(time && document.getElementById("taketimefirst").value){
        console.log(Monthsecond);
        console.log(Yearsecond);
        console.log(Month);
        if(Yearsecond<Year){
            alert("Bạn nhập sai năm");
        }
        if(Yearsecond==Year && Monthsecond<Month){
            alert("Bạn nhập sai tháng")
        }
        if(Yearsecond==Year && Monthsecond==Month && Datesecond<Date){
            alert("Bạn nhập sai ngày");
        }
        printinforodertimed(id);
    }
}
function aggregateCartItems(customers) {
    const aggregatedItems = {};
    customers.forEach(customer => {
        customer.lichsuMuaHang.forEach(order => {
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
function printinforodertimed(id){
    console.log(id);
        let Customer=arraycustomer(customer);
        document.getElementById("printorder").style.display="flex";
        const section=document.querySelector("#printorder >div");
        section.innerHTML=`          
                <i class="fa-solid fa-x" onclick="closedproduct(id)"></i>
                <div>
                    <div>id</div>
                    <div>name</div>
                    <div>catergory</div>
                    <div>order receiptime</div>
                    <div><input type="Date" id="taketimefirst" onclick="timefirst()"> <input type="Date" id="taketimesecond" onclick="timesecond(${id})"> </div>
                </div>`
        Customer.forEach(cus=>{
            console.log(Customer);
            if(cus.id==id){
                console.log(cus);
                console.log(id);
                cus.lichsuMuaHang.forEach(lichsu=>{
                    lichsu.giohang.forEach(product=>{
                        const creatediv=document.createElement("div");
                        creatediv.innerHTML=`
                        <div>${product.id}</div>
                        <div>${product.ten}</div>
                        <div>${product.loai}</div>
                        <div>${lichsu.ngaydat}</div>
                        `
                        section.innerHTML+=creatediv.outerHTML;
                    })
                })
            }
        })
}
function checktimeDate(receiptime){
    let arraycopy=JSON.parse(JSON.stringify(receiptime));
    receipt=arraycopy.split("/");

    if(receipt[2].replace(/^0+/, '')<Year){
         return false;
    } 
    if(receipt[2].replace(/^0+/, '')>Yearsecond){
        return false;
    }
    if(receipt[2].replace(/^0+/, '')<Yearsecond && receipt[2].replace(/^0+/, '')>Year){
        return true;
    }
    if(receipt[1].replace(/^0+/, '')<Month && receipt[2].replace(/^0+/, '')==Year){
        return false;
    }
    if(receipt[1].replace(/^0+/, '')>Monthsecond && receipt[2].replace(/^0+/, '')==Yearsecond){
        return false;
    }
    if(receipt[0].replace(/^0+/, '')<Date && receipt[1].replace(/^0+/, '')==Month && receipt[2].replace(/^0+/, '')==Year){
        return false;
    }
    if(receipt[0].replace(/^0+/, '')>Datesecond && receipt[1].replace(/^0+/, '')==Monthsecond &&receipt[2].replace(/^0+/, '')==Yearsecond){
        return false;
    }
    return true; 
}
function arraycustomer(Customer){
    return Customer.map(customer => {
        const filteredlichsuMuaHangs = customer.lichsuMuaHang.filter(lichsuMuaHang => {
            return checktimeDate(lichsuMuaHang.ngaydat);
        }
        );
        if (filteredlichsuMuaHangs.length > 0) {
            return { 
                ...customer, 
                lichsuMuaHang: filteredlichsuMuaHangs
            };
        }
    }).filter(customer => customer); 
}
function closedproduct(){
    document.getElementById("printorder").style.display="none";
}
function closededitclient(){
    document.getElementById("sectioneditclient").style.display="none";
}
const submit=document.getElementById('');
function editclient(){
    document.getElementById("sectioneditclient").style.display="flex";
    document.getElementById("editkh").addEventListener("click",function(event){
        if(event.target.id=="editkh"){
            let hoten=document.getElementById("editnameofkh").value.trim();
            let phone=document.getElementById("editphoneofkh").value.trim();
            let email=document.getElementById("editemailofkh").value.trim();
            if(!hoten){
                alert("Name is required");
                document.getElementById("editnameofkh").focus();
                return;
            }
            if(!phone){
                alert("phone is required");
                document.getElementById("editphoneofkh").focus();
                return;
            }
            if(!email){
                alert("email is required");
                document.getElementById("editemailofkh").focus();
                return;
            }
            customer.name=hoten;
            customer.phone=phone;
            customer.email=email;
            document.getElementById("sectioneditclient").style="none";
        }
    })

}
function printinfororder(id) {
    console.log(id);
    document.getElementById("printorder").style.display="flex";
    const section=document.querySelector("#printorder >div");
    section.innerHTML=`          
            <i class="fa-solid fa-x" onclick="closedproduct(id)"></i>
            <div>
                <div>id</div>
                <div>name</div>
                <div>catergory</div>
                <div>order receiptime</div>
                <div><input type="Date" id="taketimefirst" onclick="timefirst()"> <input type="Date" id="taketimesecond" onclick="timesecond(${id})"> </div>
            </div>`
    customer.forEach(cus=>{
        if(cus.id==id){
            cus.lichsuMuaHang.forEach(lichsu=>{
                lichsu.giohang.forEach(product=>{
                    const creatediv=document.createElement("div");
                    creatediv.innerHTML=`
                    <div>${product.id}</div>
                    <div>${product.ten}</div>
                    <div>${product.loai}</div>
                    <div>${lichsu.ngaydat}</div>
                    `
                    section.innerHTML+=creatediv.outerHTML;
                })
            })
        }
    })
}
  function printinfor(page){
    const start=(page)*7;
    const end=start+7;
    const newcustomer=customer.slice(start,end);
    container4Node.innerHTML="";
    container4Node.innerHTML=`<div class="clientouter" id="clientouter">
        <div>Id</div>
        <div>Client name</div>
        <div>Telephone</div>
        <div>Email</div>
    </div>`;
    newcustomer.forEach(customer=>{
        const clientouterr= `<div class="clientouter" id="clientouter-${customer.id}">
            <div >${customer.id}</div>
            <div>${customer.name}</div>
            <div>${customer.phone}</div>
            <div>${customer.email}</div>
            <div><i class="fa-solid fa-key" id="khoa-${customer.id}" onclick="hienkhoa(${customer.id})"></i> <i class="fa-regular fa-pen-to-square edit"  onclick="editclient(${customer.id})"></i> <i id="show" class="fa-solid fa-angle-down angle" onclick="printinfororder(${customer.id})"></i></div>
        </div>`;
        container4Node.innerHTML+=clientouterr;
        const a="khoa-"+customer.id;
        if(customer.status==1){
            document.getElementById(a).style.color="#bcbcbc";
        }
        if(customer.status==0){
            document.getElementById(a).style.color="#62c7ff";
        }
    })
}


function closedkhoa(){
    document.getElementById("khoaclient").style.display="none";
}
function bokhoa(id){
    console.log(customer);
    for(let i=0;i<customer.length;i++){
        if(customer[i].id==id){
            customer[i].status=0;
            const a="khoa-"+id;
            document.getElementById(a).style.color="#62c7ff";
            alert("Bạn đã bỏ khóa người dùng");
            return
        }
    }
}
function search() {
    let valuesearchinput = document.getElementById("search").value.toUpperCase();

    let namesearch = customer.filter(customer => {
        return customer.name.toUpperCase().includes(valuesearchinput);
    });

    let emailsearch = customer.filter(customer => {
        return customer.email.toUpperCase().includes(valuesearchinput);
    });

    let phonesearch = customer.filter(customer => {
        return customer.phone.includes(valuesearchinput);
    });


    let newarray = [];
    let uniqueRanks = new Set();

    namesearch.forEach(customer => {
        uniqueRanks.add(customer.id);
        newarray.push(customer);
    });

    emailsearch.forEach(customer => {
        if (!uniqueRanks.has(customer.id)) {
            uniqueRanks.add(customer.id);
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
        <div>Id</div>
        <div>Client name</div>
        <div>Telephone</div>
        <div>Email</div>
    </div>`;
    newarray.forEach(customer=>{
        const clientouterr= `<div class="clientouter" id="clientouter-${customer.id}">
            <div class="rank" id="rank${customer.id}">${customer.id}</div>
            <div>${customer.name}</div>
            <div>${customer.phone}</div>
            <div>${customer.email}</div>
            <div><i class="fa-solid fa-key" id="khoa-${customer.id}" onclick="hienkhoa(${customer.id})"></i> <i class="fa-regular fa-pen-to-square edit"  onclick="editclient(${customer.id})"></i> <i id="show" class="fa-solid fa-angle-down angle" onclick="printinfororder(${customer.id})"></i></div>
        </div>`;
        container4Node.innerHTML+=clientouterr;
        const a="khoa-"+customer.id;
        if(customer.status==1){
            document.getElementById(a).style.color="#bcbcbc";
        }
        if(customer.status==0){
            document.getElementById(a).style.color="#62c7ff";
        }
    })
}
function hienkhoa(id) {
    console.log(id);
    document.getElementById("khoaclient").style.display = "flex";
    let hienkh = document.querySelector(".printkh");
    hienkh.innerHTML=`                
                <div >
                    <div>id</div>
                    <div>name</div>
                    <div>phone</div>
                    <div>email</div>
                </div>`
    document.getElementById("contentkhoa").innerHTML = ''; 

    for (let i = 0; i < customer.length; i++) { 
        if (customer[i].id == id) {
            if (customer[i].status == 0) {
                const creatediv = document.createElement("div");
                creatediv.innerHTML = `
                    <div class="contenthienkhoa">Người dùng sẽ bị khóa cho đến khi admin mở lại</div>
                    <label for="inputkhoand" class="contenthienkhoa">Hãy nhập lý do khóa người dùng: </label> 
                    <input type="text" id="inputkhoand" placeholder="Enter"> 
                    <input type="submit" id="submitkhoa" onclick="submitkhoa(${id})"><br>
                `;
                document.getElementById("contentkhoa").appendChild(creatediv); 
            } else if (customer[i].status == 1) {
                document.getElementById("contentkhoa").innerHTML = `
                    <div class="contenthienkhoa">Người dùng sẽ bị khóa cho đến khi admin mở lại. Bạn có muốn khóa người dùng?  
                    <input type="button" onclick="bokhoa(${id})" id="buttonkhoa" value="submit"></div>
                `;
            }
            let creatediv = document.createElement("div");
            creatediv.innerHTML = `
                <div>${customer[i].id}</div>
                <div>${customer[i].name}</div>
                <div>${customer[i].phone}</div>
                <div>${customer[i].email}</div>
            `;
            hienkh.appendChild(creatediv);
            document.createElement("printorderkh").innerHTML=`                <div >
                    <div>id</div>
                    <div>name</div>
                    <div>catergory</div>
                    <div>order receiptime</div>
                </div>`
            for (let j = 0; j < customer[i].lichsuMuaHang.length; j++) {
                const product = customer[i].lichsuMuaHang[j];
                for (let k = 0; k < product.giohang.length; k++) {
                    const orderDiv = document.createElement("div");
                    orderDiv.innerHTML = `
                        <div>${product.giohang[k].id}</div>
                        <div>${product.giohang[k].ten}</div>
                        <div>${product.giohang[k].loai}</div>
                        <div>${product.ngaydat}</div>
                    `;
                    document.querySelector(".printorderkh").appendChild(orderDiv); 
                }
            }
            return;
        }
    }


}
function nutphantrang(){
    const slnutphantrang =Math.ceil(customer.length/7);
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
function submitkhoa(id){
    let thesubmit = document.getElementById("submitkhoa");
const reason = document.getElementById("inputkhoand").value.trim();
if (!reason) {
    alert("Bạn chưa nhập lý do khóa người dùng");
    return;
}
customer.forEach(cus=>{
    if(cus.id==id){
        cus.status=1;
        cus.reasonkhoa=reason;
        const a="khoa-"+id;
        document.getElementById(a).style.color="#bcbcbc";
    }
})
console.log(customer);
alert("đã khóa người dùng");
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


