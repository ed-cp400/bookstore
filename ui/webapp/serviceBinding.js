function initModel() {
	var sUrl = "/odata/v4/store/odata/v4/store/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}