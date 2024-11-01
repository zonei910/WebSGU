document.addEventListener('DOMContentLoaded', function() {
    const open = document.querySelector("#angle-down");
    const notification = document.querySelector("#date");
    open.addEventListener("click", function() {
        // Toggle hiển thị khung thông báo
        if (notification.style.display === "none" || notification.style.display === "") {
            notification.style.display = "block"; // Hiển thị thông báo
        } 
        else {
            notification.style.display = "none"; // Ẩn thông báo
        }
    });
});
const open1=document.querySelector("#button1")
open1.addEventListener('click',function(){
document.querySelector('.week2monthoctoberyear2024').style.display="block"
document.querySelector(".week1monthoctoberyear2024").style.display="none";
})
document.getElementById('button1').addEventListener('click', function() {
    // Lấy giá trị của các select
    const selectedMonth = document.getElementById('selectmonth').value;
    const selectedYear = document.getElementById('selectyear').value;
    const selectedWeek = document.getElementById('selectweek').value;

    // Hiển thị div tương ứng dựa trên giá trị được chọn
    if (selectedMonth && selectedYear && selectedWeek) {
        document.getElementById('week' + selectedWeek + 'month' + selectedMonth + 'year' + selectedYear).style.display = 'block';
    }
});