import { connectDB } from "@/config/dbConfig";
import { NextResponse } from "next/server";
import { Task } from "@/models/task";
import  jwt  from "jsonwebtoken";

connectDB();

// Add Tasks....
export async function POST(request) {
    //Get The task Details..
    const { title,content,status } = await request.json();
    //Get The user Id...
    const authToken = request.cookies.get("authToken")?.value;
    const loggedInUserId = jwt.verify(authToken,process.env.SECRET_KEY);

	try{
        const newTask = new Task({
            title,
            content,
            status,
            userId : loggedInUserId._id,
        });
        await newTask.save();
        return NextResponse.json("Task Added.");
    }catch(error){
        console.log("Error to add task.");
        return NextResponse.json(error);
    }
}
