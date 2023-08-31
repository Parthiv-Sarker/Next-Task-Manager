"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const signUppage = () => {
	const router = useRouter();
	
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		cpassword: "",
	});

	const handleForm = async (event) => {
		event.preventDefault();
		try {
			await axios.post("/api/users/signup", formData);
			notifySuccess();
			router.push("/login")
		} catch (error) {
			notifyFail();
			console.error("Error to create task..", error);
		}
	};

	return (
		<div className="h-screen bg-slate-400 ">
			<div className="flex items-center justify-center">
				<div className="bg-white p-8 rounded shadow-md w-96 mt-32">
					<h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
					<form action="" onSubmit={handleForm}>
						<div className="mb-4">
							<label className="block text-gray-700">Name:</label>
							<input
								onChange={(event) => {
									setFormData({
										...formData,
										name: event.target.value,
									});
								}}
								value={formData.name}
								type="text"
								required={true}
								className="w-full border rounded p-2 focus:outline-none focus:border-blue-500"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700">
								Email:
							</label>
							<input
								onChange={(event) => {
									setFormData({
										...formData,
										email: event.target.value,
									});
								}}
								value={formData.email}
								type="email"
								required={true}
								className="w-full border rounded p-2 focus:outline-none focus:border-blue-500"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700">
								Password:
							</label>
							<input
								onChange={(event) => {
									setFormData({
										...formData,
										password: event.target.value,
									});
								}}
								value={formData.password}
								type="password"
								required={true}
								className="w-full border rounded p-2 focus:outline-none focus:border-blue-500"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700">
								Conform Password:
							</label>
							<input
								onChange={(event) => {
									setFormData({
										...formData,
										cpassword: event.target.value,
									});
								}}
								value={formData.cpassword}
								type="password"
								required={true}
								className="w-full border rounded p-2 focus:outline-none focus:border-blue-500"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 focus:outline-none"
						>
							Sign Up
						</button>
					</form>
					<Link href="/login" className="text-blue-800 text-xs mt-8">
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default signUppage;
