
// bài 1: Tính tiền lương nhân viên
/**
 * B1: Input
 * - luongMotNgay, soNgayLam
 * b2: Handle
 * - Tạo biến luongMotNgay, soNgayLam, luongThucNhan
 * - Tính lương thực nhận: luongThucNhan = luongMotNgay * soNgayLam
 * b3: Output
 * - Xuất tiền lương thực nhận
 */

console.log("======Bài1=======")

var luongMotNgay = 100000;
var soNgayLam = 23;
var luongThucNhan;

luongThucNhan = luongMotNgay * soNgayLam;

console.log(luongThucNhan + ' VND');

//Bài 2: Tính giá trị trung bình 
/**
 * b1: Input
 * - Giá trị của 5 số thực
 * b2: Handle
 * - Tạo biến a, b, c, d, e, giaTriTrungBinh
 * - Tính giá trị trung bình: giaTriTrungBinh = (a + b + c + d + e) / 5
 * b3: Output
 * - Xuất giaTriTrungBinh
 */ 

 console.log("======Bài2=======")
var a = 1;
var b = 2; 
var c = 3;
var d = 4;
var e = 5;
var giaTriTrungBinh;//undified

giaTriTrungBinh = (a + b + c + d +e) / 5;

console.log('Giá trị trung bình: ' + giaTriTrungBinh);

// BÀi 3: Quy đổi tiền
/**
 * b1: Input
 * - giaTriUSD, soTienQuyDoi
 * b2: Handle
 * - TẠo biến giaTriUSD, soTienQuyDoi, soTienSauQuyDoi
 * - Tính số tiền cần quy đổi: soTienCanQuyDoi * giaTriUSD
 * b3: Output
 * - Xuất số tiền sau quy đổi
 */

 console.log("======Bài3=======")

var giaTriUSD = 23500;
var soTienCanQuyDoi = 500000;
var soTienSauQuyDoi;

soTienSauQuyDoi = soTienCanQuyDoi * giaTriUSD;

console.log('Giá trị sau quy đổi: ' + soTienSauQuyDoi + 'VND')

//bài tập 4: tính diện tích chu vi hình chữ nhật
// b1: input
// - chiều dài và chiều rộng
// b2: handle
// - tao biến cD, cR, chuVi, dienTich, chuVi = (cD + cR)/2, dienTich = cD * cR, in kết quả console
// b3: output
// - kết quả chuVi , dienTich

console.log("======Bài4=======")

var cD = 30;
var cR = 40;
var chuVi, dienTich;

chuVi = (cD + cR) / 2;
dienTich = cD * cR;

console.log('chu vi là: ' + chuVi + ' cm');
console.log('diện tích là: ' + dienTich + ' cm');



//bài tập 5: Tính tổng 2 ký số
// số nguyên dương n có 2 chữ số
// tạo biến n, unit, ten vs sum, tách số hàng chục ten = Math.floor(n/10), tách số hàng đơn vị unit = n % 10 , sum = ten + unit, in kết quả console
// kết quả sum 

console.log("======Bài5=======")

var n = 35;
var unit, ten, sum;

ten = Math.floor(n/10);
unit = n % 10;
sum = ten + unit;

console.log('Tổng 2 ký số là: ' + sum);


