import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Search({ setUserId }) {
	const { userId } = useContext(UserContext);

	return (
		<>
		<h1>Github user searcher</h1>
			<input
				type="text"
				placeholder="Search for a user"
				value={userId}
				onChange={(e) => setUserId(e.target.value)}
			/>
			{"  "}
		</>
	);
}
