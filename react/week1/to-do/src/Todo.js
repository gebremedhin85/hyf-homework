import React, { Component } from "react";

class Todo extends Component {
	render() {
		const { description, deadline } = this.props;
		return (
			<li>
				{description}, {deadline}
			</li>
		);
	}
}

class Todoes extends Component {
	render() {
		const list = [];
		this.props.todoes.forEach((todo) => {
			list.push(
				<Todo description={todo.description} deadline={todo.deadline} />
			);
		});
		return (
			<div>
				<h1>Todo List</h1>
				<ul>{list}</ul>
			</div>
		);
	}
}
export class TodoesExport extends Component {
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
