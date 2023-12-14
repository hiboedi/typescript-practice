//? Dstructerin variable
//! Distructering Array
var perkenalan = ["Halo", "nama", "saya", "Budi"];
// ? skipp item
var salam = perkenalan[0], nama = perkenalan[3];
console.log("skipp " + nama);
// *swap item
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);
// !return value pada function
function coba() {
    return [1, 2];
}
var _a = coba(), a = _a[0], b = _a[1];
console.log("upack return vallue " + b);
// *Rest parameter
var _b = [1, 2, 3, 4, 5], c = _b[0], values = _b.slice(1);
console.log("rest params " + c);
console.log("rest params " + values);
//! Disitructering Object
var siswa = {
    panggil: "Budi",
    umur: 23,
};
var panggil = siswa.panggil, umur = siswa.umur;
console.log("Disitructering Object " + panggil);
//! Assignment tanpa deklarasi object
// ({ nama, umur } = { nama: "Budi", umur: 23 });
// console.log(nama);
//!Assignt ke variable baru
var mahasiswa = {
    nama: "Budi",
    umur: 23,
};
var n = mahasiswa.nama, u = mahasiswa.umur;
console.log("Assignt ke variable baru " + n);
//? Memberikan default value
var murid = {
    nami: "Budi",
    yuswa: 23,
    email: "hi.boedi8@gmail.com",
};
var nami = murid.nami, yuswa = murid.yuswa, _c = murid.email, email = _c === void 0 ? "email@default.com" : _c;
console.log("Memberikan default value " + email);
// *memberi nilai default dan memberi nama variable baru
// const mhs = {
//   nama: "Budi",
//   umur: 23,
//   email: "hi.boedi8@gmail.com",
// };
// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
// console.log(e);
// rest parameter
// const mhs = {
//   nama: "Budi",
//   umur: 23,
//   email: "hi.boedi8@gmail.com",
// };
// const { nama, ...values } = mhs;
// console.log(values);
// !Mengambil field pada object yangkita kirim sebagai parameter untuk function
var mhs = {
    id: 133,
    nama: "Budi",
    umur: 23,
    email: "hi.boedi8@gmail.com",
};
function getIdMhs(_a) {
    var id = _a.id;
    return id;
}
console.log(getIdMhs(mhs));
