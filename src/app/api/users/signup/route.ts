import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs";


connect();

export async function POST(request:NextRequest) {
  try{
    const reqBody=await request.json();
    const {username, email, password}= reqBody;

    const user = await User.findOne({
      $or:[{ email },{ username }]
    });

    if(user){
      return NextResponse.json({error:"User with smae Username or Email already exists."},{status:400});
    }

    const hashedPassword=await bcrypt.hash(password, 10);

    const newUser= new User({
      username,
      email,
      password
      //not password:hashedPassword
      //as when we will be saving the newUser for the first time it will actually  hash the hased password we are giving there
    });
    
    const savedUser= await newUser.save();

    if(!savedUser){
      return NextResponse.json({error:"Could Not Sign Up User"},{status:500});
    }

    console.log(savedUser);

    return NextResponse.json({
      message:"User Created Successfully.",
      success:true,
      savedUser
    });

  }
  
  catch(error:any){
    return NextResponse.json({error:error.massage},
      {status:500}
    );
  }
}