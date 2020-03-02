function startCal() {
    let num = prompt("Nhập số cần tính vào đây");
    alert("Bình phương của " + num + " là: " + squareCal(num));
}

function squareCal(number) {
    return  number * number;
}