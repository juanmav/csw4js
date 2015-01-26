Filter = function(){
    this.name = {
        key: "{http://www.opengis.net/ogc}Filter",
        localPart: "Filter",
        namespaceURI: "http://www.opengis.net/ogc",
        prefix: "ogc",
        string: "{http://www.opengis.net/ogc}ogc:Filter"
    };

    this.value = {
        TYPE_NAME: "Filter_1_1_0.FilterType"

        // logicOps : {}
        // spatialOps : {}
    }
};


Filter.prototype.PropertyName = function (propertyName){
    var propertyIs = {
        name : {
            key: "{http://www.opengis.net/ogc}PropertyIsLike",
            localPart: "PropertyIsLike",
            namespaceURI: "http://www.opengis.net/ogc",
            prefix: "ogc",
            string: "{http://www.opengis.net/ogc}ogc:PropertyIsLike"
        },
        value: {
            TYPE_NAME: "Filter_1_1_0.PropertyIsLikeType",
            //escapeChar: "",
            //singleChar: "_",
            //wildCard: "%",
            literal: {
                TYPE_NAME: "Filter_1_1_0.LiteralType",
                content: null
            },
            propertyName: {
                TYPE_NAME: "Filter_1_1_0.PropertyNameType",
                content: propertyName
            }
        }
    };
    this.value.comparisonOps = propertyIs;
    return this;
};

// Comparison Operators
Filter.prototype.isLike = function(value){
    this.value.escapeChar =  "";
    this.value.singleChar= "_";
    this.value.wildCard = "%";
    this.value.comparisonOps.value.literal.content = [value];
    return this;
};

Filter.prototype.isNull = function(filter){
    throw 'Not Implemented yet';
};

Filter.prototype.isNill = function(filter){
    throw 'Not Implemented yet';
};

Filter.prototype.isBetween = function(filter){
    throw 'Not Implemented yet';
};

Filter.prototype.isEqualTo = function(filter){
    throw 'Not Implemented yet';
};

Filter.prototype.isLessThanEqualTo = function(filter){
    throw 'Not Implemented yet';
};

Filter.prototype.isGreaterThan = function(filter){
    throw 'Not Implemented yet';
};

Filter.prototype.isLessThan = function(filter){
    throw 'Not Implemented yet';
};

Filter.prototype.isGreaterThanEqualTo = function(filter){
    throw 'Not Implemented yet';
};

Filter.prototype.isNotEqualTo = function(filter){
    throw 'Not Implemented yet';
};

Filter.prototype.isNullCheck = function(filter){
    throw 'Not Implemented yet';
};

// Logical Operators

Filter.prototype.and = function(filter){
    this.value.logicOps = {
        name : {
            key: "{http://www.opengis.net/ogc}And",
            localPart: "And",
            namespaceURI: "http://www.opengis.net/ogc",
            prefix: "ogc",
            string: "{http://www.opengis.net/ogc}ogc:And"
        },
        value : {
            TYPE_NAME: "Filter_1_1_0.BinaryLogicOpType",
            /**
             *   TODO We need to check if the previous filter is a
             *   GeometryOperands, SpatialOperators, ComparisonOperators, ArithmeticOperators or
             *   is a composition of them "comparisonOpsOrSpatialOpsOrLogicOps"
             *   at the moment only supports Filter.isLike().and(Filter.isLike());
             */
            comparisonOpsOrSpatialOpsOrLogicOps: [ filter.value.comparisonOps, this.value.comparisonOps]
        }
    };
    // TODO view previous
    delete this.value.comparisonOps;
    return this;
};//*/

Filter.prototype.or = function(filter){
    throw 'Not Implemented yet';
};

Filter.prototype.not = function(filter){
    throw 'Not Implemented yet';
};