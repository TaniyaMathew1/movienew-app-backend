const mongoose=require("mongoose")
const movieSchema=new mongoose.Schema(
    {
        movieName:String,
        Actor:String,
        Actress:String,
        Director:String,
        Producer:String
    }
)
module.exports=mongoose.model("movie",movieSchema)