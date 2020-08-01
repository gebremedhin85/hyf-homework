import React, { Component } from "react";
import Todoes from "./Todoes";

class TodoesExport extends Component {
	render() {
		const TodoActivities = [
			{ description: "Get out of bed", deadline: "Wed Sep 13 2017" },
			{ description: "Brush teeth", deadline: "Thu Sep 14 2017" },
			{ description: "Eat breakfast", deadline: "Fri Sep 15 2017" },
			{ description: "Meet friends", deadline: "Sunday Sep 16 2017" },
		];

		return <Todoes todoes={TodoActivities} />;
	}
}
export default TodoesExport;
