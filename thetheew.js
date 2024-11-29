let currentpage=1;
const container4Node=document.getElementById("container4");
let Customer = [
    { 
        id: 1,
         name: "Mikasa Chan",
         phone: "0901 234 567", 
         email: "mikasachan@gmail.com", 
         img:"./thenganhangimage/mikasachan.jfif",
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
        img:"./thenganhangimage/naruto.jfif",
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
    { id: 3,status:1, name: "Sasuke Uchiha", img:"./thenganhangimage/sasuke.jfif", phone: "0978 901 234", email: "Sasuke@gmail.com",
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
    { id: 4, name: "Sakura Haruno", img:"./thenganhangimage/sakura.jfif", phone: "0923 456 789", email: "Sakura@gmail.com", 
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
    { id: 5, name: "Hinata Hyuga", img:"./thenganhangimage/hinata.jfif", phone: "0934 567 890", email: "Hinata@gmail.com",
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
    { id: 6, name: "Itachi Uchiha", img:"./thenganhangimage/itachi.jfif", phone: "0934 567 890", email: "Itachi@gmail.com",
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
    { id: 7, name: "Sasori", img:"./thenganhangimage/sasori.jfif", phone: "0956 789 012", email: "Sasori@gmail.com",
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
      { id: 8, name: "Kakashi Hatake", img:"./thenganhangimage/kakashi.jfif", phone: "0967 890 123", email: "Kakashi@gmail.com",
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
      { id: 9, name: "Eren Yeager", img:"./thenganhangimage/eren.jfif", phone: "0901 234 567", email: "Eren@gmail.com",
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
      { id: 10, name: "Mikasa Ackerman", img:"./thenganhangimage/mikasa.jfif", phone: "0903 456 789", email: "Ackerman@gmail.com",
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
      { id: 11, name: "Armin Arlert", img:"./thenganhangimage/armin.jfif", phone: "0914 567 890", email: "Armin@gmail.com", 
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
      { id: 12, name: "Levi Ackerman", img:"./thenganhangimage/levi.jfif", phone: "0925 678 901", email: "Levi@gmail.com",
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
      { id: 13, name: "Historia Reiss", img:"./thenganhangimage/historia.jfif", phone: "0936 789 012", email: "Historia@gmail.com",
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
      { id: 14, name: "Erwin Smith", img:"./thenganhangimage/erwin.jfif", phone: "0947 890 123", email: "Erwin@gmail.com"
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
      { id: 15, name: "Jean Kirstein", img:"./thenganhangimage/jean.jfif", phone: "0958 901 234", email: "Jean@gmail.com"
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
      { id: 16, name: "Sasha Blouse", img:"./thenganhangimage/sasha.jfif", phone: "0969 012 345", email: "Sasha@gmail.com"
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
      { id: 17, name: "Connie Springer", img:"./thenganhangimage/conie.jfif", phone: "0970 123 456", email: "Connie@gmail.com", 
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
      { id: 18, name: "Hange Zoë", img:"./thenganhangimage/hange.jfif", phone: "0981 234 567", email: "Hange@gmail.com"
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
      { id: 19, name: "Reiner Braun", img:"./thenganhangimage/reiner.jfif", phone: "0992 345 678", email: "Reiner@gmail.com"
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
        ]
      },
  //     { id: 20, name: "Annie Leonhart", img:"./thenganhangimage/annie.jfif", phone: "0904 456 789", email: "Annie@gmail.com", status: "None",
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
  //               "name": "Nguyễn Hiền",
  //               "phone": "0904 456 789",
  //               "emailKH": "nguyenhien@gmail.com",
  //               "genderKH": "nu",
  //               giohang: [
  //                   {  
  //                     id: 6,
  //                     name: "Vòng cổ(Hàng tặng)",
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
  //     { id: 21, name: "Zeke Yeager", img:"./thenganhangimage/zeke.jfif", phone: "0915 567 890", email: "Zeke@gmail.com", status: "None",
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
  //               "name": "Nguyễn Hiền",
  //               "phone": "0915 567 890",
  //               "emailKH": "nguyenhien@gmail.com",
  //               "genderKH": "nam",
  //               giohang: [
  //                   {
  //                     id: 8,
  //                     name: "Vòng cổ(Hàng tặng)",
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
  //     { id: 22, name: "Gabi Braun", img:"./thenganhangimage/gabi.jfif", phone: "0926 678 901", email: "Gabi@gmail.com", status: "None",
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
  //               "name": "Nguyễn Hiền",
  //               "phone": "0926 678 901",
  //               "emailKH": "nguyenhien@gmail.com",
  //               "genderKH": "nam",
  //               giohang: [
  //                   {  
  //                     id: 5,
  //                     name: "White Sapphire Band Ring",
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
  //     { id: 23, name: "Falco Grice", img:"./thenganhangimage/falco.jfif", phone: "0937 789 012", email: "Falco@gmail.com", status: "None",
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
  //               "name": "Nguyễn Hiền",
  //               "phone": "0937 789 012",
  //               "emailKH": "nguyenhien@gmail.com",
  //               "genderKH": "nam",
  //               giohang: [
  //                   {  
  //                     id: 4,
  //                     name: "White Gold Diamond Palm Tree Necklace",
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
  //     { id: 24, name: "Porco Galliard", img:"./thenganhangimage/porco.jfif", phone: "0948 890 123", email: "Porco@gmail.com", status: "None",
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
  //               "name": "Nguyễn Hiền",
  //               "phone": "0948 890 123",
  //               "emailKH": "nguyenhien@gmail.com",
  //               "genderKH": "nam",
  //               giohang: [
  //                   {  
  //                     id: 1,
  //                     name: "Yellow Gold Multi Sapphire & Diamond Ring",
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
  //                     name: "Đồng hồ(Hàng tặng)",
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
  //     { id: 25, name: "Pieck Finger", img:"./thenganhangimage/pieck.jfif", phone: "0959 901 234", email: "Pieck@gmail.com", status: "None",
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
  //               "name": "Nguyễn Hiền",
  //               "phone": "0959 901 234",
  //               "emailKH": "nguyenhien@gmail.com",
  //               "genderKH": "nam",
  //               giohang: [
  //                   {  
  //                     id: 7,
  //                     name: "Diamond Ring",
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
  //     { id: 26, name: "Ymir Fritz", img:"./thenganhangimage/ymir.jfif", phone: "0960 012 345", email: "Ymir@gmail.com", status: "None",
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
  //               "name": "Nguyễn Hiền",
  //               "phone": "0960 012 345",
  //               "emailKH": "nguyenhien@gmail.com",
  //               "genderKH": "nam",
  //               giohang: [
  //                   {  
  //                     id: 5,
  //                     name: "White Sapphire Band Ring",
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
  //     { id: 27, name: "Bertholdt Hoover", img:"./thenganhangimage/berthold.jfif", phone: "0971 123 456", email: "Bertholdt@gmail.com", status: "None",
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
  //               "name": "Nguyễn Hiền",
  //               "phone": "0971 123 456",
  //               "emailKH": "nguyenhien@gmail.com",
  //               "genderKH": "nam",
  //               giohang: [
  //                   {  
  //                     id: 4,
  //                     name: "White Gold Diamond Palm Tree Necklace",
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
  //     { id: 28, name: "chikara", img:"./thenganhangimage/chikara.jfif", phone: "0982 234 567", email: "chikara@gmail.com", status: "None",
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
  //               "name": "Nguyễn Hiền",
  //               "phone": "0982 234 567",
  //               "emailKH": "nguyenhien@gmail.com",
  //               "genderKH": "nam",
  //               giohang: [
  //                   {  
  //                     id: 5,
  //                     name: "White Sapphire Band Ring",
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
  //                     name: "White Sapphire Band Ring",
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
  //     { id: 29, name: "Light Yagami", img:"./thenganhangimage/light.jfif", phone: "0993 345 678", email: "Light@gmail.com", status: "None",
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
  //               "name": "Nguyễn Hiền",
  //               "phone": "0993 345 678",
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
  //                     name: "Đồng hồ(Hàng tặng)",
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

// let  date=null,month=null,year=null,datesecond=null,monthsecond=null,yearsecond=null;
// date=null,month=null,year=null,datesecond=null,monthsecond=null,yearsecond=null;
// function thecheck

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
function closedproduct(){
    document.getElementById("printorder").style.display="none";
}
function closededitclient(){
    document.getElementById("sectioneditclient").style.display="none";
}
// const submit=document.getElementById('');
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
            Customer.name=hoten;
            Customer.phone=phone;
            Customer.email=email;
            // Customer.push(
            //     {
            //         ten:hoten,
            //         phone:phone,
            //         email:email
            //     }
            // );
            document.getElementById("sectioneditclient").style="none";
        }
    })

}
function printinfororder(id) {
    // let a="orderofcustomindex"+id;
    // console.log(a);
    document.getElementById("printorder").style.display="flex";
    const section=document.querySelector("#printorder >div");
    for(let i=0;i<Customer.length;i++){
        if(Customer[i].id==id){
            for(let j=0;j<Customer[i].lichsuMuaHang.length;j++){
                const product=Customer[i].lichsuMuaHang[j];
                for(let k=0;k<product.giohang.length;k++){
                    const creatediv=document.createElement("div");
                    creatediv.innerHTML=`
                    <div>${product.giohang[k].ten}</div>
                    <div>${product.giohang[k].loai}</div>
                    <div>${product.giohang[k].loai}</div>
                    <div>${product.ngaydat}</div>
                    `
                    section.innerHTML+=creatediv.outerHTML;
                }
            }
        }
    }

}
  function printinfor(page){
    const start=(page)*7;
    const end=start+7;
    const newCustomer=Customer.slice(start,end);
    container4Node.innerHTML="";
    container4Node.innerHTML=`<div class="clientouter" id="clientouter">
        <div>Id</div>
        <div>Client name</div>
        <div>Telephone</div>
        <div>Email</div>
    </div>`;
    newCustomer.forEach(customer=>{
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

    console.log("hii");
}


function closedkhoa(){
    document.getElementById("khoaclient").style.display="none";
}
function khoanguoidung(id){
    for(let i=0;i<Customer.length;i++){
        if(Customer[i].id==id){
            Customer[i].status=1;
            const a="khoa-"+id;
            document.getElementById(a).style.color="#bcbcbc";
        }
    }
}
function search() {
    let valuesearchinput = document.getElementById("search").value.toUpperCase(); // Chuyển đổi giá trị tìm kiếm thành chữ hoa

    let namesearch = Customer.filter(customer => {
        return customer.name.toUpperCase().includes(valuesearchinput);
    });

    let emailsearch = Customer.filter(customer => {
        return customer.email.toUpperCase().includes(valuesearchinput);
    });

    let phonesearch = Customer.filter(customer => {
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
    console.log(id);
    document.getElementById("khoaclient").style.display = "flex";
    let hienkh = document.querySelector(".printkh");

    // Xóa nội dung trước đó trong contentkhoa
    document.getElementById("contentkhoa").innerHTML = ''; 

    for (let i = 0; i < Customer.length; i++) { // Sửa điều kiện vòng lặp
        if (Customer[i].id == id) {
            if (Customer[i].status == 0) {
                const creatediv = document.createElement("div");
                creatediv.innerHTML = `
                    <div>Người dùng sẽ bị khóa cho đến khi admin mở lại</div>
                    <label for="inputkhoand">Hãy nhập lý do khóa người dùng: </label> 
                    <input type="text" id="inputkhoand"> 
                    <input type="submit" id="submitkhoa"><br>
                `;
                document.getElementById("contentkhoa").appendChild(creatediv); // Thay đổi từ innerHTML sang appendChild
            } else if (Customer[i].status == 1) {
                document.getElementById("contentkhoa").innerHTML = `
                    <div>Người dùng sẽ bị khóa cho đến khi admin mở lại. Bạn có muốn khóa người dùng?  
                    <input type="button" onclick="khoanguoidung(${id})"></div>
                `;
            }

            // Hiển thị thông tin khách hàng
            let creatediv = document.createElement("div");
            creatediv.innerHTML = `
                <div>${Customer[i].id}</div>
                <div>${Customer[i].name}</div>
                <div>${Customer[i].phone}</div>
                <div>${Customer[i].email}</div>
            `;
            hienkh.appendChild(creatediv); // Đổi từ innerHTML sang appendChild

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
        }
    }

    // Thêm sự kiện cho nút submit
    const submit = document.getElementById("submitkhoa");
    if (submit) {
        submit.addEventListener("click", function(event) {
            const reason = document.getElementById("inputkhoand").value.trim();
            if (!reason) {
                alert("Bạn chưa nhập lý do khóa người dùng");
                return;
            }
            // Cập nhật thông tin khóa
            for (let i = 0; i < Customer.length; i++) {
                if (Customer[i].id == id) {
                    Customer[i].status = 1; // Cập nhật trạng thái
                    Customer[i].reasonkhoa = reason; // Cập nhật lý do khóa
                    break; // Thoát khỏi vòng lặp khi đã cập nhật
                }
            }
            alert("đã khóa người dùng");
        });
    }
}
function nutphantrang(){
    const slnutphantrang =Math.ceil(Customer.length/7);
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


