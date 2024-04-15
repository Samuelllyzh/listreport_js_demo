sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('listreportui.ext.controller.BooksObjectPage', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf listreportui.ext.controller.BooksObjectPage
			 */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				// var oModel = this.base.getExtensionAPI().getModel();
				console.log("object page onInit--------------------------------");

				// 设置明细画面字段(title)不可编辑
				var element = this.getView().byId("listreportui::BooksObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::title::Field-edit");
				element.setEnabled(false);
			},
			editFlow: {
				// 编辑按钮按下,编辑处理前
				onBeforeEdit: function (oEvent) {

				},
				// 编辑按钮按下,编辑处理后
				onAfterEdit: function (oEvent) {

				},
				// 保存按钮按下,保存处理前
				onBeforeSave: function (oEvent) {
					// 获取字段项目的控制器
					let stockCtrl = this.getView().byId("listreportui::BooksObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::stock::Field-edit");
					// 清除所有的文本框状态
					stockCtrl.setValueState();
					stockCtrl.setValueStateText("");

					// 入力check
					let errorFlg = false;
					// stock check
					let stockInputvalue = stockCtrl.mProperties.value;
					if (stockInputvalue < 100) {
						stockCtrl.setValueState("Error");
						stockCtrl.setValueStateText("在库不能小于100");
						errorFlg = true;
					}

					if (errorFlg) throw Error;

				}
			}
		}
	});
});
