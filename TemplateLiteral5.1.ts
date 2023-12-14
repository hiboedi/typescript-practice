//! template string

const nama = "Budi";
const umur = 23;
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun`);

//? embeded expression

console.log(`${1 + 1}`);
console.log(`${alert("Halo")}`);
const x = 10;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);
