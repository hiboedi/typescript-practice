// ! spread operator memecah unpack iterables menjadi single elment (string, array, argument/nodelist, typedArray, Map, Set, User-defined Iterables)
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//? menggabungkan 2 array
var mhs = ["budi", "fait", "abdur"];
var dosen = ["riki", "mijar", "anggi"];
var orang = __spreadArray(__spreadArray([], mhs, true), dosen, true);
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
var nama = document.querySelector(".nama");
if (nama) {
    var huruf = Array.from(nama.textContent || "")
        .map(function (h) { return "<span>".concat(h, "</span>"); })
        .join("");
    nama.innerHTML = huruf;
}
