import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request) {
	try {
        const authToken = request.cookies.get("authToken")?.value;
	    const userToken = jwt.verify(authToken, process.env.SECRET_KEY);
		return NextResponse.json(userToken);
	} catch (error) {
		console.log("Error to get Token.");
		return NextResponse.error();
	}
}
