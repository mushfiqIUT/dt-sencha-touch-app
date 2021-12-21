/**
 * Date: 11/20/12
 * Time: 1:25 PM
 */
Ext.define('DhakaTribune.view.ArticleContainer', {
	extend: 'Ext.navigation.View',
	alias: 'widget.articlecontainer',
	requires: [
		'Ext.carousel.Carousel'
	],

	config: {
		navigationBar: {
			hidden: true
		}
	},

	initialize: function () {
		this.callParent(arguments);

		var newsContainer = this.add({
			layout: 'vbox'
		});

		var title = {
			xtype: 'label',
			html: 'Politics',
			docted: 'top',
			flex: 1
		};
		var carousel = {
			xtype: 'carousel',
			flex: 2,
			items: [
				{
					html: 'Item 1',
					style: 'background-color: #5E99CC'
				},
				{
					html: 'Item 2',
					style: 'background-color: #759E60'
				},
				{
					html: 'Item 3'
				}
			]
		};
		var articleList = {
			xtype: 'list',
			flex: 4,
			itemTpl: '{title}',
			store: 'Article',
			listeners: {
				itemtap: {
					scope: this,
					fn: this.onItemTap
				}
			}
		};

		newsContainer.add([title, carousel, articleList]);
	},

	onItemTap: function (container, index, target, record, e, eOpts) {
		return this.fireEvent('articleSelected', record);
	}
});