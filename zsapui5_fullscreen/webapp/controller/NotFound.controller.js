sap.ui.define([
		"zsapui5fullscreen/zsapui5_fullscreen/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zsapui5fullscreen.zsapui5_fullscreen.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);