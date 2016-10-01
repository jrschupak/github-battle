var React = require ('react');
var ReactDOM = require ('react-dom');

var HelloWorld = React.createClass({
	render: function(){
		console.log(this.props)
		return(
			<div>Hello World I am React</div>
			)
	}
})

ReactDOM.render(
	<HelloWorld name="Jonathan" anySortOfData={29}/>,
	document.getElementById('app')
)