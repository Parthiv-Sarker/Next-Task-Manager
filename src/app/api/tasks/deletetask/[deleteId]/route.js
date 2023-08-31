import { connectDB } from "@/config/dbConfig";
import { NextResponse } from "next/server";
import { Task } from "@/models/task";


connectDB();


// DELETE Tasks....
export async function DELETE(request,{params}) {
    try{
        const  taskId = params.deleteId;
        const deletedTask = await Task.deleteOne({
            _id:taskId
        });
        return NextResponse.json("Task Delete.");
    }catch(error){
        return NextResponse.json("Erron to delete task");
    }
}