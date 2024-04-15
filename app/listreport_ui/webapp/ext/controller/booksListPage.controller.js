sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('listreportui.ext.controller.booksListPage', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf listreportui.ext.controller.booksListPage
			 */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				// var oModel = this.base.getExtensionAPI().getModel();
				console.log("画面onInit--------------------------------");
			},
			// 在画面加载完毕执行的方法
			onAfterRendering: function () {
				// 隐藏画面右上角的分享按钮
				var shareButton = sap.ui.getCore().byId("listreportui::BooksList--__button1-internalBtn");
				shareButton.setVisible(false);
			},
		}
	});
});
