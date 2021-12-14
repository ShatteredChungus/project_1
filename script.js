// console.log("hello world");

var apiKey = '5e6b3c6c';

var answerEl = document.querySelector('#answer');

var data;

function getanswer(q) {
    $.get(`https://www.omdbapi.com/?t=${q}&apikey=${apiKey}`, function (rawdata) {
        var rawString = JSON.stringify(rawdata);
        data = JSON.parse(rawString);
        console.log(data.imdbID);
        var titleEl = data.Title;
        var genreEl = data.Genre;
        var actors = data.Actors;
        var imdRating = data.Rated;
        var yearReleased = data.Year;
        var directorEl = data.Director;
        var posterid = data.imdbID
        var imdbUrl = 'https://www.imdb.com/title/' + data.imdbID + '/';

        // Postor api is not working
        var posterUrl = 'http://img.omdbapi.com/?i=' + posterid + '&h=600&apikey=5e6b3c6c';


        answerEl.innerHTML = `
      <h1>${titleEl}</h1><br>
      <img src= '${posterUrl}'><br>
      <p>Genre: ${genreEl}</p><br>
      <p>Actors: ${actors}</p><br>
      <p> Year Released:${yearReleased}</p> <br>
      <p>Director: ${directorEl}</p><br>
      <p> IMDb Rating: ${imdRating}</p><br>
        <p> IMDB page: <a href='${imdbUrl}'target='_blank'>${imdbUrl}</a></p>
        `;
    });
}