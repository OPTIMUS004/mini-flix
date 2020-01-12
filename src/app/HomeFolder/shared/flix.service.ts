import { Injectable, EventEmitter } from '@angular/core'
import { Subject, Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError } from 'rxjs/operators';

@Injectable()

export class FlixService {

  uri = 'http://localhost:4000/'

constructor(private http: HttpClient){
  
}
	getFlixData() {
/*
    return this.http.get('http://.omdbapi.com/?i=tt3896198&apikey=2ea85c97')
    .pipe(catchError(this.handleError('getMovieList', [])));
  
    return this.http.get(`${this.uri}/movies`)
    .pipe(catchError(this.handleError('getMovieList', [])))
*/
    let subject = new Subject()
    setTimeout(()=> {subject.next(flixData); subject.complete();}, 100)
	  return subject
    
	}

	getFlixDatum(id:number) {
		return flixData.find( datum => datum.id === id)
	}

  searchSessions(searchTerm:string){
    let term = searchTerm.toLocaleLowerCase()
    let results = [];

    flixData.forEach(datum =>{
      var matchingSession = datum.Title;
      if(matchingSession.toLocaleLowerCase() == term){
        results.push(datum)
        }
    })
    var emitter = new EventEmitter(true);
    setTimeout(()=>{
      emitter.emit(results);
    }, 100);
    return emitter
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    return of(result as T);
    };
  }
}

const flixData = [
{"id": 9,
"Title":"Arrow","Year":"2012–","Rated":"TV-14","Released":"10 Oct 2012","Runtime":"42 min","Genre":"Action, Adventure, Crime, Drama, Mystery, Sci-Fi","Director":"N/A","Writer":"Greg Berlanti, Marc Guggenheim, Andrew Kreisberg","Actors":"Stephen Amell, David Ramsey, Emily Bett Rickards, Katie Cassidy","Plot":"Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.","Language":"English","Country":"USA","Awards":"11 wins & 42 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BZDc5N2M3OTMtYmJmMy00MzczLWJmMTktZGNkYzlhNDczZWEzXkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"}],"Metascore":"N/A","imdbRating":"7.6","imdbVotes":"384,526","imdbID":"tt2193021","Type":"series","totalSeasons":"7","Response":"True"}
,
{
"id": 8,"Title":"Endgame","Year":"2019","Rated":"PG-13","Released":"26 Apr 2019","Runtime":"181 min","Genre":"Action, Adventure, Sci-Fi","Director":"Anthony Russo, Joe Russo","Writer":"Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (Thanos, Gamora & Drax created by), Jack Kirby (Groot created by)","Actors":"Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth","Plot":"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.","Language":"English, Japanese, Xhosa","Country":"USA, UK, Canada","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Rotten Tomatoes","Value":"94%"},{"Source":"Metacritic","Value":"78/100"}],"Metascore":"78","imdbRating":"8.6","imdbVotes":"561,813","imdbID":"tt4154796","Type":"movie","DVD":"30 Jul 2019","BoxOffice":"N/A","Production":"Marvel Studios","Website":"N/A","Response":"True"},
{"id": 7,
"Title":"Titans","Year":"2018–","Rated":"TV-MA","Released":"12 Oct 2018","Runtime":"45 min","Genre":"Action, Adventure, Crime, Drama, Fantasy, Sci-Fi","Director":"N/A","Writer":"Greg Berlanti, Akiva Goldsman, Geoff Johns","Actors":"Brenton Thwaites, Teagan Croft, Anna Diop, Ryan Potter","Plot":"A team of young superheroes led by Nightwing (formerly Batman's first Robin) form to combat evil and other perils.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BOGIxMzE1MTEtMzViYi00MWI5LTllOTUtMmZkYzM3NmIyNTZlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Rotten Tomatoes","Value":"50%"}],"Metascore":"N/A","imdbRating":"7.9","imdbVotes":"45,158","imdbID":"tt1043813","Type":"series","totalSeasons":"2","Response":"True"},
{"id": 6,
"Title":"The Flash","Year":"2014–","Rated":"TV-PG","Released":"07 Oct 2014","Runtime":"43 min","Genre":"Action, Adventure, Drama, Sci-Fi","Director":"N/A","Writer":"Greg Berlanti, Geoff Johns, Andrew Kreisberg","Actors":"Grant Gustin, Candice Patton, Danielle Panabaker, Carlos Valdes","Plot":"After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, fighting crime in Central City.","Language":"English","Country":"USA","Awards":"Nominated for 1 Primetime Emmy. Another 19 wins & 42 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjAwNTljOTgtYzk0NS00OGMzLTgzMDUtZDc2YjhjNzU3Yjg5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"}],"Metascore":"N/A","imdbRating":"7.8","imdbVotes":"281,773","imdbID":"tt3107288","Type":"series","totalSeasons":"6","Response":"True"},
{"id": 5,
"Title":"Doom Patrol","Year":"2019–","Rated":"TV-MA","Released":"15 Feb 2019","Runtime":"60 min","Genre":"Action, Adventure, Comedy, Drama, Mystery, Sci-Fi","Director":"N/A","Writer":"Jeremy Carver","Actors":"Diane Guerrero, April Bowlby, Alan Tudyk, Matt Bomer","Plot":"The adventures of an idealistic mad scientist and his field team of superpowered outcasts.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BZjkzM2E0NDgtYjM5Mi00ZTljLTgxNzctZmJiNzI3YjhmNjIzXkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"}],"Metascore":"N/A","imdbRating":"8.1","imdbVotes":"18,384","imdbID":"tt8416494","Type":"series","totalSeasons":"1","Response":"True"},
{"id": 4, 
"Title":"Lucifer","Year":"2015–","Rated":"TV-14","Released":"25 Jan 2016","Runtime":"42 min","Genre":"Crime, Drama, Fantasy","Director":"N/A","Writer":"Tom Kapinos","Actors":"Tom Ellis, Lauren German, Kevin Alejandro, D.B. Woodside","Plot":"Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.","Language":"English","Country":"USA","Awards":"6 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BZTA2NTBkYWUtMzM4Zi00YzhlLTk4NWItY2U1ODczNDMyNDAzXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"}],"Metascore":"N/A","imdbRating":"8.2","imdbVotes":"165,171","imdbID":"tt4052886","Type":"series","totalSeasons":"4","Response":"True"},
{"id":3,
"Title":"Joker","Year":"2019","Rated":"R","Released":"04 Oct 2019","Runtime":"121 min","Genre":"Crime, Drama, Thriller","Director":"Todd Phillips","Writer":"Todd Phillips, Scott Silver","Actors":"Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy","Plot":"A gritty character study of Arthur Fleck, a man disregarded by society.","Language":"English","Country":"USA, Canada","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.1/10"},{"Source":"Rotten Tomatoes","Value":"77%"},{"Source":"Metacritic","Value":"58/100"}],"Metascore":"58","imdbRating":"9.1","imdbVotes":"87,202","imdbID":"tt7286456","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"N/A","Response":"True"},
{ "id": 10,
  "Title": "Gotham",
  "Year": "2014–2019",
  "Rated": "TV-14",
  "Released": "22 Sep 2014",
  "Runtime": "42 min",
  "Genre": "Action, Crime, Drama, Mystery, Sci-Fi, Thriller",
  "Director": "N/A",
  "Writer": "Bruno Heller",
  "Actors": "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
  "Plot": "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
  "Language": "English, Russian, Italian, French",
  "Country": "USA",
  "Awards": "Won 1 Primetime Emmy. Another 5 wins & 44 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTU5NjQ2MTU4NV5BMl5BanBnXkFtZTgwOTYyNTAwNzM@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "7.9/10"
    }
  ],
  "Metascore": "N/A",
  "imdbRating": "7.9",
  "imdbVotes": "190,942",
  "imdbID": "tt3749900",
  "Type": "series",
  "totalSeasons": "5",
  "Response": "True"
},


]
