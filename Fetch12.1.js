//? fetch sebuah method api java script untuk menagmbil reasources dari jaringan dan mengembalikan promiise yang selesai (fullfilled) ketika ada response yang tersedia
var searchButton = document.querySelector(".search-btn");
searchButton.addEventListener("click", function () {
    var inputKeyword = document.querySelector(".input-keyword");
    fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=" + inputKeyword.value)
        .then(function (response) { return response.json(); })
        .then(function (response) {
        var movies = response.Search; // Gunakan tipe yang lebih spesifik jika ada
        var cards = "";
        movies.forEach(function (movie) { return (cards += showCards(movie)); }); // Gantilah 'any' dengan tipe yang sesuai jika mungkin
        var movieContainer = document.querySelector(".movie-container");
        if (movieContainer) {
            movieContainer.innerHTML = cards;
        }
    })
        .catch(function (error) {
        console.error("Error fetching data:", error);
    });
    //! ketik modal di click
    var modalDetail = document.querySelectorAll(".modal-detail-btn");
    modalDetail.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var imdbid = this.dataset.imdbid;
            fetch("http://www.omdbapi.com/?apikey=dca61bcc&i=".concat(imdbid))
                .then(function (response) { return response.json(); })
                .then(function (details) {
                var movieDetails = showMovieDetail(details);
                var modalBody = document.querySelector(".modal-body");
                if (modalBody) {
                    modalBody.innerHTML = movieDetails;
                }
            })
                .catch(function (error) {
                console.error("Error fetching details:", error);
            });
        });
    });
});
function showCards(movie) {
    return "<div class=\"col-md-4 my-3\">\n        <div class=\"card\">\n          <img src=\"".concat(movie.Poster, "\" class=\"card-img-top\" alt=\"\" />\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(movie.Title, "</h5>\n            <h6 class=\"card-subtitle mb-2 text-muted\">").concat(movie.Year, "</h6>\n            <a href=\"#\" class=\"btn btn-primary modal-detail-btn\"  data-bs-toggle=\"modal\"\n            data-bs-target=\"#movieDetailModal\" data-imdbid=\"").concat(movie.imdbID, "\">Show details</a>\n          </div>\n        </div>\n      </div>");
}
function showMovieDetail(details) {
    return "<div class=\"container-fluid\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <img src=\"".concat(details.Poster, "\" alt=\"\" class=\"img-fluid\" />\n                  </div>\n                  <div class=\"col-md\">\n                    <ul class=\"list-group\">\n                      <li class=\"list-group-item\"><h4>").concat(details.Title, ", ").concat(details.Year, "</h4></li>\n                      <li class=\"list-group-item\">\n                        <strong>Director: </strong>").concat(details.Director, "\n                      </li>\n                      <li class=\"list-group-item\">\n                        <strong>Actors: </strong>").concat(details.Actors, "\n                      </li>\n                      <li class=\"list-group-item\">\n                        <strong>Writer: </strong>").concat(details.Writer, "\n                      </li>\n                      <li class=\"list-group-item\">\n                      <strong>Plot: </strong>").concat(details.Plot, "\n                    </li>\n                      <li class=\"list-group-item\">\n                        <strong>Genre: </strong> <br>").concat(details.Genre, "\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n                ");
}
