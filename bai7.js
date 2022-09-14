let mang=prompt('Nhập mạng gọi');
let phut=Number(prompt('Nhập số phút gọi'))
if (mang=="Viettel"){
    result = "Số tiền bạn phải đóng là : "+ phut*790;
}else {
    result = "Số tiền bạn phải đóng là : "+ phut*1090;
}
document.getElementById('result').innerHTML=result;
