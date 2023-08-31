"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import Profile from "./Profile";
import axios from "axios";
import { useRouter } from "next/navigation";

const Hamburger = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

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
		<div className="flex items-center justify-between md:hidden">
			<div className="mr-2">
				<button
					className="text-white focus:outline-none mr-8"
					onClick={toggleDropdown}
				>
					<svg
						className="h-6 w-6 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
					</svg>
				</button>
			</div>
			<div className={`relative ${isDropdownOpen ? "block" : "hidden"}`}>
				<div className="flex flex-col items-center gap-4 bg-gray-900 absolute right-0 mt-10 w-screen h-96">
					<Profile />
					<Link
						href="/dashboard/home"
						className="px-4 py-2 text-white hover:bg-gray-700"
					>
						Home
					</Link>
					<Link
						href="/dashboard/add-tasks"
						className="px-4 py-2 text-white hover:bg-gray-700"
					>
						Add-Tasks
					</Link>
					<Link
						href="/dashboard/show-tasks"
						className=" px-4 py-2 text-white hover:bg-gray-700"
					>
						Show-Tasks
					</Link>
					<Link
						href="/login"
						className="mt-16 bg-yellow-400 text-black text-center rounded h-7 w-20 font-semibold hover:bg-yellow-500"
						onClick={LogOut}
					>
						Logout
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hamburger;
