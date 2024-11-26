let customers = [
    { rank: 1, name: "Mikasa Chan", phone: "0901 234 567", email: "mikasachan@gmail.com", status: "None",
      product: [
        {  
            id: 1,
            name: "Yellow Gold Multi Sapphire & Diamond Ring",
            category: "ring",
            price:  10.5,
            profit: 2.4,
            receipttime: "13-08-2024", 
            completiontime: "17-09-2024",
            amount:3
        },
        {   
            id: 2,
            name: "Đồng hồ(Hàng tặng)",
            category: "watch",
            price: 34,
            profit: 10.5,
            amount:2,
            receipttime: "01-08-2024", 
            completiontime: "15-09-2024"
        },
        {  
            id: 3,
            name: "Vòng tay(Hàng tặng)",
            category: "bracelet",
            price: 22,
            profit: 12.9,
            receipttime: "18-04-2025", 
            completiontime: "25-04-2025",
            amount:1
        },
        {  
            id: 4,
            name: "White Gold Diamond Palm Tree Necklace",
            category: "necklace",
            price: 46,
            profit: 15.9,
            receipttime: "01-04-2024", 
            completiontime: "10-04-2024",
            amount:1
        },
      ],
      numberoforders: 4
    },
    { rank: 2, name: "Uzumaki Naruto", phone: "0912 345 678", email: "naruto@gmail.com", status: "not received the order",
      product: [
        {  
            id: 6,
            name: "Vòng cổ(Hàng tặng)",
            category: "necklace",
            price: 97.3,
            profit: 20.7,
            receipttime: "01-05-2024", 
            completiontime: "08-05-2024",
            amount:1
        },
        {  
            id: 8,
            name: "Vòng cổ(Hàng tặng)",
            category: "necklace",
            price: 371.67,
            profit: 34.8,
            receipttime: "01-02-2024", 
            completiontime: "08-02-2024",
            amount:1
        }
      ],
      numberoforders: 1,
    },
    { rank: 3, name: "Sasuke Uchiha", phone: "0978 901 234", email: "Sasuke@gmail.com", status: "not received the order",
      product: [
        {  
            id: 9,
            name: "Đồng hồ(Hàng tặng)",
            category: "watch",
            price: 429.888,
            profit: 90.7,
            receipttime: "01-01-2024", 
            completiontime: "09-01-2024",
            amount:2
        }
      ],
      numberoforders: 1,
    },
    { rank: 4, name: "Sakura Haruno", phone: "0923 456 789", email: "Sakura@gmail.com", status: "not received the order",
      product: [
        {  
            id: 8,
            name: "Vòng cổ(Hàng tặng)",
            category: "necklace",
            price: 371.67,
            profit: 34.8,
            receipttime: "01-06-2024", 
            completiontime: "08-06-2024",
            amount:1
         }
      ],
      numberoforders: 1,
    },
    { rank: 5, name: "Hinata Hyuga", phone: "0934 567 890", email: "Hinata@gmail.com", status: "not received the order",
      product: [
        {  
            id: 8,
            name: "Vòng cổ(Hàng tặng)",
            category: "necklace",
            price: 371.67,
            profit: 34.8,
            receipttime: "01-07-2024", 
            completiontime: "08-07-2024",
            amount:1
        }
      ],
      numberoforders: 1
    },
    { rank: 6, name: "Itachi Uchiha", phone: "0934 567 890", email: "Itachi@gmail.com", status: "not received the order",
      product: [
        {  
            id: 7,
            name: "Diamond Ring",
            category: "ring",
            price: 167.46,
            profit: 40.9,
            receipttime: "29-08-2024", 
            completiontime: "06-09-2024",
            amount:2
         }
      ],
      numberoforders: 1,
    },
    { rank: 7, name: "Sasori", phone: "0956 789 012", email: "Sasori@gmail.com", status: "not received the order",
        product: [
          {  
            id: 7,
            name: "Diamond Ring",
            category: "ring",
            price: 167.46,
            profit: 40.9,
            receipttime: "06-09-2024", 
            completiontime: "15-09-2024",
            amount:1
        }
        ],
        numberoforders: 1
      },
      { rank: 8, name: "Kakashi Hatake", phone: "0967 890 123", email: "Kakashi@gmail.com", status: "not received the order",
        product: [
          {  
            id: 6,
            name: "Vòng cổ(Hàng tặng)",
            category: "necklace",
            price: 97.3,
            profit: 20.7, 
            receipttime: "10-08-2024", 
            completiontime: "17-08-2024",
            amount:1
           }
        ],
        numberoforders: 1
      },
      { rank: 9, name: "Eren Yeager", phone: "0901 234 567", email: "Eren@gmail.com", status: "None",
        product: [
          {  
            id: 6,
            name: "Vòng cổ(Hàng tặng)",
            category: "necklace",
            price: 97.3,
            profit: 20.7,
            receipttime: "16-08-2024", 
            completiontime: "25-08-2024",
            amount:1
           },
           {  
            id: 7,
            name: "Diamond Ring",
            category: "ring",
            price: 167.46,
            profit: 40.9,
            receipttime: "20-08-2024", 
            completiontime: "27-08-2024",
            amount:1
        }
        ],
        numberoforders: 1
      },
      { rank: 10, name: "Mikasa Ackerman", phone: "0903 456 789", email: "Ackerman@gmail.com", status: "None",
        product: [
          {  
            id: 4,
            name: "White Gold Diamond Palm Tree Necklace",
            category: "necklace",
            price: 46,
            profit: 15.9,
            receipttime: "20-03-2024", 
            completiontime: "27-03-2024",
            amount:1
           }
        ],
        numberoforders: 1,
      },
      { rank: 11, name: "Armin Arlert", phone: "0914 567 890", email: "Armin@gmail.com", status: "None",
        product: [
          {  
            id: 3,
            name: "Vòng tay(Hàng tặng)",
            category: "bracelet",
            price: 22,
            profit: 12.9,
            receipttime: "30-03-2024", 
            completiontime: "07-04-2024",
            amount:2
           }
        ],
        numberoforders: 1,
      },
      { rank: 12, name: "Levi Ackerman", phone: "0925 678 901", email: "Levi@gmail.com", status: "None",
        product: [
          {  
            id: 3,
            name: "Vòng tay(Hàng tặng)",
            category: "bracelet",
            price: 22,
            profit: 12.9,
            receipttime: "01-11-2024", 
            completiontime: "07-11-2024",
            amount:1
           },
           {  
            id: 4,
            name: "White Gold Diamond Palm Tree Necklace",
            category: "necklace",
            price: 46,
            profit: 15.9,
            receipttime: "21-12-2024", 
            completiontime: "29-12-2024",
            amount:1
           }
        ],
        numberoforders: 1
      },
      { rank: 13, name: "Historia Reiss", phone: "0936 789 012", email: "Historia@gmail.com", status: "None",
        product: [
          {  
            id: 2,
            name: "Đồng hồ(Hàng tặng)",
            category: "watch",
            price: 34,
            profit: 10.5,
            receipttime: "24-12-2024", 
            completiontime: "30-12-2024",
            amount:1
           }
        ],
        numberoforders: 1,
      },
      { rank: 14, name: "Erwin Smith", phone: "0947 890 123", email: "Erwin@gmail.com", status: "None",
        product: [
          {  
            id: 2,
            name: "Đồng hồ(Hàng tặng)",
            category: "watch",
            price: 34,
            profit: 10.5,
            receipttime: "25-12-2024", 
            completiontime: "31-12-2024",
            amount:1
           },
           {  
            id: 4,
            name: "White Gold Diamond Palm Tree Necklace",
            category: "necklace",
            price: 46,
            profit: 15.9,
            receipttime: "29-10-2024", 
            completiontime: "10-11-2024",
            amount:1
           }
        ],
        numberoforders: 1
      },
      { rank: 15, name: "Jean Kirstein", phone: "0958 901 234", email: "Jean@gmail.com", status: "None",
        product: [
          {  
            id: 3,
            name: "Vòng tay(Hàng tặng)",
            category: "bracelet",
            price: 22,
            profit: 12.9,
            receipttime: "11-10-2024", 
            completiontime: "20-10-2024",
            amount:2
           },
           {  
            id: 6,
            name: "Vòng cổ(Hàng tặng)",
            category: "necklace",
            price: 97.3,
            profit: 20.7,
            receipttime: "11-10-2024", 
            completiontime: "19-10-2024",
            amount:1
           },
        ],
        numberoforders: 1,
      },
      { rank: 16, name: "Sasha Blouse", phone: "0969 012 345", email: "Sasha@gmail.com", status: "None",
        product: [
          {  
            id: 1,
            name: "Yellow Gold Multi Sapphire & Diamond Ring",
            category: "ring",
            price:  10.5,
            profit: 2.4,
            receipttime: "10-11-2024", 
            completiontime: "20-11-2024",
            amount:1
           },
           {  
            id: 3,
            name: "Vòng tay(Hàng tặng)",
            category: "bracelet",
            price: 22,
            profit: 12.9,
            receipttime: "20-02-2024", 
            completiontime: "27-02-2024",
            amount:1
        },
        ],
        numberoforders: 1
      },
      { rank: 17, name: "Connie Springer", phone: "0970 123 456", email: "Connie@gmail.com", status: "None",
        product: [
          {  
            id: 4,
            name: "White Gold Diamond Palm Tree Necklace",
            category: "necklace",
            price: 46,
            profit: 15.9,
            receipttime: "05-02-2024", 
            completiontime: "13-02-2024",
            amount:2
           },
           {  
            id: 6,
            name: "Vòng cổ(Hàng tặng)",
            category: "necklace",
            price: 97.3,
            profit: 20.7, 
            receipttime: "30-01-2024", 
            completiontime: "10-02-2024",
            amount:1
           }
        ],
        numberoforders: 1
      },
      { rank: 18, name: "Hange Zoë", phone: "0981 234 567", email: "Hange@gmail.com", status: "None",
        product: [
          {   
            id: 4,
            name: "White Gold Diamond Palm Tree Necklace",
            category: "necklace",
            price: 46,
            profit: 15.9,
            receipttime: "05-01-2024", 
            completiontime: "12-02-2024",
            amount:1
           },
           {
            id: 9,
            name: "Đồng hồ(Hàng tặng)",
            category: "watch",
            price: 429.888,
            profit: 90.7,
            receipttime: "10-05-2024", 
            completiontime: "17-05-2024",
            amount:3
           }
        ],
        numberoforders: 1
      },
      { rank: 19, name: "Reiner Braun", phone: "0992 345 678", email: "Reiner@gmail.com", status: "None",
        product: [
          {  
            id: 9,
            name: "Đồng hồ(Hàng tặng)",
            category: "watch",
            price: 429.888,
            profit: 90.7,
            receipttime: "12-05-2024", 
            completiontime: "20-05-2024",
            amount:1
           }
        ],
        numberoforders: 1
      },
      { rank: 20, name: "Annie Leonhart", phone: "0904 456 789", email: "Annie@gmail.com", status: "None",
        product: [
          {  
            id: 6,
            name: "Vòng cổ(Hàng tặng)",
            category: "necklace",
            price: 97.3,
            profit: 20.7,
            receipttime: "28-08-2024", 
            completiontime: "10-09-2024",
            amount:4
           }
        ],
        numberoforders: 1
      },
      { rank: 21, name: "Zeke Yeager", phone: "0915 567 890", email: "Zeke@gmail.com", status: "None",
        product: [
          {  rank: 1, name: "Vintage Diamond Necklace", type: "Necklace", price: "$3,500", description: "An exquisite vintage necklace featuring intricate diamond work, perfect for collectors and vintage lovers." },
          {
            id: 8,
            name: "Vòng cổ(Hàng tặng)",
            category: "necklace",
            price: 371.67,
            profit: 34.8,
            receipttime: "27-06-2024", 
            completiontime: "05-07-2024",
            amount:1
          }
        ],
        numberoforders: 1
      },
      { rank: 22, name: "Gabi Braun", phone: "0926 678 901", email: "Gabi@gmail.com", status: "None",
        product: [
          {  
            id: 5,
            name: "White Sapphire Band Ring",
            category: "ring",
            price: 76.8,
            profit: 20.9,
            receipttime: "12-06-2024", 
            completiontime: "20-06-2024",
            amount:1
           }
        ],
        numberoforders: 1
      },
      { rank: 23, name: "Falco Grice", phone: "0937 789 012", email: "Falco@gmail.com", status: "None",
        product: [
          {  
            id: 4,
            name: "White Gold Diamond Palm Tree Necklace",
            category: "necklace",
            price: 46,
            profit: 15.9,
            receipttime: "09-10-2024", 
            completiontime: "15-10-2024",
            amount:1
           },
           {
            id: 3,
            name: "Vòng tay(Hàng tặng)",
            category: "bracelet",
            price: 22,
            profit: 12.9,
            receipttime: "10-07-2024", 
            completiontime: "19-07-2024",
            amount:3
           }
        ],
        numberoforders: 1
      },
      { rank: 24, name: "Porco Galliard", phone: "0948 890 123", email: "Porco@gmail.com", status: "None",
        product: [
          {  
            id: 1,
            name: "Yellow Gold Multi Sapphire & Diamond Ring",
            category: "ring",
            price:  10.5,
            profit: 2.4,
            receipttime: "20-09-2024", 
            completiontime: "29-09-2024",
            amount:2
           },
           {
            id: 9,
            name: "Đồng hồ(Hàng tặng)",
            category: "watch",
            price: 429.888,
            profit: 40.9,
            receipttime: "01-08-2024", 
            completiontime: "10-08-2024",
            amount:1
           }
        ],
        numberoforders: 1
      },
      { rank: 25, name: "Pieck Finger", phone: "0959 901 234", email: "Pieck@gmail.com", status: "None",
        product: [
          {  
            id: 7,
            name: "Diamond Ring",
            category: "ring",
            price: 167.46,
            profit: 40.9,
            receipttime: "06-09-2024", 
            completiontime: "17-09-2024",
            amount:1
           }
        ],
        numberoforders: 1
      },
      { rank: 26, name: "Ymir Fritz", phone: "0960 012 345", email: "Ymir@gmail.com", status: "None",
        product: [
          {  
            id: 5,
            name: "White Sapphire Band Ring",
            category: "ring",
            price: 76.8,
            profit: 20.9,
            receipttime: "21-09-2024", 
            completiontime: "29-09-2024",
            amount:1
           }
        ],
        numberoforders: 1
      },
      { rank: 27, name: "Bertholdt Hoover", phone: "0971 123 456", email: "Bertholdt@gmail.com", status: "None",
        product: [
          {  
            id: 4,
            name: "White Gold Diamond Palm Tree Necklace",
            category: "necklace",
            price: 46,
            profit: 15.9,
            receipttime: "30-09-2024", 
            completiontime: "04-10-2024",
            amount:1
          }
        ],
        numberoforders: 1
      },
      { rank: 28, name: "Hange Zoë", phone: "0982 234 567", email: "Hange@gmail.com", status: "None",
        product: [
          {  
            id: 5,
            name: "White Sapphire Band Ring",
            category: "ring",
            price: 76.8,
            profit: 20.9,
            receipttime: "14-03-2024", 
            completiontime: "20-04-2024",
            amount:1
          },
          {
            id: 5,
            name: "White Sapphire Band Ring",
            category: "ring",
            price: 76.8,
            profit: 20.9,
            receipttime: "22-02-2025", 
            completiontime: "04-03-2025",
            amount:1
          }
        ],
        numberoforders: 3
      },
      { rank: 29, name: "Light Yagami", phone: "0993 345 678", email: "Light@gmail.com", status: "None",
        product: [
          {  
            id: 3,
            name: "Vòng tay(Hàng tặng)",
            category: "bracelet",
            price: 22,
            profit: 12.9,
            receipttime: "08-12-2024", 
            completiontime: "19-12-2024",
            amount:2
           },
           {
            id: 2,
            name: "Đồng hồ(Hàng tặng)",
            category: "watch",
            price: 34,
            profit: 10.5,
            receipttime: "24-12-2024", 
            completiontime: "30-12-2024",
            amount:1
           }
        ],
        numberoforders: 1
    }
];
let Product = [
    {
        id: 1,
        name: "Yellow Gold Multi Sapphire & Diamond Ring",
        category: "ring",
        price:  10.5,
        profit: 2.4,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: Rose</p>
            <p>Stones: Round Diamond 0.95</p>
            <p>18" Chain Included. Pendant Length: 1.25"</p>
        `,
        images: [
            "assets/User/img/ring/1.png",
            "assets/User/img/ring/2.png",
            "assets/User/img/ring/3.png",
            "assets/User/img/ring/4.png"
        ]
    },
    {
        id: 2,
        name: "Đồng hồ(Hàng tặng)",
        category: "watch",
        price: 34,
        profit: 10.5,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: Yellow/Rose/Green</p>
            <p>Stones: Round Yellow Sapphire 0.23</p>
            <p>Round Diamond 0.09</p>
        `,
        images: [
            "assets/User/img/watch/1.png",
            "assets/User/img/watch/2.png",
            "assets/User/img/watch/3.png",
            "assets/User/img/watch/4.png"
        ]
    },
    {
        id: 3,
        name: "Vòng tay(Hàng tặng)",
        category: "bracelet",
        price: 22,
        profit: 12.9,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: White</p>
            <p>Emerald Cut Blue Sapphire 1.52</p>
            <p>Natural Diffused Ceylon Sapphire</p>
        `,
        images: [
            "assets/User/img/bracelet/1.png",
            "assets/User/img/bracelet/2.png",
            "assets/User/img/bracelet/3.png",
            "assets/User/img/bracelet/4.png"
        ]
    },
    {
        id: 4,
        name: "White Gold Diamond Palm Tree Necklace",
        category: "necklace",
        price: 46,
        profit: 15.9,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: White</p>
            <p>Stones: Round Diamond 9.19</p>
            <p>Length: 7" Width:1/2"</p>
        `,
        images: [
            "assets/User/img/necklace/1.png",
            "assets/User/img/necklace/2.png",
            "assets/User/img/necklace/3.png",
            "assets/User/img/necklace/4.png"
        ]
    },
    {
        id: 5,
        name: "White Sapphire Band Ring",
        category: "ring",
        price: 76.8,
        profit: 20.9,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: Rose/Yellow/White</p>
            <p>Round Ruby 0.99</p>
            <p>Oval Emerald 1.02</p>
        `,
        images: [
            "assets/User/img/ring/1.png",
            "assets/User/img/ring/2.png",
            "assets/User/img/ring/3.png",
            "assets/User/img/ring/4.png"
        ]
    },
    {
        id: 6,
        name: "Vòng cổ(Hàng tặng)",
        category: "necklace",
        price: 97.3,
        profit: 20.7,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: Rose/Yellow/White</p>
            <p>Round Emerald 0.99</p>
            <p>Oval Emerald 1.02</p>
        `,
        images: [
            "assets/User/img/necklace/1.png",
            "assets/User/img/necklace/2.png",
            "assets/User/img/necklace/3.png",
            "assets/User/img/necklace/4.png"
        ]
    },
    {
        id: 7,
        name: "Diamond Ring",
        category: "ring",
        price: 167.46,
        profit: 40.9,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: Rose/Yellow/White</p>
            <p>Round Ruby 0.99</p>
            <p>Oval Emerald 1.02</p>
        `,
        images: [
            "assets/User/img/ring/1.png",
            "assets/User/img/ring/2.png",
            "assets/User/img/ring/3.png",
            "assets/User/img/ring/4.png"
        ]
    },
    {
        id: 8,
        name: "Vòng cổ(Hàng tặng)",
        category: "necklace",
        price: 371.67,
        profit: 34.8,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: Rose/Yellow/White</p>
            <p>Round Emerald 0.99</p>
            <p>Oval Emerald 1.02</p>
        `,
        images: [
            "assets/User/img/necklace/1.png",
            "assets/User/img/necklace/2.png",
            "assets/User/img/necklace/3.png",
            "assets/User/img/necklace/4.png"
        ]
    },
    {
        id: 9,
        name: "Đồng hồ(Hàng tặng)",
        category: "watch",
        price: 429.888,
        profit: 90.7,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: Yellow/Rose/Green</p>
            <p>Stones: Round Yellow Sapphire 0.23</p>
            <p>Round Diamond 0.09</p>
        `,
        images: [
            "assets/User/img/watch/1.png",
            "assets/User/img/watch/2.png",
            "assets/User/img/watch/3.png",
            "assets/User/img/watch/4.png"
        ]
    },
];

let save=JSON.parse(localStorage.getItem('save')) || [];
localStorage.setItem('save',JSON.stringify(customers));

// console.log(save[2].name);



let month=0;
let year=2024;

let totalpricecanam=0;
let totalprofitcanam=0;
let totalproductcanam=0;
let totalusercanam=0;

// let newarray=[]

function taohangthongke(newarray,countuser){
    const totalpricediv=document.getElementById("totalprice");
    const totalproductdiv=document.getElementById("totalproduct");
    const totalprofitdiv=document.getElementById("totalprofit");
    const totaluserdiv=document.getElementById("totaluser");

    const doanhthu=document.querySelector(".container3");
    doanhthu.innerHTML=`
    <div class="doanhthu">
        <div>name</div>
        <div>sales volumn</div>
        <div>sales</div>
    </div>`;
    for(let i=0;i<newarray.length;i++){
        const createrow=document.createElement("div");
        createrow.className="doanhthu";

        // totalprice+=newarray.totalprice; //sl price
        // totalprofit+=newarray.totalprofit; //sl profit
        // totalproduct+=newarray.totalproduct;


        createrow.innerHTML+=
        `<div>
            ${newarray[i].name}
        </div>
        <div>
            ${newarray[i].amount}
        </div>
        <div>
            ${newarray[i].profit} $
        </div>
        `
        doanhthu.innerHTML+=createrow.outerHTML;
    }
    let highestprofit=-Infinity;
    let lowestprofit=Infinity;
    let customerwithhighestprofit;
    let customerwithlowestprofit;
    let arraycopy=[]
    for(let i=0;i<customers.length;i++){
        let sum=0;
        for(let j=0;j<customers[i].product.length;j++){
            sum+=customers[i].product[j].profit;
        }
        if(highestprofit<sum){
            arraycopy=JSON.parse(JSON.stringify(customers[i]));
            highestprofit=sum;
            customerwithhighestprofit=arraycopy;
        }
        if(lowestprofit>sum){
            arraycopy=JSON.parse(JSON.stringify(customers[i]));
            lowestprofit=sum;
            customerwithlowestprofit=arraycopy;
        }
        console.log(sum);
        console.log(customerwithhighestprofit);
    }
    let thelowestprofit=Infinity;
    let thehighestprofit=-Infinity;
    let theproductwithhighestprofit;
    let theproductwithlowestprofit;
    for(let i=0;i<newarray.length;i++){
        if(newarray[i].profit>thehighestprofit){
            arraycopy=JSON.parse(JSON.stringify(newarray[i]));
            thehighestprofit=arraycopy.profit;
            arraycopy=JSON.parse(JSON.stringify(newarray[i]));
            theproductwithhighestprofit=arraycopy;
        }
        if(newarray[i].profit<thelowestprofit){
            arraycopy=JSON.parse(JSON.stringify(newarray[i]));
            thelowestprofit=arraycopy.profit;
            arraycopy=JSON.parse(JSON.stringify(newarray[i]));
            theproductwithlowestprofit=arraycopy;
        }
    }
    console.log(theproductwithhighestprofit);
    console.log(theproductwithlowestprofit);
    document.querySelector(".cuswithlowestprofit").innerHTML=`                
                <div>
                    <div>id</div>
                    <div>client name</div>
                    <div>image</div>
                    <div>amount spent</div>
                    <div>telephone</div>
                    <div>email</div>
                </div>
                <div>
                    <div>${customerwithlowestprofit.rank}</div>
                    <div>${customerwithlowestprofit.name}</div>
                    <div>${customerwithlowestprofit.image}</div>
                    <div>${lowestprofit}</div>
                    <div>${customerwithlowestprofit.phone}</div>
                    <div>${customerwithlowestprofit.email}</div>
                </div>`
    document.querySelector(".cuswithhighestprofit").innerHTML=`                
                <div>
                    <div>id</div>
                    <div>client name</div>
                    <div>image</div>
                    <div>amount spent</div>
                    <div>telephone</div>
                    <div>email</div>
                </div>
                <div>
                    <div>${customerwithhighestprofit.rank}</div>
                    <div>${customerwithhighestprofit.name}</div>
                    <div>${customerwithhighestprofit.image}</div>
                    <div>${highestprofit}</div>
                    <div>${customerwithhighestprofit.phone}</div>
                    <div>${customerwithhighestprofit.email}</div>
                </div>`

    document.querySelector(".productwithlowestprofit").innerHTML=`                
                <div>
                    <div>id</div>
                    <div>catergory</div>
                    <div>product name</div>
                    <div>image</div>
                    <div>total profit</div>
                    <div>amount</div>
                </div>
                <div>
                    <div>${theproductwithlowestprofit.id}</div>
                    <div>${theproductwithlowestprofit.category}</div>
                    <div>${theproductwithlowestprofit.name}</div>
                    <div>${theproductwithlowestprofit.image}</div>
                    <div>${theproductwithlowestprofit.profit}</div>
                    <div>${theproductwithlowestprofit.amount}</div>
                </div>`
        document.querySelector(".productwithhighestprofit").innerHTML=`                
                <div>
                    <div>id</div>
                    <div>catergory</div>
                    <div>product name</div>
                    <div>image</div>
                    <div>total profit</div>
                    <div>amount</div>
                </div>
                <div>
                    <div>${theproductwithhighestprofit.id}</div>
                    <div>${theproductwithhighestprofit.category}</div>
                    <div>${theproductwithhighestprofit.name}</div>
                    <div>${theproductwithhighestprofit.image}</div>
                    <div>${theproductwithhighestprofit.profit}</div>
                    <div>${theproductwithhighestprofit.amount}</div>
                </div>`
totalpricediv.innerText=newarray.totalprice+"$";
totalproductdiv.innerText=newarray.totalproduct;
totalprofitdiv.innerText=newarray.totalprofit+"$";
totaluserdiv.innerText=countuser;
}
let arraycanam=[];
let countusercanam=0;
function canam(){
    let totalproduct=0;
    let totalprofit=0;
    let totalprice=0;
    arraycanam=[];
    let array=[];
    countusercanam=0;
    arraycopy=JSON.parse(JSON.stringify(customers));
    for(let i=0;i<arraycopy.length;i++){
        let a=0;
        arraycopy=JSON.parse(JSON.stringify(customers));
        for(let j=0;j<arraycopy[i].product.length;j++){
            let receipt;
            if(customers[i].product[j].receipttime){
                receipt=arraycopy[i].product[j].receipttime.split("-");
                if(checktimedate(customers[i].product[j].receipttime)){
                    array.push(arraycopy[i].product[j]);
                    if(a==0){
                        countusercanam++;
                    }
                    a=1;
                }
            }

        }
    }
    for(let i=0;i<array.length;i++){
        let check=0;
        let amount=array[i].amount;
        let price=array[i].price*array[i].amount;
        let profit=array[i].profit*array[i].amount;
        for(let j=i-1;j>=0;j--){
            if(array[i].id == array[j].id){
                check=1;
            }
        }
        for(let j=i+1;j<array.length;j++){
            if(array[i].id==array[j].id && check==0){
                amount+=array[j].amount;
                price+=(array[j].price)*(array[j].amount);
                profit+=(array[j].profit)*(array[j].amount);

            }
        }
        let arraycopy=JSON.parse(JSON.stringify(array));
        if(check==0){
            arraycanam.push(arraycopy[i]);
            arraycanam[arraycanam.length-1].amount=amount;
            arraycanam[arraycanam.length-1].price=price;
            arraycanam[arraycanam.length-1].profit=profit;

            totalproduct+=arraycanam[arraycanam.length-1].amount;
            totalprofit+=arraycanam[arraycanam.length-1].profit;
            totalprice+=arraycanam[arraycanam.length-1].price;
        } 
    }
    arraycanam.totalprice=totalprice;
    arraycanam.totalproduct=totalproduct;
    arraycanam.totalprofit=totalprofit;
    if(arraycanam){
        taobangthongke(arraycanam);
    }
}
function taobangthongke(arraycanam){
    if(thang(12,arraycanam)){
        const thang12=thang(12,arraycanam);
        if(thang12){
            document.getElementById("t12").style.height=`${thang12.phantramprofit*100}%`; 
            document.getElementById("tt12").style.height=`${thang12.phantramproduct*100}%`;   
        }
        const thang11=thang(11,arraycanam);
        if(thang11){
            document.getElementById("t11").style.height=`${thang11.phantramprofit*100}%`; 
            document.getElementById("tt11").style.height=`${thang11.phantramproduct*100}%`;    
        }
        const thang10=thang(10,arraycanam);
        if(thang10){
            document.getElementById("t10").style.height=`${thang10.phantramprofit*100}%`;   
            document.getElementById("tt10").style.height=`${thang10.phantramproduct*100}%`;  
        }
        const thang9=thang(9,arraycanam);
        if(thang9){
            document.getElementById("t9").style.height=`${thang9.phantramprofit*100}%`;   
            document.getElementById("tt9").style.height=`${thang9.phantramproduct*100}%`;  
        }
        const thang8=thang(8,arraycanam);
        if(thang8){
            document.getElementById("t8").style.height=`${thang8.phantramprofit*100}%`;   
            document.getElementById("tt8").style.height=`${thang8.phantramproduct*100}%`;  
        }
        const thang7=thang(7,arraycanam);
        if(thang7){
            document.getElementById("t7").style.height=`${thang7.phantramprofit*100}%`;  
            document.getElementById("tt7").style.height=`${thang7.phantramproduct*100}%`;   
        }
        const thang6=thang(6,arraycanam);
        if(thang6){
            document.getElementById("t6").style.height=`${thang6.phantramprofit*100}%`;   
            document.getElementById("tt6").style.height=`${thang6.phantramproduct*100}%`;  
        }
        const thang5=thang(5,arraycanam);
        if(thang5){
            document.getElementById("t5").style.height=`${thang5.phantramprofit*100}%`;   
            document.getElementById("tt5").style.height=`${thang5.phantramproduct*100}%`;  
        }
        const thang4=thang(4,arraycanam);
        if(thang4){
            document.getElementById("t4").style.height=`${thang4.phantramprofit*100}%`;   
            document.getElementById("tt4").style.height=`${thang4.phantramproduct*100}%`;  
        }
        const thang3=thang(3,arraycanam);
        if(thang3){
            document.getElementById("t3").style.height=`${thang3.phantramprofit*100}%`;   
            document.getElementById("tt3").style.height=`${thang3.phantramproduct*100}%`;  
        }
        const thang2=thang(2,arraycanam);
        if(thang2){
            document.getElementById("t2").style.height=`${thang2.phantramprofit*100}%`;   
            document.getElementById("tt2").style.height=`${thang2.phantramproduct*100}%`;  
        }
        const thang1=thang(1,arraycanam);
        if(thang1){
            document.getElementById("t1").style.height=`${thang1.phantramprofit*100}%`;   
            document.getElementById("tt1").style.height=`${thang1.phantramproduct*100}%`;  
        }
        
    
    }
    else{
        console.log("loi");
    }
}
function thang(thang,arraycanam){
    let array=[];
    let arraycopy=JSON.parse(JSON.stringify(customers));
    for(let i=0;i<arraycopy.length;i++){
        arraycopy=JSON.parse(JSON.stringify(customers));
        for(let j=0;j<arraycopy[i].product.length;j++){
            let receipt;
            arraycopy=JSON.parse(JSON.stringify(customers));
            if(arraycopy[i].product[j].receipttime){
                receipt=arraycopy[i].product[j].receipttime.split("-");
                if((year==receipt[2]) && receipt[1]==thang){
                    array.push(arraycopy[i].product[j]);

                }
            }

        }
    }

    // console.log(array);
    // console.log(arraycanam);
    if(arraycanam){
        return taothongke(thang,array,arraycanam);
    }

}
function taothongke(thang,array,arraycanam){
    let totalprice1=0;
    let totalprofit1=0;
    let totalproduct1=0;
    let array1=[];
    for(let i=0;i<array.length;i++){
        let check=0;

        let amount=array[i].amount;
        let price=(array[i].price)*(array[i].amount);
        let profit=(array[i].profit)*(array[i].amount);

        for(let j=i-1;j>=0;j--){
            if(array[i].id == array[j].id){
                check=1;
            }
        }
        for(let j=i+1;j<array.length;j++){
            if(array[i].id==array[j].id && check==0){
                amount+=array[j].amount;
                price+=(array[j].price)*(array[j].amount);
                profit+=(array[j].profit)*(array[j].amount);
            }
        }
        if(check==0){
            // console.log("hihi");
            let arraycopy=JSON.parse(JSON.stringify(array));
            array1.push(arraycopy[i]);
            array1[array1.length-1].amount=amount;
            array1[array1.length-1].price=price;
            array1[array1.length-1].profit=profit;

            totalprofit1+=profit;
            // console.log("ttpfit : "+totalprofit1);
            totalproduct1+=amount;
            totalprice1+=price;
        } 
    }
    array1.totalprofit=totalprofit1;
    array1.totalproduct=totalproduct1;
    
    let a=
        {
            phantramprofit:`${totalprofit1/(arraycanam.totalprofit)}`,
            phantramproduct:`${totalproduct1/(arraycanam.totalproduct)}`
        };
    // console.log(array1);
    return a;

}
function monthyear(){
    let countuser=0;
    let array=[];
    let arraycopy=JSON.parse(JSON.stringify(customers));
    for(let i=0;i<arraycopy.length;i++){
        let a=0;
        arraycopy=JSON.parse(JSON.stringify(customers));
        for(let j=0;j<arraycopy[i].product.length;j++){
            let receipt;
            if(arraycopy[i].product[j].receipttime){
                arraycopy=JSON.parse(JSON.stringify(customers));
                receipt=arraycopy[i].product[j].receipttime.split("-");
                if(checktimedate(arraycopy[i].product[j].receipttime)){
                    console.log("ngay "+receipt[0]);
                    console.log("thang "+receipt[1]);
                    console.log("nam "+receipt[2]);
                    arraycopy=JSON.parse(JSON.stringify(customers));
                    array.push(arraycopy[i].product[j]);
                    if(a==0){
                        countuser++;
                    }
                    a=1;
                }
            }
        }
    }
    
    console.log(array);
    takenewarray(array,countuser);
}
function checktimedate(receiptime){
    let arraycopy=JSON.parse(JSON.stringify(receiptime));
    receipt=arraycopy.split("-");
    console.log(receipt[2]);
    console.log(year);
    console.log(receipt[2].replace(/^0+/, ''));
    if(receipt[2].replace(/^0+/, '')<year){
         return false;
    } 
    if(receipt[2].replace(/^0+/, '')>yearsecond){
        console.log();return false;
    }
    if(receipt[2].replace(/^0+/, '')<yearsecond && receipt[2]>year){
        return true;
    }
    if(receipt[1].replace(/^0+/, '')<month && receipt[2]==year){
        return false;
    }
    if(receipt[1].replace(/^0+/, '')>monthsecond && receipt[2]==yearsecond){
        return false;
    }
    if(receipt[0].replace(/^0+/, '')<date && receipt[1]==month && receipt[2]==year){
        return false;
    }
    if(receipt[0].replace(/^0+/, '')>datesecond && receipt[1]==monthsecond &&receipt[2]==yearsecond){
        return false;
    }
    return true;
}
function takenewarray(array,countuser){
    let newarray=[];
    let totalproduct=0;
    let totalprofit=0;
    let totalprice=0;

    let thecustomwithhighestprofit;
    let thecustomwithlowestprofit;
    for(let i=0;i<array.length;i++){
        let check=0;
        let amount=array[i].amount;
        let price=array[i].price*array[i].amount;
        let profit=array[i].profit*array[i].amount;
        for(let j=i-1;j>=0;j--){
            if(array[i].id == array[j].id){
                check=1;
            }
        }
        for(let j=i+1;j<array.length;j++){
            if(array[i].id==array[j].id && check==0){

                amount+=array[j].amount;
                price+=(array[j].price)*(array[j].amount);
                profit+=(array[j].profit)*(array[j].amount);


            }
        }
        if(check==0){
            // console.log("hihi");
            let arraycopy=JSON.parse(JSON.stringify(array));
            newarray.push(arraycopy[i]);
            // console.log(newarray.length);
            newarray[newarray.length-1].amount=amount;
            newarray[newarray.length-1].price=price;
            newarray[newarray.length-1].profit=profit;

            totalproduct+=newarray[newarray.length-1].amount;
            totalprice+=newarray[newarray.length-1].price;
            totalprofit+=newarray[newarray.length-1].profit;

        } 
        // newarray[newarray.length-1]=
    }
    newarray.totalprice=totalprice;
    newarray.totalproduct=totalproduct;
    newarray.totalprofit=totalprofit;

    // console.log(newarray);
    taohangthongke(newarray,countuser);
}
////////////////////////////////////////////gettimefirst/////////////////////////////////////////////////////////
let date=1;
let datesecond;
let yearsecond;
let monthsecond;
function gettimefirst(){
    const time=document.getElementById("timefirst").value;
    console.log(time);
    date=time.split("-")[2];
    month=time.split("-")[1];
    year=time.split("-")[0];
    console.log("date "+date);
    console.log("month"+month);
    console.log("year "+year);
}
function gettimesecond(){
    const time=document.getElementById("timesecond").value;
    console.log(time);
    datesecond=time.split("-")[2];
    monthsecond=time.split("-")[1];
    yearsecond=time.split("-")[0];
    console.log("date second "+datesecond);
    console.log("month second "+monthsecond);
    console.log("year second "+yearsecond);
    if(document.getElementById("timefirst").value && time){
        console.log("ok");
        monthyear();
    }
}
canam();
taohangthongke(arraycanam,countusercanam);