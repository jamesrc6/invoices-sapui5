sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.model.Filter} Filter
     * @param {typeof sap.ui.model.FilterOperator} FilterOperator
     */
    function (Controller, JSONModel, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("axelera.project1.controller.View1", {
            onInit: function () {
                // const oJSONModel = new JSONModel();
                // const oView = this.getView();
                // oJSONModel.loadData("model/SelectionScreenMenu.json");
                // console.log(JSON.stringify("Invoices: ", oJSONModel.getData()));
                // oView.setModel(oJSONModel, "selectionScreen");
            },
            onFilter: function (oEvent) {
                const oData = this.getView().getModel("selectionScreen").getData();
                let filters = [];

                if (oData.ShipName !== "") {
                    filters.push(new Filter("ShipName", FilterOperator.Contains, oData.ShipName));
                }

                if (oData.CountryKey !== "") {
                    filters.push(new Filter("Country", FilterOperator.EQ, oData.CountryKey));
                }

                const oList = this.getView().byId("invoicesList");
                const oBinding = oList.getBinding("items");
                oBinding.filter(filters);
            },
            onClearFilter: function () {
                const oMOdelSelScreen = this.getView().getModel("selectionScreen");
                oMOdelSelScreen.setProperty("/ShipName", "");
                oMOdelSelScreen.setProperty("/CountryKey", "");

                const oList = this.getView().byId("invoicesList");
                const oBinding = oList.getBinding("items");
                oBinding.filter([]);
            }
        });
    });
