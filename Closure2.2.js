//
// combination between function and lexical scope
// closure is a function with access to the parent scope
// colusure is a funtion which is return by the other function
// lexical scope
function init() {
    var nama = "Budi"; // local variable
    function tampilNama() {
        // inner funtion (closure)
        console.log(nama); // akses ke parent variable
    }
    tampilNama();
}
init();
// function factory
function dash() {
    return function (nama) {
        console.log(nama);
    };
}
var panggil = dash();
panggil("Fatir");
panggil("Abdur");
// why we using closure , for create a factory function and create a private method
// function factory
function ucapkanSalam(waktu) {
    return function (nama) {
        console.log("Hallo, ".concat(nama, " selamat ").concat(waktu, " hope your day is going well"));
    };
}
var selamatPagi = ucapkanSalam("Pagi");
var selamatSiang = ucapkanSalam("Siang");
var selamatMalam = ucapkanSalam("Malam");
selamatPagi("Budi");
selamatSiang("Abdur");
selamatMalam("Fatir");
// counter
var add = (function () {
    var counter = 0;
    return function () {
        return ++counter;
    };
})();
console.log(add());
console.log(add());
console.log(add());
