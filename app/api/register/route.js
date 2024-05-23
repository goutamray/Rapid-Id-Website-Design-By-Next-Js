
import { mongoDbConnection } from "@/config/mongoDB";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

//create new user api 
export const POST = async(request) => {

  // get form data 
   const { fastName, lastName, phone, country, email, password } = await request.json(); 

   try {
      await mongoDbConnection();

    // find email user 
    const emailUser = await User.findOne({ email });

    // check email user 
    if (emailUser) {
     return new NextResponse("Email Already Exisits", { status : 400})
    }; 

    // password hash 
    const hashPass = await bcrypt.hash(password, 5);

    // create new user 
    const newUser = await User.create({
      fastName,
      lastName,
      phone,
      country,
      email,
      password : hashPass
   });     

   newUser.save(); 

   // send response 
   return NextResponse.json("User Registation Successfull", {status : 200}); 

   } catch (error) {
    return NextResponse.json(error, { status : 400  });
   }
   

}














