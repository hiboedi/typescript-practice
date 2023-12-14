//! template string
var nama = "Budi";
var umur = 23;
console.log("Halo, nama saya ".concat(nama, ", dan saya ").concat(umur, " tahun"));
//? embeded expression
console.log("".concat(1 + 1));
console.log("".concat(alert("Halo")));
var x = 10;
console.log("".concat(x % 2 == 0 ? "genap" : "ganjil"));
