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
var box = document.querySelector(".box");
box === null || box === void 0 ? void 0 : box.addEventListener("click", function () {
    var _a;
    var _this = this;
    var satu = "size";
    var dua = "caption";
    if (this.classList.contains(satu)) {
        _a = [dua, satu], satu = _a[0], dua = _a[1];
    }
    this.classList.toggle(satu);
    setTimeout(function () {
        _this.classList.toggle(dua);
    }, 600);
});
