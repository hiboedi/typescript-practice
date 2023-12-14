//! Desructering
function penjumlahanPerkalian(a, b) {
    return [a + b, a * b];
}
//  const jumlah = penjumlahanPerkalian(2, 3)[0];
//  const kali = penjumlahanPerkalian(2, 3)[1];
// function kalkulasi(a: number, b: number) {
//   return [a + b, a - b, a * b, a / b];
// }
// const [jumlah, kurang, kali = "tidak ada", bagi] = kalkulasi(2, 3);
// console.log(kurang);
function kalkulasi(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b,
    };
}
var _a = kalkulasi(10, 5), kurang = _a.kurang, kali = _a.kali, bagi = _a.bagi, tambah = _a.tambah;
console.log(tambah);
// Destructuring function arguments
var mhs1 = {
    nama: "Budi",
    umur: 23,
    email: "hi.boedi@gmail.com",
    nilai: {
        tugas: 80,
        uts: 90,
        uas: 70,
    },
};
// function cetakMhs(nama, umur) {
//   return `Halo, saya ${nama}, saya berumur ${umur} tahun`;
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));
// function cetakMhs(mhs) {
//   return `Halo, saya ${mhs.nama}, saya berumur ${mhs.umur} tahun`;
// }
// console.log(cetakMhs(mhs1));
function cetakMhs(_a) {
    var nama = _a.nama, umur = _a.umur, _b = _a.nilai, tugas = _b.tugas, uts = _b.uts, uas = _b.uas;
    return "Halo, saya ".concat(nama, ", saya berumur ").concat(umur, " tahun dan nilai uasai saya adalah").concat(uas);
}
console.log(cetakMhs(mhs1));
