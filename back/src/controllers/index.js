const services = require("../services/index");

const movieController= async(req, res)=>{
    try {
        const peliculas= await services.getMovies();
        res.status(200).json(peliculas);

    } catch (error) {
        console.log(error);
        
    }

};

module.exports=movieController;

