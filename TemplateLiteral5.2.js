// !html fragment
// const mhs = {
//   nama: "Budi",
//   umur: 23,
//   npm: "18.011.238",
//   email: "knokknok@gmail.com",
// };
// const el = `<div clas='mhs'>
//     <h2>${mhs.nama}</h2>
//     <span class="npm">${mhs.npm}</span>
// </div>`;
//? looping
// const mhs = [
//   {
//     nama: "Budi",
//     umur: 23,
//   },
//   {
//     nama: "Fatir",
//     umur: 18,
//   },
//   {
//     nama: "Abdur",
//     umur: 20,
//   },
// ];
// const el = `<div>
//     ${mhs
//       .map(
//         (i) => `<ul>
//     <li>${i.nama}</li>
//     <li>${i.umur}</li>
//     </ul>`
//       )
//       .join("")}
// </div>`;
//! conditional
// const lagu = {
//   judul: "Dalam saku",
//   penyanyi: "kufuki",
//   feat: "louw",
// };
// const el = `<div>
// <ul>
// <li>
// ${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}
// </li>
// <li>
// ${lagu.penyanyi}
// </li>
// </ul>
// </div>`;
//? nested
var mhs = {
    nama: "Budi",
    semester: 6,
    matkul: ["RPL", "TKJ", "Kimia", "cisco"],
};
function cetakMatakuliah(matkul) {
    return "<ol>\n".concat(matkul
        .map(function (mk) { return "<li>\n".concat(mk, "\n</li>\n"); })
        .join(""), "\n</ol>");
}
var el = " <div>\n<h2>".concat(mhs.nama, "</h2>\n<span class='semester'>semester: ").concat(mhs.semester, "</span>\n<h4>Matakuliah : </h4>\n").concat(cetakMatakuliah(mhs.matkul), "\n</div>");
document.body.innerHTML = el;
