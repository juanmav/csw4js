Query = function(elementSetName, constraint){
    this.name = {
        key: "{http://www.opengis.net/cat/csw/2.0.2}Query",
        localPart: "Query",
        namespaceURI: "http://www.opengis.net/cat/csw/2.0.2",
        prefix: "csw",
        string: "{http://www.opengis.net/cat/csw/2.0.2}csw:Query"
    }
    this.value = {
        TYPE_NAME: "CSW_2_0_2.QueryType",
        //constraint : {},
        elementSetName : {
            TYPE_NAME: "CSW_2_0_2.ElementSetNameType",
            value: elementSetName
        },
        typeNames : [
            {
                key: "{http://www.opengis.net/cat/csw/2.0.2}Record",
                localPart: "Record",
                namespaceURI: "http://www.opengis.net/cat/csw/2.0.2",
                prefix: "csw",
                string: "{http://www.opengis.net/cat/csw/2.0.2}csw:Record"
            }
        ]
    }
    if (constraint){
        this.value.constraint = constraint;
    }
};