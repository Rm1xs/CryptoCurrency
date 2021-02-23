$(document).ready(function () {
    $('#myTable').DataTable({
        "ajax": {
            "url": "/home/getalltokens",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "id", "autoWidth": true },
            { "data": "name", "autoWidth": true },
            { "data": "lastUpdated", "autoWidth": true },
            { "data": "maxSupply", "autoWidth": true },
            { "data": "totalSupply", "autoWidth": true }
        ]
    });
});