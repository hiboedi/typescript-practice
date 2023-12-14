//? fetch sebuah method api java script untuk menagmbil reasources dari jaringan dan mengembalikan promiise yang selesai (fullfilled) ketika ada response yang tersedia

interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}

interface MovieDetails {
  Poster: string;
  Title: string;
  Year: string;
  Director: string;
  Actors: string;
  Writer: string;
  Plot: string;
  Genre: string;
}

const searchButton = document.querySelector(".search-btn") as HTMLElement;

searchButton.addEventListener("click", () => {
  const inputKeyword = document.querySelector(
    ".input-keyword"
  ) as HTMLInputElement;

  fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=" + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => {
      const movies = (response as any).Search as Array<any>; // Gunakan tipe yang lebih spesifik jika ada
      let cards = "";
      movies.forEach((movie: any) => (cards += showCards(movie))); // Gantilah 'any' dengan tipe yang sesuai jika mungkin
      const movieContainer = document.querySelector(
        ".movie-container"
      ) as HTMLElement;
      if (movieContainer) {
        movieContainer.innerHTML = cards;
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  //! ketik modal di click
  const modalDetail = document.querySelectorAll(".modal-detail-btn");
  modalDetail.forEach((btn) => {
    btn.addEventListener("click", function () {
      const imdbid = this.dataset.imdbid;

      fetch(`http://www.omdbapi.com/?apikey=dca61bcc&i=${imdbid}`)
        .then((response) => response.json())
        .then((details: MovieDetails) => {
          const movieDetails = showMovieDetail(details);
          const modalBody = document.querySelector(
            ".modal-body"
          ) as HTMLElement | null;
          if (modalBody) {
            modalBody.innerHTML = movieDetails;
          }
        })
        .catch((error) => {
          console.error("Error fetching details:", error);
        });
    });
  });
});

function showCards(movie: Movie): string {
  return `<div class="col-md-4 my-3">
        <div class="card">
          <img src="${movie.Poster}" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
            <a href="#" class="btn btn-primary modal-detail-btn"  data-bs-toggle="modal"
            data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show details</a>
          </div>
        </div>
      </div>`;
}

function showMovieDetail(details: MovieDetails): string {
  return `<div class="container-fluid">
                <div class="row">
                  <div class="col-md-3">
                    <img src="${details.Poster}" alt="" class="img-fluid" />
                  </div>
                  <div class="col-md">
                    <ul class="list-group">
                      <li class="list-group-item"><h4>${details.Title}, ${details.Year}</h4></li>
                      <li class="list-group-item">
                        <strong>Director: </strong>${details.Director}
                      </li>
                      <li class="list-group-item">
                        <strong>Actors: </strong>${details.Actors}
                      </li>
                      <li class="list-group-item">
                        <strong>Writer: </strong>${details.Writer}
                      </li>
                      <li class="list-group-item">
                      <strong>Plot: </strong>${details.Plot}
                    </li>
                      <li class="list-group-item">
                        <strong>Genre: </strong> <br>${details.Genre}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
                `;
}
