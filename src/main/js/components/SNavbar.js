const React = require('react');
const ReactDOM = require('react-dom');

export default class SNavBar extends React.Component{
	render() {
		return (
			<>
			<SNavElement/>
			<NavElement/>
			<NavElement/>
			<NavElement/>
			</>
		)
	}
}

class SNavElement extends React.Component{
	render() {
		return (
			<h1>
				schmulz
			</h1>
		)
	}
}
