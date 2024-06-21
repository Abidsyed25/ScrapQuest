// pages/api/register.js
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/auth';
import bcrypt from "bcryptjs"; 
import { NextResponse } from "next/server";
export const POST = async (request: any) => {
  try {
    const {name, email, password } = await request.json();

    await dbConnect();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new NextResponse("Email is already in use", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return new NextResponse("User is registered", { status: 200 });
  } catch (err: any) {
    console.error("Registration error:", err.message || err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
