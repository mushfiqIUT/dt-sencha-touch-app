/**
 * Date: 12/6/12
 * Time: 5:26 PM
 */
Ext.define('DhakaTribune.model.Article', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{name: 'nid', type: 'int'},
			{name: 'uid', type: 'int'},
			{name: 'status', type: 'int'},
			{name: 'created', type: 'int'},
			{name: 'changed', type: 'int'},
			{name: 'comment', type: 'int'},
			{name: 'promote', type: 'int'},
			{name: 'moderate', type: 'int'},
			{name: 'sticky', type: 'int'},
			{name: 'title', type: 'string'},
			{name: 'teaser', type: 'string'},
			{name: 'body', type: 'string'},
			{name: 'field_group_main_image', type: 'auto'}
			//{name: 'field_thumbnail_image', type: 'auto'}
		],

		associations: [{
			type: 'hasMany',
			model: 'DhakaTribune.model.ArticleImages',
			foreignKey: 'nid',
			//autoLoad: true,
			associationKey: 'field_group_main_image' // read child data from child_groups
		}]
	}
});