// let Customer = [];

// function refreshCustomers() {
//     const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
//     Customer = storedUsers;
// }

// refreshCustomers();
// console.log('Dữ liệu khách hàng hiện tại:', Customer);

let Customer = [
{
        phone: "0987654321",
        name: "Nguyễn Hiền",
        email: "nguyenhien@gmail.com",
        gender: "nu",
        address: "123 Đường Lê Lợi, Quận 1, TP. HCM",
        password: "12345678",
        status: 0,
    },

    {
        phone: "0934567890",
        name: "Phạm Minh",
        email: "phamminh@gmail.com",
        gender: "nam",
        address: "101 Đường Nguyễn Trãi, Quận 4, TP. HCM",
        password: "minhpham123",
        status: 0,
    },

    {
        phone: "0976543210",
        name: "Hoàng Mai",
        email: "hoangmai@gmail.com",
        gender: "nu",
        address: "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        password: "hoangmai123",
        status: 0,
    },

    {
        phone: "0912345678",
        name: "Trần Thảo",
        email: "tranthao456@gmail.com",
        gender: "nu",
        address: "456 Đường CMT8, Quận 3, TP. HCM",
        password: "password567",
        status: 0,
    },

    { 
        phone: "0901234567",
        name: "Lê Hoàng",
        email: "lehoang789@gmail.com",
        gender: "nam",
        address: "789 Đường Võ Thị Sáu, Quận 5, TP. HCM",
        password: "lehoang123",
        status: 0,
    },

];

localStorage.setItem("users", JSON.stringify(Customer));