let doanhthu=parseInt(prompt('Nhập số doanh thu'));
if (doanhthu<20){
    result = "Hoa hồng của bạn là: "+(doanhthu*3)/100;
}else if(doanhthu<100){
    result = "Hoa hồng của bạn là: "+(doanhthu*5)/100;
}else {
    result="Hoa hồng của bạn là: "+(doanhthu*8)/100;
}
document.getElementById('result').innerHTML=result;