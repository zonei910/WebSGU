    //=========== product img============
// let mainImg = document.querySelector('.main_img');
// let smallImgs = document.querySelectorAll('.small_img');

// smallImgs.forEach((img) => {
//     img.onclick = function() {
//         console.log('Thumbnail clicked:', img.src);
//         mainImg.src = img.src;
//     }
// })

// ==============detail products ==================
const Product = [
    {
        id: 1,
        name: "White Band Ring",
        category: "ring",
        price:  1300000,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Metal Color: Rose</span><br>
            <span>Stones: Round Diamond 0.95</span><br>
            <span>18" Chain Included. Pendant Length: 1.25"</span>
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
        price: 0,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Metal Color: Yellow/Rose/Green</span><br>
            <span>Stones: Round Yellow Sapphire 0.23</span><br>
            <span>Round Diamond 0.09</span>
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
        price: 0,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Metal Color: White</span><br>
            <span>Emerald Cut Blue Sapphire 1.52</span><br>
            <span>Natural Diffused Ceylon Sapphire</span>
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
        price: 460000,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Metal Color: White</span><br>
            <span>Stones: Round Diamond 9.19</span><br>
            <span>Length: 7" Width:1/2"</span>
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
        price: 760000,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Metal Color: Rose/Yellow/White</span><br>
            <span>Round Ruby 0.99</span><br>
            <span>Oval Emerald 1.02</span>
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
        price: 0,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Metal Color: Rose/Yellow/White</span><br>
            <span>Round Emerald 0.99</span><br>
            <span>Oval Emerald 1.02</span>
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
        price: 1400000,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Metal Color: Rose/Yellow/White</span><br>
            <span>Round Ruby 0.99</span><br>
            <span>Oval Emerald 1.02</span>
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
        price: 0,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Metal Color: Rose/Yellow/White</span><br>
            <span>Round Emerald 0.99</span><br>
            <span>Oval Emerald 1.02</span>
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
        price: 0,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Metal Color: Yellow/Rose/Green</span><br>
            <span>Stones: Round Yellow Sapphire 0.23</span><br>
            <span>Round Diamond 0.09</span>
        `,
        images: [
            "assets/User/img/watch/1.png",
            "assets/User/img/watch/2.png",
            "assets/User/img/watch/3.png",
            "assets/User/img/watch/4.png"
        ]
    },


 {
        id: 10,
        name: "Gold Hoop Earrings",
        category: "earrings",
        price: 350000,
         description: `
           <span>Metal: 14K Gold</span><br>
           <span>Diameter: 25mm</span><br>
           <span>Style: Hoop</span><br>
           <span>Finish: High Polish</span>
       `,
        images: [
            "assets/User/img/earrings/7-1.jpg",
            "assets/User/img/earrings/7-2.jpg",
            "assets/User/img/earrings/7-3.jpg",
            "assets/User/img/earrings/7-4.jpg"
        ]
    },
    {
        id: 11,
        name: "Silver Drop Earrings",
        category: "earrings",
        price: 250000,
        description: `
            <span>Metal: 925 Sterling Silver</span><br>
            <span>Stone: Blue Sapphire</span><br>
            <span>Length: 40mm</span><br>
            <span>Style: Drop Earrings</span>
        `,
        images: [
            "assets/User/img/earrings/8-1.jpg",
            "assets/User/img/earrings/8-2.jpg",
            "assets/User/img/earrings/8-3.jpg",
            "assets/User/img/earrings/8-4.jpg"
        ]
    },
    {
        id: 12,
        name: "Diamond Stud Earrings",
        category: "earrings",
        price: 1200000,
        description: `
            <span>Metal: 14K White Gold</span><br>
            <span>Stone: Round Diamonds 0.5 carat</span><br>
            <span>Style: Stud</span><br>
            <span>Finish: Polished</span>
        `,
        images: [
            "assets/User/img/earrings/9-1.jpg",
            "assets/User/img/earrings/9-2.jpg",
            "assets/User/img/earrings/9-3.jpg",
            "assets/User/img/earrings/9-4.jpg"
        ]
    },
    {
        id: 13,
        name: "Pearl Earrings",
        category: "earrings",
        price: 550000,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Stone: Freshwater Pearl</span><br>
        <span>Style: Drop Earrings</span><br>
            <span>Length: 30mm</span>
        `,
        images: [
            "assets/User/img/earrings/10-1.jpg",
            "assets/User/img/earrings/10-2.jpg",
            "assets/User/img/earrings/10-3.jpg",
            "assets/User/img/earrings/10-4.jpg"
        ]
    },
    {
        id: 14,
        name: "Rose Gold Hoops",
        category: "earrings",
        price: 650000,
        description: `
            <span>Metal: 14K Rose Gold</span><br>
            <span>Diameter: 35mm</span><br>
            <span>Style: Hoop</span><br>
            <span>Finish: Matte</span>
        `,
        images: [
            "assets/User/img/earrings/11-1.jpg",
            "assets/User/img/earrings/11-2.jpg",
            "assets/User/img/earrings/11-3.jpg",
            "assets/User/img/earrings/11-4.jpg"
        ]
    },
    {
        id: 15,
        name: "Crystal Chandelier Earrings",
        category: "earrings",
        price: 800000,
    description: `
            <span>Metal: Silver</span><br>
            <span>Stones: Clear Crystals</span><br>
            <span>Length: 60mm</span><br>
            <span>Style: Chandelier</span>
        `,
        images: [
            "assets/User/img/earrings/12-1.jpg",
            "assets/User/img/earrings/12-2.jpg",
            "assets/User/img/earrings/12-3.jpg",
            "assets/User/img/earrings/12-4.jpg"
        ]
    },
    {
        id: 16,
        name: "White Band Ring",
        category: "ring",
        price: 1300000,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Metal Color: Rose</span><br>
            <span>Stones: Round Diamond 0.95</span><br>
            <span>18" Chain Included. Pendant Length: 1.25"</span>
        `,
        images: [
            "assets/User/img/ring/1.png",
            "assets/User/img/ring/2.png",
            "assets/User/img/ring/3.png",
            "assets/User/img/ring/4.png"
        ]
    },
    {
        id: 17,
        name: "Đồng hồ(Hàng tặng)",
        category: "watch",
        price: 0,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Metal Color: Yellow/Rose/Green</span><br>
            <span>Stones: Round Yellow Sapphire 0.23</span><br>
            <span>Round Diamond 0.09</span>
        `,
        images: [
        "assets/User/img/watch/1.png",
            "assets/User/img/watch/2.png",
            "assets/User/img/watch/3.png",
            "assets/User/img/watch/4.png"
        ]
    },
    {
        id: 18,
        name: "Vòng tay(Hàng tặng)",
        category: "bracelet",
        price: 0,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Metal Color: White</span><br>
            <span>Emerald Cut Blue Sapphire 1.52</span><br>
            <span>Natural Diffused Ceylon Sapphire</span>
        `,
        images: [
            "assets/User/img/bracelet/1.png",
            "assets/User/img/bracelet/2.png",
            "assets/User/img/bracelet/3.png",
            "assets/User/img/bracelet/4.png"
        ]
    }
    


];

