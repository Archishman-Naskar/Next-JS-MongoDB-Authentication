import { connect } from "@/dbConfig/dbConfig";
import User, { IUser } from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function GET() {
  
  try{
    
    const response=NextResponse.json({
      message:"Logout Successfull",
      success:true,
    })

    response.cookies.set("accessToken","",{
      httpOnly:true,
    })

    return response;

  }catch(error:any){
    return NextResponse.json({error:error.messagr},{status:500});
  }
}