let numbera=parseInt(prompt('Nhập số a'));
let numberb=parseInt(prompt('Nhập số b'));
let numberc=parseInt(prompt('Nhập số c'));
if (numbera>numberb && numbera>numberc){
    document.write('Số lớn nhất là số a');
}
else if (numberb>numberc){
    document.write('Số lớn nhất là số b');
}else{
    document.write('Số lớn nhất là số c');
}