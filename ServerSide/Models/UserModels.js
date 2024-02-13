
import mongoose from'mongoose'
//  import uniqueValidator from'mongoose-unique-validator'
 
const userSchema = new mongoose.Schema({
    username: {
        required: true, 
        type:String,    
    },
   email: {
        required: true,
        type:String,
        index: true, 
        unique: true,
        uniqueCaseInsensitive: true ,
        match: /.+\@.+\..+/,
        },
    password: {
    required:true, 
    type:String,
      },
      avatar:{
        type:String,
            default:'https://www.rawpixel.com/image/6642542/png-sticker-icon#eyJrZXlzIjoicHJvZmlsZSBpY29uIiwic29ydGVkS2V5cyI6Imljb24gcHJvZmlsZSJ9',
      },
},{timestamps: true});
//  userSchema.plugin(uniqueValidator)
const User = mongoose.model('Users',userSchema);
export default User