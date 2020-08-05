import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
	constructor() {
		super();
		this.state = {
			todoes: [
				{ id: 1, description: "Get out of bed" },
				{ id: 2, description: "Brush teeth" },
				{ id: 3, description: "Eat breakfast" },
			],
		};
		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	}
	addTodo() {
		const newTodoes = [
			...this.state.todoes,
			{
				id: this.state.todoes.length + 1,
				description:
					Math.random()
						.toString(36)
						.replace(/[^a-z]+/g, "")
						.substr(0, 15) +
					" " +
					Math.random()
						.toString(16)
						.replace(/[^a-z]+/g, "")
						.substr(0, 7),
			},
		];

		this.setState({
			todoes: newTodoes,
		});
	}
	deleteTodo(index) {
		let filteredArray = this.state.todoes.filter((item) => item.id !== index);
		this.setState({ todoes: filteredArray });
	}
	render() {
		const { todoes } = this.state;

		return (
			<div>
				<button onClick={this.addTodo}>Add todo</button>
				<ul>
					{todoes.length
						? todoes.map((todo) => (
								<Todo
									description={todo.description}
									key={todo.id}
									deleteTodo={() => this.deleteTodo(todo.id)}
								/>
						  ))
						: " No items"}
				</ul>
			</div>
		);
	}
}
export default TodoList;
