//! promise object yang merpresentasikan keberhasilan atau kegagalan dari sebuah event yang asynchronous then and catch

//? contoh1
// let ditepati: boolean = true;

// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("janji ditepati");
//   } else {
//     reject("ingkar");
//   }
// });

// janji1
//   .then((response) => {
//     console.log("ok= " + response);
//   })
//   .catch((response) => console.log("Not ok = " + response));

//* contoh 2

// let ditepati1: boolean = true;

// const janji2: Promise<string> = new Promise((resolve, reject) => {
//   if (ditepati1) {
//     setTimeout(() => {
//       resolve("Ditepatati tapi tunggu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Ingkar tapi tunggu");
//     }, 2000);
//   }
// });

// console.log("mulai");
// janji2
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("selesai"));

//! contoh 3
interface FilmData {
  judul: string;
  genre: string;
}

interface CuacaData {
  kota: string;
  cuaca: string;
}

const film: Promise<FilmData[]> = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Naruto",
        genre: "adventure",
      },
    ]);
  }, 1000);
});

const cuaca: Promise<CuacaData[]> = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bandung",
        cuaca: "hujan",
      },
    ]);
  }, 500);
});

film.then((response: FilmData[]) => console.log(response));
cuaca.then((response: CuacaData[]) => console.log(response));

Promise.all([film, cuaca]).then((response) => {
  const [film, cuaca] = response as [FilmData[], CuacaData[]];
  console.log(film);
  console.log(cuaca);
});
