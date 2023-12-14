//
// combination between function and lexical scope
// closure is a function with access to the parent scope
// colusure is a funtion which is return by the other function

// lexical scope

function init() {
  let nama = "Budi"; // local variable
  function tampilNama() {
    // inner funtion (closure)
    console.log(nama); // akses ke parent variable
  }
  tampilNama();
}

init();

// function factory

function dash() {
  return function (nama: string) {
    console.log(nama);
  };
}

let panggil = dash();
panggil("Fatir");
panggil("Abdur");

// why we using closure , for create a factory function and create a private method

// function factory

function ucapkanSalam(waktu: string) {
  return function (nama: string) {
    console.log(`Hallo, ${nama} selamat ${waktu} hope your day is going well`);
  };
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");

selamatPagi("Budi");
selamatSiang("Abdur");
selamatMalam("Fatir");

// counter imidiately invoke function
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
