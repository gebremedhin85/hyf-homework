import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";

export function Profile({ user }) {
	const [loadedUser, setLoadedUser] = useState(user);
	const { userName } = useParams();

	useEffect(() => {
		if (user && user.id) return;

		fetch(`https://api.github.com/users/${userName}`)
			.then((res) => res.json())
			.then((u) => setLoadedUser(u))
			.catch((e) => console.error("Error fetching user", e));
	}, [user, userName]);

	if (!loadedUser) return "Loading...";

	const {
		name,
		html_url,
		login,
		avatar_url,
		company,
		followers,
		following,
		public_repos,
	} = loadedUser;
	return (
		<div className="profile">
			<div>
				<img src={avatar_url} alt="" />
				<p> {name} </p>
				<p className="login">{login}</p>
				<p className="follower">
					{followers} followers {"."} {following} following {"."}
				</p>
			</div>
			<div >
				<a href={html_url}>
					<h3 className='leftDiv'>To Profile</h3>
				</a>
				<p className='leftDiv'>Company: {company}</p>
				<p className='leftDiv'>Repositeries {public_repos} </p>
			</div>
		</div>
	);
}
