import "./globals.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
	title: "Task Manager App",
	description: "Add your task and maintain your schedule.",
	icons:{
		icon:"favicon.ico"
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
					<ToastContainer />
					{children}
			</body>
		</html>
	);
}
