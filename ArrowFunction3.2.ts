//? this as a concept in arrow function

//* constractor function to create an object

// const Mahasiswa = function () {
//   this.nama = "Budi";
//   this.umur = 23;

//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//   };
// };

//! arrow function

// const Budi = new Mahasiswa();

// const Mahasiswa = function () {
//   this.nama = "Budi";
//   this.umur = 23;

//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//   };
// };

// const Budi = new Mahasiswa();

//? object literal

// const mhs1 = {
//   nama: "Budi",
//   umur: 33,
//   sayHello: () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//   },
// };

//!

// const Mahasiswa = function () {
//   this.nama = "Budi";
//   this.umur = 23;

//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const Budi = new Mahasiswa();

//? example with css
const box = document.querySelector(".box");
box?.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);

  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
