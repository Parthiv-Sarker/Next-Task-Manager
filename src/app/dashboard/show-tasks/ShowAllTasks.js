"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import PopUpForm from "./PopUpForm";
import axios from "axios";

const ShowAllTasks = ({task}) => {
	const [showForm, setShowForm] = useState(false);
	return (
		<div
			className={`flex text-white gap-20 justify-between p-4 ${
				task.status == "completed" ? " bg-green-700" : "bg-slate-600"
			}`}
		>
			<div className="flex flex-col gap-2">
				<h1 className=" font-serif font-bold text-xl">{task.title}</h1>
				<p className=" font-serif">{task.content}</p>
			</div>
			{!showForm ? (
				<div className=" flex flex-col gap-2">
					<button onClick={() => getServerSideProps(task)}>
						<Image
							src="/icons/delete.png"
							width={30}
							height={30}
							alt="delete-icon"
						/>
					</button>
					<button onClick={() => setShowForm(true)}>
						<Image
							src="/icons/edit.png"
							width={30}
							height={30}
							alt="edit-icon"
						/>
					</button>
				</div>
			) : (
				<PopUpForm
					isVisible={showForm}
					onClose={() => setShowForm(false)}
					taskId={task._id}
				/>
			)}
		</div>
	);
};

export async function getServerSideProps(context) {
	console.log(context._id);
  try {
    // Fetch the data from your API
    const response = await axios.delete(`/api/tasks/deletetask/${context._id}`);

    // Return the tasks as props
    return {
      props: {
        context
      },
    };
  } catch (error) {
    console.error("Error fetching tasks:", error);

    // Handle the error and return an empty tasks array or handle it as needed
    return {
      props: {
        tasks: [],
      },
    };
  }
}

export default ShowAllTasks;