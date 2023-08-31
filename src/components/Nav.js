"use client";

import React from "react";
import Image from "next/image";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";
import LogoutBtn from "./LogOutBtn";
import SignupLoginBtn from "./SignupLoginBtn";
import { useState } from "react";

const Nav = () => {
	const [isSectionDisabled, setIsSectionDisabled] = useState(1);
	return (
		<div className="bg-blue-950 items-center md:bg-blue-950 flex justify-between">
			<div className="flex ml-2  md:flex p-2">
				<Image src="/logo/logo.svg" width={50} height={50} alt="Logo" />
				<h1 className=" text-2xl font-serif p-4 text-white">
					Task Manager
				</h1>
			</div>
			{isSectionDisabled ? (
				<>
					<NavLinks />
					<LogoutBtn />
				</>
			) : (
				<SignupLoginBtn />
			)}

			<Hamburger />
		</div>
	);
};

export default Nav;
