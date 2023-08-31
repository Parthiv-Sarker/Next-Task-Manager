import { connectDB } from "@/config/dbConfig";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request) {
	try {
		const { email, password } = await request.json();
		//1. Get The User...
		const user = await User.findOne({ email: email });
		if (user == null) {
			throw new Error();
		}
		//2. Match The Password...
		const passMatch = await bcrypt.compare(password, user.password);
		if (!passMatch) {
			throw new Error();
		}
		//3.Generate Token...
		const token = jwt.sign(
			{
				_id: user._id,
				name: user.name,
			},
			process.env.SECRET_KEY
		);
		//4.Generate Cookie...
		const response = NextResponse.json({
			message: "Succesfully LogIn",
			success: true,
		});
		response.cookies.set("authToken", token, {
			expiresIn: "1d",
		});
		//Return the response....
		return response;
	} catch (error) {
		console.log("Error In Login...");
		return NextResponse.error();
	}
}
