$(document).ready(function () {
    $('#myTable').DataTable({
        "responsive": true,
        "ajax": {
            "url": "/home/getalltokens",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "id", "autoWidth": true },
            { "data": "name", "autoWidth": true },
            { "data": "symbol", "autoWidth": true },
            { "data": "price", "autoWidth": true },
            { "data": "marketCap", "autoWidth": true },
            { "data": "percentChange24H", "autoWidth": true },
            { "data": "volume24H", "autoWidth": true },
            { "data": "totalSupply", "autoWidth": true }
        ]
    });
});