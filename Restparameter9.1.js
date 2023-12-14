//? rest param
function myFunc(a, b) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return "a = ".concat(a, ", b = ").concat(b, ", arg = ").concat(args);
    //   ? return args
    // ? return Array.from(arguments)
    // ? return [...arguments]
}
// console.log(myFunc(1, 2, 3, 4, 5));
// function jumlahkan(...angka) {
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total;
// return angka.reduce((a,v)=> a+v)
// }
// console.log(jumlahkan(1, 23, 4, 7, 5, 6));
// * array distructering
// const kelompok = ["diki", "rena", "ibas", "budi"];
// const [ketua, wakil, ...anggota] = kelompok;
// console.log(anggota);
// console.log(wakil);
// ? object distructering
// const team = {
//   pm: "Budi",
//   frontend: "Fatir",
//   frontend2: "chanel",
//   backend: "Nanang",
//   ux: "aldi",
//   devOps: "Murdin",
// };
// const { pm, ...myTeam } = team;
// console.log(myTeam);
// console.log(pm);
// ? filter
function fillterBy(type) {
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        data[_i - 1] = arguments[_i];
    }
    return data.filter(function (d) { return typeof d === type; });
}
console.log(fillterBy("boolean", 1, 5, "Duku", true, 99, false));
