import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";

export default function Login({ setUserId }) {
	const { userId } = useContext(UserContext);
	const [user, setUser] = useState(userId || "");

	return (
		<form onSubmit={setUserId(user)}>
			<input
				type="text"
				placeholder="Search for a user"
				value={userId}
				onChange={(e) => setUser(e.target.value)}
			/>{" "}
			<br />
		</form>
	);
}
