const Movie=require("../models/Movie")
module.exports={
    getMovies: async ()=>{
        const peliculas= await Movie.find();
        return peliculas;
    }
}