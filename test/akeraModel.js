module.exports = {
    namespace: "jsreport",
    entityTypes: {
        "Customer": {
            "CustNum": {"type": "Edm.Int32", key: true},
            "SalesRep": {"type": "Edm.String"},
            "Name": {"type": "Edm.String"},
            "Country": { "type": "Edm.String"}
        },
        "Order": {
          "CustNum": {"type": "Edm.Int32"},
          "SalesRep": {"type": "Edm.String"},
          "OrderDate": {"type": "Edm.Date"}
        }
    },
    entitySets: {
        "Customers": {
            entityType: "jsreport.Customer"
        },
        "Orders": {
          entityType: "jsreport.Order"
        }
    }
}