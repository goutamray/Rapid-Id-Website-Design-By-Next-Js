
import mongoose from "mongoose";

// create user Schema 
const userSchema = mongoose.Schema({
  fastName : {
    type : String,
    trim : true,
  },
  lastName : {
    type : String,
    trim : true,
  },
  email : {
    type : String,
    trim : true,
  },
  password : {
    type : String,
    trim : true,
  },
  phone : {
    type : String,
    trim : true,
  },
  country : {
    type : String,
    trim : true,
  },
  status : {
    type : Boolean,
    default : true
  },
  trash : {
    type : Boolean,
    default : false,
  },
},
{
  timestamps : true,
})   


// export default schema 
export default mongoose.models.User || mongoose.model("User", userSchema);  

