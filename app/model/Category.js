/**
 * Date: 11/20/12
 * Time: 2:04 PM
 */
Ext.define('DhakaTribune.model.Category', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{name: 'tid', type: 'int'},
			{name: 'vid', type: 'int'},
			{name: 'name', type: 'string'},
			{name: 'description', type: 'string'},
			{name: 'weight', type: 'string'},
			{name: 'depth', type: 'string'},
			{name: 'parents', type: 'auto'}
		]
	}
});