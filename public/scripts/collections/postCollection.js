import Backbone from 'backbone';
import postModel from './..models/postModel.js';

export default Backbone.Collection.extend({
	models: postModel,
	url: 'http://localhost:3000/api/v1/post'
});