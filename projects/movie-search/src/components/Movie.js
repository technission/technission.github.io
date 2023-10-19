import React, {useEffect, useState} from 'react'

function Movie() {
    const [movieList,setMovieList] = useState([])
    const getMovie = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=eb3235a831494bc4481b58b920094890")
        .then(response => response.json())
        .then(json => setMovieList(json.results));
    };

    useEffect(() => {
      getMovie()
    }, [])
    
   console.log(movieList)

  return (
    <div>
        {movieList.map((movie)=>(
            <img style={{width:"300px",height:"250px",marginLeft:"10px",marginTop:"30px"}}src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
        ))}
    </div>
  )
}

export default Movie