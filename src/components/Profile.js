"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const Profile = () => {
	const [user, setUser] = useState();
	useEffect(() => {
		const getToken = async () => {
			const token = await axios.get("/api/gettoken");
			const userName = token.data.name;
			setUser(userName);
		};
		getToken();
	}, []);

	return (
		<div className="flex justify-center items-center gap-2">
			<button>
				<Image
					src="/icons/user.png"
					width={30}
					height={30}
					alt="profile-icon"
				/>
			</button>
			<h1 className=" font-serif text-white">{user}</h1>
		</div>
	);
};

export default Profile;
