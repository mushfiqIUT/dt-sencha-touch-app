/**
 * Date: 11/20/12
 * Time: 12:19 PM
 */
Ext.define('DhakaTribune.view.Category', {
	extend: 'Ext.dataview.List',
	alias: 'widget.category',
	requires: ['Ext.data.Store'],

	config: {
		itemTpl: '{name}',
		store: 'CategoryFilter',
		listeners: {
			itemtap: function (category, index, target, record, e, eOpts ) {
				this.fireEvent('categoryTapped', record);
			},
			select: function (category, record, eOpts) {
				this.fireEvent('categorySelected', record);
			}
		}
	}
});