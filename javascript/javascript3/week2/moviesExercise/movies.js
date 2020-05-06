// List of bad movies
const url='https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

 
fetch(url)

.then(res=>res.json())
.then(result => {
    const movies=result;
     
    
    //All bad movies
    const badMovies= movies.filter(movie=>{ // using filter

        if(movie.rating<4)//assume bad movies are rating les than 4
    
        return movie;
    });
    console.log(badMovies);//array of 88 movies

    //Creat an array of bad movies since year 2000
    const badRecentMovies=badMovies.filter(movie=>{
        if(movie.year>=2000)
            return movie;
        
    })
    console.log(badRecentMovies);//array of 67 movies
});


 