"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';

const Loginpage = () => {
	const router = useRouter();

	const onSuccess = () => {
		toast.success("🦄 Logged in", {
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
		toast.error("🔴 Invalid Login Details.", {
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
		email: "",
		password: "",
	});

	const handleForm = async (event) => {
		event.preventDefault();
		try {
			await axios.post("/api/users/login", formData);
			router.push("/dashboard/home");
			onSuccess();
		} catch (error) {
			onError();
			console.error("Error to Login", error);
		}
	};

	return (
		<div className="h-screen bg-slate-400 ">
			<div className="flex justify-center">
				<div className=" bg-white p-8 rounded shadow-md w-96 mt-48">
					<h1 className="text-2xl font-semibold mb-4">Login</h1>
					<form onSubmit={handleForm}>
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
								required={true}
								type="email"
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
								required={true}
								type="password"
								className="w-full border rounded p-2 focus:outline-none focus:border-blue-500"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 focus:outline-none"
						>
							Login
						</button>
					</form>
					<Link href="/signup" className="text-blue-800 text-xs mt-8">
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Loginpage;
