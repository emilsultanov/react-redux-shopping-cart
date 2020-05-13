import React, { Component } from "react";
import { connect } from "react-redux";

export class Counter extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.counter}</h3>
				<button onClick={this.props.onIncrementCounter}>increment</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		counter: state.counter,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
