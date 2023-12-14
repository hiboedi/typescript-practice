//? Dstructerin variable

//! Distructering Array

const perkenalan = ["Halo", "nama", "saya", "Budi"];

// ? skipp item
const [salam, , , nama] = perkenalan;

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

const [a, b] = coba();
console.log("upack return vallue " + b);

// *Rest parameter

const [c, ...values] = [1, 2, 3, 4, 5];
console.log("rest params " + c);
console.log("rest params " + values);

//! Disitructering Object

const siswa = {
  panggil: "Budi",
  umur: 23,
};

const { panggil, umur } = siswa;
console.log("Disitructering Object " + panggil);

//! Assignment tanpa deklarasi object

// ({ nama, umur } = { nama: "Budi", umur: 23 });

// console.log(nama);

//!Assignt ke variable baru

const mahasiswa = {
  nama: "Budi",
  umur: 23,
};

const { nama: n, umur: u } = mahasiswa;
console.log("Assignt ke variable baru " + n);

//? Memberikan default value

const murid = {
  nami: "Budi",
  yuswa: 23,
  email: "hi.boedi8@gmail.com",
};

const { nami, yuswa, email = "email@default.com" } = murid;
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

const mhs = {
  id: 133,
  nama: "Budi",
  umur: 23,
  email: "hi.boedi8@gmail.com",
};

function getIdMhs({ id }) {
  return id;
}

console.log(getIdMhs(mhs));
