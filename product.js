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
];

