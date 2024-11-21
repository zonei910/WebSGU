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
        price: 0,
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
        price: 0,
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
        price: 460000,
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
        price: 760000,
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
        price: 0,
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
        price: 1400000,
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
        price: 0,
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
        price: 0,
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

