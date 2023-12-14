// funtion declaration
function tampilPesan(nama) {
    alert("halo" + nama);
}
tampilPesan("declaration Budi");
// function expression
var tampilAlert = function (nama) {
    alert("halo" + nama);
};
tampilAlert("expression Fatir");
// arrow funtion is defferent kind funtion which is more simple then any toher funtion
var tampilMesage = function (nama) { return "halo ".concat(nama); };
console.log(tampilMesage("Abdur"));
var tampilNama = function (nama, waktu) {
    return "halo ".concat(nama, ", selamat ").concat(waktu);
};
console.log(tampilNama("Budi", "Malam"));
// funtion map
var mahasiswa = ["Budi", "Abdur", "Fatir"];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);
// return as object
var jumlahHuruf = mahasiswa.map(function (nama) { return ({
    nama: nama,
    jmlhHuruf: nama.length,
}); });
console.log(jumlahHuruf);
