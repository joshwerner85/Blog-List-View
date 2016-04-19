import React from 'react';

export default React.createClass({
	render: function(){
		return (
				<div>
					<h1>{this.props.title}</h1>
					<h4>{this.props.author.firstName}</h4>
					<h6>{this.props.createAt}</h6>

				</div>
			);
	}
});