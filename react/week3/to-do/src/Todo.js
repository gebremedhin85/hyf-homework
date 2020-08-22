import React, { Component } from "react";
import "./list.css";
import PropTypes from "prop-types";

const ListStyle = (props) => <div className="list">{props.children}</div>;

class Todo extends Component {
	constructor() {
		super();
		this.state = {
			checked: false,
		};
		this.toggleChecked = this.toggleChecked.bind(this);
	}
	toggleChecked() {
		this.setState({ checked: !this.state.checked });
	}

	render() {
		const { description, deadline, id } = this.props;
		const { checked } = this.state;

		return (
			<div>
				<ListStyle>
					<li>
						{checked === true ? (
							<span style={{ textDecoration: "line-through" }}>
								{description} | {deadline}
							</span>
						) : (
							description + " | " + deadline
						)}{" "}
						<input
							onClick={this.toggleChecked}
							type="checkbox"
							value={checked}
						/>{" "}
						<button onClick={this.props.deleteTodo.bind(this, id)}>
							Delete
						</button>{" "}
						{description ? (
							<input
								type="button"
								onClick={this.props.editTodo.bind(this, id)}
								value={"Edit"}
							/>
						) : (
							<input
								type="button"
								onClick={this.props.editTodo.bind(this, id)}
								value={"Update"}
							/>
						)}
					</li>
				</ListStyle>
			</div>
		);
	}
}
Todo.prototypes = {
	id: PropTypes.number,
	description: PropTypes.string.isRequired,
	deadline: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
};

export default Todo;
