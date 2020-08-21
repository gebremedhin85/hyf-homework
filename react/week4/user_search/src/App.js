import React, { useState } from "react";
import Login from "./Login";
import { UserContext } from "./UserContext";
import Users from "./Users";

export default function App() {
	const [userId, setUserId] = useState(null || "");

	return (
		<div>
			<h1>Github user searcher</h1>
			<UserContext.Provider value={{ userId: userId }}>
				<Login setUserId={setUserId} />
				<Users />
			</UserContext.Provider>
		</div>
	);
}
