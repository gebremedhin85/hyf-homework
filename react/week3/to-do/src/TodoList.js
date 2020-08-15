import React, { Component } from "react";
import Todo from "./Todo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class TodoList extends Component {
	constructor() {
		super();
		this.state = {
			todoes: [],
			error: false,
			todoInput: "",
			deadlineInput: new Date(),
		};
		console.log(this.state.todoes);
		this.fetchTodo = this.fetchTodo.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleDeadlineChange = this.handleDeadlineChange.bind(this);
		this.addTodo = this.addTodo.bind(this);
		this.editTodo = this.editTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	}
	componentDidMount() {
		this.fetchTodo();
	}
	fetchTodo() {
		const todoUrl =
			"https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
		fetch(todoUrl)
			.then((res) => res.json())
			.then((data) =>
				this.setState({
					todoes: data,
				})
			)
			.catch((error) => this.setState({ error: true }));
	}
	handleDescriptionChange(e) {
		this.setState({
			todoInput: e.target.value,
		});
	}
	handleDeadlineChange(date) {
		this.setState({
			deadlineInput: date,
		});
	}

	addTodo(e) {
		e.preventDefault();
		if (this.state.todoInput !== "" && this.state.deadlineInput !== "") {
			const newTodoes = [
				...this.state.todoes,
				{
					id: this.state.todoes.length + 1,
					description: this.state.todoInput,
					deadline: this.state.deadlineInput,
				},
			];

			this.setState({
				todoes: newTodoes,
				todoInput: "",
				deadlineInput: new Date(),
			});
		} else {
			alert("Fill the form appropriatly!");
		}
		console.log(this.state.todoes);
	}

	editTodo(id, e) {
		const index = this.state.todoes.findIndex((todo) => todo.id === id);
		const editedTodo = Object.assign({}, this.state.todoes[index]);
		editedTodo.description = this.state.todoInput;
		editedTodo.deadline = this.state.deadlineInput;
		const newTodoes = Object.assign([], this.state.todoes);
		newTodoes[index] = editedTodo;
		this.setState({
			todoes: newTodoes,
		});
	}
	deleteTodo(index) {
		let filteredArray = this.state.todoes.filter((item) => item.id !== index);
		this.setState({ todoes: filteredArray });
		console.log(index);
	}
	render() {
		const { todoes } = this.state;

		return (
			<div>
				<form onSubmit={this.addTodo}>
					<label>Todo description</label>
					<input
						value={this.state.todoInput}
						onChange={this.handleDescriptionChange}
						name="todoInput"
						type="text"
						placeholder="test item"
					></input>
					<br />
					<label>Deadline</label>
					<DatePicker
						selected={this.state.deadlineInput}
						onChange={this.handleDeadlineChange}
					/>
					<br/>
					<button type="submit">Add todo</button>
				</form>
				<ul>
					{todoes.length
						? todoes.map((todo) => (
								<Todo
									deadline={todo.deadline}
									description={todo.description}
									key={todo.id}
									deleteTodo={() => this.deleteTodo(todo.id)}
									editTodo={() => this.editTodo(todo.id)}
								/>
						  ))
						: " No items"}
				</ul>
			</div>
		);
	}
}

export default TodoList;
