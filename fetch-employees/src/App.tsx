import EmployeeCard from "./components/EmployeeCard";
import "./App.css";
import { useState } from "react";

const sampleEmployee = {
	name: {
		first: "Charlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},

};

function App() {
	const getEmployee = () => {
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results[0]);
			});
	};
	const [employee, setEmployee] = useState(getEmployee);

	return (
		<div className="App">
			 {employee &&<EmployeeCard employee={employee} />}

			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</div>
	);
}

export default App;
