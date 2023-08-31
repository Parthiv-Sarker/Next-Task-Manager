"use client"

import { useState } from "react";
import axios from "axios";

const PopUpForm = ({ isVisible, onClose,taskId }) => {
	if (!isVisible) return null;

	const [getTaskId,setTaskId] = useState(taskId);

	const [formData, setFormData] = useState({
		status: "",
	});

	const handleForm = async (event) => {
		event.preventDefault();
		try{
			console.log(getTaskId,formData);
			await axios.put(`/api/tasks/updatetask/${getTaskId}`,formData);
			window.location.reload();
			console.log("Task Update.");
		}catch(error){
			console.log("Error to Update.");
		}
	};

	return (
		<div className="">
			<div className="">
				<div className="mb-4 text-black">
					<form>
						<label htmlFor="task_status" className="text-white">
							Status:
						</label>
						<select
							name="task_status"
							onChange={(event) => {
								setFormData({
									...formData,
									status: event.target.value,
								});
							}}
							value={formData.status}
							className=" border-2 flex flex-col"
						>
							<option value="" disabled>
								...Select Status...
							</option>
							<option value="pending">Pending</option>
							<option value="completed">Completed</option>
						</select>
					</form>
				</div>
				<button type="submit" className=" bg-green-600 w-16 mr-4" onClick={handleForm}>
					Update
				</button>
				<button className=" bg-red-600 w-16" onClick={() => onClose()}>
					Close
				</button>
			</div>
		</div>
	);
};

export default PopUpForm;
