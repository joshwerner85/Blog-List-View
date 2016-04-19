import React from 'react';
import previewComponent from './previewComponent.js';
import postCollection from './../collections/postCollection.js';


export default React.createClass({
	getInitialState: function(){
		let posts = new PostCollection();
		return {
			posts: posts
		};
	},
	componentDidMount: function(){
		this.state.posts.on('update', () =>{
			this.setState({
				posts: this.state.posts
			});
		});
		this.state.posts.fetch();
	},	
	render:function(){
		let blogPosts = this.state.posts.map((post, index, array) => {
			return ( <previewComponent 
				title={post.get('title')}
				author={post.get('author')}
				createAt={post.get('createAt')}
				body={post.get('body')}
				/>
				);	
		});
		return (
					<div>
						{blogPosts}
					</div>
				);
	}


});