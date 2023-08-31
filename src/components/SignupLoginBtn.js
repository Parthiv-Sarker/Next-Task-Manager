import React from "react";
import Link from "next/link";

const SignupLoginBtn = () => {
	return (
		<div>
			<div
				className="hidden md:flex gap-6 items-center mr-10"
				id="signup-login"
			>
				<Link
					href="/login"
					className="bg-yellow-400 text-black text-center rounded h-7 w-20 font-semibold hover:bg-yellow-500"
				>
					Login
				</Link>
				<Link
					href="/signup"
					className="bg-yellow-400 text-black rounded text-center h-7 w-20 font-semibold hover:bg-yellow-500"
				>
					Signup
				</Link>
			</div>
		</div>
	);
};

export default SignupLoginBtn;
