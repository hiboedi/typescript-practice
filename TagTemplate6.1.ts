// Tag template
// const nama = "Budiman";
// const umur = 23;

// function coba(strings, ...values) {
//   //   let result = "";
//   //   strings.forEach((str, i) => {
//   //     result += `${str}${values[i] || ""}`;
//   //   });
//   //   return result;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }

// const str = coba`Halo, nama saya ${nama} saya berumur ${umur} tahun`;
// console.log(str);

// Highlight

const nama = "Budiman";
const umur = 23;
const email = "hi.boedi8@gmail";

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class='hl'>${values[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Halo, nama saya ${nama} saya berumur ${umur} tahun dan email sata adalah ${email}`;

document.body.innerHTML = str;
