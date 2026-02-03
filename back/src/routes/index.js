const {Router}=require("express");
const movieController=require("../controllers/index");

const router = Router();

router.get("/movies", movieController);

module.exports=router;