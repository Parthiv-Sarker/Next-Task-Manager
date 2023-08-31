"use client";

import React from "react";
import { useState } from "react";
import axios from "axios";
import Nav from "@/components/Nav";
import { ToastContainer, toast } from 'react-toastify';

const Loginpage = () => {
	const onSuccess = () => {
		toast.success("🦄 Task Added.", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	};

	const onError = () => {
		toast.error("🔴Error to add task.", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	};

	const [formData, setFormData] = useState({
		title: "",
		content: "",
		status: "",
	});

	const handleForm = async (event) => {
		event.preventDefault();
		try {
			await axios.post("/api/tasks/addtasks", formData);
			onSuccess();
			console.log("Succesfully add task.");
		} catch (error) {
			onError();
			console.error("Error to create task..", error);
		}
	};

	return (
		<div className="h-screen bg-slate-400 ">
			<Nav />
			<div className="flex justify-center">
				<div className=" bg-white p-8 rounded shadow-md w-96 mt-20">
					<h1 className="text-2xl font-semibold text-center mb-4">
						Add Your Tasks
					</h1>
					<form onSubmit={handleForm}>
						<div className="mb-4">
							<label className="block text-gray-700">
								Task-Title:
							</label>
							<input
								onChange={(event) => {
									setFormData({
										...formData,
										title: event.target.value,
									});
								}}
								value={formData.title}
								required={true}
								type="text"
								className="w-full border rounded p-2 focus:outline-none focus:border-blue-500"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="task-description">
								Description:
							</label>
							<textarea
								type="text"
								id="task_content"
								name="task_content"
								onChange={(event) => {
									setFormData({
										...formData,
										content: event.target.value,
									});
								}}
								value={formData.content}
								required={true}
								className="w-full border rounded p-2 focus:outline-none focus:border-blue-500"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="task_status">Status:</label>
							<select
								name="task_status"
								onChange={(event) => {
									setFormData({
										...formData,
										status: event.target.value,
									});
								}}
								value={formData.status}
								className=" border-2 flex flex-col"
							>
								<option value="" disabled>
									...Select Status...
								</option>
								<option value="pending">Pending</option>
								<option value="completed">Completed</option>
							</select>
						</div>
						<button
							type="submit"
							className="w-full bg-blue-500 text-white font-semibold rounded py-2 hover:bg-blue-600 focus:outline-none"
						>
							Add Task
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Loginpage;
