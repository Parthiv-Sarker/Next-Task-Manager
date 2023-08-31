import React from "react";
import Link from "next/link";

const NavLinks = () => {
	return (
		<div>
			<div className="hidden md:flex gap-8 items-center" id="nav-links">
				<Link
					href="/dashboard/home"
					className=" text-white text-center  font-semibold "
				>
					Home
				</Link>
				<Link
					href="/dashboard/add-tasks"
					className=" text-white text-center font-semibold "
				>
					Add-Task
				</Link>
				<Link
					href="/dashboard/show-tasks"
					className=" text-white text-center font-semibold "
				>
					Show-Tasks
				</Link>
			</div>
		</div>
	);
};

export default NavLinks;
