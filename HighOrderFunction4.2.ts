//? some examples of higher order function (.map | .filter | .reduce | .find | .foreach)

const angka = [-1, 10, 6, 7, 3, 56, 1, 9, -19, 20];
const result: number[] = [];

// * mencari angka yang lebih besar dengan 3

// ! for

for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    result.push(angka[i]);
  }
}

console.log("for " + result);

// ? filter

const filterResult = angka.filter((a) => a >= 3);

console.log("filtter " + filterResult);

//! map

// kalikan semua angka dengan 2

const mapResult = angka.map((a) => a * 2);

console.log("angka " + angka);

console.log("map " + mapResult);

//? reduce
//jumlahkan seluruh angka pada array

const reduceResult = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log("reduce " + reduceResult, 0);

//! chaining method

// ?cari angka > 5
// ? kalikan 3
// ? jumlahkan

const total = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, currentValue) => acc + currentValue, 0);

console.log("total " + total);
