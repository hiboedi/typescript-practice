//? some examples of higher order function (.map | .filter | .reduce | .find | .foreach)
var angka = [-1, 10, 6, 7, 3, 56, 1, 9, -19, 20];
var result = [];
// * mencari angka yang lebih besar dengan 3
// ! for
for (var i = 0; i < angka.length; i++) {
    if (angka[i] >= 3) {
        result.push(angka[i]);
    }
}
console.log("for " + result);
// ? filter
var filterResult = angka.filter(function (a) { return a >= 3; });
console.log("filtter " + filterResult);
//! map
// kalikan semua angka dengan 2
var mapResult = angka.map(function (a) { return a * 2; });
console.log("angka " + angka);
console.log("map " + mapResult);
//? reduce
//jumlahkan seluruh angka pada array
var reduceResult = angka.reduce(function (accumulator, currentValue) { return accumulator + currentValue; });
console.log("reduce " + reduceResult, 0);
//! chaining method
// ?cari angka > 5
// ? kalikan 3
// ? jumlahkan
var total = angka
    .filter(function (a) { return a > 5; })
    .map(function (a) { return a * 3; })
    .reduce(function (acc, currentValue) { return acc + currentValue; }, 0);
console.log("total " + total);
