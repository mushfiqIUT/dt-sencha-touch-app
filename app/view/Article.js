Ext.define('DhakaTribune.view.Article', {
	extend: 'Ext.Container',
	alias: 'widget.article',
	requires: ['Ext.Panel', 'Ext.carousel.Carousel'],

	config: {
		layout: 'vbox',
		items: [
			/*{
				xtype: 'label',
				id: 'articleSectionTitle',
				html: '<span style="font-size: 14;">Section Title</span>',
				docted: 'top',
				flex: 1
			},*/
			{
				xtype: 'label',
				id: 'articleTitle',
				html: 'Article title',
				flex: 1
			},
			{
				xtype: 'label',
				id: 'articleWriter',
				html: 'Article Writer',
				flex: 1
			},
			{
				xtype: 'label',
				id: 'articleTeaser',
				html: 'Article Teaser',
				flex: 2
			},
			{
				xtype: 'carousel',
				id:'articleCarousel',
				margin: '0 0 0 200',
				width: '266px',
				height: '200px'
			},
			{
				xtype: 'label',
				id: 'articleBody',
				flex: 6,
				html: 'This is article body'
			},
			{
				xtype: 'label',
				html: '<hr color="blue"> '
			},
			{
				xtype: 'label',
				flex: 1,
				html: 'Analysis <br>'
			},
			{
				xtype: 'toolbar',
				title: 'Related news',
				ui: 'light'
			},
			{
				xtype: 'label',
				flex: 1,
				html: 'link 1 <br> link 2'
			}
		]
	}
});