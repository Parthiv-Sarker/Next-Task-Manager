"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SignupLoginBtn from "@/components/SignupLoginBtn";
import { motion } from "framer-motion";

const page = () => {
	return (
		<section className=" h-screen bg-white flex flex-col">
			<nav>
				<div className="bg-blue-950 items-center flex justify-between">
					<div className="flex ml-2  md:flex p-2">
						<Image
							src="/logo/logo.svg"
							width={50}
							height={50}
							alt="Logo"
						/>
						<h1 className=" text-2xl font-serif p-4 text-white">
							Task Manager
						</h1>
					</div>
					<SignupLoginBtn />
				</div>
			</nav>
			<main className="bg-white flex flex-col md:ml-44 mr-44 mt-20">
				<div className=" md:flex justify-between items-center">
					<Image
						src="/image/hero.jpg"
						width={500}
						height={500}
						alt="Logo"
						className=" ml-20 md:ml-0"
					/>
					<div className="flex flex-col gap-8  w-screen">
						<motion.header
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
							className="ml-10 md:ml-28"
						>
							<span className="text-2xl md:text-4xl font-serif font-extrabold text-center">
								Welcome To Task Mager
							</span>
						</motion.header>
						<motion.header
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
							className="p-4 ml-4 md:ml-28"
						>
							<p>
								<span className=" text-lg font-medium">
									📅 Task Scheduling:
								</span>
								Plan your day, week, or month with ease.
								
								Prioritize tasks and allocate time to accomplish
								your goals.
							</p>
							<div className="flex gap-6 ml-20 mt-24 md:hidden">
								<Link
									href="/login"
									className="bg-yellow-400 text-black text-center rounded h-7 w-16 font-semibold hover:bg-yellow-500"
								>
									Login
								</Link>
								<Link
									href="/signup"
									className="bg-yellow-400 text-black rounded text-center h-7 w-16 font-semibold hover:bg-yellow-500"
								>
									Signup
								</Link>
							</div>
						</motion.header>
					</div>
				</div>
			</main>
		</section>
	);
};

export default page;
