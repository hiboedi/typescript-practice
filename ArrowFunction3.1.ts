// funtion declaration
function tampilPesan(nama: string) {
  alert("halo" + nama);
}

tampilPesan("declaration Budi");

// function expression
let tampilAlert = function (nama: string) {
  alert("halo" + nama);
};
tampilAlert("expression Fatir");

// arrow funtion is defferent kind funtion which is more simple then any toher funtion

const tampilMesage = (nama: string) => `halo ${nama}`;

console.log(tampilMesage("Abdur"));

const tampilNama = (nama: string, waktu: string) => {
  return `halo ${nama}, selamat ${waktu}`;
};

console.log(tampilNama("Budi", "Malam"));

// funtion map

let mahasiswa = ["Budi", "Abdur", "Fatir"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });

// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// return as object
let jumlahHuruf = mahasiswa.map((nama) => ({
  nama: nama,
  jmlhHuruf: nama.length,
}));

console.log(jumlahHuruf);
