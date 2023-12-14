$(".search-btn").on("click", function () {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=dca61bcc&s=" + $(".input-keyword").val(),
        success: function (result) {
            var movies = result.Search;
            console.log(movies);
            var cards = "";
            movies.forEach(function (movie) {
                cards += showCards(movie);
            });
            $(".movie-container").html(cards);
            // ketika tombol detail di klik
            $(".modal-detail-btn").on("click", function () {
                $.ajax({
                    url: "http://www.omdbapi.com/?apikey=dca61bcc&i=" +
                        $(this).data("imdbid"),
                    success: function (details) {
                        var movieDetails = showMovieDetail(details);
                        $(".modal-body").html(movieDetails);
                    },
                    error: function (e) { return console.log(e); },
                });
            });
        },
        error: function (e) {
            console.log(e.responseText);
        },
    });
});
function showCards(movie) {
    return "<div class=\"col-md-4 my-3\">\n      <div class=\"card\">\n        <img src=\"".concat(movie.Poster, "\" class=\"card-img-top\" alt=\"\" />\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(movie.Title, "</h5>\n          <h6 class=\"card-subtitle mb-2 text-muted\">").concat(movie.Year, "</h6>\n          <a href=\"#\" class=\"btn btn-primary modal-detail-btn\"  data-bs-toggle=\"modal\"\n          data-bs-target=\"#movieDetailModal\" data-imdbid=\"").concat(movie.imdbID, "\">Show details</a>\n        </div>\n      </div>\n    </div>");
}
function showMovieDetail(details) {
    return "<div class=\"container-fluid\">\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <img src=\"".concat(details.Poster, "\" alt=\"\" class=\"img-fluid\" />\n                </div>\n                <div class=\"col-md\">\n                  <ul class=\"list-group\">\n                    <li class=\"list-group-item\"><h4>").concat(details.Title, ", ").concat(details.Year, "</h4></li>\n                    <li class=\"list-group-item\">\n                      <strong>Director: </strong>").concat(details.Director, "\n                    </li>\n                    <li class=\"list-group-item\">\n                      <strong>Actors: </strong>").concat(details.Actors, "\n                    </li>\n                    <li class=\"list-group-item\">\n                      <strong>Writer: </strong>").concat(details.Writer, "\n                    </li>\n                    <li class=\"list-group-item\">\n                    <strong>Plot: </strong>").concat(details.Plot, "\n                  </li>\n                    <li class=\"list-group-item\">\n                      <strong>Genre: </strong> <br>").concat(details.Genre, "\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n              ");
}
