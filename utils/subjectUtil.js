function processSubject(subject) {
  var title = subject.title;

  var genres = subject.genres;
  var genreStr = '';
  for (var index in genres) {
    genreStr = genreStr + genres[index] + ' / ';
  }
  if (castStr != "") {
    genreStr = genreStr.substring(0, genreStr.length - 2);
  }

  var casts = subject.casts;
  var castStr = '';
  for (var index in casts) {
    castStr = castStr + casts[index].name + ' / ';
  }
  if (castStr != "") {
    castStr = castStr.substring(0, castStr.length - 2);
  }

  var directors = subject.directors;
  var directorStr = '';
  for (var index in directors) {
    directorStr = directorStr + directors[index].name + ' / ';
  }
  if (directorStr != "") {
    directorStr = directorStr.substring(0, directorStr.length - 2);
  }

  var countries = subject.countries;
  var countrieStr = '';
  for (var index in countries) {
    countrieStr = countrieStr + countries[index] + ' / ';
  }
  if (countrieStr != "") {
    countrieStr = countrieStr.substring(0, countrieStr.length - 2);
  }

  var year = subject.year;

  var text = "名称: " + title + "\n导演: " + directorStr + "\n主演: " + castStr + "\n类型: " + genreStr + "\n上映年份: " + year + " (" + countrieStr + ")";
  subject.text = text;
}

function processSubjects(subjects) {
  for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i];
    processSubject(subject);
  }
}

module.exports ={
  processSubjects: processSubjects,
  processSubject: processSubject
}