var React = require ('react');
var ReactDOM = require ('react-dom');

var USER_DATA = {
	name: 'Jonathan',
	username: "jrschupak",
	image: "https://www.facebook.com/photo.php?fbid=677596202382826&set=a.154861257989659.38200.100003973587618&type=3&theater"
}

var ProfilePic = React.createClass({
	render: function() {
		return(
			<img src={this.props.imageURL} style={{width: 200, height: 200}}/>
			)
	}
});

var ProfileLink = React.createClass({
	render: function() {
		return(
			<div>
			 <a href={"https://github.com/" + this.props.username}> 
			 	{this.props.username}
			 </a>
			</div>
			)
	}
});

var ProfileName = React.createClass({
	render: function() {
		return(
			<div>{this.props.name}</div>
			)
	}
});

var Avatar = React.createClass({
	render: function() {
		return(
		<div>
			<ProfilePic imageURL={this.props.user.image} />
			<ProfileName name={this.props.user.name} />
			<ProfileLink username={this.props.user.username}/>
			
		</div>
		)
	}
});

ReactDOM.render(
	<Avatar user={USER_DATA} />,
	document.getElementById('app')
)