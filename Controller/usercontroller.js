import { response } from "express";
import User from "../Model/userschema.js";

export const Usersignup = async (req,res)=>{

try{

  const test = req.body;

  const exist =await  User.findOne({username: req.body.username});
 
  if(exist){
    response.status(401).json({message:"User Alrady Exist"});
  }

  await User.insertMany(test);
  response.status(200).json({ mesage: "user added sucessfully" });
}catch(err){
  res.status(200).json({message:err});
 console.log(err);
}
 
}


export const Userlogin = async(req,res)=>{
  try{

 let username = req.body.username;
 let password = req.body.password;

 let existence = await User.findOne({password:password});
 let usernameexistence = await User.findOne({username:username});


 if(usernameexistence && existence){
     res.status(200).json({data : existence});
 }else{
    res.status(401).json({message:"invalid User"});
 }

  }catch(err){
    response.status(500).json({message:err.message});
  }
}