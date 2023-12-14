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

$(".search-btn").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=dca61bcc&s=" + $(".input-keyword").val(),
    success: (result: { Search: Movie[] }) => {
      const movies = result.Search;
      console.log(movies);
      let cards = "";
      movies.forEach((movie) => {
        cards += showCards(movie);
      });
      $(".movie-container").html(cards);

      // ketika tombol detail di klik
      $(".modal-detail-btn").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=dca61bcc&i=" +
            $(this).data("imdbid"),
          success: (details: MovieDetails) => {
            const movieDetails = showMovieDetail(details);
            $(".modal-body").html(movieDetails);
          },
          error: (e) => console.log(e),
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
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
