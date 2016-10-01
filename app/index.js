var React = require ('react');
var ReactDOM = require ('react-dom');

//Acronym for testing your componenets
/*
	Focused
	Independent
	Reusable
	Small
	Testable
*/

var USER_DATA = {
	name: 'Jonathan',
	username: "jrschupak",
	image: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13138851_677596202382826_8039513900230152078_n.jpg?oh=57e0a1833fd6520e2d5f777ac9449314&oe=5869FA6F"
}

var Link = React.createClass({

	changeURL: function () {
		window.location.replace(this.props.href);
	},

	render: function() {
		return(
			<span style={{color: 'blue', cursor: 'pointer'}} onClick={this.changeURL}>
				{this.props.children}
			</span>
			)
	}
})

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
			 <Link href={"https://github.com/" + this.props.username}> 
			 	{this.props.username}
			 </Link>
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