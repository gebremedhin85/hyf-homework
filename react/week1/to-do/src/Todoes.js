import React, { Component } from "react";
import Todo from "./Todo";

class Todoes extends Component {
	render() {
		const list = this.props.todoes.map((todo) => (
			<Todo description={todo.description} deadline={todo.deadline} />
		));

		return (
			<div>
				<h1>Todo List</h1>
				<ul>{list}</ul>
			</div>
		);
	}
}
export default Todoes;
