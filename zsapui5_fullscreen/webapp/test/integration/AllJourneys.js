/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zsapui5fullscreen/zsapui5_fullscreen/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zsapui5fullscreen/zsapui5_fullscreen/test/integration/pages/Worklist",
	"zsapui5fullscreen/zsapui5_fullscreen/test/integration/pages/Object",
	"zsapui5fullscreen/zsapui5_fullscreen/test/integration/pages/NotFound",
	"zsapui5fullscreen/zsapui5_fullscreen/test/integration/pages/Browser",
	"zsapui5fullscreen/zsapui5_fullscreen/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zsapui5fullscreen.zsapui5_fullscreen.view."
	});

	sap.ui.require([
		"zsapui5fullscreen/zsapui5_fullscreen/test/integration/WorklistJourney",
		"zsapui5fullscreen/zsapui5_fullscreen/test/integration/ObjectJourney",
		"zsapui5fullscreen/zsapui5_fullscreen/test/integration/NavigationJourney",
		"zsapui5fullscreen/zsapui5_fullscreen/test/integration/NotFoundJourney",
		"zsapui5fullscreen/zsapui5_fullscreen/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});