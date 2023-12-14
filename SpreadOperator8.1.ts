// ! spread operator memecah unpack iterables menjadi single elment (string, array, argument/nodelist, typedArray, Map, Set, User-defined Iterables)

//? menggabungkan 2 array
const mhs = ["budi", "fait", "abdur"];
const dosen = ["riki", "mijar", "anggi"];
const orang = [...mhs, ...dosen];
console.log("gabung array " + orang);

// mengcopy array

// const mhs1 = ["budi", "fait", "abdur"];
// const mhs2 = [...mhs1];
// console.log("copy array " + mhs2);

// const liMhs = Array.from(document.querySelectorAll("li"));
// const mhsNama: any = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhsNama.push(liMhs[i].textContent);
// }

// console.log("list mhs " + mhsNama);

// const resultMhs = liMhs.map((m) => m.textContent);
// console.log("result mhs " + resultMhs);

const nami: HTMLElement | null = document.querySelector(".nama");

if (nami) {
  const huruf: string = Array.from(nami.textContent || "")
    .map((h) => `<span>${h}</span>`)
    .join("");
  nami.innerHTML = huruf;
}
