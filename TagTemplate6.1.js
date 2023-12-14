// Tag template
// const nama = "Budiman";
// const umur = 23;
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var nama = "Budiman";
var umur = 23;
var email = "hi.boedi8@gmail";
function highlight(strings) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return strings.reduce(function (result, str, i) {
        return "".concat(result).concat(str, "<span class='hl'>").concat(values[i] || "", "</span>");
    }, "");
}
var str = highlight(__makeTemplateObject(["Halo, nama saya ", " saya berumur ", " tahun dan email sata adalah ", ""], ["Halo, nama saya ", " saya berumur ", " tahun dan email sata adalah ", ""]), nama, umur, email);
document.body.innerHTML = str;
