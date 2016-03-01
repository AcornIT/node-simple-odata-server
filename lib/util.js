var akera = require('akera-api');
var f = akera.query.filter;

module.exports = {
  getEntityType : function(collection, model) {
    var entitySet = model.entitySets[collection];
    var entityType = model.entityTypes[entitySet.entityType.replace(
        model.namespace + ".", "")];
    return entityType;
  },
  getEntityName : function(collection, model) {
    var entitySet = model.entitySets[collection];
    var entityName = entitySet.entityType.replace(model.namespace + ".", "");
    return entityName;
  },
  transformAkeraQuery : function(aQuery, query) {
    var filter = query.$filter;

    if (query.$select) {
      var fields = Object.keys(query.$select);
      if (fields.length > 0) {
        aQuery = aQuery.fields(fields);
      } else {
        aQuery = aQuery.fields();
      }
    } else {
      aQuery = aQuery.fields();
    }

    if (filter) {
      for ( var k in filter) {
        aQuery = aQuery.where(f.eq(k, filter[k]));
      }
    }

    if (query.$limit || query.$top) {
      aQuery = aQuery.limit(query.$limit || query.$top);
    }

    if (query.$orderby || query.$sort) {
      var sort = query.$sort || query.$orderby;
      if (sort.length) {
        var sortParams = getSortParameters(sortArr);
        for ( var i in sortParams) {
          var obj = sortParams[i];
          for ( var k in obj) {
            aQuery = aQuery.by(k, obj[k]);
          }
          aQuery = aQuery.by(sortParams[i]);
        }
      } else {
        var sortParam = Object.keys(sort)[0];
        var desc = sort[sortParam] === -1;
        aQuery = aQuery.by(sortParam, desc);
      }
    }
    return aQuery;
  }
};

function getSortParameters(sortArr) {
  var sortParams = [];
  for ( var i in sortArr) {
    var obj = sortArr[i];
    for ( var k in obj) {
      var sortParam = {};
      sortParam[k] = obj[k] === 'desc';
      sortParams.push(sortparam);
    }
  }
  return sortParams;
}