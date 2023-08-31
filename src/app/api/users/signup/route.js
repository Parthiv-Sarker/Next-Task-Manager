import { connectDB } from "@/config/dbConfig";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

connectDB();

// Create User....
export async function POST(request) {
	try {
		const { name, email, password, cpassword } = await request.json();

		if (password === cpassword) {
			const hashPass = await bcrypt.hash(password, 10);
			const newUser = new User({
				name,
				email,
				password: hashPass,
			});
			await newUser.save();
			console.log(newUser);
			return NextResponse.json("User Created.");
		} else {
			console.log("Password are not matched.");
		}
	} catch (error) {
		console.log("Error...");
		return NextResponse.json("Error...");
	}
}
