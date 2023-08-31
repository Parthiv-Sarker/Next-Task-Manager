import { connectDB } from "@/config/dbConfig";
import { NextResponse } from "next/server";
import { Task } from "@/models/task";
import jwt from "jsonwebtoken";

connectDB();

export async function GET(request) {
	const authToken = request.cookies.get("authToken")?.value;
	const userToken = jwt.verify(authToken, process.env.SECRET_KEY);
	const id = userToken._id;
	try {
		const response = await Task.find({ userId: id });
		return NextResponse.json(response);
	} catch (error) {
		console.log("Error In find tasks.");
		return NextResponse.error();
	}
}
