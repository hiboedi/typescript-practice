//? rest param

function myFunc(a: number, b: number, ...args: number[]) {
  return `a = ${a}, b = ${b}, arg = ${args}`;
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

function fillterBy(type: any, ...data: any[]) {
  return data.filter((d) => typeof d === type);
}

console.log(fillterBy("boolean", 1, 5, "Duku", true, 99, false));
