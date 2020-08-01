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
export default Todo;
