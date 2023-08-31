import { connectDB } from "@/config/dbConfig";
import { NextResponse } from "next/server";
import { Task } from "@/models/task";


connectDB();


// DELETE Tasks....
export async function PUT(request,{ params }) {
    try{
        const { status } = await request.json();
        const  taskId = params.id;
        await Task.findByIdAndUpdate(taskId,{status});
        return NextResponse.json("Task Updated.");
    }catch(error){
        return NextResponse.json("Erron to delete task");
    }
}