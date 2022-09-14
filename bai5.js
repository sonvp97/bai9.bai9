let numbera=Number(prompt('Nhập điểm kiểm tra'));
let numberb=Number(prompt('Nhập điểm thi giữa kỳ'));
let numberc=Number(prompt('Nhập điểm thi cuối kỳ'));
tong=(numbera + numberb*2 +numberc*3)/6;
if (tong<5){
    document.write('Bạn học sinh trung bình');
}else if(tong<8){
    document.write('Bạn học sinh khá');
}else {
    document.write('Bạn học sinh giỏi');
}
