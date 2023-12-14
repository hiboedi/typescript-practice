//! Desructering

function penjumlahanPerkalian(a: number, b: number) {
  return [a + b, a * b];
}

//  const jumlah = penjumlahanPerkalian(2, 3)[0];
//  const kali = penjumlahanPerkalian(2, 3)[1];

// function kalkulasi(a: number, b: number) {
//   return [a + b, a - b, a * b, a / b];
// }

// const [jumlah, kurang, kali = "tidak ada", bagi] = kalkulasi(2, 3);

// console.log(kurang);

function kalkulasi(a: number, b: number) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  };
}

const { kurang, kali, bagi, tambah } = kalkulasi(10, 5);

console.log(tambah);

// Destructuring function arguments

const mhs1 = {
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

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, saya ${nama}, saya berumur ${umur} tahun dan nilai uasai saya adalah${uas}`;
}

console.log(cetakMhs(mhs1));
