//? ambil semua element video
var videos = Array.from(document.querySelectorAll("[data-duration]"));
//? pilih hanya yang "liverpool"
var liverpool = videos
    .filter(function (video) { var _a; return (_a = video.textContent) === null || _a === void 0 ? void 0 : _a.includes("Liverpool"); })
    //? ambil durasi masing2 video
    .map(function (item) { return item.dataset.duration; })
    //? ubah durasi menjadi int, ubah menit menjadi detik
    .map(function (waktu) {
    //! 10:30 -> [10,30] split
    if (waktu) {
        var parts = waktu.split(":");
        return Number(parts[0]) * 60 + Number(parts[1]);
    }
    return 0;
})
    //? jumlahkan semua detiknya
    .reduce(function (total, detik) { return total + detik; }, 0);
//? ubah format menjadi jam menit detik
var jam = Math.floor(liverpool / 3600);
liverpool = liverpool - jam * 3600;
var menit = Math.floor(liverpool / 60);
var detik = liverpool - menit * 60;
//? simpan di DOM
var pDuration = document.querySelector(".total-durasi");
if (pDuration) {
    pDuration.textContent = "".concat(jam, " Jam, ").concat(menit, " Menit, ").concat(detik, " Detik");
}
var jmlhVideo = videos.filter(function (video) { var _a; return (_a = video.textContent) === null || _a === void 0 ? void 0 : _a.includes("Liverpool"); }).length;
var pJmlhVideo = document.querySelector(".jumlah-video");
if (pJmlhVideo) {
    pJmlhVideo.textContent = "".concat(jmlhVideo, " videos");
}
