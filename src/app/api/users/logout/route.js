import { NextResponse } from "next/server";

export async function GET() {
	try {
		const response = NextResponse.json({
			message: "Logout Succesfull",
			success: true,
		});
		response.cookies.set("authToken", "", {
			httpOnly: true,
			expires: new Date(0),
		});
		return response;
	} catch (error) {
		console.log("Logut Error");
	}
}
