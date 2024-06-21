
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/auth';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST=async(req:any, res:NextResponse)=> {
//   const { method } = req;

  await dbConnect();

//   switch (method) {
//     case 'POST':
      try {
        const { email, password } = await req.json();

        // Check if the user exists
        
        const user = await User.findOne({ email });
        console.log("Regiaterd User:"+user)
        if (!user) {
            console.log("Not Registered");
          return new NextResponse("User is not registered",{status:400});
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("wrongpassword");
          return new NextResponse("Incorrect Email or password",{status:400});
        }

        return new NextResponse("Logged In successfully",{status:200});
      } catch (error:any) {
        return new NextResponse("Internal Server Error",{status:500});
      }
     
   
  }
// }
