// List of bad movies
const url='https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

 
fetch(url)

    .then(res=>res.json())

    .then(movies => {
            
        
        //All bad movies, assuming that rating less than 4 is bad movie
        const badMovies= movies.filter(movie=> movie.rating < 4)

        //results array of 88 movies
        console.log(badMovies); 

        //Creat an array of bad movies since year 2000
        const badRecentMovies=badMovies.filter(movie=>movie.year>=2000)
        
        //results array of 67 movies
        console.log(badRecentMovies);
    });


 