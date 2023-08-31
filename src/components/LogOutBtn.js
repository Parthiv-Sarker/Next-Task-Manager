"use client"
import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import Profile from "./Profile";

const LogoutBtn = () => {
	const router = useRouter();
	const LogOut = async () => {
		try{
			await axios.get("/api/users/logout");
			router.push("/");
		}catch(error){
			console.log("Error to logout");
		}
	}
	return (
		<div>
			<div className=" hidden md:flex gap-6 items-center mr-10">
				<Profile/>
				<Link
					href="/login"
					className="bg-yellow-400 text-black text-center rounded h-7 w-20 font-semibold hover:bg-yellow-500"
					onClick={LogOut}
				>
					Logout
				</Link>
			</div>
		</div>
	);
};

export default LogoutBtn;
