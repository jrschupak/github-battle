var React = require("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var InderRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
	<Router>
		<Route path='/' component={Main}>
			<Route path='/Home' component={Home} />
		</Route>
	</Router>
	)

modules.exports routes;