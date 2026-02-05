const services = require("../services/index");

const movieController= async(req, res)=>{
    try {
        const movies= await services.getMovies();
        res.status(200).json(movies);

    } catch (error) {
        console.log(error);
        
    }

};

module.exports=movieController;

