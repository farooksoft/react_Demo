var mongoose=require('mongoose');

var Schema = mongoose.Schema;
//    ObjectId = Schema.ObjectId;

var movie = new Schema(
  {
    Title : String,
    Year  : String,
    imdbID : String,
    Type : String,
    Poster : String
});

module.exports=mongoose.model('movie',movie);
