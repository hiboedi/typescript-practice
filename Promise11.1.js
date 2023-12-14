//! promise object yang merpresentasikan keberhasilan atau kegagalan dari sebuah event yang asynchronous then and catch
var film = new Promise(function (resolve) {
    setTimeout(function () {
        resolve([
            {
                judul: "Naruto",
                genre: "adventure",
            },
        ]);
    }, 1000);
});
var cuaca = new Promise(function (resolve) {
    setTimeout(function () {
        resolve([
            {
                kota: "Bandung",
                cuaca: "hujan",
            },
        ]);
    }, 500);
});
film.then(function (response) { return console.log(response); });
cuaca.then(function (response) { return console.log(response); });
Promise.all([film, cuaca]).then(function (response) {
    var _a = response, film = _a[0], cuaca = _a[1];
    console.log(film);
    console.log(cuaca);
});
