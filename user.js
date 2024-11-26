<<<<<<< HEAD:user.js
let Customer = [
    {
        email: "nguyenhien@gmail.com",
        password: "123",
        name: "Nguyễn Hiền",
        address: "123 Đường Lê Lợi, Quận 1, TP. HCM",
        phone: "123",
        sex: "nu",
        status: 0,
    },

    {
        email: "phamminh@gmail.com",
        password: "minhpham123",
        name: "Phạm Minh",
        address: "101 Đường Nguyễn Trãi, Quận 4, TP. HCM",
        phone: "0934567890",
        sex: "nam",
        status: 0,
    },

    {
        email: "hoangmai@gmail.com",
        password: "hoangmai123",
        name: "Hoàng Mai",
        address: "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
        phone: "0976543210",
        sex: "nu",
        status: 0,
    },

    {
        email: "tranthao456@gmail.com",
        password: "password567",
        name: "Trần Thảo",
        address: "456 Đường CMT8, Quận 3, TP. HCM",
        phone: "0912345678",
        sex: "nu",
        status: 0,
    },

    { email: "lehoang789@gmail.com",
        password: "lehoang123",
        name: "Lê Hoàng",
        address: "789 Đường Võ Thị Sáu, Quận 5, TP. HCM",
        phone: "0901234567",
        sex: "nam",
        status : 0,
    },

  
];

localStorage.setItem("customer_storage", JSON.stringify(Customer));



let Admin = [
    {
        name: "Admin",
        phone: "12345678",
        password : "12345",
        address: "Q1",
    }
];
=======
let Customer = [];

function refreshCustomers() {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    Customer = storedUsers;
}

refreshCustomers();
console.log('Dữ liệu khách hàng hiện tại:', Customer);
// {
    //     email: "nguyenhien@gmail.com",
    //     password: "12345678",
    //     name: "Nguyễn Hiền",
    //     address: "123 Đường Lê Lợi, Quận 1, TP. HCM",
    //     phone: "0987654321",
    //     sex: "nu",
    // },

    // {
    //     email: "phamminh@gmail.com",
    //     password: "minhpham123",
    //     name: "Phạm Minh",
    //     address: "101 Đường Nguyễn Trãi, Quận 4, TP. HCM",
    //     phone: "0934567890",
    //     sex: "nam",
    // },

    // {
    //     email: "hoangmai@gmail.com",
    //     password: "hoangmai123",
    //     name: "Hoàng Mai",
    //     address: "102 Đường Lý Thường Kiệt, Quận 10, TP. HCM",
    //     phone: "0976543210",
    //     sex: "nu",
    // },
>>>>>>> 03b7658fa8129cc1230c9a0cbe748d663c531df4:customer.js

    // {
    //     email: "tranthao456@gmail.com",
    //     password: "password567",
    //     name: "Trần Thảo",
    //     address: "456 Đường CMT8, Quận 3, TP. HCM",
    //     phone: "0912345678",
    //     sex: "nu",
    // },

<<<<<<< HEAD:user.js

=======
    // { email: "lehoang789@gmail.com",
    //     password: "lehoang123",
    //     name: "Lê Hoàng",
    //     address: "789 Đường Võ Thị Sáu, Quận 5, TP. HCM",
    //     phone: "0901234567",
    //     sex: "nam",
    // },
>>>>>>> 03b7658fa8129cc1230c9a0cbe748d663c531df4:customer.js
