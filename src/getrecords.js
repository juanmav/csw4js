GetRecords = function(startPosition, maxRecords, query){
    this.name = {
        key: "{http://www.opengis.net/cat/csw/2.0.2}GetRecords",
        localPart: "GetRecords",
        namespaceURI: "http://www.opengis.net/cat/csw/2.0.2",
        prefix: "csw",
        string: "{http://www.opengis.net/cat/csw/2.0.2}csw:GetRecords"
    };
    this.value = {
        TYPE_NAME: "CSW_2_0_2.GetRecordsType",
        startPosition: startPosition,
        maxRecords: maxRecords,
        resultType: "results",
        service: "CSW",
        version: "2.0.2",
        abstractQuery: query
    };
};