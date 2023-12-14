// ? Callback adalah fuction yang dieksekusi setelah function lain
// ! synchronous callback

// function Hallo(nama: string | null) {
//   alert(`Hallo, ${nama}`);
// }

// function tampilPesan(callback: (nama: string | null) => void) {
//   const nama = prompt("Masukan nama: ");
//   callback(nama);
// }

// tampilPesan(Hallo);

// function tampilPesan(callback: (nama: string | null) => void) {
//   const nama = prompt("Masukan nama: ");
//   callback(nama);
// }

// tampilPesan((nama) => {
//   alert(`Halo, ${nama}`);
// });

// const mhs = [
//   {
//     nama: "Budi",
//     npm: "112233",
//     umur: 23,
//     alamat: "kertjaya",
//     ids: 1,
//     nomerHP: "088912",
//   },
//   {
//     nama: "Richard",
//     npm: "2233114",
//     umur: 43,
//     alamat: "Dmakr",
//     ids: 2,
//     nomerHP: "091241",
//   },
//   {
//     nama: "Mock",
//     npm: "238911",
//     umur: 12,
//     alamat: "Denmark",
//     ids: 2,
//     nomerHP: "081231",
//   },
//   {
//     nama: "Liran",
//     npm: "098121",
//     umur: 92,
//     alamat: "Nick",
//     ids: 1,
//     nomerHP: "0912221",
//   },
//   {
//     nama: "Larry",
//     npm: "129921",
//     umur: 32,
//     alamat: "Butin",
//     ids: 2,
//     nomerHP: "0216611",
//   },
// ];

// console.log("mulai");

// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });

// console.log("selesai");

//! Asynchronous
// function getDataMahasiswa(
//   url: string,
//   success: (result: string) => void,
//   err: () => void
// ) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         err();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");
// getDataMahasiswa(
//   "/mahasiswa.json",
//   (result) => {
//     const mhs = JSON.parse(result);
//     mhs.forEach((m: { nama: string }) => console.log(m.nama));
//   },
//   () => {}
// );
// console.log("selesai");

// ? jquery
console.log("mulai");
$.ajax({
  url: "mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m: { nama: string }) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
