import mongoose from "mongoose";

export const Connection = async(username,password) =>{
    
    const URL=`mongodb+srv://${username}:${password}@cluster.swd0asm.mongodb.net/NumbersKart?retryWrites=true&w=majority`;

    try{
      await mongoose.connect(URL,{ useUnifiedTopology:true, useNewUrlParser:true})

      console.log("Database Sucessfull Connected");
    }catch(error){
        console.log(error.message);
    }
}

export default Connection