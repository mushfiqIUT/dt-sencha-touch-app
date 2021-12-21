/**
 * Date: 12/14/12
 * Time: 4:10 PM
 */

Ext.define('DhakaTribune.model.ArticleImages', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{name: 'fid', type: 'int'},
			{name: 'uid', type: 'int'},
			{name: 'filename', type: 'string'},
			{name: 'filepath', type: 'string'},
			{name: 'filemime', type: 'string'},
			{name: 'filesize', type: 'int'},
			{name: 'status', type: 'int'},
			{name: 'timestamp', type: 'int'},
			{name: 'list', type: 'int'},
			{name: 'data', type: 'auto'}
		]/*,

		associations: [
			{
				type: 'belongsTo',
				model: 'DhakaTribune.model.ArticleImages',
				autoLoad: true
				associationKey: 'field_group_main_image' // read parent data from parent_group
			}
		]*/
	}
});