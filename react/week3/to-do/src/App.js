import React, { Component } from "react";
import Timer from "./Timer";
import TodoList from "./TodoList";

class App extends Component {
	render() {
		return (
			<div>
				<h1>Todo List</h1>
				<Timer />
				<TodoList />
			</div>
		);
	}
}
export default App;
