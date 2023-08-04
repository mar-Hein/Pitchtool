const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
import NavBar from './components/Navbar/Navbar';

class App extends React.Component {

	render() {
		return (
			<NavBar/>
		)
	}
}



ReactDOM.render(
	<App />,
	document.getElementById('react')
)