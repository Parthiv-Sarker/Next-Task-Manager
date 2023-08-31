"use client";

import React, { useEffect, useState } from "react";
import ShowAllTasks from "./ShowAllTasks";
import Nav from "@/components/Nav";
import axios from "axios";

const ShowTask = () => {
	const [taskData, setTaskData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function getTask() {
			try {
				const response = await axios.get("/api/tasks/showtasks");
				setTaskData(response.data);
			} catch (error) {
				console.log("Error to fetch data.");
			}
		}
		setTimeout(() => {
			setIsLoading(false);
			getTask();
		}, 300);
	},[]);

	return (
		<div
			className={`bg-slate-400 ${
				taskData.length == 0 ? "h-screen" : "h-screen"
			}`}
		>
			<Nav />
			<div className="flex flex-col justify-center items-center gap-4 ">
				<h1 className=" font-serif font-bold text-center text-4xl">
					Tasks
				</h1>
				{isLoading ? (
					<h1 className=" text-3xl font-serif mt-48">Loading...</h1>
				) : (
					<div className=" w-5/6 md:flex flex-col gap-3">
						{taskData.map((task) => (
							<ShowAllTasks task={task} key={task._id} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default ShowTask;
