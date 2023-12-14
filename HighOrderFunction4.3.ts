//? ambil semua element video
const videos = Array.from(
  document.querySelectorAll("[data-duration]")
) as HTMLElement[];

//? pilih hanya yang "liverpool"
let liverpool = videos
  .filter((video) => video.textContent?.includes("Liverpool"))

  //? ambil durasi masing2 video
  .map((item) => item.dataset.duration)

  //? ubah durasi menjadi int, ubah menit menjadi detik
  .map((waktu) => {
    //! 10:30 -> [10,30] split
    if (waktu) {
      const parts = waktu.split(":");
      return Number(parts[0]) * 60 + Number(parts[1]);
    }
    return 0;
  })

  //? jumlahkan semua detiknya
  .reduce((total, detik) => total + detik, 0);

//? ubah format menjadi jam menit detik
const jam = Math.floor(liverpool / 3600);
liverpool = liverpool - jam * 3600;
const menit = Math.floor(liverpool / 60);
const detik = liverpool - menit * 60;

//? simpan di DOM

const pDuration = document.querySelector(".total-durasi");
if (pDuration) {
  pDuration.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
}

const jmlhVideo = videos.filter((video) =>
  video.textContent?.includes("Liverpool")
).length;
const pJmlhVideo = document.querySelector(".jumlah-video");
if (pJmlhVideo) {
  pJmlhVideo.textContent = `${jmlhVideo} videos`;
}
