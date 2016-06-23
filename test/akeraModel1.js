module.exports = {
  namespace : "demo.sports",
  entityTypes : {
    "Customer" : {
      properties : {
        "CustNum" : {
          type : "Edm.Int32"
        },
        "SalesRep" : {
          type : "Edm.String"
        },
        "Name" : {
          type : "Edm.String"
        },
        "Country" : {
          type : "Edm.String"
        }
      },
      key : [ "CustNum" ]
    },
    "Order" : {
      properties : {
        "CustNum" : {
          type : "Edm.Int32"
        },
        "OrderNum" : {
          type : "Edm.Int32"
        },
        "SalesRep" : {
          type : "Edm.String"
        },
        "OrderDate" : {
          type : "Edm.Date"
        }
      },
      key : [ "OrderNum" ]
    },
    "OrderLine" : {
      properties : {
        "OrderNum" : {
          type : "Edm.Int32"
        },
        "OrderLine" : {
          type : "Edm.Int32"
        },
        "Qty" : {
          type : "Edm.Int32"
        },
        "Amount" : {
          type : "Edm.Int32", 
          initial : 230,
          scale : false,
          maxLen : "12a",
          precision : 2
        }
      }
    }
  },
  entitySets : {
    "Customers" : {
      entityType : "Customer"
    },
    "Orders" : {
      entityType : "Order"
    },
    "OrderLines" : {
      entityType : "OrderLine"
    }
  },
  entityRelations : [

  {
    name : "Orders",
    from : "Customer",
    to : "Order",
    nullable : true,
    constraints : {
      "CustId" : "ID"
    }
  }, {
    name : "Lines",
    from : "Order",
    to : "OrderLine",
    nullable : true,
    onDelete : "Cascade"
  } ]

}